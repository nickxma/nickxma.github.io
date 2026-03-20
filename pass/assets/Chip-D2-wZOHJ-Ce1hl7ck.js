import{t as e}from"./jsx-runtime-QQLjLlGf.js";import{Ft as t,Mt as n,Pt as r}from"./useActiveWallet-CvP7iYvj-BV97UQwe.js";import{t as i}from"./LoadingSkeleton-U6-3yFwI-BSCb4taH.js";var a=e(),o=({children:e,color:t,isLoading:n,isPulsing:r,...i})=>(0,a.jsx)(s,{$color:t,$isLoading:n,$isPulsing:r,...i,children:e}),s=t.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let t,i;e.$color===`green`&&(t=`var(--privy-color-success-dark)`,i=`var(--privy-color-success-light)`),e.$color===`red`&&(t=`var(--privy-color-error)`,i=`var(--privy-color-error-light)`),e.$color===`gray`&&(t=`var(--privy-color-foreground-2)`,i=`var(--privy-color-background-2)`);let a=n`
      from, to {
        background-color: ${i};
      }

      50% {
        background-color: rgba(${i}, 0.8);
      }
    `;return r`
      color: ${t};
      background-color: ${i};
      ${e.$isPulsing&&r`
        animation: ${a} 3s linear infinite;
      `};
    `}}

  ${i}
`;export{o as t};