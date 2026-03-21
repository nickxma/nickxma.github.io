import{o as e}from"./chunk-CFjPhJqf.js";import{n as t,t as n}from"./jsx-runtime-QQLjLlGf.js";import"./react-dom-D1GAGJ2a.js";import{Bt as r,Ft as i,Hn as a,Nn as o,dn as s,en as c,in as l,jt as u,tn as d,zt as f}from"./useActiveWallet-CvP7iYvj-BV97UQwe.js";import"./index.es-rKIajXZe.js";import"./index-BdOdQRFz.js";import{t as p}from"./ScreenLayout-D1p_ntex-BdGjNdtR.js";import{t as m}from"./shouldProceedtoEmbeddedWalletCreationFlow-D2ZT5lW9-Bj5Fkssa.js";import{t as h}from"./EnvelopeIcon-BqFnvmtt.js";import{t as g}from"./PhoneIcon-hdFhZ7ol.js";import{t as _}from"./Link-DJ5gq9Di-DZkc3mAg.js";import{s as v}from"./Layouts-BlFm53ED-CcH7VHmy.js";var y=n(),b=e(t());function x({title:e,titleId:t,...n},r){return b.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,"aria-hidden":`true`,"data-slot":`icon`,ref:r,"aria-labelledby":t},n),e?b.createElement(`title`,{id:t},e):null,b.createElement(`path`,{fillRule:`evenodd`,d:`M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z`,clipRule:`evenodd`}))}var S=b.forwardRef(x),C=e(u(),1),w=({contactMethod:e,authFlow:t,appName:n=`Privy`,whatsAppEnabled:r=!1,onBack:i,onCodeSubmit:a,onResend:o,errorMessage:s,success:c=!1,resendCountdown:l=0,onInvalidInput:u,onClearError:d})=>{let[f,m]=(0,b.useState)(E);(0,b.useEffect)((()=>{s||m(E)}),[s]);let x=async e=>{e.preventDefault();let t=e.currentTarget.value.replace(` `,``);if(t===``)return;if(isNaN(Number(t)))return void u?.(`Code should be numeric`);d?.();let n=Number(e.currentTarget.name?.charAt(5)),r=[...t||[``]].slice(0,T-n),i=[...f.slice(0,n),...r,...f.slice(n+r.length)];m(i);let o=Math.min(Math.max(n+r.length,0),T-1);isNaN(Number(e.currentTarget.value))||document.querySelector(`input[name=code-${o}]`)?.focus(),i.every((e=>e&&!isNaN(+e)))&&(document.querySelector(`input[name=code-${o}]`)?.blur(),await a?.(i.join(``)))};return(0,y.jsx)(p,{title:`Enter confirmation code`,subtitle:(0,y.jsxs)(`span`,t===`email`?{children:[`Please check `,(0,y.jsx)(L,{children:e}),` for an email from privy.io and enter your code below.`]}:{children:[`Please check `,(0,y.jsx)(L,{children:e}),` for a`,r?` WhatsApp`:``,` message from `,n,` and enter your code below.`]}),icon:t===`email`?h:g,onBack:i,showBack:!0,helpText:(0,y.jsxs)(F,{children:[(0,y.jsxs)(`span`,{children:[`Didn't get `,t===`email`?`an email`:`a message`,`?`]}),l?(0,y.jsxs)(I,{children:[(0,y.jsx)(S,{color:`var(--privy-color-foreground)`,strokeWidth:1.33,height:`12px`,width:`12px`}),(0,y.jsx)(`span`,{children:`Code sent`})]}):(0,y.jsx)(_,{as:`button`,size:`sm`,onClick:o,children:`Resend code`})]}),children:(0,y.jsx)(M,{children:(0,y.jsx)(v,{children:(0,y.jsxs)(N,{children:[(0,y.jsx)(`div`,{children:f.map(((e,t)=>(0,y.jsx)(`input`,{name:`code-${t}`,type:`text`,value:f[t],onChange:x,onKeyUp:e=>{e.key===`Backspace`&&(e=>{d?.(),m([...f.slice(0,e),``,...f.slice(e+1)]),e>0&&document.querySelector(`input[name=code-${e-1}]`)?.focus()})(t)},inputMode:`numeric`,autoFocus:t===0,pattern:`[0-9]`,className:`${c?`success`:``} ${s?`fail`:``}`,autoComplete:C.isMobile?`one-time-code`:`off`},t)))}),(0,y.jsx)(P,{$fail:!!s,$success:c,children:(0,y.jsx)(`span`,{children:s===`Invalid or expired verification code`?`Incorrect code`:s||(c?`Success!`:``)})})]})})})})},T=6,E=[,,,,,,].fill(``),D,O,k=((D=k||{})[D.RESET_AFTER_DELAY=0]=`RESET_AFTER_DELAY`,D[D.CLEAR_ON_NEXT_VALID_INPUT=1]=`CLEAR_ON_NEXT_VALID_INPUT`,D),A=((O=A||{})[O.EMAIL=0]=`EMAIL`,O[O.SMS=1]=`SMS`,O),j={component:()=>{let{navigate:e,lastScreen:t,navigateBack:n,setModalData:i,onUserCloseViaDialogOrKeybindRef:u}=r(),p=a(),{closePrivyModal:h,resendEmailCode:g,resendSmsCode:_,getAuthMeta:v,loginWithCode:x,updateWallets:S,createAnalyticsEvent:C}=d(),{authenticated:T,logout:E,user:D}=f(),{whatsAppEnabled:O}=a(),[k,A]=(0,b.useState)(!1),[j,M]=(0,b.useState)(null),[N,P]=(0,b.useState)(null),[F,I]=(0,b.useState)(0);u.current=()=>null;let L=v()?.email?0:1,R=L===0?v()?.email||``:v()?.phoneNumber||``,z=o-500;return(0,b.useEffect)((()=>{if(F){let e=setTimeout((()=>{I(F-1)}),1e3);return()=>clearTimeout(e)}}),[F]),(0,b.useEffect)((()=>{if(T&&k&&D){if(p?.legal.requireUsersAcceptTerms&&!D.hasAcceptedTerms){let t=setTimeout((()=>{e(`AffirmativeConsentScreen`)}),z);return()=>clearTimeout(t)}if(m(D,p.embeddedWallets)){let t=setTimeout((()=>{i({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),C({eventName:`embedded_wallet_creation_failure_logout`,payload:{error:e,screen:`AwaitingPasswordlessCodeScreen`}}),E()},callAuthOnSuccessOnClose:!0}}),e(`EmbeddedWalletOnAccountCreateScreen`)}),z);return()=>clearTimeout(t)}{S();let e=setTimeout((()=>h({shouldCallAuthOnSuccess:!0,isSuccess:!0})),o);return()=>clearTimeout(e)}}}),[T,k,D]),(0,b.useEffect)((()=>{if(j&&N===0){let e=setTimeout((()=>{M(null),P(null),document.querySelector(`input[name=code-0]`)?.focus()}),1400);return()=>clearTimeout(e)}}),[j,N]),(0,y.jsx)(w,{contactMethod:R,authFlow:L===0?`email`:`sms`,appName:p?.name,whatsAppEnabled:O,onBack:()=>n(),onCodeSubmit:async n=>{try{await x(n),A(!0)}catch(n){if(n instanceof s&&n.privyErrorCode===c.INVALID_CREDENTIALS)M(`Invalid or expired verification code`),P(0);else if(n instanceof s&&n.privyErrorCode===c.CANNOT_LINK_MORE_OF_TYPE)M(n.message);else{if(n instanceof s&&n.privyErrorCode===c.USER_LIMIT_REACHED)return console.error(new l(n).toString()),void e(`UserLimitReachedScreen`);if(n instanceof s&&n.privyErrorCode===c.USER_DOES_NOT_EXIST)return void e(`AccountNotFoundScreen`);if(n instanceof s&&n.privyErrorCode===c.LINKED_TO_ANOTHER_USER)return i({errorModalData:{error:n,previousScreen:t??`AwaitingPasswordlessCodeScreen`}}),void e(`ErrorScreen`,!1);if(n instanceof s&&n.privyErrorCode===c.DISALLOWED_PLUS_EMAIL)return i({inlineError:{error:n}}),void e(`ConnectOrCreateScreen`,!1);if(n instanceof s&&n.privyErrorCode===c.ACCOUNT_TRANSFER_REQUIRED&&n.data?.data?.nonce)return i({accountTransfer:{nonce:n.data?.data?.nonce,account:R,displayName:n.data?.data?.account?.displayName,linkMethod:L===0?`email`:`sms`,embeddedWalletAddress:n.data?.data?.otherUser?.embeddedWalletAddress}}),void e(`LinkConflictScreen`);M(`Issue verifying code`),P(0)}}},onResend:async()=>{I(30),L===0?await g():await _()},errorMessage:j||void 0,success:k,resendCountdown:F,onInvalidInput:e=>{M(e),P(1)},onClearError:()=>{N===1&&(M(null),P(null))}})}},M=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
  width: 100%;
`,N=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  > div:first-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-sm);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-sm);
      padding: 8px 10px;
      height: 48px;
      width: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: var(--privy-color-foreground);
      transition: all 0.2s ease;
    }

    > input:focus {
      border: 1px solid var(--privy-color-foreground);
      box-shadow: 0 0 0 1px var(--privy-color-foreground);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-border-success);
      background: var(--privy-color-success-bg);
    }

    > input.fail {
      border: 1px solid var(--privy-color-border-error);
      background: var(--privy-color-error-bg);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`,P=i.div`
  line-height: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${e=>e.$success?`var(--privy-color-success-dark)`:e.$fail?`var(--privy-color-error-dark)`:`transparent`};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`,F=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--privy-color-foreground-2);
`,I=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,L=i.span`
  font-weight: 500;
  word-break: break-all;
  color: var(--privy-color-foreground);
`;export{j as AwaitingPasswordlessCodeScreen,j as default,w as AwaitingPasswordlessCodeScreenView};