import{r as c,j as e,g as p,h as j,L as h,p as u,f as N,s as g,N as y,F as _}from"./index-8d801960.js";import{U as k}from"./UseDocumentTitle-71b1bef1.js";const z="/assets/giphy-f5c5e074.webp",x={_origin:"https://api.emailjs.com"},A=(s,t="https://api.emailjs.com")=>{x._userID=s,x._origin=t},f=(s,t,a)=>{if(!s)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class w{constructor(t){this.status=t.status,this.text=t.responseText}}const v=(s,t,a={})=>new Promise((d,i)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:n})=>{const o=new w(n);o.status===200||o.text==="OK"?d(o):i(o)}),r.addEventListener("error",({target:n})=>{i(new w(n))}),r.open("POST",x._origin+s,!0),Object.keys(a).forEach(n=>{r.setRequestHeader(n,a[n])}),r.send(t)}),L=(s,t,a,d)=>{const i=d||x._userID;return f(i,s,t),v("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:i,service_id:s,template_id:t,template_params:a}),{"Content-type":"application/json"})},D=s=>{let t;if(typeof s=="string"?t=document.querySelector(s):t=s,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},S=(s,t,a,d)=>{const i=d||x._userID,r=D(a);f(i,s,t);const n=new FormData(r);return n.append("lib_version","3.2.0"),n.append("service_id",s),n.append("template_id",t),n.append("user_id",i),v("/api/v1.0/email/send-form",n)},B={init:A,send:L,sendForm:S},T=()=>{const[s,t]=c.useState(!1),[a,d]=c.useState({fullName:"",email:"",mobileNumber:"",companyName:"",message:""});c.useEffect(()=>{const o=setTimeout(()=>{localStorage.getItem("popupShown")||t(!0)},4e3);return()=>clearTimeout(o)},[]);const i=()=>{t(!1),localStorage.setItem("popupShown","true")},r=o=>{const{name:m,value:l}=o.target;d({...a,[m]:l})},n=async o=>{o.preventDefault();try{await B.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",a,"YOUR_USER_ID"),console.log("Email sent successfully")}catch(m){console.error("Error sending email:",m)}};return e.jsx(e.Fragment,{children:s&&e.jsx("div",{className:"fixed inset-0 z-50 md:mt-20 mt-24 flex justify-center items-center backdrop-blur-lg",children:e.jsxs("div",{className:"absolute bg-white shadow-lg p-6 rounded-lg w-full sm:w-full lg:w-[500px]",children:[e.jsx("button",{className:"absolute top-2 right-2 text-gray-600 hover:text-gray-800",onClick:i,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("h2",{className:"text-4xl font-bold mb-4 text-black",children:"Get a Free Consultation"}),e.jsx("h3",{children:"Let's discover the possibilities of working together."}),e.jsx("h3",{children:"Schedule an introductory call."}),e.jsxs("form",{onSubmit:n,children:[e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"text",name:"fullName",value:a.fullName,onChange:r,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Full Name *",required:!0})}),e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"email",name:"email",value:a.email,onChange:r,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Email *",required:!0})}),e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"number",name:"mobileNumber",value:a.mobileNumber,onChange:r,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Mobile Number *"})}),e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"text",name:"companyName",value:a.companyName,onChange:r,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Company Name *"})}),e.jsx("div",{className:"mb-2",children:e.jsx("textarea",{name:"message",value:a.message,onChange:r,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Message *"})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("button",{type:"submit",className:"p-3 md:mt-8 flex justify-center rounded-full w-[180px] border cursor-pointer text-white bg-gradient-to-r bg-black hover:from-indigo-400 hover:to-cyan-400",children:"Submit"})})]})]})})})},C=()=>{const s=()=>{const t=document.getElementById("howethink");t&&window.scrollTo({top:t.offsetTop,behavior:"smooth"})};return c.useEffect(()=>{p.fromTo("#arrowbottom",{x:0,y:70,rotate:0},{x:0,y:100,rotate:0,delay:1,duration:1.5,repeat:-1,yoyo:!0}),p.from("h6 div",1.5,{yPercent:100,ease:"power4.inOut",stagger:{amount:.5}}),p.to("h6",1.5,{clipPath:"polygon(0 0,100% 0,100% 100%,0% 100%)",ease:"power4.inOut",stagger:{amount:.5}})},[]),e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx("div",{className:" bg-black text-white ",children:e.jsx("div",{className:"max-w-[1640px] mx-auto  mt-[-10px]     md:mt-[-16px] lg:mt-0  overflow-hidden ",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:" ",children:e.jsxs("section",{className:"clip-text-video  ",children:[e.jsx("img",{className:"xl:h-screen max-w-[1640px] xl:mt-0 opacity-80 lg:h-screen lg:mt-0  md:mt-[90px] md:h-[280px]   h-[280px] mt-[88px]   w-full px-6  z-0",id:"running",src:z,alt:"GIF"}),e.jsx("div",{className:"clip-text-video__text layer lg:h-screen flex items-center text-center z-0 ",children:e.jsx("div",{className:"overlay  flex flex-col md:justify-center font-aeonic uppercase text-[134px]",children:e.jsxs("div",{className:"col  ",children:[e.jsx("h6",{className:"md:text-left  xl:text-9xl  xl:w-full lg:whitespace-nowrap lg:text-8xl md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ",children:e.jsx("div",{children:"Data-driven"})}),e.jsx("h6",{className:"md:text-left text-center xl:text-9xl lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0",children:e.jsx("div",{children:"Solutions"})}),e.jsx("h6",{className:"md:text-left text-center xl:text-9xl  lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0",children:e.jsx("div",{children:" Shaping your"})}),e.jsx("h6",{className:"md:text-left text-center lg:whitespace-nowrap  xl:text-9xl   xl:w-full lg:text-8xl w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0",children:e.jsx("div",{children:"digital Success"})})]})})})]})}),e.jsxs("div",{onClick:s,className:"hidden hover:cursor-pointer lg:inline-block top-1/2 absolute px-10 my-60",children:[e.jsx("button",{id:"arrowcontainer",className:"md:h-12 h-10 w-5   bg-gradient-to-r from-indigo-400 to-cyan-400  flex items-end justify-center rounded-full"}),e.jsx("h1",{id:"arrowbottom",className:"md:h-16 h-32 mt-[-115px] w-5 bg-gradient-to-r from-indigo-400 to-cyan-400 z-50 rounded-full flex items-end justify-center",children:e.jsx(j,{color:"black",size:38})})]})]})})})]})},M=()=>e.jsx("div",{id:"howethink",className:"bg-[#F8FAFC] overflow-hidden ",children:e.jsx("div",{className:"max-w-[1640px]  mx-auto p-4 font-helvetica  md:text-xl bg-[#F8FAFC] ",children:e.jsxs("div",{className:"lg:mt-20",children:[e.jsxs("div",{className:"md:hidden",children:[e.jsxs("div",{className:"flex justify-between align-middle items-center",children:[e.jsx("h1",{className:"mt-10 ",children:"How we think"}),e.jsx("img",{className:" hover:animate-spin w-10",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"",style:{animationDuration:"3s"}})]}),e.jsxs("div",{className:"text-[25px] mt-5 some-element ",children:[e.jsx("h1",{children:"We're challengers at heart and"}),e.jsx("h1",{children:"builders by nature."})]}),e.jsx("div",{className:"text-[25px] some-element  xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10  text-[#7b7b7b] mt-14  mb-4",children:e.jsx("h1",{children:"LYM Data Labs is a collective brain, formed by a diverse group of people who bring years of experience, dedication and commitment to our daily work."})}),e.jsx(h,{to:"/about",children:e.jsxs("div",{className:"flex   group hover:cursor-pointer gap-2 w-[300px] lg:ml-56 xl:mx-auto  xl:w-[560px]  lg:mb-7",children:[e.jsx("h1",{className:"p-2 text-sm flex items-center justify-center mt-10 rounded-full w-[150px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white transition-all ",children:"Dive into our culture"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[35px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412489/LYMDATALABS/Pages/Home/asset_49_lb3zxr_vnzxpt.svg"})})]})})]}),e.jsxs("div",{className:"hidden md:block mt-20 relative",children:[e.jsxs("div",{className:"flex justify-between xl:px-5  align-middle items-center",children:[e.jsx("h1",{children:"How we think"}),e.jsxs("h1",{className:"text-[35px]  xl:text-[42px]  ml-[-20px] some-element  xl:w-[610px]  lg:w-[600px] leading-10",children:["We're challengers at heart and ",e.jsx("br",{}),"builders by nature."]}),e.jsx("img",{className:"hover:animate-spin",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"",style:{animationDuration:"3s"}})]}),e.jsx("div",{className:"text-[40px] w-[600px]  lg:ml-56 xl:mx-auto  xl:text-[40px] xl:w-[570px] mx-auto text-left   leading-10  text-[#7b7b7b]  mt-20 mb-16 lg:mb-10",children:e.jsx("h1",{children:"LYM Data Labs is a collective brain, formed by a diverse group of people who bring years of experience, dedication and commitment to our daily work"})}),e.jsx("div",{className:"flex      gap-4 w-[600px] lg:ml-56 xl:mx-auto  xl:w-[570px] mx-auto lg:mb-7",children:e.jsx(h,{to:"/about",children:e.jsxs("div",{className:"flex  group  gap-2 ",children:[e.jsx("h1",{className:"p-2 flex border  items-center justify-center mt-10 rounded-full w-[220px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"Dive into our culture"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412489/LYMDATALABS/Pages/Home/asset_49_lb3zxr_vnzxpt.svg"})})]})})}),e.jsx("img",{className:"hidden xl:flex absolute  z-0 top-[240px] left-0 transform -translate-x-[160px] -translate-y-1/2 scale-150",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690187629/assets/assets/lines2_tfqf81.png",alt:"img"})]})]})})}),E=()=>{const s=c.useRef(null),t=()=>{const a=document.getElementById("withinseven");a&&window.scrollTo({top:a.offsetTop,behavior:"smooth"})};return c.useEffect(()=>{s.current&&(s.current.playbackRate=2)},[]),e.jsx("div",{className:"max-w-[1640px] mx-auto p-4 overflow-hidden",children:e.jsxs("div",{className:"grid md:flex md:items-center gap-4",children:[e.jsxs("div",{className:"col-span-3 md:col-span-1",children:[e.jsxs("h1",{className:"font-mono lg:mb-20 text-sm",children:["Industries we know ",e.jsx("br",{})," and understand"]}),e.jsxs("h2",{className:"text-7xl lg:mb-10 lg:text-8xl xl:text-[190px] font-bold",children:["experi ",e.jsx("br",{})," ence"]}),e.jsx("img",{onClick:t,className:"lg:ml-20 cursor-pointer animate-bounce",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg",alt:""})]}),e.jsx("div",{className:"relative col-span-3 md:col-span-1",style:{zIndex:"-1"},children:e.jsx("video",{className:"w-full h-full object-cover filter",src:"https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691413588/LYMDATALABS/Pages/Home/home-phones_gkoiuf_s03eip.mp4",autoPlay:!0,loop:!0,muted:!0,ref:s})}),e.jsxs("div",{className:"col-span-3 md:col-span-1",children:[e.jsx("img",{className:"lg:mt-[-90px] lg:mb-20 hover:animate-spin",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"star",style:{animationDuration:"3s"}}),e.jsx("h1",{className:"font-semibold text-2xl mt-2 mb-2 lg:mb-10",children:"We know what we're doing"}),e.jsx("h2",{children:"we have dedicated ourselves to developing and refining digital solutions, gaining valuable insights into the key factors that contribute to the long-term success of businesses."})]})]})})},P=()=>e.jsx("div",{className:"bg-[#BEBDBE] relative",children:e.jsxs("div",{className:"max-w-[1640px] relative bg-[#BEBDBE]   mx-auto  font-dm  md:text-xl overflow-hidden ",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414521/LYMDATALABS/Pages/Home/giphy_2_udzb4u.webp",className:"scale-150 opacity-60"})}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"  flex flex-between",children:[e.jsx("h1",{className:"md:hidden z-10  text-sm font-mono py-1",children:"Fields of expertise"}),e.jsxs("div",{className:"hidden  md:flex md:flex-col w-[200px] ml-auto mr-16 text-white text-sm",children:[e.jsx("h1",{className:" z-10  mt-5 mb-1",children:"We are enthusiastic about empowering businesses to build amazing user experiences through data-driven design."}),e.jsx("h1",{className:"z-10",children:"Our strategy centres on utilising data and insights to create successfully engage, delight, and convert people."})]})]}),e.jsx("div",{className:"",children:e.jsx("div",{className:"relative z-10",children:e.jsxs("div",{className:"hidden md:block text-white",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-[100px] lg:text-[150px] xl:text-[200px]",children:[e.jsx("span",{className:"lg:text-[135px] xl:text-[180px]",children:"D"}),"ata"]})}),e.jsxs("div",{className:"flex items-center justify-around text-[100px] xl:text-[200px] xl:mt-32 lg:text-[140px] mt-14 lg:mt-20 ",children:[e.jsx("img",{className:"lg:w-20 hover:animate-spin",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"imgsmallviewstar ",style:{animationDuration:"3s"}}),e.jsx("h2",{children:"driven"}),e.jsx("h2",{children:"design"})]})]})})}),e.jsxs("div",{className:"hidden relative   md:flex text-white mt-32 xl:ml-20  justify-between md:items-center w-[600px] xl:w-[900px] lg:mb-16 ",children:[e.jsx("h1",{className:"",children:"Fields of expertise "}),e.jsx("div",{className:"flex   xl:gap-1  gap-4 w-[200px] justify-end md:w-[200px]  items-center xl:w-[560px] ",children:e.jsx(h,{to:"/services",children:e.jsxs("div",{className:"flex group",children:[e.jsx("h1",{className:"p-4  xl:w-[160px] flex text-center items-center justify-center lg:w-[160px] lg:h-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform group-hover:-translate-x-[-56px]",children:"What we do"}),e.jsx("h1",{className:"p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#000]",children:e.jsx("img",{className:"lg:w-56",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})})})]}),e.jsxs("div",{className:"md:hidden font-helvetica relative text-white text-6xl",children:[e.jsxs("h1",{children:[e.jsx("span",{className:"text-6xl",children:"D"}),"ata"]}),e.jsxs("div",{className:" md: items-center flex gap-2 justify-center",children:[e.jsx("img",{className:"hover:animate-spin w-10",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"imgsmallviewstar ",style:{animationDuration:"3s"}}),e.jsx("h1",{children:"driven"})]}),e.jsx("h1",{children:"design"})]}),e.jsxs("div",{className:" relative md:hidden md:flex-col w-[200px] mx-auto mr-16 text-white  text-sm",children:[e.jsx("h1",{className:" mt-5 w-[200px]  mb-5 py-5",children:"We are enthusiastic about empowering businesses to build amazing user experiences through data-driven design."}),e.jsxs("h1",{className:"w-[200px]",children:[" ","Our strategy centres on utilising data and insights to create successfully engage, delight, and convert people."]}),e.jsx(h,{to:"/services",children:e.jsxs("div",{className:"flex gap-4 w-[200px] xl:w-[560px] mx-auto",children:[e.jsx("h1",{className:"text-center p-2 mt-10 rounded-full w-[220px] bg-[#000] transition-all ",children:"What we do"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full text-white w-[40px] bg-[#000]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})})]}),e.jsx("div",{className:"z-10 relative mx-0 md:mx-0 ",children:e.jsx("style",{children:`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `})})]})]})}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-[#BCBCBC] hidden md:block",children:e.jsx("div",{className:"max-w-[1840px]  bg-[#BCBCBC] mb-10   mx-auto p-4 md:p-0  md:text-xl overflow-hidden  ",children:e.jsx("div",{className:"md:flex",children:u.map(s=>e.jsx("div",{className:"w-full md:flex-grow  md:mb-0 z-10 group cursor-pointer relative",children:e.jsx("div",{className:"text-gray-800 md:border-r md:p-2 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100",children:e.jsxs("div",{className:"border md:border-transparent p-2 md:p-0 h-[430px]  md:h-96 flex flex-col justify-around",children:[e.jsx("h1",{className:"md:text-lg text-2xl  mx-auto text-white group-hover:text-black font-semibold   lg:w-[78%] ",children:s.head1}),e.jsx("div",{className:"w-4/5  mx-auto",children:e.jsx("h1",{className:"p-3 md:invisible     mt-5 mb-5 group-hover:visible rounded-full text-white flex text-center items-center w-[40px] xl:h-8 xl:w-[50px] bg-[#282728]",children:e.jsx("img",{className:"lg:w-5 ",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})}),e.jsx("h1",{className:" w-4/5   mx-auto md:text-transparent group-hover:text-black",children:s.head2})]})})},s.id))})})}),e.jsx("div",{className:"bg-[#BCBCBC]  md:hidden",children:e.jsx("div",{className:"max-w-[1840px]  bg-[#BCBCBC]    mx-auto p-4 md:p-0  md:text-xl overflow-hidden  ",children:e.jsx("div",{className:"md:flex",children:u.map(s=>e.jsx("div",{className:"w-full md:flex-grow  md:mb-0 z-10 group cursor-pointer relative",children:e.jsx("div",{className:"text-gray-800 md:border-r md:p-2 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100",children:e.jsxs("div",{className:"border md:border-transparent p-2 md:p-0 h-[430px]  md:h-96 flex flex-col justify-around",children:[e.jsx("h1",{className:"md:text-lg text-2xl  text-white group-hover:text-black font-semibold   lg:w-4/5 ",children:s.head1}),e.jsxs("div",{className:"  mx-auto",children:[e.jsx("h1",{className:"p-2 md:invisible     mt-5 mb-5 group-hover:visible rounded-full text-white flex text-center items-center w-[33px] xl:h-8 xl:w-[50px] bg-[#E3E3E3]",children:e.jsx("h2",{className:"text-black",children:e.jsx(N,{})})}),e.jsx("h1",{className:"mx-auto md:text-transparent group-hover:text-black",children:s.head2})]})]})})},s.id))})})})]}),F=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"overflow-hidden mt-20 mb-20",children:e.jsx("div",{className:" center-container",children:e.jsx("section",{id:"features",className:"rlr-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"rlr-logos-slider",children:e.jsx("div",{className:"rlr-logos-slider__items rlr-logos-slider__itemss",children:e.jsxs("div",{className:"slide-track",children:[e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/wayanad_adobe_express_lcbaed.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/homeborn_adobe_express_frbg9x.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/pappaboo_adobe_express_pgppg6.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_fisheries_adobe_express_rydpdl.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/educus_global_adobe_express_fnwpdc.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_tourism_adobe_express_siwiei.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/alhub_adobe_express_rpvubr.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/Artboard_1_adobe_express_fbvzl0.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/famfed_nature_adobe_express_um7n58.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272253/aquaquarduae_adobe_express_smgvbq.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272253/acon_printing_press_adobe_express_oyqrxs.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/educus_global_adobe_express_fnwpdc.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_tourism_adobe_express_siwiei.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/alhub_adobe_express_rpvubr.svg",width:187,height:64,alt:"partner logo"})})]})})})})})})})}),q=()=>{const[s,t]=c.useState(0),a=()=>{t(l=>l===0?i.length-1:l-1)},d=()=>{t(l=>l===i.length-1?0:l+1)},i=[{id:1,title:"E-commerce",details:"Maximize your online sales and customer satisfaction with our data-driven solutions tailored for the ever-evolving e-commerce landscape."},{id:2,title:"Finance and Banking",details:"Drive informed decisions and gain a competitive edge in the financial world with our powerful data analytics tools and expertise."},{id:3,title:"Healthcare",details:"Empower your healthcare organization with data-driven insights to enhance patient outcomes and streamline operations for a healthier future."},{id:4,title:"Travel and Hospitality",details:"Transform your travel business by harnessing the power of data to deliver personalized experiences and exceed customer expectations."},{id:5,title:"Retail",details:"Stay ahead in the dynamic retail industry by unlocking valuable data-driven insights that fuel growth and foster lasting customer relationships."},{id:6,title:"Entertainment",details:"Unleash the potential of data analytics to captivate audiences, optimize content, and revolutionize the entertainment experience."}],[r,n]=c.useState(null),o=l=>{n(l)},m=()=>{n(null)};return e.jsxs("div",{id:"withinseven",className:"max-w-[1840px] mx-auto overflow-hidden",children:[e.jsxs("div",{className:" hidden md:block",children:[e.jsx("h1",{className:"font-mono text-xs ml-8 lg:mt-10 mb-10",children:"Within these 7 industries"}),g.map((l,b)=>e.jsxs("div",{id:l.id,className:`md:flex group md:px-8 w-full h-[320px] m  lg:text-lg lg:py-8 xl:py-16 ${r===l.id?"bg-image":""} ${b!==g.length-1?"border-b":""}`,onMouseEnter:()=>o(l.id),onMouseLeave:m,style:r===l.id?{backgroundImage:`url(${l.img})`,backgroundSize:"cover",backgroundPosition:"center"}:null,children:[e.jsx("div",{children:e.jsx("h1",{className:"mt-3 mb-3 group-hover:text-white md:w-[200px] lg:w-[320px] xl:w-[500px] font-semibold",children:l.head1})}),e.jsxs("div",{children:[e.jsx("h1",{className:"group-hover:text-white",children:l.head2}),e.jsx("div",{className:"flex xl:gap-1   gap-4 w-full mt-5 md:w-[200px] items-center xl:w-[560px]",children:e.jsxs("div",{className:"flex  group/item hover:cursor-pointer ",children:[e.jsx("h1",{className:"p-4 xl:w-[160px] text-base   rounded-full w-[120px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover/item:-translate-x-[-56px]",children:"What we do"}),e.jsx("h1",{className:"p-4 rounded-full  text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-[#282728]",children:e.jsx("img",{className:"lg:w-56",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg",alt:"Arrow Right"})})]})})]})]},l.id))]}),e.jsxs("div",{className:"  md:hidden",children:[e.jsx("h1",{className:"font-mono text-xs ml-8 lg:mt-10 mb-10",children:"Within these 7 industries"}),e.jsxs("div",{className:"carousel-container",children:[e.jsx("div",{className:"carousel-slide flex  flex-col justify-center ",children:e.jsx("div",{className:" w-screen  h-[500px]  px-10   text-center ",children:e.jsxs("div",{className:"border-r border-l",children:[e.jsx("h1",{className:"mt-10 mb-20 text-left px-2 font-bold",children:i[s].title}),e.jsx("h2",{className:"mt-3  h-60 px-2",children:i[s].details}),e.jsxs("div",{className:"flex mb-5 pl-4 xl:gap-1 gap-4 w-full mt-10 md:w-[200px]  items-center xl:w-[560px]",children:[e.jsx("h1",{className:"p-4 text-sm xl:w-[160px]  border rounded-full w-[140px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover:-translate-x-[-56px]",children:"Find out more"}),e.jsx("h1",{className:"p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#282728]",children:e.jsx("img",{className:"lg:w-56",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]})})}),e.jsxs("div",{className:"carousel-buttons flex justify-center gap-5",children:[e.jsx("button",{className:"w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]",onClick:a,children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691415903/LYMDATALABS/Pages/Home/asset_59_wsgb7l_e3bvws.svg"})}),e.jsxs("div",{className:"text-gray-500 text-xl w-14 h-14 rounded-full  flex items-center justify-center",children:[i[s].id,"/",i.length]}),e.jsx("button",{className:"w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]",onClick:d,children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]})]})]})},R=()=>(k("LYM DATA | Home"),e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(C,{}),e.jsx(M,{}),e.jsx(P,{}),e.jsx(H,{}),e.jsx(E,{}),e.jsx(F,{}),e.jsx(q,{}),e.jsx(_,{})]}));export{R as default};
