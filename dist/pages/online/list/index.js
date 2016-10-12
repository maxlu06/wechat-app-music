"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var exports=module.exports={};try{var global=window=require("../../../npm/labrador/global.js");Object.defineProperty(exports,"__esModule",{value:!0});var _toConsumableArray2=require("../../../npm/babel-runtime/helpers/toConsumableArray.js"),_toConsumableArray3=_interopRequireDefault(_toConsumableArray2),_regenerator=require("../../../npm/babel-runtime/regenerator/index.js"),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=require("../../../npm/babel-runtime/helpers/asyncToGenerator.js"),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_extends2=require("../../../npm/babel-runtime/helpers/extends.js"),_extends3=_interopRequireDefault(_extends2),_getPrototypeOf=require("../../../npm/babel-runtime/core-js/object/get-prototype-of.js"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=require("../../../npm/babel-runtime/helpers/classCallCheck.js"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("../../../npm/babel-runtime/helpers/createClass.js"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=require("../../../npm/babel-runtime/helpers/possibleConstructorReturn.js"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=require("../../../npm/babel-runtime/helpers/inherits.js"),_inherits3=_interopRequireDefault(_inherits2),_labrador=require("../../../npm/labrador/index.js"),_labrador2=_interopRequireDefault(_labrador),_api=require("../../../utils/api.js"),_api2=_interopRequireDefault(_api),List=function(e){function r(){var e,t,a,n;(0,_classCallCheck3["default"])(this,r);for(var o=arguments.length,s=Array(o),l=0;o>l;l++)s[l]=arguments[l];return t=a=(0,_possibleConstructorReturn3["default"])(this,(e=r.__proto__||(0,_getPrototypeOf2["default"])(r)).call.apply(e,[this].concat(s))),a.app=getApp(),a.data=(0,_extends3["default"])({},a.app.globalData.data,{tabActive:"rank",list:[],board:{},paged:1,loading:!1}),n=t,(0,_possibleConstructorReturn3["default"])(a,n)}return(0,_inherits3["default"])(r,e),(0,_createClass3["default"])(r,[{key:"onReady",value:function(){_labrador2["default"].setNavigationBarTitle({title:"在线音乐"})}},{key:"loading",value:function(e){this.setData({loading:e})}},{key:"onLoad",value:function(){function e(e){return r.apply(this,arguments)}var r=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function t(e){var r;return _regenerator2["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading(!0),t.next=3,_api2["default"].getOnline(e.type,1);case 3:r=t.sent,this.setData({type:e.type,list:r.song_list,board:r.billboard,loading:!1});case 5:case"end":return t.stop()}},t,this)}));return e}()},{key:"nextpage",value:function(){function e(e){return r.apply(this,arguments)}var r=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function t(e){var r,a;return _regenerator2["default"].wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.data.paged+1,this.loading(!0),e.next=4,_api2["default"].getOnline(this.data.type,r);case 4:a=e.sent,this.setData({paged:r,list:[].concat((0,_toConsumableArray3["default"])(this.data.list),(0,_toConsumableArray3["default"])(a.song_list)),loading:!1});case 6:case"end":return e.stop()}},t,this)}));return e}()}]),r}(_labrador2["default"].Component);exports["default"]=List;var __page=new exports["default"];__page.init(),Page(__page)}catch(error){throw console.error(error.stack),error}