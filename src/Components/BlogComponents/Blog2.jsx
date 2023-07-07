import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble, SlSocialLinkedin } from "react-icons/sl";
const Blog2 = () => {
  return (
    <div className="max-w-[1640px] mx-auto md:px-12 font-roboto lg:text-xl lg:max-w-[900px]  ">
      <div>
        <h3 className="mt-6 text-lg lg:text-xl">
          We live in a digital world where the majority of our interactions take
          place online . It's more important than ever that your brand has a
          strong online presence to reach and impress your target audience. A
          modern website is an indispensable element for the success of your
          brand in the digital world and beyond.
        </h3>
        <h2 className=" mt-5 font-bold mb-5 text-2xl ">
          Why a modern website is so important.
        </h2>
        <h3>
          Modern web design and smart features are of paramount importance for
          your brand because it influences the first impression of your brand
          among your target audience and ensures that your brand is seen as a
          leader and innovative.
        </h3>
        <h3>Where do others get their ideas for their content from? </h3>
        <h3>How do the others manage to develop so much content? </h3>
        <div>
          <p className="border-l-2 border-l-slate-950 pl-3 mt-8">
            A first impression is essential and can be crucial when it comes to
            whether a visitor stays on your website or not becomes a customer or
            not.
          </p>
          <p className="mt-6  text-2xl mb-6">
             What does a modern website need to be able
            to do? ‍
          </p>
          <ul class="list-disc ml-7 mt-2">
            <li>
              Modern and professional web design is an important factor to
              demonstrate the credibility and competence of your business
            </li>
            <li>
              Your digital presence represents your brand and shows that you
              care about the needs of your target group and the topicality of
              your brand
            </li>
            <li>
              A well-designed page shows that you are sophisticated and have an
              eye for detail , which is highly appreciated by your target
              audience
            </li>
            <li>
              A modern website not only keeps your business competitive, you
              stay one step ahead of your competitors
            </li>
            <li>
              Investing in digital experiences builds trust with your target
              audience and shows them that you are a professional, trustworthy
              company and think long-term
            </li>
            <li>
              Your conversion rate will increase as your users are used to easy
              and intuitive navigation from sites like amazon.com. If they stay
              longer and find their way around, the chance increases that they
              will also carry out conversions
            </li>
          </ul>

          <p className="mt-3 text-2xl mb-6 ">
            How do I create a modern and sustainable website?
          </p>
          <p className="mt-3">
            In order to achieve a modern web design, it is important that you
            understand your target group and their needs and adapt your web
            design accordingly. Use a responsive design that displays well on
            different devices and make navigation easy and intuitive. Also use
            the latest technologies and tools to ensure your web design is
            contemporary and up to date.
          </p>
          <p className="mt-3">
            A strong connection to your target group is the basis for success in
            2023. As your digital home, accessible 24/7, your website not only
            serves the purpose of a digital business card, it is THE figurehead
            for you and/or your company.
          </p>

          <p className="mt-3">
            If you neglect your digital presence, you neglect your target
            groups, and thus your brand and reputation. It's easy for your
            competitor if you don't at least hold your ground.
          </p>

          <p className="mt-3">
            In order to be successful in the long term, it is essential that you
            invest in your web presence. Your customers will pay you back, I
            promise!
          </p>

          <p className="mt-3 text-lg font-extrabold">
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

export default Blog2;
