"use strict";var exports=module.exports={},anObject=require("./_an-object.js"),dPs=require("./_object-dps.js"),enumBugKeys=require("./_enum-bug-keys.js"),IE_PROTO=require("./_shared-key.js")("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){var e,t=require("./_dom-create.js")("iframe"),r=enumBugKeys.length,c="<",n=">";for(t.style.display="none",require("./_html.js").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(c+"script"+n+"document.F=Object"+c+"/script"+n),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE][enumBugKeys[r]];return createDict()};module.exports=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE]=anObject(e),r=new Empty,Empty[PROTOTYPE]=null,r[IE_PROTO]=e):r=createDict(),void 0===t?r:dPs(r,t)};