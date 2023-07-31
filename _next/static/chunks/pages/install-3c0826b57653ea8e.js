(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{7720:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/install",function(){return s(6918)}])},979:function(e,n,s){"use strict";var a=s(5893),t=s(1163),l=s(7391);n.Z={logo:(0,a.jsx)("strong",{children:"Dashlane CLI"}),project:{link:"https://github.com/Dashlane/dashlane-cli"},docsRepositoryBase:"https://github.com/Dashlane/dashlane-cli/blob/master/documentation",banner:{key:"2.0-release",text:(0,a.jsx)("a",{href:"https://github.com/Dashlane/dashlane-cli/releases",target:"_blank",children:"\uD83D\uDCC2 Download Dashlane CLI builds for Macos, Windows and Linux here →"})},footer:{text:(0,a.jsxs)("span",{children:["Apache $",new Date().getFullYear()," \xa9 Dashlane, Inc."]})},useNextSeoProps(){let{asPath:e}=(0,t.useRouter)();if("/"!==e)return{titleTemplate:"%s - Dashlane CLI"}},head:()=>{let{asPath:e,defaultLocale:n,locale:s}=(0,t.useRouter)(),{frontMatter:i}=(0,l.ZR)(),r="https://dashlane.github.io/dashlane-cli"+(n===s?e:"/".concat(s).concat(e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:url",content:r}),(0,a.jsx)("meta",{property:"og:title",content:i.title||"Dashlane CLI"}),(0,a.jsx)("meta",{property:"og:description",content:i.description||"Learn how to access your Dashlane vault and API endpoints from the command line."})]})}}},6918:function(e,n,s){"use strict";s.r(n);var a=s(5893),t=s(2673),l=s(7391),i=s(979);s(9966);var r=s(1151);s(5675);let o={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/install.mdx",route:"/install",headings:[{depth:1,value:"Install",id:"install"},{depth:2,value:"What's next?",id:"whats-next"}],pageMap:[{kind:"Meta",data:{index:"Introduction",install:"Install",personal:"Personal",business:"Business",logout:"Logout",troubleshooting:"Troubleshooting"}},{kind:"Folder",name:"business",route:"/business",children:[{kind:"Meta",data:{index:"Get Started","audit-logs":"Audit Logs",members:"Members",reports:"Reports"}},{kind:"MdxPage",name:"audit-logs",route:"/business/audit-logs"},{kind:"MdxPage",name:"index",route:"/business"},{kind:"MdxPage",name:"members",route:"/business/members"},{kind:"MdxPage",name:"reports",route:"/business/reports"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"install",route:"/install"},{kind:"MdxPage",name:"logout",route:"/logout"},{kind:"Folder",name:"personal",route:"/personal",children:[{kind:"Meta",data:{index:"Get Started",authentication:"Authentication",devices:"Managing your Devices",vault:"Accessing your Vault"}},{kind:"MdxPage",name:"authentication",route:"/personal/authentication"},{kind:"MdxPage",name:"devices",route:"/personal/devices"},{kind:"MdxPage",name:"index",route:"/personal"},{kind:"MdxPage",name:"vault",route:"/personal/vault"}]},{kind:"MdxPage",name:"troubleshooting",route:"/troubleshooting"}],flexsearch:{codeblocks:!0},title:"Install"},pageNextRoute:"/install",nextraLayout:l.ZP,themeConfig:i.Z};function c(e){let n=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",pre:"pre",code:"code",span:"span",h2:"h2",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Install"}),"\n",(0,a.jsxs)(n.p,{children:["The Dashlane CLI can be installed in multiple ways. You can either install it using ",(0,a.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," on ",(0,a.jsx)(n.strong,{children:"macOS"})," and ",(0,a.jsx)(n.strong,{children:"Linux"}),", manually with ",(0,a.jsx)(n.a,{href:"https://yarnpkg.com/",children:"Yarn"})," or download the packaged executables for ",(0,a.jsx)(n.strong,{children:"Windows"}),", ",(0,a.jsx)(n.strong,{children:"macOS"})," and ",(0,a.jsx)(n.strong,{children:"Linux"})," on x64 architectures."]}),"\n",(0,a.jsxs)(l.mQ,{items:["Homebrew","Manually with Yarn","Packaged Executables (x64 only)"],children:[(0,a.jsxs)(l.OK,{children:[(0,a.jsxs)(n.p,{children:["You can install the Dashlane CLI using ",(0,a.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"}),", a package manager for ",(0,a.jsx)(n.strong,{children:"macOS"})," and ",(0,a.jsx)(n.strong,{children:"Linux"}),"."]}),(0,a.jsx)(n.p,{children:"To install Homebrew, run the following command in your terminal:"}),(0,a.jsx)(n.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"/bin/bash"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"curl"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-fsSL"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'})]})})}),(0,a.jsx)(n.p,{children:"Then you need to run the following command:"}),(0,a.jsx)(n.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"brew"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"dashlane/tap/dashlane-cli"})]})})}),(0,a.jsx)(n.p,{children:"The CLI is now installed on your machine, it will be updated automatically when a new version is released."})]}),(0,a.jsxs)(l.OK,{children:[(0,a.jsxs)(n.p,{children:["This method is available on every environment that supports ",(0,a.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," and Yarn."]}),(0,a.jsxs)(n.p,{children:["First you need to download or ",(0,a.jsx)(n.code,{children:"git clone"})," this repository and run the following commands in the root directory of the repository."]}),(0,a.jsx)(n.p,{children:"Install the dependencies:"}),(0,a.jsx)(n.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"})})})}),(0,a.jsx)(n.p,{children:"In order to build:"}),(0,a.jsx)(n.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"run"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]})})}),(0,a.jsx)(n.p,{children:"In order to link:"}),(0,a.jsx)(n.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"link"})]})})}),(0,a.jsx)(n.p,{children:"Make sure to pull the latest changes and rebuild the project to get the latest version of the CLI."})]}),(0,a.jsxs)(l.OK,{children:[(0,a.jsxs)(n.p,{children:["Head to the ",(0,a.jsx)(n.a,{href:"https://github.com/Dashlane/dashlane-cli/releases",children:"releases page"})," and download the latest version of the CLI for your platform (Windows, macOS or Linux)."]}),(0,a.jsx)(n.p,{children:"You may need to mark the binary as executable (on macOS and Linux):"}),(0,a.jsx)(n.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"chmod"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"+x"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"dcli-macos-x64"})]})})}),(0,a.jsx)(n.p,{children:"You can now try to run the CLI from the current directory in a terminal (Shell, PowerShell, etc.):"}),(0,a.jsx)(n.pre,{"data-language":"sh","data-theme":"default",hasCopyCode:!0,children:(0,a.jsx)(n.code,{"data-language":"sh","data-theme":"default",children:(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"./dcli-macos-x64"})})})}),(0,a.jsx)(n.p,{children:"Move the executable binary to the bin folder of your choice, for instance:"}),(0,a.jsx)(n.pre,{"data-language":"sh","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"sh","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# On macOS:"})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"mv"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"dcli-macos-x64"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"/usr/local/bin/dcli"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:" "}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# On Linux:"})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"mv"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"dcli-linux-x64"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"/usr/local/bin/dcli"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:" "}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# On Windows:"})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"move"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"dcli-win-x64.exe"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"C:"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"\\W"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"indows"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"\\S"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ystem32"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"\\d"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"cli.exe"})]})]})}),(0,a.jsxs)(n.p,{children:["On macOS, you may also need to allow the binary to run in your security settings.\nTo do so, go to ",(0,a.jsx)(n.code,{children:"System Preferences > Security & Privacy > General"}),' and click on "Allow Anyway" next to the message "dcli-macos was blocked from use because it is not from an identified developer".']}),(0,a.jsx)(n.p,{children:"You will need to get the latest version of the CLI manually by downloading the latest release and replacing the binary in your bin folder."})]})]}),"\n",(0,a.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/personal",children:"Authenticate to your personal account"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/business",children:"Getting Started with Business Commands"})}),"\n"]})]})}n.default=(0,t.j)(o)}},function(e){e.O(0,[774,606,888,179],function(){return e(e.s=7720)}),_N_E=e.O()}]);