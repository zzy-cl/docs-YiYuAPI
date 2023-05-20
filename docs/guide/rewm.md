# 视频水印

## 短视频去水印

::: tip 提示
支持列表：抖音、快手
:::

### 接口地址

```text
https://api.zhaozeyu.top/v1/video
```

### 请求示例

```javascript
fetch("https://api.zhaozeyu.top/v1/video?url=https://v.douyin.com/UdV8ydj")
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
```

### 参数说明

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

::: tip 提示
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
