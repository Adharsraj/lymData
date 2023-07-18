import img2 from "../Images/blog img/img1.png";
import img3 from "../Images/blog img/img7.png";
import img4 from "../Images/blog img/img3.jpeg";
import img5 from "../Images/blog img/img4.jpeg";
import img6 from "../Images/blog img/img5.jpeg";
import img7 from "../Images/blog img/img6.png";
import Blog1 from "../../Components/Blog/BlogComponents/Blog1";
import Blog2 from "../../Components/Blog/BlogComponents/Blog2";
import Blog3 from "../../Components/Blog/BlogComponents/Blog3";
import Blog4 from "../../Components/Blog/BlogComponents/Blog4";
import Blog5 from "../../Components/Blog/BlogComponents/Blog5";
import Blog6 from "../../Components/Blog/BlogComponents/Blog6";
import workimg1 from "../Images/works/new1.webp";
import workimg2 from "../Images/works/new2.webp";
import workimg3 from "../Images/works/new3.webp";
import allworks1 from "../Images/allworks/IMAGE (15).png";
import allworks2 from "../Images/allworks/IMAGE (16).png";
import allworks3 from "../Images/allworks/IMAGE (17).png";
import allworks4 from "../Images/allworks/IMAGE (18).png";
import allworks5 from "../Images/allworks/IMAGE (19).png";
import allworks6 from "../Images/allworks/IMAGE (20).png";
import allworks7 from "../Images/allworks/IMAGE (21).png";
import allworks8 from "../Images/allworks/IMAGE (22).png";
import entertainment from '../Images/industries/entertainment.jpg'
import energyindustrials from '../Images/industries/energy-industrials.jpg'
import informationtechnology from '../Images/industries/information-technology.jpg'
import retailcommerce from '../Images/industries/retail-commerce.jpg'

export const ourValues = [
  {
    id: 1,
    title: "Team player",
    desc: "We value individuals who prioritize team goals ahead of personal interests, contributing to ideas & insights that may push the field forward. We value respect & collaboration, the only way we know can push our agency forward to higher success.",
  },

  {
    id: 2,
    title: "Work Ethic",
    desc: "We love individuals who chime their own path forward. At Stead, our members consistently demonstrate reliability, punctuality, and a strong sense of responsibility. We maintain a positive attitude, embrace challenges, & put in the effort to get success.",
  },

  {
    id: 3,
    title: "Passion",
    desc: "We value people who have fire in their eyes. People who exhibit an unwavering commitment to excellence, continuously striving to surpass expectations & deliver incredible outcomes.",
  },

  {
    id: 4,
    title: "Integrity",
    desc: "We embody a culture of a strong moral compass. By doing what is right, our members at Stead contribute to a culture of trust, credibility and accountability. This helps us maintain our company’s reputation & foster a long lasting relationship with our clients.",
  },
];

export const whyLymData = [
  {
    id: 1,
    number: "01",
    title: "Curated team",
    desc: "We chose our team carefully. Our people are the reason for our great work. We hire the best, and we create the best, making us and our clients successful.",
  },

  {
    id: 2,
    number: "02",
    title: "Staying lean",
    desc: "We stay lean and help your product do one thing exceptionally well. We trim down your product’s capabilities into a singular valuable problem solving ",
  },

  {
    id: 3,
    number: "03",
    title: "Trustworthy roadmap",
    desc: "Our well thought out design & development process makes it easy to fix a timeline, resources needed & the budget required and give clarity to our clients.",
  },
];

