// 具体配置文档: https://vuepress.vuejs.org/zh/guide/
import { defaultTheme } from "@vuepress/theme-default";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default {
  theme: defaultTheme({
    title: "RAM",
    description: "拥有RAM就相当于拥有了一块稀缺的土地",
    // Public 文件路径
    logo: "/images/logo.png",
    colorModeSwitch: false,
    // LOGO大图配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "关于",
        link: "/about",
      },
      {
        text: "RAMS排行榜",
        link: "https://www.eosram.info/",
      },
      {
        text: "BTC L2 启动计划",
        link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:9c5ff80b-20b3-4ff7-bf42-e716b65c9a4f",
      },
    ],
    lastUpdated: false,
    contributors: false,
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: "G-B98D40SRPP",
    }),
  ],
};
