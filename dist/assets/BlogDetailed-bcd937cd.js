import{u as h,r as x,b as r,j as s,N as p,L as m,F as g}from"./index-61b0e1bd.js";const u=()=>{const{id:a}=h(),[t,j]=x.useState(null),[d,o]=x.useState([]);return x.useEffect(()=>{const e=r.find(l=>l.id===parseInt(a));if(parseInt(a)<4){const l=r.find(i=>i.id===parseInt(a)+1),n=r.find(i=>i.id===parseInt(a)+2),c=[...l?[l]:[],...n?[n]:[]];o(c)}else{const l=r.find(i=>i.id===parseInt(a)-1),n=r.find(i=>i.id===parseInt(a)-2),c=[...l?[l]:[],...n?[n]:[]];o(c)}j(e),console.log(d)},[a]),s.jsxs(s.Fragment,{children:[s.jsx(p,{}),s.jsxs("div",{children:[t&&s.jsxs("div",{className:"max-w-[1640px] mx-auto p-4 font-roboto mb-4 ",children:[s.jsxs("div",{className:" mx-3 mt-32",children:[s.jsx("h2",{className:"uppercase text-2xl md:text-4xl font-bold w-[230px] md:w-[600px] mt-10 ",children:t.title}),s.jsx("div",{className:"mt-6 text-gray-400 md:text-lg font-dm",children:s.jsxs("span",{children:["By:",t.By," | ",t.Date," | ",t.Genere," |"," ",t.Time]})})]}),s.jsx("img",{className:"mt-6 w-full",src:t.img,alt:"image"}),s.jsx("div",{children:s.jsx(t.more,{})})]}),d&&s.jsxs("div",{className:"max-w-[1640px] mx-auto p-4 font-roboto mb-20",children:[s.jsxs("div",{className:"flex justify-between",children:[s.jsx("p",{className:"font-times mb-6 text-3xl w-[250px] md:w-[400px] ",children:"MORE BLOG ARTICLES"}),s.jsx(m,{to:"/blog",children:s.jsx("h2",{className:"text-gray-500 cursor-pointer md:mr-10 ",children:"Show all"})})]}),s.jsx("div",{className:"flex justify-center",children:s.jsx("div",{className:"grid md:grid-cols-2 gap-5",children:d.map(e=>s.jsx(m,{to:`/blog/${e.id}`,children:s.jsxs("div",{children:[s.jsx("img",{src:e.img,alt:"Featured"}),s.jsx("h3",{className:"uppercase mt-4 lg:text-lg",children:e.title}),s.jsx("h3",{className:"mt-4 text-gray-500",children:e.Date}),s.jsx("h3",{className:"text-gray-500",children:e.Genere}),s.jsx("h3",{className:"text-gray-500 text-sm mb-6",children:e.Time})]})},e.id))})})]})]}),s.jsx(g,{})]})};export{u as default};