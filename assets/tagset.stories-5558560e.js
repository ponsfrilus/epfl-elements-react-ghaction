import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as C}from"./index-76fb7be0.js";import{T as b}from"./index-4c951292.js";/* empty css                     */import"./_commonjsHelpers-de833af9.js";function T({tags:a=[],callbackFn:v,className:g,addLabel:J="Add new tag",tagSpacing:Q="2px",addNewPosition:y="bottom",showInColumns:h=!1,disableEdit:m=!1}){const x=C.useRef(null),[r,W]=C.useState(a);function S(e,t){v&&v({tags:e,operation:t}),W(e)}function X(e){e.key==="Enter"&&(Y(e.target.value),x.current.value="")}function w(e){const t=r.filter(f=>f.label!==e);S(t,{operation:"delete",label:e})}function Y(e){if(r.filter(ae=>ae.label===e).length>0)return;const j={operation:"add",label:e},f=[...r,{label:e,value:e}];S(f,j)}const k=()=>s.jsx("input",{type:"text",className:"add-tag",ref:x,placeholder:J,onKeyDown:X}),Z=(e,t)=>h?s.jsx("div",{children:m?s.jsx(b,{label:e.label,className:g},t):s.jsx(b,{label:e.label,className:g,removable:!0,removeCallback:w},t)},`span-${t}`):s.jsx("span",{style:{marginRight:Q},children:m?s.jsx(b,{label:e.label,className:g},t):s.jsx(b,{label:e.label,className:g,removable:!0,removeCallback:w},t)},`span-${t}`),ee=()=>s.jsxs("div",{className:h?"tagset-wrapper grid-container":"tagset-wrapper",children:[!m&&y==="top"&&[k(),s.jsx("hr",{className:"add-tag-separator"})],r&&r.map((e,t)=>Z(e,t)),!m&&y==="bottom"&&k()]});return s.jsx(s.Fragment,{children:r&&ee()})}try{T.displayName="Tagset",T.__docgenInfo={description:"",displayName:"Tagset",props:{tags:{defaultValue:{value:"[]"},description:"",name:"tags",required:!1,type:{name:"TagProps[]"}},callbackFn:{defaultValue:null,description:"",name:"callbackFn",required:!1,type:{name:"any"}},addLabel:{defaultValue:{value:"Add new tag"},description:"",name:"addLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tagSpacing:{defaultValue:{value:"2px"},description:"",name:"tagSpacing",required:!1,type:{name:"string"}},addNewPosition:{defaultValue:{value:"bottom"},description:"",name:"addNewPosition",required:!1,type:{name:"string"}},showInColumns:{defaultValue:{value:"false"},description:"",name:"showInColumns",required:!1,type:{name:"boolean"}},disableEdit:{defaultValue:{value:"false"},description:"",name:"disableEdit",required:!1,type:{name:"boolean"}}}}}catch{}const ne={title:"Molecules/Tagset",component:T,tags:["docsPage"]},o=[{label:"Tag1",value:"tag1"},{label:"Tag2",value:"tag2"},{label:"Tag3",value:"tag3"},{label:"Tag4",value:"tag4"},{label:"Tag5",value:"tag5"},{label:"Tag6",value:"tag6"},{label:"Tag7",value:"tag7"},{label:"Tag8",value:"tag8"}],l={};l.args={tags:o,callbackFn:a=>console.log(a)};const n={};n.args={tags:[],callbackFn:a=>console.log(a)};const c={};c.args={tags:o.slice(0,4),addLabel:"Add an amazing new tag",callbackFn:a=>console.log(a)};const d={};d.args={tags:o,tagSpacing:"30px",callbackFn:a=>console.log(a)};const u={};u.args={tags:o,disableEdit:!0,callbackFn:a=>console.log(a)};const p={};p.args={tags:o,addNewPosition:"top",callbackFn:a=>console.log(a)};const i={};i.args={tags:o,showInColumns:!0,callbackFn:a=>console.log(a)};var _,F,q;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var A,E,N;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(N=(E=n.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var V,D,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var O,P,R;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var L,$,z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(z=($=u.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var K,M,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:"{}",...(U=(M=p.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var B,G,H;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ce=["Default","EmptySet","CustomAddLabel","CustomTagSpacing","DisableEdit","AddNewOnTop","ShowInColumns"];export{p as AddNewOnTop,c as CustomAddLabel,d as CustomTagSpacing,l as Default,u as DisableEdit,n as EmptySet,i as ShowInColumns,ce as __namedExportsOrder,ne as default};
