"use strict";var exports=module.exports={},anObject=require("./_an-object.js"),aFunction=require("./_a-function.js"),SPECIES=require("./_wks.js")("species");module.exports=function(e,r){var t,n=anObject(e).constructor;return void 0===n||void 0==(t=anObject(n)[SPECIES])?r:aFunction(t)};