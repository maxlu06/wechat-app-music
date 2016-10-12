"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var exports=module.exports={};try{var _promise=require("../npm/babel-runtime/core-js/promise.js"),_promise2=_interopRequireDefault(_promise),baseUrl="http://tingapi.ting.baidu.com/v1/restserver/ting",apiMethod={search:"baidu.ting.search.catalogSug",detail:"baidu.ting.song.play",lrc:"baidu.ting.song.lry",recommand:"baidu.ting.song.getRecommandSongList",download:"baidu.ting.song.downWeb",list:"baidu.ting.billboard.billList"},query=function(e){return{formate:"json"}},hackImg=function(e){return"http://www.beihaiw.com/pic.php?url="+e},request=function(e){return new _promise2["default"](function(i,t){wx.request({url:baseUrl,data:e,success:function(e){i(e.data)},fail:function(e){t(e)}})})},search=function(e){return request({method:apiMethod.search,query:e})},getOnline=function(e,i){var t=12;return request({method:apiMethod.list,type:e,offset:t*(i-1),size:t}).then(function(e){return e.billboard.pic_s210=hackImg(e.billboard.pic_s210),e.billboard.pic_s260=hackImg(e.billboard.pic_s260),e.billboard.pic_s444=hackImg(e.billboard.pic_s444),e.billboard.pic_s640=hackImg(e.billboard.pic_s640),e.song_list.forEach(function(e){e.pic_big=hackImg(e.pic_big),e.pic_small=hackImg(e.pic_small)}),e})},getDetail=function(e){return request({method:apiMethod.detail,songid:e})};module.exports={getOnline:getOnline,getDetail:getDetail,search:search,request:request,apiMethod:apiMethod}}catch(error){throw console.error(error.stack),error}