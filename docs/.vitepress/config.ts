import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Bee News",
    description: "AI定制化新闻聚合站",
    ignoreDeadLinks: true,
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            { text: "每日全球汽车信息速度", link: "/daily-car-news/" },
            { text: "每日全球AI新闻速递", link: "/daily-ai-news/" },
            { text: "关于我们", link: "/about/" }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/" }
        ],
        outlineTitle: "本页内容"
    }
});