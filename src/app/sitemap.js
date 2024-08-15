import axios from "axios";

export default async function sitemap() {
    const baseUrl = "https://kaiwanpharma.com" || "http://localhost:3000";

    // Fetch product data
    const response = await axios.get(`${baseUrl}/api/products`)
        .then(res => res.data)
        .catch(err => {
            console.error(err);
            return [];
        });

    // Map through product data to generate sitemap entries
    const productPosts = response.map(post => {
        return {
            url: `${baseUrl}/products/${post._id}`,
            lastModified: post.updatedAt || post.createdAt || new Date(),
        };
    });

    // Add other static pages
    const staticPages = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
        },

        {
            url: `${baseUrl}/products`,
            lastModified: new Date()
        }
    ];

    return [...staticPages, ...productPosts];
}
