"use strict";var exports=module.exports={},classof=require("./_classof.js"),ITERATOR=require("./_wks.js")("iterator"),Iterators=require("./_iterators.js");module.exports=require("./_core.js").getIteratorMethod=function(r){return void 0!=r?r[ITERATOR]||r["@@iterator"]||Iterators[classof(r)]:void 0};