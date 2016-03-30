### 统计

-------------------------

### sps 统计

#### 使用方法

```js
//方法1
neteaseAnalysis({
    modelid: "autobmw7xi",
    spst: 1
})

//方法2
neteaseAnalysis({ 
    docid: "BJACD6SO00964LQ9"
})

//方法3 加入自定义参数 
neteaseAnalysis({ 
    docid: "BJACD6SO00964LQ9", 
    other: "test"
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
    - `默认`: 传0，如果 url 参数有 videoid 则传 6
* spsw  第几次分享 
    - spsw=0 特殊情况，网易内部产品分享
    - spsw=1 第一次分享
    - spsw=2 第二次分享
    - `默认`: 传 url 参数中的 w, 没有则传1
* spsf  平台，value 值例如：newsapp/163/light
    - `默认`: 传 newsapp
* spss  渠道，value 值例如：qq/wb/wx/yx
    - `默认`: 传 ua 匹配结果

#### 依赖
`<script type="text/javascript" src="http://analytics.163.com/ntes.js"></script>`
`<script type="text/javascript" src="http://img1.cache.netease.com/utf8/3g/util/analysis.min.js"></script>`

#### Demo
[demo1](http://f2e.developer.163.com/dizhang/analysis/)<br>
[demo2](http://f2e.developer.163.com/dizhang/analysis/?videoid=123&w=9)


