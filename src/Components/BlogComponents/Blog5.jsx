import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble, SlSocialLinkedin } from "react-icons/sl";
const Blog5 = () => {
  return (
    <div className="max-w-[1640px] mx-auto md:px-12 font-roboto lg:text-xl lg:max-w-[900px]  ">
      <div>
        <h3 className="mt-6 text-lg">
          Digital strategy is a plan that sets short and long-term goals for a
          business that are actionable and scalable. Developing such a strategy
          requires insight into customer needs, market and industry trends, and
          knowledge of areas such as data science, data analytics, and product
          strategy. Ultimately, every company will have to use digital
          strategies in order to continue to achieve goals and to continue to
          develop. !
        </h3>
        <h1 className="text-3xl font-bold mt-4">
          OUR DEFINITION OF A DIGITAL STRATEGY
        </h1>
        <h3 className="mt-3">
          A digital strategy, also referred to as a digital media strategy, is a
          plan we develop for our clients to maximize the economic returns from
          technology, data science and analytics projects. This plan includes
          the development of new technologies and the overhaul of existing
          processes to give our client companies a competitive advantage. In
          order to develop a successful digital strategy, we need a
          cross-functional team of representatives from executive management,
          marketing and IT. A digital strategy is both an idea and a concrete
          product that needs to be implemented in the form of a plan or roadmap.
          It is important that our customers adapt to the changes that
          digitization brings with it.
        </h3>
        <p className="border-l-2 border-l-slate-950 pl-3 mt-8">
          The main goal of digital strategy is the use of technology to increase
          organizational effectiveness, be it through the development of brand
          new products or rethinking existing processes.
        </p>

        <div>
          <h2 className="text-2xl font-times mt-4">
            HERE IS OUR STEP-BY-STEP GUIDE FOR YOUR DIGITAL STRATEGY
          </h2>
          <h3 className="text-xl font-times mt-2 mb-3">
            Developing a strategy is like planning a trip. You have to know
            where you want to go and how to get there. Whether you call it a
            plan, framework, or roadmap, it's important to have a clear
            structure to stay on track. See it as your personal guide to
            success.
          </h3>
          <h4 className="font-dm text-lg lg:text-xl">1. IT ALL STARTS WITH "WHY"</h4>
          <h5 className="mt-3 mb-3">
            Everything starts here. What purpose does your organization serve?
            Although this question seems simple, the solution requires deep
            digging.
          </h5>

          <h4 className="font-dm text-lg lg:text-xl">
            2. KNOW YOUR CURRENT BUSINESS ENVIRONMENT
          </h4>
          <h5 className="mt-3 mb-3">
            This can help you better adapt your business practices and decisions
            to current conditions and be successful. There is little point in
            designing a digital strategy in a vacuum. It is crucial for us to
            understand the target company we are developing them for. First of
            all, you should know and understand your company.
          </h5>

          <h4 className="font-dm text-lg lg:text-xl"> 3. DATA ANALYSIS</h4>
          <h5 className="mt-3 mb-3">
            It's important to gather information and keep it somewhere. This can
            also be done on a wall so they can be seen quickly and you can see
            how much and what information there is. At this stage, it's
            important to identify the "data points" without worrying about what
            the information means. Collect data, preferably always.
          </h5>

          <h4 className="font-dm text-lg lg:text-xl">4. KNOW YOUR CUSTOMERS</h4>
          <h5 className="mt-3 mb-3">
            In the first place you have to understand your target group, only
            then you can reach them with your measures. It takes more than
            simple brainstorming and personal opinions. Depending on which
            target groups you have, you should develop three to four buyer
            personas. This information will help you develop the personas: their
            past, work history, values, goals, concerns, and decision-making
            habits.
          </h5>

          <h4 className="font-dm text-lg lg:text-xl">5. PRODUCT AND SERVICE STRATEGY</h4>
          <h5 className="mt-3 mb-3">
            The product and service strategy describes how your product or
            service will help your business. It describes the problem that the
            product/service solves and what impact this has on your customers
            and your company. Once your plan is clear, you can use it to develop
            the product definition that tells what you will develop and when.
            You can then use the product roadmap to evaluate your success
            before, during, and after production. Developing a product strategy
            requires key objectives. These are the exact goals or KPIs you will
            achieve as a result of developing your product. We work with the
            WHAT, WHO, WHY model and use FigJam or MIRO as a digital whiteboard
            solution.
          </h5>

         
          <p className="mt-3 text-lg">
            We hope that you have now been able to take a lot of inspiration for
            your content strategy with you! If you need support for you or your
            business, drop us a line!{" "}
          </p>

          <div className="flex gap-5 sm:mt-10 mt-10  md:ml-5 lg:ml-10">
            <span>
              <BsFacebook />
            </span>
            <span>
              <AiFillInstagram />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <SlSocialDribbble />
            </span>
            <span>
              <SlSocialLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog5;
