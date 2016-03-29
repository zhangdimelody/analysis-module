### 统计

-------------------------

### sps 统计

#### 使用方法

```js
neteaseAnalysis({spst: 1, modelid: "autobmw7xi"})
```

#### 参数说明
* *id   某ID，key 值例如：docid/modelid/sid/roomid/videoid（必填）
* spst  内容分类
    - spst=0 文章页 
    - spst=1 动效专题 H5页
    - spst=2 专题页
    - spst=3 图集页
    - spst=4 直播室
    - **默认**: 传0，如果 url 参数有 videoid 则传 6
* spsw  第几次分享 
    - spsw=0 特殊情况，网易内部产品分享
    - spsw=1 第一次分享
    - spsw=2 第二次分享
    - **默认**: 传 url 参数中的 w, 没有则传1
* spsf  平台，value 值例如：newsapp/163/light
    - **默认**: 传 newsapp
* spss  渠道，value 值例如：qq/wb/wx/yx
    - **默认**: 传 useragent 匹配结果



