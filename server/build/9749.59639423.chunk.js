"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[9749],{8291:(y,_,s)=>{s.d(_,{a:()=>u,s:()=>c});var e=s(47853),t=s(15530);const a={firstname:e.Z_().trim().required(t.I0.required),lastname:e.Z_(),email:e.Z_().email(t.I0.email).lowercase().required(t.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,t.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,t.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(E,n)=>E?n.required(t.I0.required):n)},c={...a,currentPassword:e.Z_().when(["password","confirmPassword"],(E,n,M)=>E||n?M.required(t.I0.required):M),preferedLanguage:e.Z_().nullable()},d={roles:e.IX().min(1,t.I0.required).required(t.I0.required)},u=e.Ry().shape({...a,isActive:e.Xg(),...d})},44485:(y,_,s)=>{s.d(_,{f:()=>e});const e=({data:t})=>{try{return Object.keys(t).reduce((a,c)=>{const d=t[c][0];return a[c]={id:d,defaultMessage:d},a},{})}catch{return{}}}},69749:(y,_,s)=>{s.r(_),s.d(_,{default:()=>os});var e=s(74081),t=s(27279),a=s(15530),c=s(59461),d=s(51447),u=s(12847),E=s(73354),n=s(27875),M=s(48102),r=s(74758),I=s(93415),h=s(10701),v=s(32370),T=s(23298),g=s(74577),b=s(59082),N=s(76827),Y=s(71563),x=s(98934),P=s(74919),l=s(47184),C=s(70627),j=s(61020),W=s(11266),K=s(30594),p=s(44485),Z=s(70882),V=s(8291),J=s(40464),w=s(64797),G=s(85811),D=s(43433),_s=s(8175),cs=s(15816),ms=s(97442),Es=s(13576),gs=s(87830),us=s(364),Ms=s(49204),Ps=s(47853),ps=s(75719),Ds=s(29206);const ts=async(L,i)=>{const{put:U}=(0,a.tg)(),{data:B}=await U(`/admin/users/${L}`,i);return B.data},ns=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],k=["email","firstname","lastname","username","isActive","roles"],q=({canUpdate:L})=>{const{formatMessage:i}=(0,j.Z)(),{params:{id:U}}=(0,d.$B)("/settings/users/:id"),{push:B}=(0,d.k6)(),{setUserDisplayName:S}=(0,a.L7)(),f=(0,a.lm)(),{lockApp:Q,unlockApp:X}=(0,a.o1)(),ss=(0,K.p)(Z.M,async()=>(await s.e(2916).then(s.bind(s,62916))).MagicLinkEE);(0,a.go)();const{users:[z],isLoading:rs}=(0,W.u)({id:U},{cacheTime:0,onError(o){const{status:m}=o.response;m===403?(f({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),B("/")):f({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),is=async(o,m)=>{Q();try{const O=await ts(U,P(o,"confirmPassword"));f({type:"success",message:i({id:"notification.success.saved",defaultMessage:"Saved"})});const R=a.I8.getUserInfo();if(U.toString()===R.id.toString()){a.I8.setUserInfo(O);const $=x(o,"username")||(0,u.g)(o.firstname,o.lastname);S($)}m.setValues(l(o,k))}catch(O){const R=(0,p.f)(O.response.data),$=Object.keys(R).reduce((H,A)=>(H[A]=R[A].id,H),{});m.setErrors($),f({type:"warning",message:x(O,"response.data.error.message","notification.error")})}X()},es=rs||!ss,ds=es?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},F=Object.keys(l(z,k)).reduce((o,m)=>m==="roles"?(o[m]=(z?.roles||[]).map(({id:O})=>O),o):(o[m]=z?.[m],o),{}),ls=F.username||(0,u.g)(F.firstname,F.lastname),as=i(ds,{name:ls});return es?(0,e.jsxs)(E.o,{"aria-busy":"true",children:[(0,e.jsx)(a.SL,{name:"Users"}),(0,e.jsx)(n.T,{primaryAction:(0,e.jsx)(M.z,{disabled:!0,startIcon:(0,e.jsx)(b.Z,{}),type:"button",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:as,navigationAction:(0,e.jsx)(a.rU,{startIcon:(0,e.jsx)(N.Z,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(r.D,{children:(0,e.jsx)(a.dO,{})})]}):(0,e.jsxs)(E.o,{children:[(0,e.jsx)(a.SL,{name:"Users"}),(0,e.jsx)(Y.J9,{onSubmit:is,initialValues:F,validateOnChange:!1,validationSchema:V.a,children:({errors:o,values:m,handleChange:O,isSubmitting:R,dirty:$})=>(0,e.jsxs)(a.l0,{children:[(0,e.jsx)(n.T,{primaryAction:(0,e.jsx)(M.z,{disabled:R||!L?!0:!$,startIcon:(0,e.jsx)(b.Z,{}),loading:R,type:"submit",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:as,navigationAction:(0,e.jsx)(a.rU,{startIcon:(0,e.jsx)(N.Z,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsxs)(r.D,{children:[z?.registrationToken&&(0,e.jsx)(I.x,{paddingBottom:6,children:(0,e.jsx)(ss,{registrationToken:z.registrationToken})}),(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(I.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(v.Z,{variant:"delta",as:"h2",children:i({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),(0,e.jsx)(T.r,{gap:5,children:ns.map(H=>H.map(A=>(0,e.jsx)(g.P,{...A.size,children:(0,e.jsx)(a.jm,{...A,disabled:!L,error:o[A.name],onChange:O,value:m[A.name]||""})},A.name)))})]})}),(0,e.jsx)(I.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(h.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(v.Z,{variant:"delta",as:"h2",children:i({id:"global.roles",defaultMessage:"User's role"})}),(0,e.jsx)(T.r,{gap:5,children:(0,e.jsx)(g.P,{col:6,xs:12,children:(0,e.jsx)(Z.S,{disabled:!L,error:o.roles,onChange:O,value:m.roles})})})]})})]})]})]})})]})};q.propTypes={canUpdate:C.bool.isRequired};const os=()=>{const L=(0,a.lm)(),i=(0,c.v9)(u.s),U=t.useMemo(()=>({read:i.settings.users.read,update:i.settings.users.update}),[i.settings.users]),{isLoading:B,allowedActions:{canRead:S,canUpdate:f}}=(0,a.ss)(U),{state:Q}=(0,d.TH)(),X=Q?.from??"/";return(0,t.useEffect)(()=>{B||!S&&!f&&L({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[B,S,f,L]),B?(0,e.jsx)(a.dO,{}):!S&&!f?(0,e.jsx)(d.l_,{to:X}):(0,e.jsx)(q,{canUpdate:f})}},70882:(y,_,s)=>{s.d(_,{M:()=>T,S:()=>x,a:()=>v});var e=s(74081),t=s(70627),a=s(61020),c=s(30594),d=s(4987),u=s(5627),E=s(78955),n=s(15530),M=s(78031),r=s(34547),I=s(40464),h=s(19003);const v=({children:P,target:l})=>{const C=(0,n.lm)(),{formatMessage:j}=(0,a.Z)(),{copy:W}=(0,n.VP)(),K=j({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),p=async()=>{await W(l)&&C({type:"info",message:{id:"notification.link-copied"}})};return(0,e.jsx)(n.Y_,{endAction:(0,e.jsx)(d.h,{label:K,noBorder:!0,icon:(0,e.jsx)(M.Z,{}),onClick:p}),title:l,titleEllipsis:!0,subtitle:P,icon:(0,e.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})};v.propTypes={children:t.oneOfType([t.element,t.string]).isRequired,target:t.string.isRequired};const T=({registrationToken:P})=>{const{formatMessage:l}=(0,a.Z)(),C=`${window.location.origin}${(0,c.T)()}/auth/register?registrationToken=${P}`;return(0,e.jsx)(v,{target:C,children:l({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})};T.defaultProps={registrationToken:""},T.propTypes={registrationToken:t.string};const g=(0,h.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,b=h.ZP.div`
  animation: ${g} 2s infinite linear;