export const blogsData = [
  {
    id: 1,
    img: img2,
    Time: "7 min read",
    By: "Alex Bechor",
    more: Blog1,
    Date: "Oct 10,2022",
    Genere: "Strategy",
    title: "How to create relevant content",
  },

  {
    id: 2,
    img: img3,
    Time: "5 min read",
    By: "Ann Maria",
    more: Blog2,
    Date: "Mar 4,2023",
    Genere: "Content",
    title: "Modern web design - impress your target group",
  },

  {
    id: 3,
    img: img4,
    Time: "2 min read",
    By: "Alexander Dimitri",
    more: Blog3,
    Date: "July 4,2023",
    Genere: "Action",
    title: "How to: SEO",
  },

  {
    id: 4,
    img: img5,
    Time: "8 min read",
    By: "Pablo john",
    more: Blog4,
    Date: "Feb 10,2023",
    Genere: "Social",
    title: "Pantone Color of the Year 2023",
  },
  {
    id: 5,
    img: img6,
    Time: "6 min read",
    By: "Roony elizabeth",
    more: Blog5,
    Date: "Jan 12,2023",
    Genere: "Content",
    title: "The development of a digital strategy: step by step",
  },
  {
    id: 6,
    img: img7,
    Time: "4 min read",
    By: "Alexander Williams",
    more: Blog6,
    Date: "June 3 ,2023",
    Genere: "Digital experiences",
    title: "How to: Tips for working with an agency",
  },
];

export const worksData = [
  {
    id: 1,
    img: workimg1,
    head1: "5+ hours’ worth of educational content",
    head2: "10+ interactive activities",
    mainhead: "How we created Mailchimp Academy to upskill Mailchimp users",
    head3: "2020 Platinum Hermes Creative Award winner",
    title: "Mailchimp",
  },

  {
    id: 2,
    img: workimg2,
    head1: "A buying experience to uplevel Brompton’s digital presence",
    head2: "UX and UI design transformation in just eight weeks",
    mainhead: "A unique ecommerce experience for an iconic British brand",
    head3: "A central design theme to express the brand online",
    title: "Brompton",
  },

  {
    id: 3,
    img: workimg3,
    head1: "Customisable watch faces – from work to workouts",
    head2: "Accessible activity app design for health and wellbeing",
    mainhead: "Flexible, functional design for the Summit Lite watch",
    head3: "Digital and wearable design expertise",
    title: "Montblanc",
  },
];

export const allWorks = [
  {
    id: 1,
    img: allworks1,
    head1: "Designing a world-class website for a world-class college",
    title: "Royal College of Art",
  },

  {
    id: 2,
    img: allworks2,
    head1: "Flexible, functional design for the Summit Lite watch",
    title: "Montblanc",
  },

  {
    id: 3,
    img: allworks3,
    head1: "A unique ecommerce experience for an iconic British brand",
    title: "Brompton",
  },

  {
    id: 4,
    img: allworks4,
    head1: "Helping millions across EMEA train and learn",
    title: "Grow with Google",
  },

  {
    id: 5,
    img: allworks5,
    head1: "How we created Mailchimp Academy to upskill Mailchimp users",
    title: "Mailchimp",
  },

  {
    id: 6,
    img: allworks6,
    head1: "Educating the public on Big Tobacco’s tricks to hook kids",
    title: "California Tobacco Control Program",
  },

  {
    id: 7,
    img: allworks7,
    head1: "Partnering with Google for a decade of award-winning work",
    title: "Ten years with Google",
  },

  {
    id: 8,
    img: allworks8,
    head1: "Helping Just Eat keep first place for food delivery",
    title: "Just Eat",
  },
];

export const productDrivenDesign = [
  {
    id: 1,
    head1: "Product discovery",
    head2:
      "We set the right processes and methodologies to boost innovation     ",
  },

  {
    id: 2,
    head1: "Branding & strategy ",
    head2:
      "We evolve powerful ideas into solid and relatable brands that drive adoption.",
  },

  {
    id: 3,
    head1: "Product design ",
    head2:
      "From initial concept, to interface design and product development we craft high-end platforms ",
  },
  {
    id: 4,
    head1: "Blockchain ",
    head2:
      "We open an exploration space to innovate with to interface design and product development   ",
  },
  {
    id: 5,
    head1: "crypto ",
    head2:
      "space to product development for outstanding digital experiences. ",
  },
];

