import{o as e}from"./chunk-CFjPhJqf.js";import{n as t,t as n}from"./jsx-runtime-QQLjLlGf.js";import{Ft as r,ot as i}from"./useActiveWallet-CvP7iYvj-BV97UQwe.js";import{x as a}from"./index-BmicnxyQ.js";import{t as o}from"./createLucideIcon-CoSuV3nH.js";import{t as s}from"./ScreenLayout-D1p_ntex-BdGjNdtR.js";var c=o(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),l=n(),u=e(t(),1),d=async({operation:e,until:t,delay:n,interval:r,attempts:a,signal:o})=>{let s,c=0;for(;c<a;){if(o?.aborted)return{status:`aborted`,result:s,attempts:c};c++;try{if(s=await e(),t(s))return{status:`success`,result:s,attempts:c};c<a&&await i(r)}catch{c<a&&await i(r)}}return{status:`max_attempts`,result:s,attempts:c}},f=e=>{try{return e.location.origin}catch{return}},p=async(e,t)=>{let n=await d({operation:async()=>({done:f(e)===window.location.origin,closed:e.closed}),until:({done:e,closed:t})=>e||t,delay:0,interval:500,attempts:360,signal:t});return n.status===`aborted`?(e.close(),{status:`aborted`}):n.status===`max_attempts`?{status:`timeout`}:n.result.done?(e.close(),{status:`redirected`}):{status:`closed`}},m=({currency:e=`usd`,value:t,onChange:n,inputMode:r=`decimal`,autoFocus:i})=>{let[o,s]=(0,u.useState)(`0`),c=(0,u.useRef)(null),d=t??o,f=a[e]?.symbol??`$`,p=(0,u.useCallback)((e=>{let t=e.target.value,r=(t=t.replace(/[^\d.]/g,``)).split(`.`);r.length>2&&(t=r[0]+`.`+r.slice(1).join(``)),r.length===2&&r[1].length>2&&(t=`${r[0]}.${r[1].slice(0,2)}`),t.length>1&&t[0]===`0`&&t[1]!==`.`&&(t=t.slice(1)),(t===``||t===`.`)&&(t=`0`),n?n(t):s(t)}),[n]),m=(0,u.useCallback)((e=>{!([`Delete`,`Backspace`,`Tab`,`Escape`,`Enter`,`.`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)||(e.ctrlKey||e.metaKey)&&[`a`,`c`,`v`,`x`].includes(e.key.toLowerCase()))&&(e.key>=`0`&&e.key<=`9`||e.preventDefault())}),[]),h=(0,u.useMemo)((()=>(d.includes(`.`),d)),[d]);return(0,l.jsxs)(g,{onClick:()=>c.current?.focus(),children:[(0,l.jsx)(_,{children:f}),h,(0,l.jsx)(`input`,{ref:c,type:`text`,inputMode:r,value:h,onChange:p,onKeyDown:m,autoFocus:i,placeholder:`0`,style:{width:1,height:`1rem`,opacity:0,alignSelf:`center`,fontSize:`1rem`}}),(0,l.jsx)(_,{style:{opacity:0},children:f})]})},h=({selectedAsset:e,onEditSourceAsset:t})=>{let{icon:n}=a[e];return(0,l.jsxs)(v,{onClick:t,children:[(0,l.jsx)(y,{children:n}),(0,l.jsx)(b,{children:e.toLocaleUpperCase()}),(0,l.jsx)(x,{children:(0,l.jsx)(c,{})})]})},g=r.span`
  background-color: var(--privy-color-background);
  width: 100%;
  text-align: center;
  border: none;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    color: var(--privy-color-foreground);
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,_=r.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,v=r.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,y=r.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
  }
`,b=r.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,x=r.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,S=({opts:e,isLoading:t,onSelectSource:n})=>(0,l.jsx)(s,{showClose:!1,showBack:!0,onBack:()=>n(e.source.selectedAsset),title:`Select currency`,children:(0,l.jsx)(C,{children:e.source.assets.map((e=>{let{icon:r,name:i}=a[e];return(0,l.jsx)(w,{onClick:()=>n(e),disabled:t,children:(0,l.jsxs)(T,{children:[(0,l.jsx)(E,{children:r}),(0,l.jsxs)(D,{children:[(0,l.jsx)(O,{children:i}),(0,l.jsx)(k,{children:e.toLocaleUpperCase()})]})]})},e)}))})}),C=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,w=r.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,T=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,E=r.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
  }
`,D=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,O=r.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,k=r.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;export{d as a,p as i,h as n,S as r,m as t};