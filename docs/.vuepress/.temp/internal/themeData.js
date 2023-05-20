export const themeData = JSON.parse("{\"logo\":\"/images/logo.svg\",\"navbar\":[{\"text\":\"指南\",\"link\":\"/guide/\"}],\"repo\":\"https://github.com/zzy-cl/YIYU-API\",\"sidebar\":{\"/guide/\":[{\"text\":\"指南\",\"children\":[\"/guide/index.md\",\"/guide/rewm.md\",\"/guide/changelog.md\"]}]},\"sidebarDepth\":1,\"editLink\":false,\"lastUpdatedText\":\"最近更新于\",\"contributorsText\":\"贡献者\",\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口中打开\",\"notFound\":[\"页面丢失啦~\",\"您好像迷路啦~\",\"您怎么来到这里啦？\",\"您已失联，速速返航！\",\"这里好像没什么东西。\"],\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