export const sevenIndustries = [
  {
    id: 1,
    head1: "Entertainment    ",
     img:"https://images.unsplash.com/photo-1567593810070-7a3d471af022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    head2:
      "We help the entertainment industry adapt and adopt technology with the goal of creating compelling content like never before, and redefining what a digital product is, and how it transforms leisure time.    ",
  },

  {
    id: 2,
    head1: "Media & OTT    ",
    img:"https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    head2:
      "Audiences demand ever more content, delivered instantly, without pause or buffering, in higher and higher quality, and increasingly tailored to their personal taste. We help media companies reinvent themselves to stay relevant. ",
  },

  {
    id: 3,
    head1: "Finance & Crypto    ",
    img:"https://www.omfif.org/wp-content/uploads/2022/04/crypto-asset-growth-newweb.png",
    head2:
      "As the term fintech becomes a part of our everyday conversations, individuals and organizations expect nothing but the very best from brands in this space, and we make sure they deliver.    ",
  },
  {
    id: 4,
    head1: "Insurance & Insurtech    ",
    img:"https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    head2:
      "The design of meaningful experiences is a key asset that we bring to the insurance industry, and it’s part of what helps organizations rethink their portfolio in a digitally enhanced world.    ",
  },
  // {
  //   id: 5,
  //   head1: " Energy & Industrials    ",
  //   head2:
  //     " We help the industrial sector redesign their operations, and reshape how factories are organized to build and ship products in shorter and shorter cycles. ",
  // },
  // {
  //   id: 6,
  //   head1: " Retail & Commerce    ",
  //   head2:
  //     " Digital is now an indispensable channel for any retail or commerce. E-commerce and online presence have become commodities in the way brands sell and strategize. It is the ultimate channel for brand presence, and we bring years of experience to help brands stand out in a crowded space.    ",
  // },
  // {
  //   id: 7,
  //   head1: "   Information Technology    ",
  //   head2:
  //     " As delivery times get shorter, new competitors flood the market, and clients get increasingly well-informed and demanding, we deliver innovation, 360 strategies and agile frameworks to turn raw data into key insights.    ",
  // },
];


 export const accordionData = [
  {
    title: 'How much does it cost to build an app? ',
    content: "It’s not possible to quote a single monetary amount. Building a mobile app depends on many factors, from scope to budget. To estimate costs, request a project estimation.    "
  },
  {
    title:"How long does a web development project take to complete? " ,
    content: "That depends on the type and complexity of your project. Weeks 1-2 involve planning and organization. This is followed by the graphic design phase, which can take another two weeks. ",
  },
  {
    title: "What essential features must a real estate website or app have?    ",
    content: "Based on the analysis of top real estate websites, the core features should include a registration page, search filters, listings, maps, local infos, payments and a calendar.  ",
  },
  {
    title:"How long does it take to build a product?    " ,
    content: "That depends on the complexity of your app and the structure and stage of your project. Each stage takes a different amount of time, so if you’ve already completed some stages, such as writing the project brief and conducting research, it’ll take less time. It can take anywhere between three and nine months to go from idea to launch, but with a team of full-stack developers and experts we can make sure you lose no time in getting your mobile app to market.    ",
  },
  {
    title: "How much does it cost to hire a Artificial Intelligence portal development company?    ",
    content: "The price depends on the complexity of the projects you want to see. A project with a unique design, custom layout and complex features may cost upwards around $50,000. A more straight forward application that includes everything from design to code may cost 23,000 - 25,000 USD.    ",
  },
  {
    title:"Why do I need a UX designer?" ,
    content: "By hiring a UX specialist, you can avoid failed investments in developing features that are not relevant to your users and shift your efforts to developing only features that make sense for them. This allows you to limit costs and increase your profitability.    ",
  },

];