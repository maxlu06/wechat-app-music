"use strict";var exports=module.exports={},LIBRARY=require("./_library.js"),$export=require("./_export.js"),redefine=require("./_redefine.js"),hide=require("./_hide.js"),has=require("./_has.js"),Iterators=require("./_iterators.js"),$iterCreate=require("./_iter-create.js"),setToStringTag=require("./_set-to-string-tag.js"),getPrototypeOf=require("./_object-gpo.js"),ITERATOR=require("./_wks.js")("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(e,r,t,i,s,n,o){$iterCreate(t,r,i);var u,a,T,R=function(e){if(!BUGGY&&e in h)return h[e];switch(e){case KEYS:return function(){return new t(this,e)};case VALUES:return function(){return new t(this,e)}}return function(){return new t(this,e)}},A=r+" Iterator",c=s==VALUES,f=!1,h=e.prototype,E=h[ITERATOR]||h[FF_ITERATOR]||s&&h[s],p=E||R(s),I=s?c?R("entries"):p:void 0,j="Array"==r?h.entries||E:E;if(j&&(T=getPrototypeOf(j.call(new e)),T!==Object.prototype&&(setToStringTag(T,A,!0),LIBRARY||has(T,ITERATOR)||hide(T,ITERATOR,returnThis))),c&&E&&E.name!==VALUES&&(f=!0,p=function(){return E.call(this)}),LIBRARY&&!o||!BUGGY&&!f&&h[ITERATOR]||hide(h,ITERATOR,p),Iterators[r]=p,Iterators[A]=returnThis,s)if(u={values:c?p:R(VALUES),keys:n?p:R(KEYS),entries:I},o)for(a in u)a in h||redefine(h,a,u[a]);else $export($export.P+$export.F*(BUGGY||f),r,u);return u};