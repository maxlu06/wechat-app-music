"use strict";var exports=module.exports={},global=window=require("../../../labrador/global.js"),global=require("./_global.js"),core=require("./_core.js"),LIBRARY=require("./_library.js"),wksExt=require("./_wks-ext.js"),defineProperty=require("./_object-dp.js").f;module.exports=function(e){var r=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{});"_"==e.charAt(0)||e in r||defineProperty(r,e,{value:wksExt.f(e)})};