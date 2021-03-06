### 统计

-------------------------
### 一、mapp 统计（统计整个页面）

#### 使用方法

```js
<script type="text/javascript" src="http://analytics.163.com/ntes.js"></script>

_ntes_nacc = "mapp";
neteaseTracker();

```

#### 依赖
`<script type="text/javascript" src="http://analytics.163.com/ntes.js"></script>`

### 二、sps 统计（统计文章页的回流）

#### 使用方法

```js
<script type="text/javascript" src="http://analytics.163.com/ntes.js"></script>
<script type="text/javascript" src="http://img4.cache.netease.com/utf8/3g/util/analysis.min.js"></script>

//方法1
neteaseAnalysis({
    modelid: "3g项目名",
    spst: 1
})

//方法2
neteaseAnalysis({ 
    type: "func",
    docid: "BJACD6SO00964LQ9"
})
//输出统计link：http://sps.163.com/func/?docid=BJACD6SO00964LQ9&spss=newsapp&spst=0&spsw=1&spsf=qq

//方法3 加入自定义参数 
neteaseAnalysis({ 
    docid: "BJACD6SO00964LQ9", 
    other: "test"  // key 值与 value 值可随意填写
})

```

#### 参数说明
* *id   某ID，key 值例如：docid/modelid/sid/roomid/videoid（必填）
* spst  内容分类
    - spst=0 文章页 
    - spst=1 动效专题 H5页
    - spst=2 专题页
    - spst=3 图集页
    - spst=4 直播室
    - spst=5 其他URL
    - spst=6 视频
    - spst=7 视频列表
    - spst=8 问吧
    - spst=9 多媒体播放器(webvr)
    - spst=10 话吧
    - `默认`: 传0，如果 url 参数有 videoid 则传 6
* spsw  第几次分享 
    - spsw=0 特殊情况，网易内部产品分享
    - spsw=1 第一次分享
    - spsw=2 第二次分享
    - `默认`: 传 url 参数中的 w, 没有则传1
* spss  平台，value 值例如：native/newsapp/163/light
    - `默认`: 在客户端内传 native，否则传 newsapp
* spsf  渠道，value 值例如：qq/wb/wx/yx
    - `默认`: 传 ua 匹配结果

* type 统计类型，value 值例如：article/special/func
    - `默认`: 传 article 
        + article 多用于统计文章页
        + special 多用于统计活动页面
        + func 多用于统计点击操作等

#### 依赖
`<script type="text/javascript" src="http://analytics.163.com/ntes.js"></script>`
`<script type="text/javascript" src="http://img4.cache.netease.com/utf8/3g/util/analysis.min.js"></script>`

#### Demo
[demo1](http://f2e.developer.163.com/dizhang/analysis/)<br>
[demo2](http://f2e.developer.163.com/dizhang/analysis/?videoid=123&w=9)


