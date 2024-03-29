import mdItCustomAttrs from "markdown-it-custom-attrs";

export default {
	title: "Spacebar",
	lang: "zh-CN",
	base: '/',
	description: "Spacebar中文文档",
	head: [
		["meta", { name: "author", content: "JinCheng" }],
		["meta", { name: "keywords", content: "Spacebar, Spacebar Admin, Vite, Vue, Vue3, Admin,vue element-plus admin" }],
		["link", { rel: "icon", href: "/logo.png" }],
		// ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
		// ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
	],
	markdown: { config: (md) => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }) },
	lastUpdated: true,
	themeConfig: {
		logo: "/logo.png",
		// algolia: {
		// 	appId: "YMXN47DKMJ",
		// 	apiKey: "8bf7d8e2b7e7b32a95f5aec9aca38a70",
		// 	indexName: "Spacebar",
		// },
		editLink: {
			text: "为此页提供修改建议",
			pattern: "",
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/chengkoi/spacebar" }
		],
		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2023 Spacebar",
		},
		nav: [
			{ text: "指南", link: "/guide/", activeMatch: "/guide" },
			{
				text: "相关链接",
				items: [
					{ text: "GitHub 源码", link: "https://github.com/chengkoi/spacebar" },
					{ text: "更新日志", link: "updateLog/index" },
				],
			},
			{ text: "☕ 赞助", link: "/sponsor/index" },
		],
		sidebar: {
			"/guide/": [
				{
					text: "指南",
					collapsible: true,
					items: [
						{ text: "介绍", link: "/guide/introduce" },
						{ text: "快速上手", link: "/guide/" },
						{ text: "目录结构", link: "/guide/catalogue" },
						{ text: "路由、菜单", link: "/guide/router" },
						{ text: "权限管理", link: "/guide/auth" },
						{ text: "网络请求", link: "/guide/request" },
						{ text: "构建、部署", link: "/guide/build" },
					],
				},
				{
					text: "进阶",
					collapsible: true,
					items: [
						{ text: "项目规范", link: "/guide/standard" },
						{ text: "主题配置", link: "/guide/theme" },
						{ text: "布局模式", link: "/guide/layout" },
					],
				},
				{
					text: "其他",
					collapsible: true,
					items: [{ text: "常见问题", link: "/guide/question" }],
				},
			]
		},
	},
};
