// 具体配置文档: https://vuepress.vuejs.org/zh/guide/
import { defaultTheme } from "@vuepress/theme-default";
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
        text: "介绍",
        link: "/about",
      },
      // {
      //   text: "如何购买",
      //   link: "/buy",
      // },
    ],
  }),
};