`,N=()=>(0,e.jsx)(b,{children:(0,e.jsx)(r.Z,{})}),Y=async()=>{const{get:P}=(0,n.tg)(),{data:l}=await P("/admin/roles");return l.data},x=({disabled:P,error:l,onChange:C,value:j})=>{const{status:W,data:K}=(0,I.useQuery)(["roles"],Y,{staleTime:5e4}),{formatMessage:p}=(0,a.Z)(),Z=l?p({id:l,defaultMessage:l}):"",V=p({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),J=p({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),w=p({id:"app.components.Select.placeholder",defaultMessage:"Select"}),G=W==="loading"?(0,e.jsx)(N,{}):void 0;return(0,e.jsx)(u.P,{id:"roles",disabled:P,error:Z,hint:J,label:V,name:"roles",onChange:D=>{C({target:{name:"roles",value:D}})},placeholder:w,multi:!0,startIcon:G,value:j.map(D=>D.toString()),withTags:!0,required:!0,children:(K||[]).map(D=>(0,e.jsx)(E.W,{value:D.id.toString(),children:p({id:`global.${D.code}`,defaultMessage:D.name})},D.id))})};x.defaultProps={disabled:!1,error:void 0},x.propTypes={disabled:t.bool,error:t.string,onChange:t.func.isRequired,value:t.array.isRequired}},11266:(y,_,s)=>{s.d(_,{u:()=>c});var e=s(27279),t=s(15530),a=s(40464);function c(d={},u={}){const{id:E="",...n}=d,{get:M}=(0,t.kY)(),{data:r,isError:I,isLoading:h,refetch:v}=(0,a.useQuery)(["users",E,n],async()=>{const{data:{data:g}}=await M(`/admin/users/${E}`,{params:n});return g},u);return{users:e.useMemo(()=>{let g=[];return r&&("results"in r?Array.isArray(r.results)&&(g=r.results):g=[r]),g},[r]),pagination:e.useMemo(()=>(r&&"pagination"in r)??null,[r]),isLoading:h,isError:I,refetch:v}}},76827:(y,_,s)=>{s.d(_,{Z:()=>a});var e=s(74081);const t=c=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=t}}]);
