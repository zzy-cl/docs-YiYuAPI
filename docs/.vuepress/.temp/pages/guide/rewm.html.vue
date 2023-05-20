<template><div><h1 id="视频水印" tabindex="-1"><a class="header-anchor" href="#视频水印" aria-hidden="true">#</a> 视频水印</h1>
<h2 id="短视频去水印" tabindex="-1"><a class="header-anchor" href="#短视频去水印" aria-hidden="true">#</a> 短视频去水印</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>支持列表：抖音、快手</p>
</div>
<h3 id="接口地址" tabindex="-1"><a class="header-anchor" href="#接口地址" aria-hidden="true">#</a> 接口地址</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>https://api.zhaozeyu.top/v1/video
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例" aria-hidden="true">#</a> 请求示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.zhaozeyu.top/v1/video?url=https://v.douyin.com/UdV8ydj"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>string</td>
<td>是</td>
<td>视频地址</td>
</tr>
</tbody>
</table>
<h3 id="返回数据" tabindex="-1"><a class="header-anchor" href="#返回数据" aria-hidden="true">#</a> 返回数据</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"抖音视频解析成功"</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"不良人第六季大结局，李星云姬如雪吻戏看哭了#不良人6大结局 #画江湖之不良人"</span><span class="token punctuation">,</span>
    <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"一飛"</span><span class="token punctuation">,</span>
    <span class="token property">"avatar"</span><span class="token operator">:</span> <span class="token string">"https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-avt-0015_28a15e1b5e4b71e3cfc1b13522cdf261.webp?from=116350172"</span><span class="token punctuation">,</span>
    <span class="token property">"cover"</span><span class="token operator">:</span> <span class="token string">"https://p3-sign.douyinpic.com/tos-cn-p-0015/f97d560b43ee486ab7bdbc8e9090dc2d_1683770500~tplv-dy-360p.webp?x-expires=1685790000&amp;x-signature=SdZSDfN4VnnWJ1%2B8e00DCHEBato%3D&amp;from=3213915784&amp;se=false&amp;biz_tag=feed_cover&amp;l=20230520192201D51A35991B2B407A357D"</span><span class="token punctuation">,</span>
    <span class="token property">"music"</span><span class="token operator">:</span> <span class="token string">"https://sf3-cdn-tos.douyinstatic.com/obj/ies-music/7231739219692112701.mp3"</span><span class="token punctuation">,</span>
    <span class="token property">"video"</span><span class="token operator">:</span> <span class="token string">"https://v3-dy-o.zjcdn.com/4d4f66b3c4777beaf063303968af2330/6468bb96/video/tos/cn/tos-cn-ve-15c001-alinc2/oQyQCjcjbB9IiAfeLABEKtUQELADgONZ9YTzhz/?a=1128&amp;ch=26&amp;cr=3&amp;dr=0&amp;lr=all&amp;cd=0%7C0%7C0%7C3&amp;cv=1&amp;br=759&amp;bt=759&amp;cs=2&amp;ds=6&amp;ft=F-_ezGTe0BN16UvjVQ7MAKK7usixsGaUaglc&amp;mime_type=video_mp4&amp;qs=11&amp;rc=OGY0OjU1ZWY4Njs1PDg5aUBpandmbGU6Zmc3azMzNGkzM0BgMi82Li1jXi8xLTVhMGM1YSNtMGRlcjRnbGJgLS1kLS9zcw%3D%3D&amp;l=20230520192201D51A35991B2B407A357D&amp;btag=e000a0000&amp;cc=1f"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回参数" tabindex="-1"><a class="header-anchor" href="#返回参数" aria-hidden="true">#</a> 返回参数</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>不同视频平台的链接调用接口返回的数据结构一致，因为平台差异，如果某一个参数缺失，返回值会以<code v-pre>无</code>代替。</p>
</div>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>string</td>
<td>视频标题</td>
</tr>
<tr>
<td>author</td>
<td>string</td>
<td>视频作者</td>
</tr>
<tr>
<td>avatar</td>
<td>string</td>
<td>作者头像</td>
</tr>
<tr>
<td>cover</td>
<td>string</td>
<td>视频封面</td>
</tr>
<tr>
<td>music</td>
<td>string</td>
<td>背景音乐</td>
</tr>
<tr>
<td>video</td>
<td>string</td>
<td>视频地址</td>
</tr>
</tbody>
</table>
</div></template>


