(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5240],{60523:function(e,n,t){"use strict";var i=t(21831),r=t(82394),u=t(82684),l=t(38626),o=t(34376),d=t(54750),c=t(71180),s=t(90299),a=t(44898),p=t(55485),f=t(88328),h=t(38276),v=t(4190),m=t(48381),j=t(5755),b=t(30160),x=t(35686),g=t(72473),Z=t(84649),y=t(32929),w=t(15610),O=t(19183),P=t(28598);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n,t=e.contained,r=e.defaultLinkUUID,k=e.defaultTab,_=e.objectType,I=e.onClickCustomTemplate,T=e.pipelineUUID,M=e.showAddingNewTemplates,S=e.showBreadcrumbs,A=e.tabs,U=(0,o.useRouter)(),E=(0,u.useContext)(l.ThemeContext),N=(0,O.i)(),D=N.height,R=N.width,B=(0,u.useMemo)((function(){return A||y.dP}),[A]),q=(0,u.useState)(M||!1),F=q[0],z=q[1],H=(0,u.useState)(r?y.qy.find((function(e){return e.uuid===r})):y.qy[0]),W=H[0],L=H[1],G=(0,u.useState)(k?B.find((function(e){return e.uuid===(null===k||void 0===k?void 0:k.uuid)})):B[0]),X=G[0],Y=G[1],V=(0,u.useState)(null),J=V[0],K=V[1],Q=x.ZP.custom_templates.list({object_type:a.Z},{},{pauseFetch:y.n9.uuid!==(null===X||void 0===X?void 0:X.uuid)}),$=Q.data,ee=Q.mutate,ne=(0,u.useMemo)((function(){var e=(null===$||void 0===$?void 0:$.custom_templates)||[];return null!==W&&void 0!==W&&W.filterTemplates?null===W||void 0===W?void 0:W.filterTemplates(e):e}),[$,W]),te=x.ZP.custom_templates.list({object_type:a.R},{},{pauseFetch:y.A2.uuid!==(null===X||void 0===X?void 0:X.uuid)}),ie=te.data,re=te.mutate,ue=(0,u.useMemo)((function(){var e=(null===ie||void 0===ie?void 0:ie.custom_templates)||[];return null!==W&&void 0!==W&&W.filterTemplates?null===W||void 0===W?void 0:W.filterTemplates(e):e}),[ie,W]),le=(0,u.useMemo)((function(){return y.qy.map((function(e){var n=e.Icon,t=e.label,i=e.selectedBackgroundColor,r=e.selectedIconProps,u=e.uuid,l=(null===W||void 0===W?void 0:W.uuid)===u,o=C({size:Z.ZG},l&&r?r:{});return(0,P.jsx)(Z.wj,{onClick:function(){return L(e)},selected:l,children:(0,P.jsxs)(p.ZP,{alignItems:"center",children:[(0,P.jsx)(Z.ze,{backgroundColor:l&&i?i(E):null,children:n?(0,P.jsx)(n,C({},o)):(0,P.jsx)(g.pd,C({},o))}),(0,P.jsx)(b.ZP,{bold:!0,large:!0,children:t?t():u})]})},u)}))}),[W,E]),oe=(0,u.useMemo)((function(){return y.hS.map((function(e){var n=e.Icon,t=e.label,i=e.selectedBackgroundColor,r=e.selectedIconProps,u=e.uuid,l=(null===W||void 0===W?void 0:W.uuid)===u,o=C({size:Z.ZG},l&&r?r:{});return(0,P.jsx)(Z.wj,{onClick:function(){return L(e)},selected:l,children:(0,P.jsxs)(p.ZP,{alignItems:"center",children:[(0,P.jsx)(Z.ze,{backgroundColor:l&&i?i(E):null,children:n?(0,P.jsx)(n,C({},o)):(0,P.jsx)(g.pd,C({},o))}),(0,P.jsx)(b.ZP,{bold:!0,large:!0,children:t?t():u})]})},u)}))}),[W,E]),de=(0,u.useMemo)((function(){return null===ne||void 0===ne?void 0:ne.map((function(e){var n=e.description,t=e.name,r=e.tags,u=e.template_uuid,l=e.user,o=[];return null!==r&&void 0!==r&&r.length?o.push.apply(o,(0,i.Z)(r)):null!==l&&void 0!==l&&l.username&&o.push(null===l||void 0===l?void 0:l.username),(0,P.jsxs)(Z.UE,{onClick:function(){I?I(e):U.push("/templates/[...slug]","/templates/".concat(encodeURIComponent(u)))},children:[(0,P.jsx)(Z.Tj,{children:(0,P.jsx)(b.ZP,{bold:!0,monospace:!0,textOverflow:!0,children:t||u})}),(0,P.jsx)(Z.SL,{children:(0,P.jsx)(b.ZP,{default:!!n,italic:!n,muted:!n,textOverflowLines:2,children:n||"No description"})}),(0,P.jsx)(Z.EN,{children:(null===o||void 0===o?void 0:o.length)>=1&&(0,P.jsx)(m.Z,{tags:null===o||void 0===o?void 0:o.map((function(e){return{uuid:e}}))})})]},u)}))}),[ne,I,U]),ce=(0,u.useMemo)((function(){return null===ue||void 0===ue?void 0:ue.map((function(e){var n=e.description,t=e.name,r=e.tags,u=e.template_uuid,l=e.user,o=[];return null!==r&&void 0!==r&&r.length?o.push.apply(o,(0,i.Z)(r)):null!==l&&void 0!==l&&l.username&&o.push(null===l||void 0===l?void 0:l.username),(0,P.jsxs)(Z.UE,{onClick:function(){I?I(e):U.push("/templates/[...slug]","/templates/".concat(encodeURIComponent(u),"?object_type=").concat(a.R))},children:[(0,P.jsx)(Z.Tj,{children:(0,P.jsx)(b.ZP,{bold:!0,monospace:!0,textOverflow:!0,children:t||u})}),(0,P.jsx)(Z.SL,{children:(0,P.jsx)(b.ZP,{default:!!n,italic:!n,muted:!n,textOverflowLines:2,children:n||"No description"})}),(0,P.jsx)(Z.EN,{children:(null===o||void 0===o?void 0:o.length)>=1&&(0,P.jsx)(m.Z,{tags:null===o||void 0===o?void 0:o.map((function(e){return{uuid:e}}))})})]},u)}))}),[ue,I,U]),se=(0,u.useMemo)((function(){if(!S)return null;var e=[];return F?e.push.apply(e,[{label:function(){return"Templates"},onClick:function(){z(!1)}},{bold:!0,label:function(){return"New custom template"}}]):e.push({label:function(){return"Templates"}}),(0,P.jsx)(Z.FX,{children:(0,P.jsx)(d.Z,{breadcrumbs:e})})}),[F,S]),ae=(0,u.useMemo)((function(){return S?36:0}),[S]),pe=(0,u.useMemo)((function(){return D-ae}),[D,ae]);if(F)return n=a.R===_&&T?(0,P.jsx)(f.Z,{onMutateSuccess:re,pipelineUUID:T,templateAttributes:W&&(null===W||void 0===W?void 0:W.uuid)!==(null===y.qy||void 0===y.qy?void 0:y.qy[0].uuid)?{pipeline_type:null===W||void 0===W?void 0:W.uuid}:null,templateUUID:null===J||void 0===J?void 0:J.template_uuid}):(0,P.jsx)(j.Z,{contained:t,heightOffset:ae,onCreateCustomTemplate:t?function(e){K(e)}:null,onMutateSuccess:ee,templateAttributes:W&&(null===W||void 0===W?void 0:W.uuid)!==(null===y.qy||void 0===y.qy?void 0:y.qy[0].uuid)?{block_type:null===W||void 0===W?void 0:W.uuid}:null,templateUUID:null===J||void 0===J?void 0:J.template_uuid}),t?(0,P.jsxs)(P.Fragment,{children:[S&&se,(0,P.jsx)(Z.Rd,{height:pe,width:R,children:n})]}):n;var fe=(0,P.jsxs)(Z.Nk,{children:[(0,P.jsxs)(Z.bC,{height:t?pe:null,children:[(0,P.jsx)(Z.Yf,{children:(0,P.jsx)(s.Z,{noPadding:!0,onClickTab:function(e){t?Y(e):(0,w.u7)({object_type:y.A2.uuid===e.uuid?a.R:a.Z})},selectedTabUUID:null===X||void 0===X?void 0:X.uuid,tabs:B})}),(0,P.jsxs)(Z.wl,{contained:t,heightOffset:ae,children:[y.n9.uuid===(null===X||void 0===X?void 0:X.uuid)&&le,y.A2.uuid===(null===X||void 0===X?void 0:X.uuid)&&oe]})]}),(0,P.jsxs)(Z.w5,{children:[y.n9.uuid===(null===X||void 0===X?void 0:X.uuid)&&(0,P.jsx)(Z.HS,{children:(0,P.jsx)(c.Z,{beforeIcon:(0,P.jsx)(g.mm,{size:Z.ZG}),onClick:function(){z(!0)},primary:!0,children:"New block template"})}),y.n9.uuid===(null===X||void 0===X?void 0:X.uuid)&&(0,P.jsxs)(P.Fragment,{children:[!$&&(0,P.jsx)(h.Z,{p:2,children:(0,P.jsx)(v.Z,{inverted:!0})}),$&&!(null!==de&&void 0!==de&&de.length)&&(0,P.jsxs)(h.Z,{p:2,children:[(0,P.jsx)(b.ZP,{children:"There are currently no templates matching your search."}),(0,P.jsx)("br",{}),(0,P.jsx)(b.ZP,{children:"Add a new template by clicking the button above."})]}),(null===de||void 0===de?void 0:de.length)>=1&&(0,P.jsx)(Z.n8,{children:de})]}),y.A2.uuid===(null===X||void 0===X?void 0:X.uuid)&&(0,P.jsxs)(P.Fragment,{children:[!ie&&(0,P.jsx)(h.Z,{p:2,children:(0,P.jsx)(v.Z,{inverted:!0})}),ie&&!(null!==ce&&void 0!==ce&&ce.length)&&(0,P.jsxs)(h.Z,{p:2,children:[(0,P.jsx)(b.ZP,{children:"There are currently no templates matching your search."}),(0,P.jsx)("br",{}),(0,P.jsx)(b.ZP,{children:'Add a new template by right-clicking a pipeline row from the Pipelines page and selecting "Create template".'})]}),(null===ce||void 0===ce?void 0:ce.length)>=1&&(0,P.jsx)(Z.n8,{children:ce})]})]})]});return t?(0,P.jsxs)(P.Fragment,{children:[S&&se,(0,P.jsx)(Z.Rd,{height:pe,width:R,children:fe})]}):fe}},94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var i=t(82394),r=t(21831),u=t(82684),l=t(50724),o=t(82555),d=t(97618),c=t(70613),s=t(59696),a=t(68899),p=t(28598);function f(e,n){var t=e.children;return(0,p.jsx)(a.HS,{ref:n,children:t})}var h=u.forwardRef(f),v=t(62547),m=t(82571),j=t(35686),b=t(98464),x=t(46684),g=t(70515),Z=t(53808),y=t(19183);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,i=e.after,f=e.afterHidden,w=e.afterWidth,P=e.afterWidthOverride,k=e.before,C=e.beforeWidth,_=e.breadcrumbs,I=e.children,T=e.errors,M=e.headerMenuItems,S=e.headerOffset,A=e.mainContainerHeader,U=e.navigationItems,E=e.setErrors,N=e.subheaderChildren,D=e.title,R=e.uuid,B=(0,y.i)().width,q="dashboard_after_width_".concat(R),F="dashboard_before_width_".concat(R),z=(0,u.useRef)(null),H=(0,u.useState)(P?w:(0,Z.U2)(q,w)),W=H[0],L=H[1],G=(0,u.useState)(!1),X=G[0],Y=G[1],V=(0,u.useState)(k?Math.max((0,Z.U2)(F,C),13*g.iI):null),J=V[0],K=V[1],Q=(0,u.useState)(!1),$=Q[0],ee=Q[1],ne=(0,u.useState)(null)[1],te=j.ZP.projects.list({},{revalidateOnFocus:!1}).data,ie=null===te||void 0===te?void 0:te.projects,re={label:function(){var e;return null===ie||void 0===ie||null===(e=ie[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},ue=[];_?(t&&ue.push(re),ue.push.apply(ue,(0,r.Z)(_))):(null===ie||void 0===ie?void 0:ie.length)>=1&&ue.push.apply(ue,[re,{bold:!0,label:function(){return D}}]),(0,u.useEffect)((function(){null===z||void 0===z||!z.current||X||$||null===ne||void 0===ne||ne(z.current.getBoundingClientRect().width)}),[X,W,$,J,z,ne,B]),(0,u.useEffect)((function(){X||(0,Z.t8)(q,W)}),[f,X,W,q]),(0,u.useEffect)((function(){$||(0,Z.t8)(F,J)}),[$,J,F]);var le=(0,b.Z)(w);return(0,u.useEffect)((function(){P&&le!==w&&L(w)}),[P,w,le]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.Z,{title:D}),(0,p.jsx)(s.Z,{breadcrumbs:ue,menuItems:M,project:null===ie||void 0===ie?void 0:ie[0],version:null===ie||void 0===ie||null===(n=ie[0])||void 0===n?void 0:n.version}),(0,p.jsxs)(a.Nk,{children:[0!==(null===U||void 0===U?void 0:U.length)&&(0,p.jsx)(a.lm,{showMore:!0,children:(0,p.jsx)(m.Z,{navigationItems:U,showMore:!0})}),(0,p.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,p.jsxs)(v.Z,{after:i,afterHeightOffset:x.Mz,afterHidden:f,afterMousedownActive:X,afterWidth:W,before:k,beforeHeightOffset:x.Mz,beforeMousedownActive:$,beforeWidth:a.k1+(k?J:0),headerOffset:S,hideAfterCompletely:!0,leftOffset:k?a.k1:null,mainContainerHeader:A,mainContainerRef:z,setAfterMousedownActive:Y,setAfterWidth:L,setBeforeMousedownActive:ee,setBeforeWidth:K,children:[N&&(0,p.jsx)(h,{children:N}),I]})})]}),T&&(0,p.jsx)(l.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===E||void 0===E?void 0:E(null)},children:(0,p.jsx)(o.Z,O(O({},T),{},{onClose:function(){return null===E||void 0===E?void 0:E(null)}}))})]})}},48381:function(e,n,t){"use strict";var i=t(82684),r=t(31882),u=t(55485),l=t(30160),o=t(86735),d=t(28598);n.Z=function(e){var n=e.onClickTag,t=e.tags,c=void 0===t?[]:t,s=(0,i.useMemo)((function(){return(null===c||void 0===c?void 0:c.length)||0}),[c]),a=(0,i.useMemo)((function(){return(0,o.YC)(c||[],"uuid")}),[c]);return(0,d.jsx)(u.ZP,{alignItems:"center",flexWrap:"wrap",children:null===a||void 0===a?void 0:a.reduce((function(e,t){return e.push((0,d.jsx)("div",{style:{marginBottom:2,marginRight:s>=2?4:0,marginTop:2},children:(0,d.jsx)(r.Z,{onClick:n?function(){return n(t)}:null,small:!0,children:(0,d.jsx)(l.ZP,{children:t.uuid})})},"tag-".concat(t.uuid))),e}),[])})}},31882:function(e,n,t){"use strict";var i=t(38626),r=t(71180),u=t(55485),l=t(38276),o=t(30160),d=t(44897),c=t(72473),s=t(70515),a=t(61896),p=t(28598),f=i.default.div.withConfig({displayName:"Chip__ChipStyle",componentId:"sc-1ok73g-0"})(["display:inline-block;"," "," "," "," ",""],(function(e){return!e.primary&&"\n    background-color: ".concat((e.theme.background||d.Z.background).tag,";\n  ")}),(function(e){return e.primary&&"\n    background-color: ".concat((e.theme.chart||d.Z.chart).primary,";\n  ")}),(function(e){return!e.small&&"\n    border-radius: ".concat((s.iI+a.Al)/2,"px;\n    height: ").concat(1.5*s.iI+a.Al,"px;\n    padding: ").concat(s.iI/1.5,"px ").concat(1.25*s.iI,"px;\n  ")}),(function(e){return e.small&&"\n    border-radius: ".concat((s.iI/2+a.Al)/2,"px;\n    height: ").concat(a.Al+s.iI/2+2,"px;\n    padding: ").concat(s.iI/4,"px ").concat(s.iI,"px;\n  ")}),(function(e){return e.border&&"\n    border: 1px solid ".concat((e.theme.content||d.Z.content).muted,";\n  ")}));n.Z=function(e){var n=e.border,t=e.children,i=e.disabled,d=e.label,a=e.onClick,h=e.primary,v=e.small;return(0,p.jsx)(f,{border:n,primary:h,small:v,children:(0,p.jsx)(r.Z,{basic:!0,disabled:i,noBackground:!0,noPadding:!0,onClick:a,transparent:!0,children:(0,p.jsxs)(u.ZP,{alignItems:"center",children:[t,d&&(0,p.jsx)(o.ZP,{small:v,children:d}),!i&&a&&(0,p.jsx)(l.Z,{ml:1,children:(0,p.jsx)(c.x8,{default:h,muted:!h,size:v?s.iI:1.25*s.iI})})]})})})}},60820:function(e,n,t){"use strict";t.r(n);var i=t(77837),r=t(38860),u=t.n(r),l=t(82684),o=t(60523),d=t(94629),c=t(93808),s=t(32929),a=t(44898),p=t(69419),f=t(28598);function h(){var e=(0,l.useState)(!1),n=e[0],t=e[1],i=(0,l.useState)(null),r=i[0],u=i[1],c=(0,l.useState)(null),h=c[0],v=c[1],m=(0,p.iV)();(0,l.useEffect)((function(){var e=m.new,n=m.object_type,i=m.pipeline_uuid;n&&u(n),i&&v(i),t(!!e)}),[m]);var j=(0,l.useMemo)((function(){var e=[n?"New":"Browse"];return r&&e.push(r),h&&e.push(h),e}),[n,r,h]),b=(0,l.useMemo)((function(){return a.R===r}),[r]);return(0,f.jsx)(d.Z,{addProjectBreadcrumbToCustomBreadcrumbs:n,breadcrumbs:n?[{label:function(){return"Templates"},linkProps:{href:b?"/templates?object_type=".concat(a.R):"/templates"}},{bold:!0,label:function(){return"New"}}]:null,title:"Templates",uuid:"Templates/index",children:(0,f.jsx)(o.Z,{defaultTab:b?s.A2:null,objectType:r,pipelineUUID:h,showAddingNewTemplates:n},j.join("_"))})}h.getInitialProps=(0,i.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,c.Z)(h)},87710:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates",function(){return t(60820)}])}},function(e){e.O(0,[844,9902,426,8789,2369,4913,341,6648,6358,9696,8264,5499,1845,7586,5810,3859,2407,9264,9774,2888,179],(function(){return n=87710,e(e.s=n);var n}));var n=e.O();_N_E=n}]);