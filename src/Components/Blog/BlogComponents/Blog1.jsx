import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble, SlSocialLinkedin } from "react-icons/sl";
const Blog1 = () => {
  return (
    <div className="max-w-[1640px] mx-auto md:px-12 font-roboto lg:text-xl lg:max-w-[900px]  ">
      <div>
        <h1 className="text-3xl font-bold mt-4">
          This is how you create relevant content that your target audience will
          love!
        </h1>
        <h3 className="mt-6 text-lg">
          Discover the secret formula for successful content! Be an enthusiastic
          peer and get support when needed. Start your inspirational content
          journey now!
        </h3>
        <h2 className="text-xl mt-5 font-bold mb-5">
          You've probably asked yourself more than once:
        </h2>
        <h3> What should I post? </h3>
        <h3>Where do others get their ideas for their content from? </h3>
        <h3>How do the others manage to develop so much content? </h3>
        <div>
          <h2 className="text-2xl font-times mt-4">
            Here's your cheat code to quickly create meaningful content.
          </h2>
          <h3 className="text-xl font-times mt-2 mb-3">
            First answer these questions to find your brand story:
          </h3>
          <h4 className="font-dm text-lg">
            1. What problem do you solve for your customers?
          </h4>
          <h5 className="mt-3 mb-3">That's the customer's problem.</h5>

          <h4 className="font-dm text-lg">2. Who is affected by this issue?</h4>
          <h5 className="mt-3 mb-3">This is your target audience.</h5>

          <h4 className="font-dm text-lg"> 3. What do these customers want?</h4>
          <h5 className="mt-3 mb-3">Often a certain "pain" can be found.</h5>

          <h4 className="font-dm text-lg">
            4. What is keeping you from this problem?
          </h4>
          <h5 className="mt-3 mb-3">
            Usually with success, but often it is very specific things.
          </h5>

          <h4 className="font-dm text-lg">
            5. How can your product or service help them solve this problem?
          </h4>
          <h5 className="mt-3 mb-3">
            This is your solution, in technical jargon we call it a brand
            solution.
          </h5>

          <p className="border-l-2 border-l-slate-950 pl-3 mt-8">
            Now create as many content pieces as possible in which you speak
            directly to the described customer and actively try to solve their
            problem within your content.
          </p>
          <p className="mt-6">
            Here are some suggestions for content to tailor to your specific
            brand story. Finally, you should overcome your imposter syndrome by
            speaking as an enthusiast rather than an expert. That means, be
            someone who speaks to your target group on an equal footing and not
            from above. It becomes "easier" to talk about your passion.
          </p>
          <ul className="list-disc ml-7 mt-5">
            <li>
              Why the CUSTOMER PROBLEM is challenging but can be solved with
              your BRAND SOLUTION.
            </li>
            <li>
              How your customer can start using the BRAND SOLUTION tomorrow.
            </li>
            <li>
              Common misconceptions about the CUSTOMER PROBLEM/BRAND SOLUTION.
            </li>
            <li>Tell how you encountered the CUSTOMER PROBLEM.</li>
            <li>The story of the CUSTOMER PROBLEM/BRAND SOLUTION.</li>
            <li>
              Tell me about a moment when you felt the reward of the BRAND
              SOLUTION.
            </li>
          </ul>

          <p className="mt-3 text-lg">
            You are not a know-it-all. You are not a know-it-all.{" "}
          </p>
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

export default Blog1;
