
export function robots() {
    const baseUrl = "https://kaiwanpharma.com"


    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/products"],
            disallow: []
        },
        sitemap: `${baseUrl}/sitemap.xml`
    };
}
