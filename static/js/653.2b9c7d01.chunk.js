/*! For license information please see 653.2b9c7d01.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkproject_portfolio=self.webpackChunkproject_portfolio||[]).push([[653],{653:(t,e,c)=>{c.r(e),c.d(e,{scopeCss:()=>A});var n="-shadowcsshost",o="-shadowcssslotted",s="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+n+r,"gim"),a=new RegExp("("+s+r,"gim"),i=new RegExp("("+o+r,"gim"),p=n+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,g=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,d=t=>new RegExp("((?<!(^@supports(.*)))|(?<={.*))(".concat(t,"\\b)"),"gim"),f=d("::slotted"),m=d(":host"),x=d(":host-context"),w=/\/\*\s*[\s\S]*?\*\//g,S=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,v=/(^.*?[^\\])??((:+)(.*)|$)/,j="%BLOCK%",k=t=>{const e=t.split(b),c=[],n=[];let o=0,s=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&o--,o>0?s.push(t):(s.length>0&&(n.push(s.join("")),c.push(j),s=[]),c.push(t)),"{"===t&&o++}s.length>0&&(n.push(s.join("")),c.push(j));return{escapedString:c.join(""),blocks:n}},E=(t,e,c)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){const t=e[2].split(","),n=[];for(let o=0;o<t.length;o++){const s=t[o].trim();if(!s)break;n.push(c(p,s,e[3]))}return n.join(",")}return p+e[3]})),O=(t,e,c)=>t+e.replace(n,"")+c,$=(t,e,c)=>e.indexOf(n)>-1?O(t,e,c):t+e+c+", "+e+" "+t+c,R=(t,e)=>{const c=(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e);return!c.test(t)},C=(t,e)=>t.replace(v,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),W=(t,e,c)=>{const n="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),o=t=>{let o=t.trim();if(!o)return"";if(t.indexOf(p)>-1)o=((t,e,c)=>{if(u.lastIndex=0,u.test(t)){const e=".".concat(c);return t.replace(h,((t,c)=>C(c,e))).replace(u,e+" ")}return e+" "+t})(t,e,c);else{const e=t.replace(u,"");e.length>0&&(o=C(e,n))}return o},s=(t=>{const e=[];let c=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,((t,n)=>{const o="__ph-".concat(c,"__");return e.push(n),c++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,n,o)=>{const s="__ph-".concat(c,"__");return e.push(o),c++,n+s})),placeholders:e}})(t);let r,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let g=!((t=s.content).indexOf(p)>-1);for(;null!==(r=i.exec(t));){const e=r[1],c=t.slice(a,r.index).trim();g=g||c.indexOf(p)>-1;const n=g?o(c):c;l+="".concat(n," ").concat(e," "),a=i.lastIndex}const d=t.substring(a);return g=g||d.indexOf(p)>-1,l+=g?o(d):d,f=s.placeholders,l.replace(/__ph-(\d+)__/g,((t,e)=>f[+e]));var f},T=(t,e,c,n)=>((t,e)=>{const c=k(t);let n=0;return c.escapedString.replace(_,(function(){const t=arguments.length<=2?void 0:arguments[2];let o="",s=arguments.length<=4?void 0:arguments[4],r="";s&&s.startsWith("{"+j)&&(o=c.blocks[n++],s=s.substring(8),r="{");const l=e({selector:t,content:o});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(l.content).concat(s)}))})(t,(t=>{let o=t.selector,s=t.content;"@"!==t.selector[0]?o=((t,e,c,n)=>t.split(",").map((t=>n&&t.indexOf("."+n)>-1?t.trim():R(t,e)?W(t,e,c).trim():t.trim())).join(", "))(t.selector,e,c,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(s=T(t.content,e,c,n));return{selector:o.replace(/\s{2,}/g," ").trim(),content:s}})),L=(t,e,c,r)=>{const h=((t,e)=>{const c="."+e+" > ",n=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];if(e[2]){const t=e[2].trim(),o=e[3],s=c+t+o;let r="";for(let c=e[4]-1;c>=0;c--){const t=e[5][c];if("}"===t||","===t)break;r=t+r}const l=(r+s).trim(),a="".concat(r.trimEnd()).concat(s.trim()).trim();if(l!==a){const t="".concat(a,", ").concat(l);n.push({orgSelector:l,updatedSelector:t})}return s}return p+e[3]})),{selectors:n,cssText:t}})(t=(t=>E(t,a,$))(t=(t=>E(t,l,O))(t=(t=>t.replace(x,"$1".concat(s)).replace(m,"$1".concat(n)).replace(f,"$1".concat(o)))(t))),r);return t=(t=>g.reduce(((t,e)=>t.replace(e," ")),t))(t=h.cssText),e&&(t=T(t,e,c,r)),{cssText:(t=(t=y(t,c)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors.map((t=>({orgSelector:y(t.orgSelector,c),updatedSelector:y(t.updatedSelector,c)})))}},y=(t,e)=>t.replace(/-shadowcsshost-no-combinator/g,".".concat(e)),A=(t,e)=>{const c=e+"-h",n=e+"-s",o=t.match(S)||[];t=(t=>t.replace(w,""))(t);const s=L(t,e,c,n);return t=[s.cssText,...o].join("\n"),s.slottedSelectors.forEach((e=>{const c=new RegExp(e.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");t=t.replace(c,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=653.2b9c7d01.chunk.js.map