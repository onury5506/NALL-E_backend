import AWS from 'aws-sdk'
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
})

export async function generateAndUpload(id, prompt) {
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
    });
    const image_url = response.data.data[0].url;

    const res = await fetch(image_url)
    const blob = await res.blob()

    return await s3.upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: `${id}.png`,
        Body: Buffer.from(await blob.arrayBuffer())
    }).promise()
}