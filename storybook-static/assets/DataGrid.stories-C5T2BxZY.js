import{r as c}from"./index-uubelm5h.js";var le={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=c,Ee=Symbol.for("react.element"),Ve=Symbol.for("react.fragment"),qe=Object.prototype.hasOwnProperty,He=$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ne={key:!0,ref:!0,__self:!0,__source:!0};function de(o,t,n){var a,p={},u=null,y=null;n!==void 0&&(u=""+n),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(y=t.ref);for(a in t)qe.call(t,a)&&!Ne.hasOwnProperty(a)&&(p[a]=t[a]);if(o&&o.defaultProps)for(a in t=o.defaultProps,t)p[a]===void 0&&(p[a]=t[a]);return{$$typeof:Ee,type:o,key:u,ref:y,props:p,_owner:He.current}}$.Fragment=Ve;$.jsx=de;$.jsxs=de;le.exports=$;var s=le.exports;const q=({rows:o,columns:t,height:n=400,rowHeight:a=40,sortable:p=!1,selectable:u=!1,loading:y=!1,emptyMessage:ce="No data available",onRowClick:x,onSelectionChange:h})=>{const[i,ue]=c.useState(null),[pe,E]=c.useState(new Set),[me,ge]=c.useState(!1),he=c.useRef(null),[fe,we]=c.useState(0),ye=c.useCallback(e=>{p&&ue(r=>(r==null?void 0:r.key)===e?{key:e,direction:r.direction==="asc"?"desc":"asc"}:{key:e,direction:"asc"})},[p]),f=c.useMemo(()=>i?[...o].sort((e,r)=>{const d=e[i.key],l=r[i.key];return d<l?i.direction==="asc"?-1:1:d>l?i.direction==="asc"?1:-1:0}):o,[o,i]),xe=f.length*a,be=n-a,b=Math.floor(fe/a),ke=Math.min(b+Math.ceil(be/a)+1,f.length),ve=f.slice(b,ke),Re=b*a,Se=c.useCallback(e=>{we(e.currentTarget.scrollTop)},[]),Ce=c.useCallback((e,r)=>{u&&(r.stopPropagation(),E(d=>{const l=new Set(d);if(l.has(e)?l.delete(e):l.add(e),h){const m=Array.from(l).map(Ie=>f[Ie]);h(m)}return l}))},[u,f,h]),_e=c.useCallback(()=>{u&&ge(e=>{const r=!e;if(r){const d=new Set(f.map((l,m)=>m));E(d),h&&h(f)}else E(new Set),h&&h([]);return r})},[u,f,h]),je=c.useCallback((e,r)=>{x&&x(e,r)},[x]),De=e=>!i||i.key!==e?"⇅":i.direction==="asc"?"↑":"↓",V=150,H=t.reduce((e,r)=>e+(r.width||V),0);return y?s.jsx("div",{style:{height:`${n}px`,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#fafafa"},role:"status","aria-live":"polite",children:s.jsx("div",{children:"Loading..."})}):o.length===0?s.jsx("div",{style:{height:`${n}px`,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#fafafa",color:"#666"},role:"status","aria-live":"polite",children:s.jsx("div",{children:ce})}):s.jsxs("div",{ref:he,style:{height:`${n}px`,overflow:"auto",border:"1px solid #e0e0e0",borderRadius:"4px",backgroundColor:"#fff"},onScroll:Se,role:"region","aria-label":"Data Grid",children:[s.jsxs("div",{style:{display:"flex",position:"sticky",top:0,backgroundColor:"#f5f5f5",borderBottom:"2px solid #e0e0e0",zIndex:10,minWidth:`${H}px`},role:"row","aria-label":"Header",children:[u&&s.jsx("div",{style:{width:"40px",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",borderRight:"1px solid #e0e0e0"},children:s.jsx("input",{type:"checkbox",checked:me,onChange:_e,"aria-label":"Select all rows"})}),t.map(e=>s.jsxs("div",{style:{width:e.width||V,padding:"8px",fontWeight:"bold",borderRight:"1px solid #e0e0e0",cursor:p||e.sortable?"pointer":"default",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"space-between"},onClick:()=>ye(e.key),role:"columnheader","aria-sort":(i==null?void 0:i.key)===e.key?i.direction==="asc"?"ascending":"descending":"none",children:[s.jsx("span",{children:e.header}),(p||e.sortable)&&s.jsx("span",{style:{marginLeft:"4px",fontSize:"12px"},children:De(e.key)})]},e.key))]}),s.jsx("div",{style:{height:`${xe}px`,position:"relative",minWidth:`${H}px`},children:s.jsx("div",{style:{transform:`translateY(${Re}px)`},children:ve.map((e,r)=>{const d=b+r,l=pe.has(d);return s.jsxs("div",{style:{display:"flex",height:`${a}px`,borderBottom:"1px solid #f0f0f0",backgroundColor:l?"#e3f2fd":r%2===0?"#fff":"#fafafa",cursor:x?"pointer":"default"},onClick:()=>je(e,d),role:"row","aria-selected":l,children:[u&&s.jsx("div",{style:{width:"40px",padding:"8px",display:"flex",alignItems:"center",justifyContent:"center",borderRight:"1px solid #f0f0f0"},onClick:m=>Ce(d,m),children:s.jsx("input",{type:"checkbox",checked:l,onChange:()=>{},"aria-label":`Select row ${d+1}`})}),t.map(m=>s.jsx("div",{style:{width:m.width||V,padding:"8px",borderRight:"1px solid #f0f0f0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"flex",alignItems:"center"},role:"cell",children:e[m.key]},m.key))]},d)})})})]})};try{q.displayName="DataGrid",q.__docgenInfo={description:"",displayName:"DataGrid",props:{rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"Record<string, string | number>[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Column[]"}},height:{defaultValue:{value:"400"},description:"",name:"height",required:!1,type:{name:"number"}},rowHeight:{defaultValue:{value:"40"},description:"",name:"rowHeight",required:!1,type:{name:"number"}},sortable:{defaultValue:{value:"false"},description:"",name:"sortable",required:!1,type:{name:"boolean"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},emptyMessage:{defaultValue:{value:"No data available"},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"((row: Record<string, string | number>, index: number) => void)"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!1,type:{name:"((selectedRows: Record<string, string | number>[]) => void)"}}}}}catch{}const Ae={component:q,title:"Components/DataGrid",parameters:{layout:"padded"},tags:["autodocs"]},g=()=>[{key:"id",header:"ID",width:80},{key:"name",header:"Name",width:200},{key:"email",header:"Email",width:250},{key:"role",header:"Role",width:150},{key:"department",header:"Department",width:180},{key:"status",header:"Status",width:120}],w=o=>Array.from({length:o},(t,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@example.com`,role:n%3===0?"Admin":n%3===1?"Editor":"Viewer",department:["Engineering","Design","Marketing","Sales"][n%4],status:n%2===0?"Active":"Inactive"})),k={args:{columns:g(),rows:w(100),height:400,rowHeight:40}},v={args:{columns:g(),rows:w(1e4),height:600,rowHeight:40},parameters:{docs:{description:{story:"DataGrid with 10,000 rows demonstrating virtualization performance."}}}},R={args:{columns:g(),rows:w(100),height:400,sortable:!0}},S={args:{columns:g(),rows:w(100),height:400,selectable:!0}},C={args:{columns:g(),rows:w(1e3),height:500,sortable:!0,selectable:!0,rowHeight:40}},_={args:{columns:g(),rows:[],height:400,loading:!0}},j={args:{columns:g(),rows:[],height:400,emptyMessage:"No users found"}},D={args:{columns:g(),rows:w(50),height:400,rowHeight:60}},I={args:{columns:g(),rows:w(50),height:400,onRowClick:(o,t)=>{alert(`Clicked row ${t+1}: ${o.name}`)}},parameters:{docs:{description:{story:"Click on any row to see the alert with row data."}}}};var N,O,A;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: generateRows(100),
    height: 400,
    rowHeight: 40
  }
}`,...(A=(O=k.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var L,M,W;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: generateRows(10000),
    height: 600,
    rowHeight: 40
  },
  parameters: {
    docs: {
      description: {
        story: 'DataGrid with 10,000 rows demonstrating virtualization performance.'
      }
    }
  }
}`,...(W=(M=v.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var G,T,F;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: generateRows(100),
    height: 400,
    sortable: true
  }
}`,...(F=(T=R.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var P,z,B;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: generateRows(100),
    height: 400,
    selectable: true
  }
}`,...(B=(z=S.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var U,Y,J;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: generateRows(1000),
    height: 500,
    sortable: true,
    selectable: true,
    rowHeight: 40
  }
}`,...(J=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,X;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: [],
    height: 400,
    loading: true
  }
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: [],
    height: 400,
    emptyMessage: 'No users found'
  }
}`,...(re=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,se,ae;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: generateRows(50),
    height: 400,
    rowHeight: 60
  }
}`,...(ae=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,oe,ie;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    columns: generateColumns(),
    rows: generateRows(50),
    height: 400,
    onRowClick: (row: Record<string, string | number>, index: number) => {
      alert(\`Clicked row \${index + 1}: \${row.name}\`);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on any row to see the alert with row data.'
      }
    }
  }
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Le=["Default","LargeDataset","Sortable","Selectable","FullFeatured","Loading","Empty","CustomRowHeight","WithRowClick"];export{D as CustomRowHeight,k as Default,j as Empty,C as FullFeatured,v as LargeDataset,_ as Loading,S as Selectable,R as Sortable,I as WithRowClick,Le as __namedExportsOrder,Ae as default};
