export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.svg\",\"sidebar\":false,\"heroHeight\":200,\"actions\":[{\"text\":\"开始使用\",\"link\":\"/guide/\",\"type\":\"secondary\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/zzy-cl/YIYU-API\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"规范划一\",\"details\":\"接口接受 Post 和 Get 两种请求，不同视频平台请求返回的数据格式相同，便于调用。\"},{\"title\":\"开源免费\",\"details\":\"本项目为个人开发和维护，采用 Nestjs 框架，搭载在 Vercel 上，承诺永久免费。\"},{\"title\":\"面向个人\",\"details\":\"本项目的目标用户为开源爱好者和个人站长，项目为学习所用，如有侵权请联系项目作者。\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present zzy & YiYuAPI Contributors\"},\"headers\":[],\"git\":{\"updatedTime\":1684586948000,\"contributors\":[{\"name\":\"zzy-cl\",\"email\":\"1580574280@qq.com\",\"commits\":3}]},\"filePathRelative\":\"index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
