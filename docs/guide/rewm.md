::: tip
经由接口优化，短视频去水印和图集提取已经统一为一个接口。
:::

# 视频水印

## 短视频清除水印

::: tip
支持列表：抖音、~~快手~~、皮皮虾、最右

体验地址：[https://zzy-lcy.netlify.app/](https://zzy-lcy.netlify.app/)
:::

::: warning
快手短视频会存在滑块验证，目前只能在本地运行才能正常解析！
:::

### 接口地址

```text
https://api.zhaozeyu.top/v1/short-video
```

### 请求示例

```javascript
fetch("https://api.zhaozeyu.top/v1/short-video?url=https://v.douyin.com/UTx1ghY/",{method:'get'})
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
```

### 参数说明

::: tip
url 支持携带文案，本接口自带正则匹配分享链接中的 url 功能。
:::

| 参数  | 类型     | 必填 | 说明   |
|-----|--------|----|------|
| url | string | 是  | 视频地址 |

### 返回数据

```json
{
    "code": 0,
    "message": "抖音视频解析成功",
    "data": {
        "title": "报告：我今天 超级 超级 想你😘 #治愈系动画",
        "author": "壹个星球.",
        "avatar": "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_ab1956eb9bd2d9623f573be38fb8bf04.webp?from=116350172",
        "cover": "https://p26-sign.douyinpic.com/tos-cn-p-0015/a46aedd2ba764dc3acd6bf1385dfd93c_1686832075~tplv-dy-360p.webp?x-expires=1688108400&x-signature=JLgOX7EtDjq0fB%2FAxX5VSYwz0y4%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=origin_cover&biz_tag=aweme_video&l=20230616155928587460E5FBC9D2049EB1",
        "music": "https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7225519709687401271.mp3",
        "video": [
            "https://v1-cold1.douyinvod.com/010e55097a07d14aa7168366a9150984/648c247a/video/tos/cn/tos-cn-ve-15c001-alinc2/ow9BN8AIgzzberisIkZSAKNLXjQAIE0knwDfDg/?a=1128&ch=26&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=1952&bt=1952&cs=0&ds=6&ft=nK5C30071u7vpihBH6xRfIMWN4BO5Ta25xHz7tG&mime_type=video_mp4&qs=0&rc=M2g5Zjo4NWY0ZTc8Ozw0M0Bpamk3bWQ6ZnZqbDMzNGkzM0A0Ni81Ni42XzMxMzFiMDJiYSNmbjRxcjRvMzJgLS1kLWFzcw%3D%3D&l=20230616155928587460E5FBC9D2049EB1&btag=e00088000"
        ]
    }
}
```

### 返回参数

::: tip
不同视频平台的链接调用接口返回的数据结构一致，因为平台差异，如果某一个参数缺失，返回值会以`无`代替。
:::

| 参数     | 类型     | 说明   |
|--------|--------|------|
| title  | string | 视频标题 |
| author | string | 视频作者 |
| avatar | string | 作者头像 |
| cover  | string | 视频封面 |
| music  | string | 背景音乐 |
| video  | object | 视频数组 |

## 短视频提取图集

::: tip
支持列表：抖音、~~快手~~、皮皮虾、最右

体验地址：[https://zzy-lcy.netlify.app/](https://zzy-lcy.netlify.app/)
:::

::: warning
快手短视频会存在滑块验证，目前只能在本地运行才能正常解析！
:::

### 接口地址

```text
https://api.zhaozeyu.top/v1/short-video
```

### 请求示例

```javascript
fetch("https://api.zhaozeyu.top/v1/short-video?url=https://v.douyin.com/UTCpqMP/", {method:'get'})
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
```

### 参数说明

::: tip
url 支持携带文案，本接口自带正则匹配分享链接中的 url 功能。
:::

| 参数  | 类型     | 必填 | 说明   |
|-----|--------|----|------|
| url | string | 是  | 视频地址 |

### 返回数据

```json
{
    "code": 0,
    "message": "抖音图集解析成功",
    "data": {
        "title": "灵狐少女|壁纸。万物有灵，柔情以待！#AI插画 #动漫美女 #动漫壁纸 #手机壁纸 #狐妖",
        "author": "清子（壁纸馆）",
        "avatar": "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_8e560a5d6f2737fbc97eecb0637695e9.webp?from=116350172",
        "music": "https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7206654696994409274.mp3",
        "images": [
            "https://p3-sign.douyinpic.com/tos-cn-i-0813/c5f1c8816d74437ca57b6f0946f356ac~tplv-dy-lqen-new:1280:2304:q75.webp?x-expires=1688112000&x-signature=lrGqUsxT0Wqmx6PzcnBlmMJgJA8%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=image&biz_tag=aweme_images&l=202306161632502E4C6E3A9BCF2800D2A0",
            "https://p3-sign.douyinpic.com/tos-cn-i-0813c001/0223b4e785e140b48a8f1a3d23e9d735~tplv-dy-lqen-new:1280:2304:q75.webp?x-expires=1688112000&x-signature=EWmoOl%2FdG0drAGu%2Be%2BX7nn77QzM%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=image&biz_tag=aweme_images&l=202306161632502E4C6E3A9BCF2800D2A0",
            "https://p3-sign.douyinpic.com/tos-cn-i-0813c001/34fd9b7a5d594f78a35fc4c51e202895~tplv-dy-lqen-new:1408:2048:q75.webp?x-expires=1688112000&x-signature=9pekh4kZh%2BA%2FkQfvhlddPaw48RA%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=image&biz_tag=aweme_images&l=202306161632502E4C6E3A9BCF2800D2A0",
            "https://p3-sign.douyinpic.com/tos-cn-i-0813/dfa24142b7fa491e85d39473bb80267f~tplv-dy-lqen-new:1408:2048:q75.webp?x-expires=1688112000&x-signature=EqjT0cMLsYB%2Bv6%2FJTEnMjBSqQtw%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=image&biz_tag=aweme_images&l=202306161632502E4C6E3A9BCF2800D2A0",
            "https://p3-sign.douyinpic.com/tos-cn-i-0813/71e1a2bdb2104175b67b9322710a9fcf~tplv-dy-lqen-new:1408:2048:q75.webp?x-expires=1688112000&x-signature=PHOtv9MF84N7xABliuXgMHYu50U%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=image&biz_tag=aweme_images&l=202306161632502E4C6E3A9BCF2800D2A0",
            "https://p26-sign.douyinpic.com/tos-cn-i-0813c001/e3f28780cdf14aa9863aefc690ebf8c2~tplv-dy-lqen-new:1408:2048:q75.webp?x-expires=1688112000&x-signature=QPW4EriN9TUFD0fLkDFGuxYupsM%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=image&biz_tag=aweme_images&l=202306161632502E4C6E3A9BCF2800D2A0",
            "https://p26-sign.douyinpic.com/tos-cn-i-0813c001/989afa4353a64c7c9af01b8dadb763d0~tplv-dy-lqen-new:1152:1664:q75.webp?x-expires=1688112000&x-signature=XxwUcbsyMOiY36iz6lMpZpQuoQs%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&sc=image&biz_tag=aweme_images&l=202306161632502E4C6E3A9BCF2800D2A0"
        ]
    }
}
```

### 返回参数

::: tip
不同视频平台的链接调用接口返回的数据结构一致，因为平台差异，如果某一个参数缺失，返回值会以`无`代替。
:::

| 参数     | 类型     | 说明   |
|--------|--------|------|
| title  | string | 视频标题 |
| author | string | 视频作者 |
| avatar | string | 作者头像 |
| cover  | string | 视频封面 |
| music  | string | 背景音乐 |
| images | object | 图片数组 |