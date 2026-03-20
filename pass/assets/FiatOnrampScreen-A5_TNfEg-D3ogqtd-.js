import"./chunk-CFjPhJqf.js";import{n as e,t}from"./jsx-runtime-QQLjLlGf.js";import"./react-dom-D1GAGJ2a.js";import{Bt as n,Ft as r,jt as i}from"./useActiveWallet-CvP7iYvj-BV97UQwe.js";import"./index.es-rKIajXZe.js";import{_ as a,b as o,g as s,h as c,p as l,qn as u}from"./index-BmicnxyQ.js";import{t as d}from"./createLucideIcon-CoSuV3nH.js";import{t as f}from"./check-DDlV9yjs.js";import{a as p,i as m,n as h,r as g,t as _}from"./SelectSourceAsset-C10HQdge-dnwdv1eU.js";import{t as ee}from"./circle-x-DzW9-sVa.js";import{t as v}from"./smartphone-fVivwKFs.js";import{t as y}from"./triangle-alert-DOsCvpaP.js";import{t as b}from"./wallet-fdEAiVZC.js";import{t as x}from"./ScreenLayout-D1p_ntex-BdGjNdtR.js";import{n as S,t as C}from"./GooglePay-DA-Ff7zK-C_U0aqPe.js";var w=d(`building`,[[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M12 6h.01`,key:`1vi96p`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M16 14h.01`,key:`1gbofw`}],[`path`,{d:`M16 6h.01`,key:`1x0f13`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M8 6h.01`,key:`1dz90k`}],[`path`,{d:`M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3`,key:`cabbwy`}],[`rect`,{x:`4`,y:`2`,width:`16`,height:`20`,rx:`2`,key:`1uxh74`}]]),T=d(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),E=d(`credit-card`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`5`,rx:`2`,key:`ynyp8z`}],[`line`,{x1:`2`,x2:`22`,y1:`10`,y2:`10`,key:`1b3vmo`}]]),D=d(`landmark`,[[`path`,{d:`M10 18v-7`,key:`wt116b`}],[`path`,{d:`M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z`,key:`1m329m`}],[`path`,{d:`M14 18v-7`,key:`vav6t3`}],[`path`,{d:`M18 18v-7`,key:`aexdmj`}],[`path`,{d:`M3 22h18`,key:`8prr45`}],[`path`,{d:`M6 18v-7`,key:`1ivflk`}]]),O=t();e(),i();var[k,A]=((e,t=750)=>{let n;return[(...r)=>{n&&clearTimeout(n),n=setTimeout((()=>{e(...r)}),t)},()=>{n&&clearTimeout(n)}]})((async(e,t)=>{o({isLoading:!0});try{let{getQuotes:n}=c(),r=(await n({source:{asset:t.source.selectedAsset.toUpperCase(),amount:e},destination:{asset:t.destination.asset.toUpperCase(),chain:t.destination.chain,address:t.destination.address},environment:t.environment})).quotes??[];o({localQuotes:r,localSelectedQuote:r[0],isLoading:!1,quotesWarning:r.length>0?null:10>parseFloat(e)?`amount_too_low`:`currency_not_available`})}catch{o({localQuotes:[],localSelectedQuote:null,quotesWarning:`currency_not_available`})}})),j=e=>{o({amount:e});let{opts:t}=c();k(e,t)},M=async()=>{let{error:e,state:t,onFailure:n,onSuccess:r}=c();A(),e?n(e):t.status===`provider-success`?await r({status:`confirmed`}):t.status===`provider-confirming`?await r({status:`submitted`}):n(Error(`User exited flow`))},N=async()=>{let e,t=a();if(!t)return;let n=u();if(!n)return void o({state:{status:`provider-error`},error:Error(`Unable to open payment window`)});o({isLoading:!0});let{opts:r,amount:i,getProviderUrl:s,getStatus:l,controller:d}=c();d.current=new AbortController;try{let a=await s({source:{asset:r.source.selectedAsset.toUpperCase(),amount:i||`0`},destination:{asset:r.destination.asset.toUpperCase(),chain:r.destination.chain,address:r.destination.address},provider:t.provider,sub_provider:t.sub_provider??void 0,payment_method:t.payment_method,redirect_url:window.location.origin});n.location.href=a.url,e=a.session_id}catch{n.close(),o({state:{status:`provider-error`},isLoading:!1,error:Error(`Unable to start payment session`)});return}let f=await m(n,d.current.signal);if(f.status===`aborted`||(o({isLoading:!1}),f.status===`closed`))return;f.status,o({state:{status:`provider-confirming`}});let h=await p({operation:()=>l({session_id:e,provider:t.provider}),until:e=>e.status===`completed`||e.status===`failed`||e.status===`cancelled`,delay:0,interval:2e3,attempts:60,signal:d.current.signal});if(h.status!==`aborted`){if(h.status===`max_attempts`)return void o({state:{status:`provider-error`},error:Error(`Timed out waiting for response`)});h.result?.status===`completed`?o({state:{status:`provider-success`}}):o({state:{status:`provider-error`},error:Error(`Transaction ${h.result?.status??`failed`}`)})}},P=()=>{let e=l();e&&e.length>0&&o({state:{status:`select-payment-method`,quotes:e}})},F=()=>{o({state:{status:`select-source-asset`}})},I=()=>{o({error:null,state:{status:`select-amount`}})},L=e=>{o({localSelectedQuote:e,state:{status:`select-amount`}})},R=e=>{let{opts:t,amount:n}=c(),r={...t,source:{...t.source,selectedAsset:e}};o({opts:r,state:{status:`select-amount`}}),k(n,r)},z=({onClose:e})=>(0,O.jsx)(x,{showClose:!0,onClose:e,iconVariant:`loading`,title:`Processing transaction`,subtitle:`Your purchase is in progress. You can leave this screen — we’ll notify you when it’s complete.`,primaryCta:{label:`Done`,onClick:e},watermark:!0}),B=({onClose:e,onRetry:t})=>(0,O.jsx)(x,{showClose:!0,onClose:e,icon:ee,iconVariant:`error`,title:`Something went wrong`,subtitle:`We couldn't complete your transaction. Please try again.`,primaryCta:{label:`Try again`,onClick:t},secondaryCta:{label:`Close`,onClick:e},watermark:!0}),V=({onClose:e})=>(0,O.jsx)(x,{showClose:!0,onClose:e,icon:f,iconVariant:`success`,title:`Transaction confirmed`,subtitle:`Your purchase is processing. Funds should arrive in your wallet within a few minutes.`,primaryCta:{label:`Done`,onClick:e},watermark:!0}),H={CREDIT_DEBIT_CARD:`card`,APPLE_PAY:`Apple Pay`,GOOGLE_PAY:`Google Pay`,BANK_TRANSFER:`bank deposit`,ACH:`bank deposit`,SEPA:`bank deposit`,PIX:`PIX`},te={CREDIT_DEBIT_CARD:(0,O.jsx)(E,{size:14}),APPLE_PAY:(0,O.jsx)(v,{size:14}),GOOGLE_PAY:(0,O.jsx)(v,{size:14}),BANK_TRANSFER:(0,O.jsx)(w,{size:14}),ACH:(0,O.jsx)(w,{size:14}),SEPA:(0,O.jsx)(w,{size:14}),PIX:(0,O.jsx)(b,{size:14})},U=({opts:e,onClose:t,onEditSourceAsset:n,onEditPaymentMethod:r,onContinue:i,onAmountChange:a,amount:o,selectedQuote:s,quotesWarning:c,quotesCount:l,isLoading:u})=>{return(0,O.jsxs)(x,{showClose:!0,onClose:t,headerTitle:`Buy ${e.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:`Continue`,onClick:i,loading:u,disabled:!s},helpText:c?(0,O.jsxs)(W,{children:[(0,O.jsx)(y,{size:16,strokeWidth:2}),(0,O.jsx)(G,{children:(0,O.jsxs)(O.Fragment,c===`amount_too_low`?{children:[(0,O.jsx)(K,{children:`Amount too low`}),(0,O.jsx)(q,{children:`Please choose a higher amount to continue.`})]}:{children:[(0,O.jsx)(K,{children:`Currency not available`}),(0,O.jsx)(q,{children:`Please choose another currency to continue.`})]})})]}):s&&l>1?(0,O.jsxs)(J,{onClick:r,children:[(f=s.payment_method,te[f]??(0,O.jsx)(E,{size:14})),(0,O.jsxs)(`span`,{children:[`Pay with `,(d=s.payment_method,H[d]??d.replace(/_/g,` `).toLowerCase().replace(/^\w/,(e=>e.toUpperCase())))]}),(0,O.jsx)(T,{size:14})]}):null,watermark:!0,children:[(0,O.jsx)(_,{currency:e.source.selectedAsset,value:o,onChange:a,inputMode:`decimal`,autoFocus:!0}),(0,O.jsx)(h,{selectedAsset:e.source.selectedAsset,onEditSourceAsset:n})]});var d,f},W=r.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--privy-color-warn-bg, #fffbbb);
  border: 1px solid var(--privy-color-border-warning, #facd63);
  overflow: clip;
  width: 100%;

  svg {
    flex-shrink: 0;
    color: var(--privy-color-icon-warning, #facd63);
  }
`,G=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  min-width: 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--privy-color-foreground);
  font-feature-settings:
    'calt' 0,
    'kern' 0;
  text-align: left;
`,K=r.span`
  font-weight: 600;
`,q=r.span`
  font-weight: 400;
`,J=r.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;

  && {
    padding: 0;
    color: var(--privy-color-accent);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.375rem;
  }
`,Y={CREDIT_DEBIT_CARD:`Credit / debit card`,APPLE_PAY:`Apple Pay`,GOOGLE_PAY:`Google Pay`,BANK_TRANSFER:`Bank transfer`,ACH:`ACH`,SEPA:`SEPA`,PIX:`PIX`},X={CREDIT_DEBIT_CARD:(0,O.jsx)(E,{size:20}),APPLE_PAY:(0,O.jsx)(C,{width:20,height:20}),GOOGLE_PAY:(0,O.jsx)(S,{width:20,height:20}),BANK_TRANSFER:(0,O.jsx)(D,{size:20}),ACH:(0,O.jsx)(D,{size:20}),SEPA:(0,O.jsx)(D,{size:20}),PIX:(0,O.jsx)(D,{size:20})},Z=({onClose:e,onSelectPaymentMethod:t,quotes:n,isLoading:r})=>(0,O.jsx)(x,{showClose:!0,onClose:e,title:`Select payment method`,subtitle:`Choose how you'd like to pay`,watermark:!0,children:(0,O.jsx)(Q,{children:n.map(((e,n)=>{return(0,O.jsx)(ne,{onClick:()=>t(e),disabled:r,children:(0,O.jsxs)(re,{children:[(0,O.jsx)(ie,{children:(a=e.payment_method,X[a]??(0,O.jsx)(E,{size:20}))}),(0,O.jsx)(ae,{children:(0,O.jsx)(oe,{children:(i=e.payment_method,Y[i]??i.replace(/_/g,` `).toLowerCase().replace(/^\w/,(e=>e.toUpperCase())))})})]})},`${e.provider}-${e.payment_method}-${n}`);var i,a}))})}),Q=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,ne=r.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-md);
  border-style: solid;
  display: flex;

  && {
    padding: 1rem 1rem;
  }
`,re=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,ie=r.div`
  color: var(--privy-color-foreground-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ae=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1;
`,oe=r.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`,se=({onClose:e,onContinue:t,onAmountChange:n,onSelectSource:r,onEditSourceAsset:i,onEditPaymentMethod:a,onSelectPaymentMethod:o,onRetry:s,opts:c,state:l,amount:u,selectedQuote:d,quotesWarning:f,quotesCount:p,isLoading:m})=>l.status===`select-amount`?(0,O.jsx)(U,{onClose:e,onContinue:t,onAmountChange:n,onEditSourceAsset:i,onEditPaymentMethod:a,opts:c,amount:u,selectedQuote:d,quotesWarning:f,quotesCount:p,isLoading:m}):l.status===`select-source-asset`?(0,O.jsx)(g,{onSelectSource:r,opts:c,isLoading:m}):l.status===`select-payment-method`?(0,O.jsx)(Z,{onClose:e,onSelectPaymentMethod:o,quotes:l.quotes,isLoading:m}):l.status===`provider-confirming`?(0,O.jsx)(z,{onClose:e}):l.status===`provider-error`?(0,O.jsx)(B,{onClose:e,onRetry:s}):l.status===`provider-success`?(0,O.jsx)(V,{onClose:e}):null,$={component:()=>{let{onUserCloseViaDialogOrKeybindRef:e}=n(),t=s();if(!t)throw Error(`Unexpected missing data`);let{opts:r,state:i,isLoading:a,amount:o,quotesWarning:c,localQuotes:l,localSelectedQuote:u,initialQuotes:d,initialSelectedQuote:f}=t;return e.current=M,(0,O.jsx)(se,{onClose:M,opts:r,state:i,isLoading:a,amount:o,selectedQuote:u??f,quotesWarning:c,quotesCount:(l??d)?.length??0,onAmountChange:j,onContinue:N,onSelectSource:R,onEditSourceAsset:F,onEditPaymentMethod:P,onSelectPaymentMethod:L,onRetry:I})}};export{$ as FiatOnrampScreen,$ as default};