import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Mosaic-Plus",
  description: "Just playing around",
  theme: recoTheme({
    home: '/Home',
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "捡破烂的小z",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/guide-docs/": [
        {
          text: "概述",
          children: ["home", "theme"],
        },
        {
          text: "基础",
          children: ['/docs/guide-docs/install', "快速开始"],
        },
        {
          text: "开发",
          children: ["开发指南", "开发常见问题"],
        },
      ],
    },
    navbar: [
      { text: "指南", link: "/docs/guide-docs/home" ,icon: 'Compass'},
      { text: "组件", link: "/docs/subassembly-docs/home",icon: 'Document', },
      {
        text: '版本',
        icon: 'SubVolume',
        children: [
          { text: '2.x(alpha)', link: 'http://v2.vuepress-reco.recoluan.com/' },
          {
            text: '1.x',
            link: 'https://vuepress-theme-reco.recoluan.com/views/1.x/',
          },
        ],
      },
      { text: '留言板', link: '/docs/message-board', icon: 'Chat' },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
