  
  function neteaseAnalysis(userOptions){
    var search, docid, spsw, spss, spsf, ua, referer, vid, spst, sid;
    ua = navigator.userAgent;
    referrer = document.referrer;
    // 取 location 里的参数，转换为对象
    function params(){
      var url = window.location.href,start = url.indexOf("?")+1,paras={};
      if (start!==0) {
        var queryString = url.substring(start);
        var paraNames = queryString.split('&');
        var arr=[],i=0;
        for (;i<paraNames.length;i++) {
          //get rid of #
          arr = paraNames[i].split('=');
          if(i===paraNames.length-1){
            var sIndex = arr[1].indexOf('#');
            if(sIndex!==-1){
              arr[1] = arr[1].substring(0,sIndex);
            }
          }
          paras[arr[0]] = arr[1];
        }
      }
      return paras;
    }
    // 合并默认参数和用户定制参数方法
    function defaults(object) {
      if (!object) {
        return object;
      }
      for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
        var iterable = arguments[argsIndex];
        if (iterable) {
          for (var key in iterable) {
            if (typeof object[key] == 'undefined') {
              object[key] = iterable[key];
            }
          }
        }
      }
      return object;
    }

    var paramsObject = params();
    // 获取渠道
    spsf = paramsObject.f || ''
    if (ua.match(/micromessenger/gi)) {
      spsf = 'wx';
    } else if (ua.match(/weibo/gi)) {
      spsf = 'wb';
    } else if (ua.match(/yixin/gi)) {
      spsf = 'yx';
    } else if (ua.match(/qq/gi)) {
      spsf = 'qq';
    }
    if(referrer.match(/weibo\.com/)){
      spsf = 'wb'
    }else if(referrer.match(/qq\.com/) || referrer.match(/qzone\.com/)){
      spsf = 'qq'
    }

    vid = paramsObject['videoid'] 
    spsw = paramsObject['w'] || 1
    spst = 0
    if(vid){
      spst = 6
    }

    var defaultOptions = {
      spss: "newsapp",
      spst: spst,
      spsw: spsw,
      spsf: spsf,
      type: "article"
    }
    defaultOptions.spss = (ua.match(/newsapp/gi))? "native" : "newsapp"
    
    var options = defaults(userOptions, defaultOptions);
    var queryStr = "?";

    for(var item in options){
      if(item != "type"){ 
        queryStr = queryStr + item + "=" + options[item] + "&"
      }
    }
    queryStr = queryStr.substr(0,queryStr.length - 1)

    var link = 'http://sps.163.com/'+ options.type +'/' + queryStr
    console.log(link)
    neteaseTracker(false, link, '', 'sps' )
    
  }
    

