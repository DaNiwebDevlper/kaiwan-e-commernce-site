export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/products"],
            disallow: []
        },
        sitemap: "https://kaiwanpharma.com/sitemap.xml" || "http://localhost:3000/sitemap.xml"
    }
}