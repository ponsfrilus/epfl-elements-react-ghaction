import{j as u}from"./jsx-runtime-ffb262ed.js";import{r as g}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";/*! js-cookie v3.0.5 | MIT */function p(r){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var a in t)r[a]=t[a]}return r}var x={read:function(r){return r[0]==='"'&&(r=r.slice(1,-1)),r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(r){return encodeURIComponent(r).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function m(r,o){function t(e,i,n){if(!(typeof document>"u")){n=p({},o,n),typeof n.expires=="number"&&(n.expires=new Date(Date.now()+n.expires*864e5)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var s in n)n[s]&&(c+="; "+s,n[s]!==!0&&(c+="="+n[s].split(";")[0]));return document.cookie=e+"="+r.write(i,e)+c}}function a(e){if(!(typeof document>"u"||arguments.length&&!e)){for(var i=document.cookie?document.cookie.split("; "):[],n={},c=0;c<i.length;c++){var s=i[c].split("="),h=s.slice(1).join("=");try{var d=decodeURIComponent(s[0]);if(n[d]=r.read(h,d),e===d)break}catch{}}return e?n[e]:n}}return Object.create({set:t,get:a,remove:function(e,i){t(e,"",p({},i,{expires:-1}))},withAttributes:function(e){return m(this.converter,p({},this.attributes,e))},withConverter:function(e){return m(p({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}var y=m(x,{path:"/"});function l({tokenName:r="csrftoken",inputName:o="csrfmiddlewaretoken"}){const[t,a]=g.useState();g.useEffect(()=>{const i=y.get(r);a(i)},[]);const e=()=>u.jsx("input",{type:"hidden",name:o,value:t});return u.jsx(u.Fragment,{children:t&&e()})}try{l.displayName="CsfrToken",l.__docgenInfo={description:"",displayName:"CsfrToken",props:{tokenName:{defaultValue:{value:"csrftoken"},description:"",name:"tokenName",required:!1,type:{name:"string"}},inputName:{defaultValue:{value:"csrfmiddlewaretoken"},description:"",name:"inputName",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Atoms/CsfrToken",component:l,tags:["docsPage"]},f={};var k,v,C;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(C=(v=f.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const T=["Default"];export{f as Default,T as __namedExportsOrder,R as default};
