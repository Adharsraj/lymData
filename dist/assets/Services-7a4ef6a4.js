import{r as d,j as e,s as c,h as b,g as u,L as m,N as g,F as j}from"./index-038c362f.js";import{U as v}from"./UseDocumentTitle-9e7b74da.js";const w=()=>{const[a,o]=d.useState(0),l=()=>{o(t=>t===0?r.length-1:t-1)},i=()=>{o(t=>t===r.length-1?0:t+1)},r=[{id:1,title:"E-commerce",details:"Maximize your online sales and customer satisfaction with our data-driven solutions tailored for the ever-evolving e-commerce landscape."},{id:2,title:"Finance and Banking",details:"Drive informed decisions and gain a competitive edge in the financial world with our powerful data analytics tools and expertise."},{id:3,title:"Healthcare",details:"Empower your healthcare organization with data-driven insights to enhance patient outcomes and streamline operations for a healthier future."},{id:4,title:"Travel and Hospitality",details:"Transform your travel business by harnessing the power of data to deliver personalized experiences and exceed customer expectations."},{id:5,title:"Retail",details:"Stay ahead in the dynamic retail industry by unlocking valuable data-driven insights that fuel growth and foster lasting customer relationships."},{id:6,title:"Entertainment",details:"Unleash the potential of data analytics to captivate audiences, optimize content, and revolutionize the entertainment experience."}],[n,s]=d.useState(null),x=t=>{s(t)},h=()=>{s(null)};return e.jsxs("div",{id:"withservices",className:"max-w-[1840px] mx-auto overflow-hidden border",children:[e.jsxs("div",{className:" hidden md:block",children:[e.jsx("h1",{className:"font-mono text-xs ml-8 lg:mt-10 mb-10",children:"Within these 7 industries"}),c.map((t,p)=>e.jsxs("div",{id:t.id,className:`md:flex group md:px-8 w-full h-[320px] m  lg:text-lg lg:py-8 xl:py-16 ${n===t.id?"bg-image":""} ${p!==c.length-1?"border-b":""}`,onMouseEnter:()=>x(t.id),onMouseLeave:h,style:n===t.id?{backgroundImage:`url(${t.img})`,backgroundSize:"cover",backgroundPosition:"center"}:null,children:[e.jsx("div",{children:e.jsx("h1",{className:"mt-3 mb-3 group-hover:text-white md:w-[200px] lg:w-[320px] xl:w-[500px] font-semibold",children:t.head1})}),e.jsxs("div",{children:[e.jsx("h1",{className:"group-hover:text-white",children:t.head2}),e.jsx("div",{className:"flex xl:gap-1   gap-4 w-full mt-5 md:w-[200px] items-center xl:w-[560px]",children:e.jsxs("div",{className:"flex  group/item hover:cursor-pointer ",children:[e.jsx("h1",{className:"p-4 xl:w-[160px] text-base   rounded-full w-[120px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover/item:-translate-x-[-56px]",children:"What we do"}),e.jsx("h1",{className:"p-4 rounded-full  text-white flex text-center items-center w-[40px] xl:h-10 xl:w-[50px] bg-[#282728]",children:e.jsx("img",{className:"lg:w-56",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg",alt:"Arrow Right"})})]})})]})]},t.id))]}),e.jsxs("div",{className:"  md:hidden",children:[e.jsx("h1",{className:"font-mono text-xs ml-8 lg:mt-10 mb-10",children:"Within these 7 industries"}),e.jsxs("div",{className:"carousel-container",children:[e.jsx("div",{className:"carousel-slide flex  flex-col justify-center ",children:e.jsx("div",{className:" w-screen  h-[500px]  px-10   text-center ",children:e.jsxs("div",{className:"border-r border-l",children:[e.jsx("h1",{className:"mt-10 mb-20 text-left px-2 font-bold",children:r[a].title}),e.jsx("h2",{className:"mt-3  h-60 px-2",children:r[a].details}),e.jsxs("div",{className:"flex mb-5 pl-4 xl:gap-1 gap-4 w-full mt-10 md:w-[200px]  items-center xl:w-[560px]",children:[e.jsx("h1",{className:"p-4 text-sm xl:w-[160px]  border rounded-full w-[140px] flex items-center h-10 bg-[#282728] transition-all duration-300 text-white transform group-hover:-translate-x-[-56px]",children:"Find out more"}),e.jsx("h1",{className:"p-4 rounded-full text-white flex text-center items-center w-[40px]  xl:h-10   xl:w-[50px] bg-[#282728]",children:e.jsx("img",{className:"lg:w-56",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]})})}),e.jsxs("div",{className:"carousel-buttons flex justify-center gap-5",children:[e.jsx("button",{className:"w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]",onClick:l,children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691415903/LYMDATALABS/Pages/Home/asset_59_wsgb7l_e3bvws.svg"})}),e.jsxs("div",{className:"text-gray-500 text-xl w-14 h-14 rounded-full  flex items-center justify-center",children:[r[a].id,"/",r.length]}),e.jsx("button",{className:"w-14 h-14 rounded-full flex items-center justify-center text-white bg-[#282728]",onClick:i,children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]})]})]})},f=()=>{b();const a=()=>{const s=document.getElementById("withservices");s&&window.scrollTo({top:s.offsetTop,behavior:"smooth"})},o=()=>{const s=document.getElementById("approach");s&&window.scrollTo({top:s.offsetTop,behavior:"smooth"})},l=()=>{const s=document.getElementById("industries");s&&window.scrollTo({top:s.offsetTop,behavior:"smooth"})},i=()=>{const s=document.getElementById("archieve");s&&window.scrollTo({top:s.offsetTop,behavior:"smooth"})},r=()=>{const s=document.getElementById("services");s&&window.scrollTo({top:s.offsetTop,behavior:"smooth"})};d.useEffect(()=>{u.fromTo("#arrowbottom",{x:0,y:70,rotate:0},{x:0,y:100,rotate:0,delay:1,duration:1.5,repeat:-1,yoyo:!0})},[]);const n={maxWidth:"100%",marginLeft:"10px",transform:"scale(1.8)"};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:"services",className:"bg-[#282728] overflow-hidden",children:[e.jsxs("div",{className:"max-w-[1640px]  mx-auto p-4 font-dm  md:text-xl mb-10 lg:mb-28 bg-[#282728] overflow-hidden ",children:[e.jsx("div",{className:"mt-32  lg:mt-52 xl:mt-60 text-white text-5xl lg:text-6xl xl:w-full  xl:text-8xl  lg:mx-auto lg:w-[900px]",children:e.jsxs("h1",{children:["services",e.jsxs("span",{className:"text-[#7b7b7b]  ",children:[e.jsx("span",{onClick:l,className:"opacity-50 hover:opacity-100 cursor-pointer",children:"/ industries"}),e.jsx("span",{onClick:i,className:"opacity-50 hover:opacity-100 cursor-pointer",children:"/ archive"})]})," ",e.jsx("br",{})," this is what we do best."]})}),e.jsxs("div",{className:"text-white  md:flex md:gap-10 lg:gap-24 xl:gap-72 xl:mr-36 mt-32 z-10 relative ",children:[e.jsx("div",{className:"inline-block hover:cursor-pointer mt-[-20px] mb-20",children:e.jsx("img",{onClick:o,className:"lg:ml-10 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 cursor-pointer animate-bounce",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg",alt:""})}),e.jsxs("div",{className:"md:mt-48",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-semibold mt-10 mb-10",children:["Product Discovery ",e.jsx("br",{})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("h2",{className:"lg:text-sm border-b border-b-[#464546] py-4",children:"Client Strategy"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Product Strategy"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Business Intelligence"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"User Research & Testing"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Product Roadmapping"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Technology Strategy"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Content Strategy"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Data Strategy"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Optimization Strategy"})]}),e.jsxs("div",{className:"md:flex hidden  group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]}),e.jsxs("div",{className:"flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-semibold mt-10 mb-10",children:["Design ",e.jsx("br",{})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("h2",{className:"lg:text-sm border-b border-b-[#464546] py-4",children:"User Experience Design"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Information Architecture"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Interaction Design"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Visual Design"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Prototyping"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Content"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Copywriting"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Digital Branding"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Video Production"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Motion Graphics"})]}),e.jsxs("div",{className:"hidden md:flex group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]}),e.jsxs("div",{className:"flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]})]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-semibold mt-10 mb-10",children:["Technology ",e.jsx("br",{})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("h2",{className:"lg:text-sm border-b border-b-[#464546] py-4",children:"Technical Architecture"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Web Development"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Front End Interface Development"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Back End Development"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Mobile App Development"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"API & CMS Development"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Manual & Automated QA"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Voice Interfaces"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Machine Learning"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Augmented & Mixed Reality"})]}),e.jsxs("div",{id:"",className:"hidden md:flex group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]}),e.jsxs("div",{className:"flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-semibold mt-10 mb-10",children:["Product ",e.jsx("br",{})," discovery"]}),e.jsx("h2",{className:"mt-6 mb-6 lg:text-sm",children:"We set the right processes and methodologies to boost innovation labs and digital product discoveries."}),e.jsxs("div",{className:"text-sm",children:[e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Design thinking processes"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Digital Innovation & transformation workshops"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Blueprints for digital services & customer experiences"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Proof of concepts"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Digital landscape, user and market research"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Digital product ideation & implementation"})]})]}),e.jsxs("div",{className:"hidden md:flex group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]}),e.jsxs("div",{className:"flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-semibold mt-10 mb-10",children:["Growth, Marketing ",e.jsx("br",{})," & Sales"]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("h2",{className:"lg:text-sm border-b border-b-[#464546] py-4",children:"Branding"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Consumer & Shopper Insights"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Customer Experience"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Customer Lifecycle Management"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Digital Marketing"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Green Growth"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Insights & Analytics"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Marketing Return on Investment"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"NeXT Commerce"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Organization & Capabilities"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Pricing"}),e.jsx("h2",{className:"border-b border-b-[#464546] py-4",children:"Sales & Channel Management"})]}),e.jsxs("div",{className:"hidden md:flex group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]}),e.jsxs("div",{className:"flex md:hidden  group hover:cursor-pointer gap-4 w-full   mx-auto",children:[e.jsx("h1",{className:"p-1 mt-10 flex justify-center rounded-full w-[120px] text-white bg-[#7B7B7B] transition-all ",children:"see more"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[40px] bg-[#7B7B7B]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})]})]})]})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418614/LYMDATALABS/Pages/Services/asset_0_iofmqv_n1fgub.png",className:"absolute opacity-10 xl:left-[-550px]  left-[-350px] top-[820px]",alt:""})}),e.jsx("div",{className:"overflow-hidden",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418667/LYMDATALABS/Pages/Services/asset_1_ixuqhj_zx5ems.png",className:"absolute  opacity-10  top-[1400px]",alt:""})})]}),e.jsx(e.Fragment,{children:e.jsx("div",{id:"approach",className:"max-w-[1640px]   mx-auto p-4  md:text-xl  ",children:e.jsxs("div",{className:"lg:mt-20",children:[e.jsxs("div",{className:"md:hidden",children:[e.jsxs("div",{className:"flex justify-between align-middle items-center",children:[e.jsx("h1",{children:"approach"}),e.jsx("img",{className:"hover:animate-spin",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"",style:{animationDuration:"3s"}})]}),e.jsxs("div",{className:"text-[25px]  xl:text-[82px] xl:w-[560px] mx-auto text-left font-helvetica leading-10  text-[#7b7b7b]  mt-10  mb-16",children:[e.jsx("h1",{children:"Businesses can achieve growth and success in the digital era by utilizing data and its associated technologies. Our company specializes in assisting organizations to leverage the potential of data-driven intelligence, upgrade their core technology."}),e.jsx(m,{to:"/contact",children:e.jsxs("div",{className:"flex group hover:cursor-pointer gap-4 w-[300px] xl:w-[560px] mx-auto",children:[e.jsx("h1",{className:"p-2 mt-10 flex justify-center text-base rounded-full w-[200px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"Dive into contact"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[45px] bg-[#282728]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})})]})]}),e.jsxs("div",{className:"hidden md:block mt-20 relative overflow-hidden",children:[e.jsxs("div",{className:"flex justify-between xl:px-16 lg:px-5  align-middle items-center",children:[e.jsx("h1",{className:"text-sm",children:"approach"}),e.jsxs("h1",{className:"text-[38px] xl:text-[42px] hidden w-[600px] leading-10",children:["We're challengers at heart and ",e.jsx("br",{}),"builders by nature."]}),e.jsx("img",{className:"hover:animate-spin",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691412277/LYMDATALABS/Pages/Home/asset_61_jtdinc_jfsfpu.svg",alt:"",style:{animationDuration:"3s"}})]}),e.jsx("div",{className:"text-[42px] lg:mt-[-40px] lg:text-[47px]  w-[600px] xl:text-[42px] xl:w-[560px] mx-auto text-left   leading-10   text-[#7b7b7b]   mb-16",children:e.jsx("h1",{className:"lg:text-4xl  lg:leading-[44px]  font-helvetica some-element text-[#7b7b7b]  lg:w-[690px] ",children:"Businesses can achieve growth and success in the digital era by utilizing data and its associated technologies. Our company specializes in assisting organizations to leverage the potential of data-driven intelligence, upgrade their core technology."})}),e.jsx(m,{to:"/contact",children:e.jsxs("div",{className:"flex group hover:cursor-pointer gap-4 w-[600px] xl:w-[560px] mx-auto",children:[e.jsx("h1",{className:"p-2 mt-10 flex justify-center rounded-full w-[220px] text-white bg-[#282728] transition-all duration-300 transform group-hover:-translate-x-[-56px]",children:"Dive into contact"}),e.jsx("h1",{className:"p-2 mt-10 flex items-center rounded-full w-[45px] bg-[#282728]",children:e.jsx("img",{src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691414574/LYMDATALABS/Pages/Home/asset_60_lqw1hz_xibjq8.svg"})})]})}),e.jsx("img",{className:"hidden xl:flex absolute z-10 top-[150px] left-0 transform  scale-150 overflow-hidden   ",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418735/LYMDATALABS/Pages/Services/lines2_tfqf81_au43wv.png",alt:"img"})]})]})})}),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-[#F4F4F4] ",children:[e.jsx("div",{id:"industries",className:"max-w-[1640px]  mx-auto p-4 font-dm  relative  md:text-xl bg-[#F4F4F4]  ",children:e.jsx("div",{className:"relative md:mt-20   xl:mt-40 text-[#000] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]",children:e.jsx("div",{className:"xl:mt-[-150px] md:mt-[-130px]    mb-20",children:e.jsxs("div",{className:"relative overflow-hidden md:h-[400px] h-[400px] lg:h-[500px] mb-10 ",children:[e.jsx("img",{className:"mt-80 hidden md:flex "}),e.jsxs("h1",{className:"absolute mt-32 xl:mt-[-200px] md:mt-[-100px] lg:mt-[-150px]",children:[e.jsx("span",{onClick:r,className:"opacity-20 hover:opacity-50 hover:cursor-pointer",children:"services"}),e.jsxs("span",{onClick:l,className:"text-[#424142] ",children:["/ industries /"," "]}),e.jsxs("span",{onClick:i,className:"opacity-20 hover:opacity-50 hover:cursor-pointer",children:[" ","archive"]})," ",e.jsx("br",{})," ",e.jsx("span",{className:"text-[#424142] mb-10 ",children:"we are experts in."})]}),e.jsx("img",{onClick:a,className:"absolute lg:ml-20 mt-80 md:mt-28 animate-bounce mb-10 cursor-pointer",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691413112/LYMDATALABS/Pages/Home/asset_41_bkjksi_gvzx8a.svg",alt:""})]})})})}),e.jsx(w,{})]}),e.jsx("div",{id:"archieve",className:"max-w-[1640px]  mx-auto p-4 font-dm  relative  md:text-xl bg-[#F4F4F4]  ",children:e.jsx("div",{className:"relative mt-20   xl:mt-40 text-[#000] text-5xl lg:text-6xl xl:w-full   xl:text-8xl  lg:mx-auto lg:w-[900px]",children:e.jsx("div",{className:"xl:mt-[-150px] md:mt-[-130px] mt-[-200px]  mb-20",children:e.jsxs("div",{className:"relative overflow-hidden md:h-[400px] h-[550px] lg:h-[500px] mb-10 ",children:[e.jsx("img",{style:n,className:"mt-32",src:"https://res.cloudinary.com/https-www-lymdata-com/image/upload/v1691418735/LYMDATALABS/Pages/Services/lines2_tfqf81_au43wv.png",alt:"Sample Image"}),e.jsxs("h1",{className:"absolute xl:mt-[-200px] md:mt-[-100px] lg:mt-[-150px]",children:[e.jsx("span",{onClick:r,className:"opacity-20 hover:opacity-50 hover:cursor-pointer",children:"services"}),e.jsxs("span",{onClick:l,className:"opacity-20 hover:opacity-50 hover:cursor-pointer ",children:["/ industries /"," "]}),e.jsxs("span",{onClick:i,className:"text-[#424142] cursor-pointer",children:[" ","archive"]})," ",e.jsx("br",{})," ",e.jsx("span",{className:"text-[#424142] mb-10 ",children:"Leading the way in digital design & innovation."})]})]})})})})]})]})},B=()=>(v("LYM DATA | Services"),e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(f,{}),e.jsx(j,{})]}));export{B as default};
