"use strict";var exports=module.exports={};module.exports=function(e,r,l){var t=void 0===l;switch(r.length){case 0:return t?e():e.call(l);case 1:return t?e(r[0]):e.call(l,r[0]);case 2:return t?e(r[0],r[1]):e.call(l,r[0],r[1]);case 3:return t?e(r[0],r[1],r[2]):e.call(l,r[0],r[1],r[2]);case 4:return t?e(r[0],r[1],r[2],r[3]):e.call(l,r[0],r[1],r[2],r[3])}return e.apply(l,r)};