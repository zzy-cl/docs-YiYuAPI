export const searchIndex = [
  {
    "title": "更新日志",
    "headers": [
      {
        "level": 2,
        "title": "2023.05.20",
        "slug": "_2023-05-20",
        "link": "#_2023-05-20",
        "children": []
      }
    ],
    "path": "/guide/changelog.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "介绍",
    "headers": [],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "视频水印",
    "headers": [
      {
        "level": 2,
        "title": "短视频去水印",
        "slug": "短视频去水印",
        "link": "#短视频去水印",
        "children": [
          {
            "level": 3,
            "title": "接口地址",
            "slug": "接口地址",
            "link": "#接口地址",
            "children": []
          },
          {
            "level": 3,
            "title": "请求示例",
            "slug": "请求示例",
            "link": "#请求示例",
            "children": []
          },
          {
            "level": 3,
            "title": "参数说明",
            "slug": "参数说明",
            "link": "#参数说明",
            "children": []
          },
          {
            "level": 3,
            "title": "返回数据",
            "slug": "返回数据",
            "link": "#返回数据",
            "children": []
          },
          {
            "level": 3,
            "title": "返回参数",
            "slug": "返回参数",
            "link": "#返回参数",
            "children": []
          }
        ]
      }
    ],
    "path": "/guide/rewm.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
