import{o as e}from"./chunk-CFjPhJqf.js";import{n as t,t as n}from"./jsx-runtime-QQLjLlGf.js";import{Bt as r,Ft as i,Hn as a,jt as o,tn as s,zt as c}from"./useActiveWallet-CvP7iYvj-BV97UQwe.js";import{bt as l}from"./index-BdOdQRFz.js";import{t as u}from"./ScreenLayout-D1p_ntex-BdGjNdtR.js";import{t as d}from"./WalletInfoCard-CEcdukTg-6Qiimf50.js";import{t as f}from"./WarningBanner-D5LqDt95-DsVGBUZG.js";var p=n(),m=e(t(),1);o();var h=({address:e,accessToken:t,appConfigTheme:n,onClose:r,exportButtonProps:i,onBack:a})=>(0,p.jsx)(u,{title:`Export wallet`,subtitle:(0,p.jsxs)(p.Fragment,{children:[`Copy either your private key or seed phrase to export your wallet.`,` `,(0,p.jsx)(`a`,{href:`https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828`,target:`blank`,rel:`noopener noreferrer`,children:`Learn more`})]}),onClose:r,onBack:a,showBack:!!a,watermark:!0,children:(0,p.jsxs)(g,{children:[(0,p.jsx)(f,{theme:n,children:`Never share your private key or seed phrase with anyone.`}),(0,p.jsx)(d,{title:`Your wallet`,address:e,showCopyButton:!0}),(0,p.jsx)(`div`,{style:{width:`100%`},children:t&&i&&(0,p.jsx)(_,{accessToken:t,dimensions:{height:`44px`},...i})})]})}),g=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`;function _(e){let[t,n]=(0,m.useState)(e.dimensions.width),[r,i]=(0,m.useState)(!1),[a,o]=(0,m.useState)(void 0),s=(0,m.useRef)(null);(0,m.useEffect)((()=>{if(s.current&&t===void 0){let{width:e}=s.current.getBoundingClientRect();n(e)}let e=getComputedStyle(document.documentElement);o({background:e.getPropertyValue(`--privy-color-background`),background2:e.getPropertyValue(`--privy-color-background-2`),foreground3:e.getPropertyValue(`--privy-color-foreground-3`),foregroundAccent:e.getPropertyValue(`--privy-color-foreground-accent`),accent:e.getPropertyValue(`--privy-color-accent`),accentDark:e.getPropertyValue(`--privy-color-accent-dark`),success:e.getPropertyValue(`--privy-color-success`),colorScheme:e.getPropertyValue(`color-scheme`)})}),[]);let c=e.chainType===`ethereum`&&!e.imported&&!e.isUnifiedWallet;return(0,p.jsx)(`div`,{ref:s,children:t&&(0,p.jsxs)(y,{children:[(0,p.jsx)(`iframe`,{style:{position:`absolute`,zIndex:1,opacity:r?1:0,transition:`opacity 50ms ease-in-out`,pointerEvents:r?`auto`:`none`},onLoad:()=>setTimeout((()=>i(!0)),1500),width:t,height:e.dimensions.height,allow:`clipboard-write self *`,src:l({origin:e.origin,path:`/apps/${e.appId}/embedded-wallets/export`,query:e.isUnifiedWallet?{v:`1-unified`,wallet_id:e.walletId,client_id:e.appClientId,width:`${t}px`,caid:e.clientAnalyticsId,phrase_export:c,...a}:{v:`1`,entropy_id:e.entropyId,entropy_id_verifier:e.entropyIdVerifier,hd_wallet_index:e.hdWalletIndex,chain_type:e.chainType,client_id:e.appClientId,width:`${t}px`,caid:e.clientAnalyticsId,phrase_export:c,...a},hash:{token:e.accessToken}})}),(0,p.jsx)(b,{children:`Loading...`}),c&&(0,p.jsx)(b,{children:`Loading...`})]})})}var v={component:()=>{let[e,t]=(0,m.useState)(null),{authenticated:n,user:i}=c(),{closePrivyModal:o,createAnalyticsEvent:l,clientAnalyticsId:u,client:d}=s(),f=a(),{data:g,onUserCloseViaDialogOrKeybindRef:_}=r(),{onFailure:v,onSuccess:y,origin:b,appId:x,appClientId:S,entropyId:C,entropyIdVerifier:w,walletId:T,hdWalletIndex:E,chainType:D,address:O,isUnifiedWallet:k,imported:A,showBackButton:j}=g.keyExport,M=e=>{o({shouldCallAuthOnSuccess:!1}),v(typeof e==`string`?Error(e):e)},N=()=>{o({shouldCallAuthOnSuccess:!1}),y(),l({eventName:`embedded_wallet_key_export_completed`,payload:{walletAddress:O}})};return(0,m.useEffect)((()=>{if(!n)return M(`User must be authenticated before exporting their wallet`);d.getAccessToken().then(t).catch(M)}),[n,i]),_.current=N,(0,p.jsx)(h,{address:O,accessToken:e,appConfigTheme:f.appearance.palette.colorScheme,onClose:N,isLoading:!e,onBack:j?N:void 0,exportButtonProps:e?{origin:b,appId:x,appClientId:S,clientAnalyticsId:u,entropyId:C,entropyIdVerifier:w,walletId:T,hdWalletIndex:E,isUnifiedWallet:k,imported:A,chainType:D}:void 0})}},y=i.div`
  overflow: visible;
  position: relative;
  overflow: none;
  height: 44px;
  display: flex;
  gap: 12px;
`,b=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`;export{v as EmbeddedWalletKeyExportScreen,v as default,h as EmbeddedWalletKeyExportView};