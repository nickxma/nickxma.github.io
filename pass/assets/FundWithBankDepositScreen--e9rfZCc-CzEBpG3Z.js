import{o as e}from"./chunk-CFjPhJqf.js";import{n as t,t as n}from"./jsx-runtime-QQLjLlGf.js";import"./react-dom-D1GAGJ2a.js";import{Bt as r,Ft as i,jt as a,zt as o}from"./useActiveWallet-CvP7iYvj-BV97UQwe.js";import"./index.es-rKIajXZe.js";import{qn as s,s as c}from"./index-BmicnxyQ.js";import{t as l}from"./createLucideIcon-CoSuV3nH.js";import{t as u}from"./check-DDlV9yjs.js";import{a as d,i as f,n as p,r as m,t as h}from"./SelectSourceAsset-C10HQdge-dnwdv1eU.js";import{t as g}from"./circle-x-DzW9-sVa.js";import{t as _}from"./ScreenLayout-D1p_ntex-BdGjNdtR.js";import{t as v}from"./InfoBanner-DkQEPd77-BtQtzDJ2.js";import{n as y}from"./CopyableText-BCytXyJL-BCwmFQvK.js";var b=l(`hourglass`,[[`path`,{d:`M5 22h14`,key:`ehvnwv`}],[`path`,{d:`M5 2h14`,key:`pdyrp9`}],[`path`,{d:`M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22`,key:`1d314k`}],[`path`,{d:`M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2`,key:`1vvvr6`}]]),x=l(`user-check`,[[`path`,{d:`m16 11 2 2 4-4`,key:`9rsbq5`}],[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),S=n(),C=e(t(),1),w=e(a(),1),T=({data:e,onClose:t})=>(0,S.jsx)(_,{showClose:!0,onClose:t,title:`Initiate bank transfer`,subtitle:`Use the details below to complete a bank transfer from your bank.`,primaryCta:{label:`Done`,onClick:t},watermark:!1,footerText:`Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately`,children:(0,S.jsx)(E,{children:(c[e.deposit_instructions.asset]||[]).map((([t,n],r)=>{let i=e.deposit_instructions[t];if(!i||Array.isArray(i))return null;let a=t===`asset`?i.toUpperCase():i,o=a.length>100?`${a.slice(0,9)}...${a.slice(-9)}`:a;return(0,S.jsxs)(D,{children:[(0,S.jsx)(O,{children:n}),(0,S.jsx)(y,{value:a,includeChildren:w.isMobile,children:(0,S.jsx)(k,{children:o})})]},r)}))})}),E=i.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`,D=i.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`,O=i.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`,k=i.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`,A=({onClose:e})=>(0,S.jsx)(_,{showClose:!0,onClose:e,icon:g,iconVariant:`error`,title:`Something went wrong`,subtitle:`We couldn't complete account setup. This isn't caused by anything you did.`,primaryCta:{label:`Close`,onClick:e},watermark:!0}),j=({onClose:e,reason:t})=>{let n=t?t.charAt(0).toLowerCase()+t.slice(1):void 0;return(0,S.jsx)(_,{showClose:!0,onClose:e,icon:g,iconVariant:`error`,title:`Identity verification failed`,subtitle:n?`We can't complete identity verification because ${n}. Please try again or contact support for assistance.`:`We couldn't verify your identity. Please try again or contact support for assistance.`,primaryCta:{label:`Close`,onClick:e},watermark:!0})},M=({onClose:e,email:t})=>(0,S.jsx)(_,{showClose:!0,onClose:e,icon:b,title:`Identity verification in progress`,subtitle:`We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.`,primaryCta:{label:`Done`,onClick:e},watermark:!0,children:(0,S.jsxs)(v,{theme:`light`,children:[`You'll receive an email at `,t,` once approved with instructions for completing your deposit.`]})}),N=({onClose:e,onAcceptTerms:t,isLoading:n})=>(0,S.jsx)(_,{showClose:!0,onClose:e,icon:x,title:`Verify your identity to continue`,subtitle:`Finish verification with Persona — it takes just a few minutes and requires a government ID.`,helpText:(0,S.jsxs)(S.Fragment,{children:[`This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge's`,` `,(0,S.jsx)(`a`,{href:`https://www.bridge.xyz/legal`,target:`_blank`,rel:`noopener noreferrer`,children:`Terms of Service`}),` `,`and`,` `,(0,S.jsx)(`a`,{href:`https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited`,target:`_blank`,rel:`noopener noreferrer`,children:`Privacy Policy`}),`.`]}),primaryCta:{label:`Accept and continue`,onClick:t,loading:n},watermark:!0}),P=({onClose:e})=>(0,S.jsx)(_,{showClose:!0,onClose:e,icon:u,iconVariant:`success`,title:`Identity verified successfully`,subtitle:`We've successfully verified your identity. Now initiate a bank transfer to view instructions.`,primaryCta:{label:`Initiate bank transfer`,onClick:()=>{},loading:!0},watermark:!0}),F=({opts:e,onClose:t,onEditSourceAsset:n,onSelectAmount:r,isLoading:i})=>(0,S.jsxs)(_,{showClose:!0,onClose:t,headerTitle:`Buy ${e.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:`Continue`,onClick:r,loading:i},watermark:!0,children:[(0,S.jsx)(h,{currency:e.source.selectedAsset,inputMode:`decimal`,autoFocus:!0}),(0,S.jsx)(p,{selectedAsset:e.source.selectedAsset,onEditSourceAsset:n})]}),I=({onClose:e,onAcceptTerms:t,onSelectAmount:n,onSelectSource:r,onEditSourceAsset:i,opts:a,state:o,email:s,isLoading:c})=>o.status===`select-amount`?(0,S.jsx)(F,{onClose:e,onSelectAmount:n,onEditSourceAsset:i,opts:a,isLoading:c}):o.status===`select-source-asset`?(0,S.jsx)(m,{onSelectSource:r,opts:a,isLoading:c}):o.status===`kyc-prompt`?(0,S.jsx)(N,{onClose:e,onAcceptTerms:t,opts:a,isLoading:c}):o.status===`kyc-incomplete`?(0,S.jsx)(M,{onClose:e,email:s}):o.status===`kyc-success`?(0,S.jsx)(P,{onClose:e}):o.status===`kyc-error`?(0,S.jsx)(j,{onClose:e,reason:o.reason}):o.status===`account-details`?(0,S.jsx)(T,{onClose:e,data:o.data}):o.status===`create-customer-error`||o.status===`get-customer-error`?(0,S.jsx)(A,{onClose:e}):null,L={component:()=>{let{user:e}=o(),t=r().data;if(!t?.FundWithBankDepositScreen)throw Error(`Missing data`);let{onSuccess:n,onFailure:i,opts:a,createOrUpdateCustomer:c,getCustomer:l,getOrCreateVirtualAccount:u}=t.FundWithBankDepositScreen,[p,m]=(0,C.useState)(a),[h,g]=(0,C.useState)({status:`select-amount`}),[_,v]=(0,C.useState)(null),[y,b]=(0,C.useState)(!1),x=(0,C.useRef)(null),w=(0,C.useCallback)((async()=>{let e;b(!0),v(null);try{e=await l({kycRedirectUrl:window.location.origin})}catch(e){if(!e||typeof e!=`object`||!(`status`in e)||e.status!==404)return g({status:`get-customer-error`}),v(e),void b(!1)}if(!e)try{e=await c({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin})}catch(e){g({status:`create-customer-error`}),v(e),b(!1);return}if(!e)return g({status:`create-customer-error`}),v(Error(`Unable to create customer`)),void b(!1);if(e.status===`not_started`&&e.kyc_url)return g({status:`kyc-prompt`,kycUrl:e.kyc_url}),void b(!1);if(e.status===`not_started`)return g({status:`get-customer-error`}),v(Error(`Unexpected user state`)),void b(!1);if(e.status===`rejected`)return g({status:`kyc-error`,reason:e.rejection_reasons?.[0]?.reason}),v(Error(`User KYC rejected.`)),void b(!1);if(e.status===`incomplete`)return g({status:`kyc-incomplete`}),void b(!1);if(e.status!==`active`)return g({status:`get-customer-error`}),v(Error(`Unexpected user state`)),void b(!1);e.status;try{g({status:`account-details`,data:await u({destination:p.destination,provider:p.provider,source:{asset:p.source.selectedAsset}})})}catch(e){g({status:`create-customer-error`}),v(e),b(!1);return}}),[p]),T=(0,C.useCallback)((async()=>{if(v(null),b(!0),h.status!==`kyc-prompt`)return v(Error(`Unexpected state`)),void b(!1);let e=s({location:h.kycUrl});if(await c({hasAcceptedTerms:!0}),!e)return v(Error(`Unable to begin kyc flow.`)),b(!1),void g({status:`create-customer-error`});x.current=new AbortController;let t=await f(e,x.current.signal);if(t.status===`aborted`)return;if(t.status===`closed`)return void b(!1);t.status;let n=await d({operation:()=>l({}),until:e=>e.status===`active`||e.status===`rejected`,delay:0,interval:2e3,attempts:60,signal:x.current.signal});if(n.status!==`aborted`){if(n.status===`max_attempts`)return g({status:`kyc-incomplete`}),void b(!1);if(n.status,n.result.status===`rejected`)return g({status:`kyc-error`,reason:n.result.rejection_reasons?.[0]?.reason}),v(Error(`User KYC rejected.`)),void b(!1);if(n.result.status!==`active`)return g({status:`kyc-incomplete`}),void b(!1);e.closed||e.close(),n.result.status;try{g({status:`kyc-success`}),g({status:`account-details`,data:await u({destination:p.destination,provider:p.provider,source:{asset:p.source.selectedAsset}})})}catch(e){g({status:`create-customer-error`}),v(e)}finally{b(!1)}}}),[g,v,b,c,u,h,p,x]),E=(0,C.useCallback)((e=>{g({status:`select-amount`}),m({...p,source:{...p.source,selectedAsset:e}})}),[g,m]),D=(0,C.useCallback)((()=>{g({status:`select-source-asset`})}),[g]);return(0,S.jsx)(I,{onClose:(0,C.useCallback)((async()=>{x.current?.abort(),_?i(_):await n()}),[_,x]),opts:p,state:h,isLoading:y,email:e.email.address,onAcceptTerms:T,onSelectAmount:w,onSelectSource:E,onEditSourceAsset:D})}};export{L as FundWithBankDepositScreen,L as default};