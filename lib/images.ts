import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
})
export async function getImages() {
    const results = await cloudinary.api.resources();
    console.log(results);
    return results
}

export async function getImagesByTag(tag: string) {
    const results = await cloudinary.api.resources_by_ids(tag);
    console.log(results);
    return results
}


