export const themeData = JSON.parse("{\"logo\":\"/images/logo.svg\",\"navbar\":[{\"text\":\"指南\",\"link\":\"/guide/\"}],\"repo\":\"https://github.com/zzy-cl/YIYU-API\",\"sidebar\":{\"/guide/\":[{\"text\":\"指南\",\"children\":[\"/guide/index.md\",\"/guide/rewm.md\",\"/guide/changelog.md\"]}]},\"sidebarDepth\":1,\"editLink\":false,\"lastUpdatedText\":\"最近更新于\",\"backToHome\":\"返回首页\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
