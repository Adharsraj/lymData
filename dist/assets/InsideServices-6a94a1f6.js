import{r as c,j as e,O as x,q as o,v as d,N as m,F as h}from"./index-8fe1b40c.js";import{U as u}from"./UseDocumentTitle-3a70a3d5.js";import{S as p}from"./ServicesGsap-bfdc586b.js";import"./ScrollTrigger-c3252e56.js";const f="/assets/asset 12-ecd60d9c.jpeg",i=[{image1:"https://plus.unsplash.com/premium_photo-1700567963303-1b83673c52a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",image2:"https://images.unsplash.com/photo-1682685797741-f0213d24418c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",text1:"ruttl",desc1:"We have developed ruttl, which is a live website review tool.    ",text2:"Aerotime    ",desc2:"Our modern yet minimalistic designs were well-received by its users    "},{image1:"https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",image2:"https://images.unsplash.com/photo-1682685794761-c8e7b2347702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",text1:"American Technology",desc1:"Incorporated UI and UX principles to attract more visitors while reflecting the company’s core values.    ",text2:"Stories Plus    ",desc2:"Designed their website and created user experience    "},{image1:"https://images.unsplash.com/photo-1682687982298-c7514a167088?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",image2:"https://images.unsplash.com/photo-1682686581663-179efad3cd2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",text1:"Vedantu    ",desc1:"Powering the next generation education with Vedantu    ",text2:"American Technology ",desc2:"Incorporated UI and UX principles to attract more visitors while reflecting the company’s core values.    "}];function w(){const[s,a]=c.useState(0);c.useEffect(()=>{const r=setTimeout(()=>{const n=s===i.length-1?0:s+1;a(n)},5e3);return()=>clearTimeout(r)},[s]);const l=()=>{const r=s===0?i.length-1:s-1;console.log(r),a(r)},t=()=>{const r=s===i.length-1?0:s+1;a(r)};return e.jsxs("div",{className:"bg-white",children:[e.jsxs("div",{className:"carousel hidden md:block   max-w-[1150px] mx-auto lg:pb-10   md:min-h-screen",children:[e.jsx("h1",{className:"text-5xl font-bold pt-10 pb-10 lg:pt-36 lg:pb-20",children:"Case Studies"}),e.jsxs("div",{className:"carousel-inner flex relative min-h-[500px] ",children:[e.jsx("button",{onClick:l,className:"carousel-button absolute top-[50%] left-[-2%] previous bg-yellow-200 rounded-full flex justify-center items-center h-10 w-10 my-auto",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),e.jsxs("div",{className:"carousel-image-container gap-10  grid grid-cols-2 md:h-[50vh] w-full ",children:[e.jsxs("div",{className:" flex flex-col",children:[e.jsx("img",{src:i[s].image1,alt:"img",className:"carousel-image max-w-[570px] h-[400px] mb-10  "}),e.jsx("h1",{className:"text-3xl font-bold mb-6 ",children:i[s].text1}),e.jsx("p",{className:"",children:i[s].desc1})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("img",{src:i[s].image2,alt:"img",className:"carousel-image max-w-[570px] h-[400px] mb-10   "}),e.jsx("h1",{className:"text-3xl font-bold mb-6",children:i[s].text2}),e.jsx("p",{children:i[s].desc2})]})]}),e.jsx("button",{onClick:t,className:"carousel-button top-[50%] right-[-2%] next absolute bg-yellow-200 rounded-full h-10 w-10 my-auto flex justify-center items-center",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})]})]}),e.jsxs("div",{className:"carousel  md:hidden   max-w-[1150px] mx-auto lg:pb-10   md:min-h-screen",children:[e.jsx("h1",{className:"text-3xl p-2 font-bold pt-10 pb-10 lg:pt-36 lg:pb-20 ",children:"Case Studies"}),e.jsxs("div",{className:"carousel-inner flex relative min-h-[500px] ",children:[e.jsx("button",{onClick:l,className:"carousel-button absolute top-[50%] left-[-2%] previous bg-yellow-200 rounded-full flex justify-center items-center h-10 w-10 my-auto",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),e.jsx("div",{className:"carousel-image-container gap-10  grid  md:h-[50vh] w-full ",children:e.jsxs("div",{className:" flex flex-col px-2",children:[e.jsx("img",{src:i[s].image1,alt:"img",className:"carousel-image max-w-[300px] mx-auto h-[400px] mb-10  "}),e.jsx("h1",{className:"text-3xl font-bold mb-6 ",children:i[s].text1}),e.jsx("p",{className:"",children:i[s].desc1})]})}),e.jsx("button",{onClick:t,className:"carousel-button top-[50%] right-[-2%] next absolute bg-yellow-200 rounded-full h-10 w-10 my-auto flex justify-center items-center",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})})]})]})]})}const g=()=>e.jsxs("div",{className:"bg-[#F7F7F7]",children:[e.jsx("h1",{className:"p-4 text-3xl max-w-[1150px] font-bold md:text-center mx-auto md:pt-20 md:pb-20 md:text-5xl ",children:"Top Clients"}),e.jsx("div",{className:" grid  max-w-[1150px] mx-auto gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 pb-10 lg:px-0 mb-10",children:x.map(s=>e.jsxs("div",{className:" bg-white p-2 md:px-8 flex flex-col justify-center items-center ",children:[e.jsx("img",{className:"w-20 h-14 mt-10 md:mt-24  md:w-[126px] md:h-[78px]",src:s.img,alt:"images"}),e.jsx("h1",{className:"h-10 mt-10 font-bold",children:s.title}),e.jsx("p",{className:"text-center h-[200px] lg:h-[150px] md:h-[230px]",children:s.description})]}))}),e.jsx("h1",{className:"w-[200px]  border-2  mx-auto flex text-lg justify-center border-black items-center h-16 rounded-full font-bold p-5",children:" See all clients"}),e.jsx("div",{className:"pb-10"})]}),j=()=>{const[s,a]=c.useState(""),l=t=>{a(s===t?"":t)};return e.jsxs("div",{className:"max-w-[1150px] mx-auto px-2 mt-16 ",children:[e.jsx("h1",{className:"text-2xl font-bold mb-5  w-[320px] md:text-4xl lg:text-5xl md:w-[400px] lg:w-[450px]",children:"Frequently Asked Questions"}),e.jsx("h2",{className:"text-xl leading-10 md:w-[400px] lg:w-[450px] ",children:"If you have questions that are not listed here send them to us via email."}),e.jsxs("div",{className:"md:flex w-full",children:[e.jsx("img",{className:"p-10",src:"https://www.brucira.com/assets/img/faq.svg",alt:"",srcset:""}),e.jsxs("div",{className:"leading-7 md:w-full flex flex-col gap-10 pt-10 pb-10",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"How can we start a project together?"}),e.jsxs("h2",{onClick:()=>{l("one")},className:"w-10 text-3xl flex justify-center  items-center",children:[" ",s==="one"?"-":"+"]})]}),s==="one"&&e.jsx("h4",{className:"pt-4 pb-4",children:"Fill the contact form or Write to us at hello@brucira.com. We will quickly respond and then schedule the discovery call. After we understand your requirements, project scope and deadline through it then we would revert with the cost estimate and statement of work. Once that is approved, we will initiate the project by scheduling calls with your team."})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"What sectors do you specialise in?"}),e.jsxs("h2",{onClick:()=>{l("two")},className:"w-10 text-3xl flex justify-center  items-center",children:[" ",s==="two"?"-":"+"]})]}),s==="two"&&e.jsx("h4",{className:"pt-4 pb-4",children:"Over 16+ Industry verticals represented in our agency, offering a valuable perspective on our work. Take a look at our clients: https://www.brucira.com/clients/"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"What is your working model?"}),e.jsxs("h2",{onClick:()=>{l("three")},className:"w-10 text-3xl flex justify-center  items-center",children:[" ",s==="three"?"-":"+"]})]}),s==="three"&&e.jsx("h4",{className:"pt-4 pb-4",children:"We offer two working models. For long-term engagements we offer a team extension model, to help you grow your product. For short–term engagements we offer a project basis model."})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h2",{className:"text-2xl font-bold ",children:"What would you need from me to get started?"}),e.jsxs("h2",{onClick:()=>{l("four")},className:"w-10 text-3xl flex justify-center  items-center",children:[" ",s==="four"?"-":"+"]})]}),s==="four"&&e.jsx("h4",{className:"pt-4 pb-4",children:"As we follow a user-centric approach to design and development, we would need to understand your project requirements in depth. We would need a detailed brief from you. To further chart out the project goals, timelines, resource allocation and more details, we would schedule meetings with you and the team."})]})]})]})]})},b=()=>{const[s,a]=c.useState(""),l=t=>{a(s===t?null:t)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pt-20 p-2 max-w-[1640px] lg:max-w-[1150px] mx-auto",children:[e.jsxs("div",{className:"md:grid md:grid-cols-2 md:min-h-[70vh] md:justify-center md:items-center mx-auto",children:[e.jsxs("div",{className:"md:h-[300px]",children:[e.jsxs("p",{className:"lg:text-7xl text-5xl font-bold",children:["Web ",e.jsx("br",{})," Development"]}),e.jsx("p",{className:"h-16 mt-10 mb-4 bg-black w-[180px] text-white flex justify-center items-center rounded-full ",children:"Get in touch"})]}),e.jsx("p",{className:"text-xl leading-9  md:h-[300px] md:px-10 font-medium",children:"We understand the nuances of websites and apps owing to our focus on user-centric design and development. 150+ businesses have trusted us for creating high-quality digital products."})]}),e.jsxs("div",{className:"md:grid-cols-2 md:grid",children:[e.jsx("img",{className:"md:sticky md:top-0 h-screen pb-10 pt-1",src:f,alt:"typing img"}),e.jsxs("div",{className:"text-2xl ",children:[e.jsxs("h1",{className:"md:text-5xl text-3xl font-bold md:leading-[50px]",children:["Full-stack ",e.jsx("br",{}),"Development"]}),o.map(t=>e.jsxs("div",{className:"mt-10 px-2 lg:w-[450px] lg:mt-32",children:[e.jsx("img",{className:"w-20 h-20 ",src:t.img,alt:"imges"}),e.jsx("p",{className:"text-3xl font-bold mt-4 md:mt-8  md:mb-8",children:t.title}),e.jsx("p",{className:`font-extralight text-[16px] ${t.id=="6"?"md:mb-32":"md:mb-0"}  md:text-[18px] px-2 leading-[30px] mt-4`,children:t.description})]}))]})]})]}),e.jsx("div",{className:"bg-black md:min-h-[100vh] flex justify-center items-center text-white",children:e.jsxs("div",{className:"max-w-[1150px] mx-auto px-4",children:[e.jsx("h2",{className:"text-4xl md:w-[500px] md:text-6xl lg:text-7xl font-bold  pt-16",children:"Values that Makes Brucira"}),e.jsxs("div",{className:"md:flex md:justify-between md:items-center ",children:[e.jsx("h2",{className:"text-4xl md:text-6xl  lg:text-7xl",children:"#1"}),e.jsx("p",{className:"h-16 mt-5 md:mt-0  bg-red-200 w-[180px] text-white flex justify-center items-center rounded-full ",children:"Get in touch"})]}),e.jsx("div",{className:"h-3 mt-12 w-full bg-green-200"}),e.jsxs("div",{className:"mt-20 md:grid md:grid-cols-3 ",children:[e.jsxs("div",{className:"",children:[e.jsx("h2",{className:"text-xl font-bold mb-4 md:text-3xl lg:text-4xl",children:"100% In-House Developers"}),e.jsx("p",{className:"text-[17px] leading-8 font-extralight mb-14 lg:w-[280px] ",children:"With 30+ dedicated In-House team, we make sure to deliver top-notch quality output"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold mb-4 md:text-3xl lg:text-4xl",children:"100% In-House Developers"}),e.jsx("p",{className:"text-[17px] leading-8 font-extralight mb-14 lg:w-[280px] ",children:"With 30+ dedicated In-House team, we make sure to deliver top-notch quality output"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold mb-4 md:text-3xl lg:text-4xl",children:"100% In-House Developers"}),e.jsx("p",{className:"text-[17px] leading-8 font-extralight mb-14 lg:w-[280px] ",children:"With 30+ dedicated In-House team, we make sure to deliver top-notch quality output"})]})]})]})}),e.jsxs("div",{className:"max-w-[1150px] mx-auto px-2",children:[e.jsx("h2",{className:"text-xl text-green-400 uppercase mt-16",children:"Our Tech stack"}),e.jsx("h1",{className:"text-3xl font-bold mt-3 mb-10 ",children:"Technologies we work on"}),e.jsx("div",{className:" grid grid-cols-2 gap-3 md:gap-10 md:grid-cols-4 mb-10",children:d.map(t=>e.jsxs("div",{className:"bg-[#F7F7F7] p-2 md:px-8 flex flex-col justify-center items-center ",children:[e.jsx("img",{className:"w-20 h-14 mt-10 md:mt-24  md:w-[126px] md:h-[78px]",src:t.img,alt:"images"}),e.jsx("h1",{className:"h-10 mt-10 font-bold",children:t.title}),e.jsx("p",{className:"text-center h-[200px] lg:h-[150px] md:h-[230px]",children:t.description})]}))})]}),e.jsxs("div",{className:"  px-2 bg-[#F7F7F7] pt-10 min-h-screen",children:[e.jsxs("div",{className:"max-w-[1150px] md:hidden mx-auto",children:[e.jsxs("h1",{className:"text-3xl md:text-5xl font-bold md:pt-24 md:leading-[60px] pb-10",children:["Proven-Process. ",e.jsx("br",{})," Strategy-led Approach."]}),e.jsxs("div",{className:"flex justify-between items-center bg-white h-24",children:[e.jsx("img",{className:"w-full h-14",src:"https://www.brucira.com/assets/img/services/cards/research.svg",alt:"image"}),e.jsx("p",{className:"w-full font-bold flex justify-center  text-lg",children:"Research"}),e.jsx("p",{onClick:()=>l("one"),className:"w-full flex justify-center text-3xl",children:s==="one"?"-":"+"})]}),s==="one"&&e.jsx("div",{className:"bg-white px-5",children:"Initiates the project through user-centric ideation, research and analysis."}),e.jsxs("div",{className:"flex justify-between items-center bg-white h-24 mt-5",children:[e.jsx("img",{className:"w-full h-14",src:"https://www.brucira.com/assets/img/services/cards/research.svg",alt:"image"}),e.jsx("p",{className:"w-full font-bold flex justify-center  text-lg",children:"Design"}),e.jsx("p",{onClick:()=>l("two"),className:"w-full flex justify-center text-3xl",children:s==="two"?"-":"+"})]}),s==="two"&&e.jsx("div",{className:"bg-white px-5",children:"Involves the creation of prototypes for UX and UI design."}),e.jsxs("div",{className:"flex justify-between items-center bg-white h-24 mt-5",children:[e.jsx("img",{className:"w-full h-14",src:"https://www.brucira.com/assets/img/services/cards/research.svg",alt:"image"}),e.jsx("p",{className:"w-full font-bold flex justify-center  text-lg",children:"Development"}),e.jsx("p",{onClick:()=>l("three"),className:"w-full flex justify-center text-3xl",children:s==="three"?"-":"+"})]}),s==="three"&&e.jsx("h3",{className:"bg-white px-5 ",children:"Gears up work with varied frameworks,libraries and programming languages."}),e.jsxs("div",{className:"flex justify-between items-center bg-white h-24 mt-5",children:[e.jsx("img",{className:"w-full h-14",src:"https://www.brucira.com/assets/img/services/cards/research.svg",alt:"image"}),e.jsx("p",{className:"w-full font-bold flex justify-center  text-lg",children:"Testing"}),e.jsx("p",{onClick:()=>l("four"),className:"w-full flex justify-center text-3xl",children:s==="four"?"-":"+"})]}),s==="four"&&e.jsx("h3",{className:"bg-white px-5",children:"Initiates the most crucial process of checking and testing the final products."}),e.jsxs("div",{className:"flex justify-between items-center bg-white h-24 mt-5",children:[e.jsx("img",{className:"w-full h-14",src:"https://www.brucira.com/assets/img/services/cards/research.svg",alt:"image"}),e.jsx("p",{className:"w-full font-bold flex justify-center  text-lg",children:"Launch"}),e.jsx("p",{onClick:()=>l("five"),className:"w-full flex justify-center text-3xl",children:s==="five"?"-":"+"})]}),s==="five"&&e.jsx("h3",{className:"bg-white px-5 ",children:"Aids in presenting the final products to the market and tracking user interaction."}),e.jsxs("div",{className:"flex justify-between items-center bg-white h-24 mt-5",children:[e.jsx("img",{className:"w-full h-14",src:"https://www.brucira.com/assets/img/services/cards/research.svg",alt:"image"}),e.jsx("p",{className:"w-full font-bold flex justify-center  text-lg",children:"Support"}),e.jsx("p",{onClick:()=>l("six"),className:"w-full flex justify-center text-3xl",children:s==="six"?"-":"+"})]}),s==="six"&&e.jsx("h3",{className:"bg-white px-5",children:"Provides consistent support to ensure quality and performance post-implementation."})]}),e.jsx("div",{className:"max-w-[1150px] hidden md:block mx-auto",children:e.jsx(p,{})})]}),e.jsx(w,{}),e.jsx("div",{className:"bg-black  text-white h-[450px] max-w-[1150px] md:mx-auto md:h-[200px] mb-10 mx-2 py-5 mt-10 ",children:e.jsxs("div",{className:"flex flex-col md:flex-row h-full justify-around items-center",children:[e.jsx("img",{className:"w-24 h-24 lg:w-[134px] lg:h-[134px] p-2  bg-white rounded-full",src:"https://www.brucira.com/assets/img/bulb.svg",alt:"",srcset:""}),e.jsx("h1",{className:"text-2xl text-center w-[250px] md:w-[400px] lg:w-[500px] leading-10 font-bold",children:"We have more awesome stuff to show"}),e.jsxs("h2",{className:"bg-yellow-500 w-16 h-16 rounded-full flex justify-center items-center",children:[" ",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})]})]})}),e.jsx(g,{}),e.jsx(j,{})]})},M=()=>(u("LYM DATA | Services"),c.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(b,{}),e.jsx(h,{})]}));export{M as default};
