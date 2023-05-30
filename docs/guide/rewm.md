# 视频水印

## 短视频清除水印

::: tip
支持列表：抖音、快手

体验地址：[https://zzy-lcy.netlify.app/](https://zzy-lcy.netlify.app/)
:::

::: warning
快手短视频会存在滑块验证，目前只能在本地运行才能正常解析！
:::

### 接口地址

```text
https://api.zhaozeyu.top/v1/videos
```

### 请求示例

```javascript
fetch("https://api.zhaozeyu.top/v1/videos?url=https://v.douyin.com/UdV8ydj", requestOptions)
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
    "title": "不良人第六季大结局，李星云姬如雪吻戏看哭了#不良人6大结局 #画江湖之不良人",
    "author": "一飛",
    "avatar": "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_28a15e1b5e4b71e3cfc1b13522cdf261.webp?from=116350172",
    "cover": "https://p3-sign.douyinpic.com/tos-cn-p-0015/f97d560b43ee486ab7bdbc8e9090dc2d_1683770500~tplv-dy-360p.webp?x-expires=1685790000&x-signature=SdZSDfN4VnnWJ1%2B8e00DCHEBato%3D&from=3213915784&se=false&biz_tag=feed_cover&l=20230520192201D51A35991B2B407A357D",
    "music": "https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7231739219692112701.mp3",
    "video": "https://v3-dy-o.zjcdn.com/4d4f66b3c4777beaf063303968af2330/6468bb96/video/tos/cn/tos-cn-ve-15c001-alinc2/oQyQCjcjbB9IiAfeLABEKtUQELADgONZ9YTzhz/?a=1128&ch=26&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=759&bt=759&cs=2&ds=6&ft=F-_ezGTe0BN16UvjVQ7MAKK7usixsGaUaglc&mime_type=video_mp4&qs=11&rc=OGY0OjU1ZWY4Njs1PDg5aUBpandmbGU6Zmc3azMzNGkzM0BgMi82Li1jXi8xLTVhMGM1YSNtMGRlcjRnbGJgLS1kLS9zcw%3D%3D&l=20230520192201D51A35991B2B407A357D&btag=e000a0000&cc=1f"
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
| video  | string | 视频地址 |

## 短视频提取图集

::: tip
支持列表：抖音、快手

体验地址：[https://zzy-lcy.netlify.app/](https://zzy-lcy.netlify.app/)
:::

::: warning
快手短视频会存在滑块验证，目前只能在本地运行才能正常解析！
:::

### 接口地址

```text
https://api.zhaozeyu.top/v1/images
```

### 请求示例

```javascript
fetch("https://api.zhaozeyu.top/v1/images?url=https://v.douyin.com/UH1M8PD", requestOptions)
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
        "title": "不良人高清壁纸。画江湖之不良人——［女帝-将臣-奥姑］精选优质壁纸#不良人李星云成为造局人 #高清壁纸 #国漫崛起 #图文伙伴计划 #不良人女帝",
        "author": "冒牌王子🤴",
        "avatar": "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_d4b754e790c74554b8149b37029db58a.webp?from=116350172",
        "music": "https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/7214342729461959483.mp3",
        "images": [
            "https://p9-sign.douyinpic.com/tos-cn-i-0813c001/f6158200cd734120b0f4e3a3baaa13e5~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=6fmHdMdcZSRTNdLm%2BLpSSXvYB%2Bg%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19",
            "https://p3-sign.douyinpic.com/tos-cn-i-0813/94fca767b9384c43965a6c61287a25b0~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=47hPLky%2Be3RhdraZ7gZ93mAJLug%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19",
            "https://p3-sign.douyinpic.com/tos-cn-i-0813c001/c9ddc9c679b347dda88d4dc588621790~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=%2Bqz1%2Fqaf8kf5x4AVecAmViaSPOE%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19",
            "https://p26-sign.douyinpic.com/tos-cn-i-0813/bb8115db27a94c1f9402c94cc1eb39d9~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=ZvIgP1%2FlRv13LQXsKsoAgo%2F%2FIn4%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19",
            "https://p3-sign.douyinpic.com/tos-cn-i-0813/7320ee5f982e41fab32c3f2c1ce076b5~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=bLOfoVEJAVxeA7B3ccsJfb96F5I%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19",
            "https://p6-sign.douyinpic.com/tos-cn-i-0813c001/d8f3960095e14782905ec163fa299695~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=uCAU3Ba79tp%2F2YqR8amU6OjGHMQ%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19",
            "https://p6-sign.douyinpic.com/tos-cn-i-0813/b5a3cef5322249a18eec5d966f90465e~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=koroTNFIX7Kx3bTYN6o4A%2BP52cQ%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19",
            "https://p6-sign.douyinpic.com/tos-cn-i-0813c001/1676ea0229e7420d9f791b4fb7b6ec65~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=cNz0ART2cs1nUBOQ%2BPq9p4xizvk%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19",
            "https://p26-sign.douyinpic.com/tos-cn-i-0813/f30c2ebdbde144f19f07f3124cd1c564~tplv-dy-aweme-images:q75.webp?x-expires=1686679200&x-signature=liPv6RySbkG2SO1kqIPxm2oC8vA%3D&from=3213915784&s=PackSourceEnum_AWEME_DETAIL&se=false&biz_tag=aweme_images&l=20230531020103ABBC96BBE7A916279A19"
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
| images | array  | 图片数组 |