(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{7720:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/install",function(){return n(6918)}])},979:function(e,s,n){"use strict";var a=n(5893),t=n(1163),r=n(7391);s.Z={logo:(0,a.jsx)("strong",{children:"Dashlane CLI"}),project:{link:"https://github.com/Dashlane/dashlane-cli"},docsRepositoryBase:"https://github.com/Dashlane/dashlane-cli/blob/master/documentation",banner:{key:"2.0-release",text:(0,a.jsx)("a",{href:"https://github.com/Dashlane/dashlane-cli/releases",target:"_blank",children:"\uD83D\uDCC2 Download Dashlane CLI builds for Macos, Windows and Linux here →"})},footer:{text:(0,a.jsxs)("span",{children:["Apache $",new Date().getFullYear()," \xa9 Dashlane, Inc."]})},useNextSeoProps(){let{asPath:e}=(0,t.useRouter)();if("/"!==e)return{titleTemplate:"%s - Dashlane CLI"}},head:()=>{let{asPath:e,defaultLocale:s,locale:n}=(0,t.useRouter)(),{frontMatter:o}=(0,r.ZR)(),l="https://dashlane.github.io/dashlane-cli"+(s===n?e:"/".concat(n).concat(e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:url",content:l}),(0,a.jsx)("meta",{property:"og:title",content:o.title||"Dashlane CLI"}),(0,a.jsx)("meta",{property:"og:description",content:o.description||"Learn how to access your Dashlane vault and API endpoints from the command line."})]})}}},6918:function(e,s,n){"use strict";n.r(s);var a=n(5893),t=n(2673),r=n(7391),o=n(979);n(9966);var l=n(1151);n(5675);let i={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/install.mdx",route:"/install",headings:[{depth:1,value:"Install",id:"install"}],pageMap:[{kind:"Meta",data:{index:"Introduction",install:"Install",personal:"Personal",business:"Business",reset:"Reset local data"}},{kind:"Folder",name:"business",route:"/business",children:[{kind:"Meta",data:{index:"Get Started","audit-logs":"Audit Logs",members:"Members",reports:"Reports"}},{kind:"MdxPage",name:"audit-logs",route:"/business/audit-logs"},{kind:"MdxPage",name:"index",route:"/business"},{kind:"MdxPage",name:"members",route:"/business/members"},{kind:"MdxPage",name:"reports",route:"/business/reports"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"install",route:"/install"},{kind:"Folder",name:"personal",route:"/personal",children:[{kind:"Meta",data:{index:"Get Started",authentication:"Authentication",vault:"Accessing your Vault"}},{kind:"MdxPage",name:"authentication",route:"/personal/authentication"},{kind:"MdxPage",name:"index",route:"/personal"},{kind:"MdxPage",name:"vault",route:"/personal/vault"}]},{kind:"MdxPage",name:"reset",route:"/reset"}],flexsearch:{codeblocks:!0},title:"Install"},pageNextRoute:"/install",nextraLayout:r.ZP,themeConfig:o.Z};function d(e){let s=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{children:"Install"}),"\n",(0,a.jsxs)(r.mQ,{items:["Homebrew","Manually with Yarn","Packaged Executables"],children:[(0,a.jsxs)(r.OK,{children:[(0,a.jsxs)(s.p,{children:["You can install the Dashlane CLI using ",(0,a.jsx)(s.a,{href:"https://brew.sh/",children:"Homebrew"}),", a package manager for macOS. To install Homebrew, run the following command in your terminal:"]}),(0,a.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"/bin/bash"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"curl"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-fsSL"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'})]})})}),(0,a.jsx)(s.p,{children:"Then you need to download or git clone this repository and run the following command in the root directory of the repository:"}),(0,a.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"brew"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--build-from-source"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dashlane-cli.rb"})]})})})]}),(0,a.jsxs)(r.OK,{children:[(0,a.jsx)(s.p,{children:"First you need to download or git clone this repository and run the following commands in the root directory of the repository."}),(0,a.jsx)(s.p,{children:"Install the dependencies:"}),(0,a.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"})})})}),(0,a.jsx)(s.p,{children:"In order to build:"}),(0,a.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]})})}),(0,a.jsx)(s.p,{children:"In order to link:"}),(0,a.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"link"})]})})})]}),(0,a.jsxs)(r.OK,{children:[(0,a.jsxs)(s.p,{children:["Head to the ",(0,a.jsx)(s.a,{href:"https://github.com/Dashlane/dashlane-cli/releases",children:"releases page"})," and download the latest version of the CLI for your platform."]}),(0,a.jsx)(s.p,{children:"Move the executable binary to the bin folder of your choice and add it to your PATH."}),(0,a.jsx)(s.p,{children:"You may need to mark the binary as executable:"}),(0,a.jsx)(s.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(s.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"chmod"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"+x"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"dcli-macos"})]})})}),(0,a.jsx)(s.p,{children:'On macos, you may also need to allow the binary to run in your security settings. To do so, go to System Preferences > Security & Privacy > General and click on "Allow Anyway" next to the message "dcli-macos was blocked from use because it is not from an identified developer".'})]})]})]})}s.default=(0,t.j)(i)}},function(e){e.O(0,[774,606,888,179],function(){return e(e.s=7720)}),_N_E=e.O()}]);