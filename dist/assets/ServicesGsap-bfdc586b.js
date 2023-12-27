import{f as r,r as d,j as s}from"./index-8fe1b40c.js";import{S as c}from"./ScrollTrigger-c3252e56.js";r.registerPlugin(c);function h(){return d.useEffect(()=>{r.registerPlugin(c),document.querySelector(".service-detail-process > .scrollContainer > .container");let i=document.querySelector(".process-cards"),a=document.querySelector(".progress-line");const n=r.matchMedia();let e=null;n.add("(min-width:768px)",()=>{const t=i.scrollWidth-i.offsetWidth;return e=r.timeline({scrollTrigger:{trigger:".service-detail-process > .scrollContainer > .container",start:"center center",end:()=>"+="+t*1.7,scrub:!0,pin:!0}}),e.fromTo(i,{x:0},{x:-t,ease:"Power1.easeOut"}),e.fromTo(a,{xPercent:-100},{xPercent:0},0),()=>e.kill()}),window.addEventListener("onload",function(){c.refresh()})}),s.jsx("section",{class:"bg-lightgrey service-detail-process",children:s.jsx("div",{class:"scrollContainer",children:s.jsxs("div",{class:"container",children:[s.jsxs("h1",{className:"text-3xl md:text-5xl font-bold  md:leading-[60px] pb-10",children:["Proven-Process. ",s.jsx("br",{})," Strategy-led Approach."]}),s.jsxs("div",{class:"process-cards",children:[s.jsxs("div",{class:"process-card",children:[s.jsx("div",{class:"image-wrap",children:s.jsx("img",{src:"https://www.brucira.com/assets/img/services/cards/research.svg",alt:!0,width:"79",height:"130"})}),s.jsx("h3",{children:"Research"}),s.jsx("p",{children:"Initiates the project through user-centric ideation, research and analysis."})]}),s.jsxs("div",{class:"process-card",children:[s.jsx("div",{class:"image-wrap",children:s.jsx("img",{src:"https://www.brucira.com/assets/img/services/cards/design.svg",alt:!0,width:"96",height:"125"})}),s.jsx("h3",{children:"Design"}),s.jsx("p",{children:"Involves the creation of prototypes for UX and UI design."})]}),s.jsxs("div",{class:"process-card",children:[s.jsx("div",{class:"image-wrap",children:s.jsx("img",{src:"https://www.brucira.com/assets/img/services/cards/development.svg",alt:!0,width:"108",height:"111"})}),s.jsx("h3",{children:"Development"}),s.jsx("p",{children:"Gears up work with varied frameworks, libraries and programming languages."})]}),s.jsxs("div",{class:"process-card",children:[s.jsx("div",{class:"image-wrap",children:s.jsx("img",{src:"https://www.brucira.com/assets/img/services/cards/testing2.svg",alt:!0,width:"108",height:"105"})}),s.jsx("h3",{children:"Testing"}),s.jsx("p",{children:"Initiates the most crucial process of checking and testing the final products."})]}),s.jsxs("div",{class:"process-card",children:[s.jsx("div",{class:"image-wrap",children:s.jsx("img",{src:"https://www.brucira.com/assets/img/services/cards/launch.svg",alt:!0,width:"101",height:"100"})}),s.jsx("h3",{children:"Launch"}),s.jsx("p",{children:"Aids in presenting the final products to the market and tracking user interaction."})]}),s.jsxs("div",{class:"process-card",children:[s.jsx("div",{class:"image-wrap",children:s.jsx("img",{src:"https://www.brucira.com/assets/img/services/cards/support2.svg",alt:!0,width:"91",height:"100"})}),s.jsx("h3",{children:"Support"}),s.jsx("p",{children:"Provides consistent support to ensure quality and performance post-implementation."})]})]}),s.jsx("div",{class:"progress",children:s.jsx("div",{class:"progress-line"})})]})})})}export{h as S};
