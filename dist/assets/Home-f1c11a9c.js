import{r as l,j as e,g,L as h,p as b,f as k,s as f,N as z,F as S}from"./index-f1ea4aa6.js";import{e as A}from"./index-a704afdc.js";import{i as L}from"./ardwn-22ea3cfe.js";import{U as C}from"./UseDocumentTitle-865385f7.js";const B="/assets/giphy-f5c5e074.webp",D=()=>{const[a,n]=l.useState(!1),[t,d]=l.useState({fullName:"",email:"",mobileNumber:"",companyName:"",message:""}),[i,r]=l.useState(!1),[c,u]=l.useState(!1);l.useEffect(()=>{const o=setTimeout(()=>{localStorage.getItem("popupShown")||n(!0)},4e3);return()=>clearTimeout(o)},[]);const x=()=>{n(!1),localStorage.setItem("popupShown","true")},s=o=>{const{name:m,value:_}=o.target;d({...t,[m]:_})},p=()=>{d({fullName:"",email:"",mobileNumber:"",companyName:"",message:""})},w=async o=>{o.preventDefault(),r(!0);try{await A.send("service_lg0sfcn","template_fbloykc",{from_name:t.fullName,to_name:"Adarsh",from_email:t.email,to_email:"3301ad@gmail.com",message:t.message},"K7UCOY8ZVCrNGalrE"),r(!1),u(!0),p();const m=setTimeout(()=>{n(!1),localStorage.setItem("popupShown","true")},2e3);console.log("Email sent successfully")}catch(m){console.error("Error sending email:",m)}},[v,j]=l.useState(!1),[N,y]=l.useState(!1);return l.useEffect(()=>{const o=()=>{j(window.innerHeight<=615),y(window.innerWidth>=1200&&window.innerWidth<=1350)};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o)}},[]),e.jsx(e.Fragment,{children:a&&e.jsx("div",{className:"fixed inset-0 z-50 md:mt-14 mt-24 flex justify-center items-center backdrop-blur-lg",children:e.jsx("div",{className:"absolute bg-white shadow-lg p-6 rounded-lg w-full sm:w-full lg:w-[500px]",children:v&&N?e.jsxs("div",{children:[e.jsx("button",{className:"absolute top-2 right-2 text-gray-600 hover:text-gray-800",onClick:x,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("h2",{className:"text-2xl font-bold mb-0 text-black",children:"Get a Free Consultation"}),e.jsx("h3",{children:"Let's discover the possibilities of working together."}),e.jsx("h3",{children:"Schedule an introductory call."}),e.jsxs("form",{onSubmit:w,children:[e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"text",name:"fullName",value:t.fullName,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3",placeholder:"Full Name *",required:!0})}),e.jsx("div",{className:"mb-1",children:e.jsx("input",{type:"email",name:"email",value:t.email,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3",placeholder:"Email *",required:!0})}),e.jsx("div",{className:"mb-1",children:e.jsx("input",{type:"number",name:"mobileNumber",value:t.mobileNumber,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3",placeholder:"Mobile Number *",required:!0})}),e.jsx("div",{className:"mb-1",children:e.jsx("input",{type:"text",name:"companyName",value:t.companyName,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3",placeholder:"Company Name"})}),e.jsx("div",{className:"mb-1",children:e.jsx("textarea",{name:"message",value:t.message,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-2 px-3",placeholder:"Message"})}),e.jsx("div",{className:"flex justify-center items-center",children:c?e.jsx("h2",{className:"bg-gradient-to-r from-indigo-400 to-cyan-400 text-white text-center w-[300px] p-2",children:"Mail sent successfully, our team will get in touch with you soon"}):e.jsx("button",{type:"submit",className:`p-3 md:mt-8 flex justify-center rounded-full w-[180px] border cursor-pointer text-white bg-gradient-to-r from-indigo-400 to-cyan-400  ${i?"bg-black":"hover:from-indigo-400 hover:to-cyan-400"}`,disabled:i,children:i?e.jsxs("svg",{className:"animate-spin h-5 w-5 text-black mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4 4a1 1 0 00-.3.7V12"})]}):"Submit"})})]})]}):e.jsxs("div",{children:[e.jsx("button",{className:"absolute top-2 right-2 text-gray-600 hover:text-gray-800",onClick:x,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("h2",{className:"text-4xl font-bold mb-4 text-black",children:"Get a Free Consultation"}),e.jsx("h3",{children:"Let's discover the possibilities of working together."}),e.jsx("h3",{children:"Schedule an introductory call."}),e.jsxs("form",{onSubmit:w,children:[e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"text",name:"fullName",value:t.fullName,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Full Name *",required:!0})}),e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"email",name:"email",value:t.email,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Email *",required:!0})}),e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"number",name:"mobileNumber",value:t.mobileNumber,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Mobile Number *",required:!0})}),e.jsx("div",{className:"mb-2",children:e.jsx("input",{type:"text",name:"companyName",value:t.companyName,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Company Name"})}),e.jsx("div",{className:"mb-2",children:e.jsx("textarea",{name:"message",value:t.message,onChange:s,className:"w-full border-b border-gray-500 bg-transparent outline-none py-4 px-3",placeholder:"Message"})}),e.jsx("div",{className:"flex justify-center items-center",children:c?e.jsx("h2",{className:"bg-gradient-to-r from-indigo-400 to-cyan-400 text-white text-center w-[300px] p-2",children:"Mail sent successfully, our team will get in touch with you soon"}):e.jsx("button",{type:"submit",className:`p-3 md:mt-8 flex justify-center rounded-full w-[180px] border cursor-pointer text-white bg-gradient-to-r from-indigo-400 to-cyan-400 ${i?"bg-black":"hover:from-indigo-400 hover:to-cyan-400"}`,disabled:i,children:i?e.jsxs("svg",{className:"animate-spin h-5 w-5 text-black mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4 4a1 1 0 00-.3.7V12"})]}):"Submit"})})]})]})})})})},M=()=>{const a=()=>{const r=document.getElementById("howethink");r&&window.scrollTo({top:r.offsetTop,behavior:"smooth"})};l.useEffect(()=>{g.fromTo("#arrowbottom",{x:0,y:70,rotate:0},{x:0,y:100,rotate:0,delay:1,duration:1.5,repeat:-1,yoyo:!0}),g.from("h6 div",1.5,{yPercent:100,ease:"power4.inOut",stagger:{amount:.5}}),g.to("h6",1.5,{clipPath:"polygon(0 0,100% 0,100% 100%,0% 100%)",ease:"power4.inOut",stagger:{amount:.5}})},[]);const[n,t]=l.useState(!1),[d,i]=l.useState(!1);return l.useEffect(()=>{const r=()=>{t(window.innerHeight<=615),i(window.innerWidth>=1200&&window.innerWidth<=1350)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[]),e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx("div",{className:" bg-black text-white ",children:e.jsx("div",{className:"max-w-[1640px] mx-auto  mt-[-10px]     md:mt-[-16px] lg:mt-0  overflow-hidden ",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:" ",children:e.jsxs("section",{className:"clip-text-video  ",children:[e.jsx("img",{className:"xl:h-screen max-w-[1640px] xl:mt-0 opacity-80 lg:h-screen lg:mt-0  md:mt-[90px] md:h-[280px]   h-[280px] mt-[88px]   w-full px-6  z-0",id:"running",src:B,alt:"GIF"}),e.jsx("div",{className:"clip-text-video__text layer lg:h-screen flex items-center text-center z-0 ",children:e.jsx("div",{className:"overlay  flex flex-col md:justify-center font-aeonic uppercase text-[134px]",children:e.jsx("div",{className:"col  ",children:n&&d?e.jsxs(e.Fragment,{children:[e.jsx("h6",{className:"md:text-left    xl:w-full lg:whitespace-nowrap lg:text-8xl md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ",children:e.jsx("div",{children:"Data-driven"})}),e.jsx("h6",{className:"md:text-left text-center  lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0",children:e.jsx("div",{children:"Solutions"})}),e.jsx("h6",{className:"md:text-left text-center   lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0",children:e.jsx("div",{children:" Shaping your"})}),e.jsx("h6",{className:"md:text-left text-center lg:whitespace-nowrap   xl:w-full lg:text-8xl w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0",children:e.jsx("div",{children:"digital Success"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("h6",{className:"md:text-left  xl:text-9xl  xl:w-full lg:whitespace-nowrap lg:text-8xl md:text-7xl  text-4xl md:w-full  w-[300px] mx-auto md:ml-0 ",children:e.jsx("div",{children:"Data-driven"})}),e.jsx("h6",{className:"md:text-left text-center xl:text-9xl lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-7xl text-4xl md:w-full  w-[300px]  md:ml-0",children:e.jsx("div",{children:"Solutions"})}),e.jsx("h6",{className:"md:text-left text-center xl:text-9xl  lg:whitespace-nowrap  xl:w-full lg:text-8xl md:text-6xl text-4xl md:w-full  w-[300px]  md:ml-0",children:e.jsx("div",{children:" Shaping your"})}),e.jsx("h6",{className:"md:text-left text-center lg:whitespace-nowrap  xl:text-9xl   xl:w-full lg:text-8xl w-[300px]   mx-auto md:text-5xl text-4xl  md:w-full   md:ml-0",children:e.jsx("div",{children:"digital Success"})})]})})})})]})}),e.jsx("div",{className:"hidden hover:cursor-pointer lg:inline-block top-1/2 absolute px-0 my-60",children:e.jsx("img",{onClick:a,className:"lg:ml-10 w-14 h-14 rounded-full bg-gray-400 cursor-pointer animate-bounce",src:L,alt:""})})]})})})]})},E=()=>e.jsx("div",{id:"howethink",className:"bg-[#F8FAFC] overflow-hidden ",children:e.jsx("div",{className:"max-w-[1640px]  mx-auto p-4 font-helvetica  md:text-xl bg-[#F8FAFC] ",children:e.jsxs("div",{className:"lg:mt-20",children:[e.jsxs("div",{className:"md:hidden",children:[e.jsxs("div",{className:"flex justify-between align-middle items-center",children:[e.jsx("h1",{className:"mt-10 ",children:"How we think"}),e.jsx("img",{className:" hover:animate-spin w-10",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"",style:{animationDuration:"3s"}})]}),e.jsxs("div",{className:"text-[25px] mt-5 some-element ",children:[e.jsx("h1",{children:"We're challengers at heart and"}),e.jsx("h1",{children:"builders by nature."})]}),e.jsx("div",{className:"text-[25px] some-element  xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10  text-[#7b7b7b] mt-14  mb-4",children:e.jsx("h1",{children:"LYM Data Labs is a collective brain, formed by a diverse group of people who bring years of experience, dedication and commitment to our daily work."})}),e.jsx(h,{to:"/about",children:e.jsxs("div",{className:"flex   group hover:cursor-pointer gap-2 w-[300px] lg:ml-56 xl:mx-auto  xl:w-[560px]  lg:mb-7",children:[e.jsx("h1",{className:"p-2 text-sm flex items-center justify-center mt-10 rounded-full w-[150px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white transition-all ",children:"Dive into our culture"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[35px] bg-gradient-to-r from-indigo-400 to-cyan-400 text-white",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412489/LYMDATALABS/Pages/Home/asset_49_lb3zxr_vnzxpt.svg"})})]})})]}),e.jsxs("div",{className:"hidden md:block mt-20 relative",children:[e.jsxs("div",{className:"flex justify-between xl:px-5  align-middle items-center",children:[e.jsx("h1",{children:"How we think"}),e.jsxs("h1",{className:"text-[35px]  xl:text-[42px]  ml-[-20px] some-element  xl:w-[610px]  lg:w-[600px] leading-10",children:["We're challengers at heart and ",e.jsx("br",{}),"builders by nature."]}),e.jsx("img",{className:"hover:animate-spin",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"",style:{animationDuration:"3s"}})]}),e.jsx("div",{className:"text-[40px] w-[600px]  lg:ml-56 xl:mx-auto  xl:text-[40px] xl:w-[570px] mx-auto text-left   leading-10  text-[#7b7b7b]  mt-20 mb-16 lg:mb-10",children:e.jsx("h1",{children:"LYM Data Labs is a collective brain, formed by a diverse group of people who bring years of experience, dedication and commitment to our daily work"})}),e.jsx("div",{className:"flex      gap-4 w-[600px] lg:ml-56 xl:mx-auto  xl:w-[570px] mx-auto lg:mb-7",children:e.jsx(h,{to:"/about",children:e.jsxs("div",{className:"flex  group  gap-2 ",children:[e.jsx("h1",{className:"p-2 flex border  items-center justify-center mt-10 rounded-full w-[220px] bg-black text-white transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"Dive into our culture"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[45px] bg-black text-white",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg",alt:"Arrow Right"})})]})})}),e.jsx("img",{className:"hidden xl:flex absolute  z-0 top-[240px] left-0 transform -translate-x-[160px] -translate-y-1/2 scale-150",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690187629/assets/assets/lines2_tfqf81.png",alt:"img"})]})]})})}),T=()=>{const a=l.useRef(null),n=()=>{const t=document.getElementById("withinseven");t&&window.scrollTo({top:t.offsetTop,behavior:"smooth"})};return l.useEffect(()=>{a.current&&(a.current.playbackRate=2)},[]),e.jsx("div",{className:"max-w-[1640px] mx-auto p-4 overflow-hidden",children:e.jsxs("div",{className:"grid md:flex md:items-center gap-4",children:[e.jsxs("div",{className:"col-span-3 md:col-span-1",children:[e.jsxs("h1",{className:"font-mono lg:mb-20 text-sm",children:["Industries we know ",e.jsx("br",{})," and understand"]}),e.jsxs("h2",{className:"text-7xl lg:mb-10 lg:text-8xl xl:text-[190px] font-bold",children:["experi ",e.jsx("br",{})," ence"]}),e.jsx("img",{onClick:n,className:"lg:ml-20 cursor-pointer animate-bounce",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg",alt:""})]}),e.jsx("div",{className:"relative col-span-3 md:col-span-1",style:{zIndex:"-1"},children:e.jsx("video",{className:"w-full h-full object-cover filter",src:"https://res.cloudinary.com/https-www-lymdata-com/video/upload/v1691413588/LYMDATALABS/Pages/Home/home-phones_gkoiuf_s03eip.mp4",autoPlay:!0,loop:!0,muted:!0,ref:a})}),e.jsxs("div",{className:"col-span-3 md:col-span-1",children:[e.jsx("img",{className:"lg:mt-[-90px] lg:mb-20 hover:animate-spin",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"star",style:{animationDuration:"3s"}}),e.jsx("h1",{className:"font-semibold text-2xl mt-2 mb-2 lg:mb-10",children:"We know what we're doing"}),e.jsx("h2",{children:"we have dedicated ourselves to developing and refining digital solutions, gaining valuable insights into the key factors that contribute to the long-term success of businesses."})]})]})})},H=()=>e.jsx("div",{className:"bg-[#BEBDBE] relative",children:e.jsxs("div",{className:"max-w-[1640px] relative bg-[#BEBDBE]   mx-auto  font-dm  md:text-xl overflow-hidden ",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414521/LYMDATALABS/Pages/Home/giphy_2_udzb4u.webp",className:"scale-150 opacity-60"})}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"  flex flex-between",children:[e.jsx("h1",{className:"md:hidden z-10  text-sm font-mono py-1",children:"Fields of expertise"}),e.jsxs("div",{className:"hidden  md:flex md:flex-col w-[200px] ml-auto mr-16 text-white text-sm",children:[e.jsx("h1",{className:" z-10  mt-5 mb-1",children:"We are enthusiastic about empowering businesses to build amazing user experiences through data-driven design."}),e.jsx("h1",{className:"z-10",children:"Our strategy centres on utilising data and insights to create successfully engage, delight, and convert people."})]})]}),e.jsx("div",{className:"",children:e.jsx("div",{className:"relative z-10",children:e.jsxs("div",{className:"hidden md:block text-white",children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-[100px] lg:text-[150px] xl:text-[200px]",children:[e.jsx("span",{className:"lg:text-[135px] xl:text-[180px]",children:"D"}),"ata"]})}),e.jsxs("div",{className:"flex items-center justify-around text-[100px] xl:text-[200px] xl:mt-32 lg:text-[140px] mt-14 lg:mt-20 ",children:[e.jsx("img",{className:"lg:w-20 hover:animate-spin",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"imgsmallviewstar ",style:{animationDuration:"3s"}}),e.jsx("h2",{children:"driven"}),e.jsx("h2",{children:"design"})]})]})})}),e.jsxs("div",{className:"hidden relative   md:flex text-white mt-32 xl:ml-20  justify-between md:items-center w-[600px] xl:w-[900px] lg:mb-16 ",children:[e.jsx("h1",{className:"",children:"Fields of expertise "}),e.jsx("div",{className:"flex   xl:gap-1  gap-4 w-[200px] justify-end md:w-[200px]  items-center xl:w-[560px] ",children:e.jsx(h,{to:"/services",children:e.jsxs("div",{className:"flex group",children:[e.jsx("h1",{className:"p-4  xl:w-[160px] flex text-center items-center justify-center lg:w-[160px] lg:h-10 rounded-full w-[220px] bg-[#000] transition-all duration-300  transform group-hover:-translate-x-[-56px]",children:"What we do"}),e.jsx("h1",{className:"p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#000]",children:e.jsx("img",{className:"lg:w-56",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})})})]}),e.jsxs("div",{className:"md:hidden font-helvetica relative text-white text-6xl",children:[e.jsxs("h1",{children:[e.jsx("span",{className:"text-6xl",children:"D"}),"ata"]}),e.jsxs("div",{className:" md: items-center flex gap-2 justify-center",children:[e.jsx("img",{className:"hover:animate-spin w-10",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"imgsmallviewstar ",style:{animationDuration:"3s"}}),e.jsx("h1",{children:"driven"})]}),e.jsx("h1",{children:"design"})]}),e.jsxs("div",{className:" relative md:hidden md:flex-col w-[200px] mx-auto mr-16 text-white  text-sm",children:[e.jsx("h1",{className:" mt-5 w-[200px]  mb-5 py-5",children:"We are enthusiastic about empowering businesses to build amazing user experiences through data-driven design."}),e.jsxs("h1",{className:"w-[200px]",children:[" ","Our strategy centres on utilising data and insights to create successfully engage, delight, and convert people."]}),e.jsx(h,{to:"/services",children:e.jsxs("div",{className:"flex gap-4 w-[200px] xl:w-[560px] mx-auto",children:[e.jsx("h1",{className:"text-center p-2 mt-10 rounded-full w-[220px] bg-[#000] transition-all ",children:"What we do"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full text-white w-[40px] bg-[#000]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})})]}),e.jsx("div",{className:"z-10 relative mx-0 md:mx-0 ",children:e.jsx("style",{children:`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `})})]})]})}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-[#BCBCBC] hidden md:block",children:e.jsx("div",{className:"max-w-[1840px]  bg-[#BCBCBC] mb-10   mx-auto p-4 md:p-0  md:text-xl overflow-hidden  ",children:e.jsx("div",{className:"md:flex",children:b.map(a=>e.jsx("div",{className:"w-full md:flex-grow  md:mb-0 z-10 group cursor-pointer relative",children:e.jsx("div",{className:"text-gray-800 md:border-r md:p-2 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100",children:e.jsxs("div",{className:"border md:border-transparent p-2 md:p-0 h-[430px]  md:h-96 flex flex-col justify-around",children:[e.jsx("h1",{className:"md:text-lg text-2xl  mx-auto text-white group-hover:text-black font-semibold   lg:w-[78%] ",children:a.head1}),e.jsx("div",{className:"w-4/5  mx-auto",children:e.jsx("h1",{className:"p-3 md:invisible     mt-5 mb-5 group-hover:visible rounded-full text-white flex text-center items-center w-[40px] xl:h-8 xl:w-[50px] bg-[#282728]",children:e.jsx("img",{className:"lg:w-5 ",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})}),e.jsx("h1",{className:" w-4/5   mx-auto md:text-transparent group-hover:text-black",children:a.head2})]})})},a.id))})})}),e.jsx("div",{className:"bg-[#BCBCBC]  md:hidden",children:e.jsx("div",{className:"max-w-[1840px]  bg-[#BCBCBC]    mx-auto p-4 md:p-0  md:text-xl overflow-hidden  ",children:e.jsx("div",{className:"md:flex",children:b.map(a=>e.jsx("div",{className:"w-full md:flex-grow  md:mb-0 z-10 group cursor-pointer relative",children:e.jsx("div",{className:"text-gray-800 md:border-r md:p-2 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100",children:e.jsxs("div",{className:"border md:border-transparent p-2 md:p-0 h-[430px]  md:h-96 flex flex-col justify-around",children:[e.jsx("h1",{className:"md:text-lg text-2xl  text-white group-hover:text-black font-semibold   lg:w-4/5 ",children:a.head1}),e.jsxs("div",{className:"  mx-auto",children:[e.jsx("h1",{className:"p-2 md:invisible     mt-5 mb-5 group-hover:visible rounded-full text-white flex text-center items-center w-[33px] xl:h-8 xl:w-[50px] bg-[#E3E3E3]",children:e.jsx("h2",{className:"text-black",children:e.jsx(k,{})})}),e.jsx("h1",{className:"mx-auto md:text-transparent group-hover:text-black",children:a.head2})]})]})})},a.id))})})})]}),q=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"overflow-hidden mt-20 mb-20",children:e.jsx("div",{className:" center-container",children:e.jsx("section",{id:"features",className:"rlr-section",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"rlr-logos-slider",children:e.jsx("div",{className:"rlr-logos-slider__items rlr-logos-slider__itemss",children:e.jsxs("div",{className:"slide-track",children:[e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/wayanad_adobe_express_lcbaed.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/homeborn_adobe_express_frbg9x.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/pappaboo_adobe_express_pgppg6.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_fisheries_adobe_express_rydpdl.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/educus_global_adobe_express_fnwpdc.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_tourism_adobe_express_siwiei.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/alhub_adobe_express_rpvubr.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/Artboard_1_adobe_express_fbvzl0.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/famfed_nature_adobe_express_um7n58.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272253/aquaquarduae_adobe_express_smgvbq.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272253/acon_printing_press_adobe_express_oyqrxs.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/educus_global_adobe_express_fnwpdc.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272250/farmfed_tourism_adobe_express_siwiei.svg",width:187,height:64,alt:"partner logo"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{"data-sizes":"auto",className:"lazyload",src:"https://res.cloudinary.com/db5gkedee/image/upload/v1690272252/alhub_adobe_express_rpvubr.svg",width:187,height:64,alt:"partner logo"})})]})})})})})})})}),P=()=>{const[a,n]=l.useState(0),t=()=>{n(s=>s===0?i.length-1:s-1)},d=()=>{n(s=>s===i.length-1?0:s+1)},i=[{id:1,title:"E-commerce",details:"Maximize your online sales and customer satisfaction with our data-driven solutions tailored for the ever-evolving e-commerce landscape."},{id:2,title:"Finance and Banking",details:"Drive informed decisions and gain a competitive edge in the financial world with our powerful data analytics tools and expertise."},{id:3,title:"Healthcare",details:"Empower your healthcare organization with data-driven insights to enhance patient outcomes and streamline operations for a healthier future."},{id:4,title:"Travel and Hospitality",details:"Transform your travel business by harnessing the power of data to deliver personalized experiences and exceed customer expectations."},{id:5,title:"Retail",details:"Stay ahead in the dynamic retail industry by unlocking valuable data-driven insights that fuel growth and foster lasting customer relationships."},{id:6,title:"Entertainment",details:"Unleash the potential of data analytics to captivate audiences, optimize content, and revolutionize the entertainment experience."}],[r,c]=l.useState(null),u=s=>{c(s)},x=()=>{c(null)};return e.jsxs("div",{id:"withinseven",className:"max-w-[1840px] mx-auto overflow-hidden",children:[e.jsxs("div",{className:" hidden md:block",children:[e.jsx("h1",{className:"font-mono text-xs ml-8 lg:mt-10 mb-10",children:"Within these 7 industries"}),f.map((s,p)=>e.jsxs("div",{id:s.id,className:`md:flex group md:px-8 w-full h-[320px] m  lg:text-lg lg:py-8 xl:py-16 ${r===s.id?"bg-image":""} ${p!==f.length-1?"border-b":""}`,onMouseEnter:()=>u(s.id),onMouseLeave:x,style:r===s.id?{backgroundImage:`url(${s.img})`,backgroundSize:"cover",backgroundPosition:"center"}:null,children:[e.jsx("div",{children:e.jsx("h1",{className:"mt-3 mb-3 group-hover:text-white md:w-[200px] lg:w-[320px] xl:w-[500px] font-semibold",children:s.head1})}),e.jsxs("div",{children:[e.jsx("h1",{className:"group-hover:text-white",children:s.head2}),e.jsx("div",{className:"flex xl:gap-1   gap-4 w-full mt-5 md:w-[200px] items-center xl:w-[560px]",children:e.jsxs("div",{className:"flex  group/item hover:cursor-pointer ",children:[e.jsx("h1",{className:"p-4 xl:w-[160px] text-base   rounded-full w-[120px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover/item:-translate-x-[-56px]",children:"What we do"}),e.jsx("h1",{className:"p-4 rounded-full  text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-[#282728]",children:e.jsx("img",{className:"lg:w-56",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg",alt:"Arrow Right"})})]})})]})]},s.id))]}),e.jsxs("div",{className:"  md:hidden",children:[e.jsx("h1",{className:"font-mono text-xs ml-8 lg:mt-10 mb-10",children:"Within these 7 industries"}),e.jsxs("div",{className:"carousel-container",children:[e.jsx("div",{className:"carousel-slide flex  flex-col justify-center ",children:e.jsx("div",{className:" w-screen  h-[500px]  px-10   text-center ",children:e.jsxs("div",{className:"border-r border-l",children:[e.jsx("h1",{className:"mt-10 mb-20 text-left px-2 font-bold",children:i[a].title}),e.jsx("h2",{className:"mt-3  h-60 px-2",children:i[a].details}),e.jsxs("div",{className:"flex mb-5 pl-4 xl:gap-1 gap-4 w-full mt-10 md:w-[200px]  items-center xl:w-[560px]",children:[e.jsx("h1",{className:"p-4 text-sm xl:w-[160px]  border rounded-full w-[140px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover:-translate-x-[-56px]",children:"Find out more"}),e.jsx("h1",{className:"p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#282728]",children:e.jsx("img",{className:"lg:w-56",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]})})}),e.jsxs("div",{className:"carousel-buttons flex justify-center gap-5",children:[e.jsx("button",{className:"w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]",onClick:t,children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691415903/LYMDATALABS/Pages/Home/asset_59_wsgb7l_e3bvws.svg"})}),e.jsxs("div",{className:"text-gray-500 text-xl w-14 h-14 rounded-full  flex items-center justify-center",children:[i[a].id,"/",i.length]}),e.jsx("button",{className:"w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]",onClick:d,children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]})]})]})},V=()=>(C("LYM DATA | Home"),e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(M,{}),e.jsx(E,{}),e.jsx(H,{}),e.jsx(F,{}),e.jsx(T,{}),e.jsx(q,{}),e.jsx(P,{}),e.jsx(S,{})]}));export{V as default};
