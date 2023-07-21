import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { SlSocialDribbble, SlSocialLinkedin } from "react-icons/sl";
const Blog6 = () => {
  return (
    <div className="max-w-[1640px] mx-auto md:px-12 font-roboto lg:text-xl lg:max-w-[900px]  ">
      <div>
        <h1 className="text-3xl font-bold mt-4">MAKE IT SIMPLE</h1>

        <div>
          <h2 className="text-2xl font-times mt-4 mb-4">
            HERE ARE OUR 5 MOST IMPORTANT POINTS OF A SUCCESSFUL COOPERATION
            WITH AN AGENCY
          </h2>

          <h4 className="font-dm text-lg">
            1.Clear goals and expectations: It is important that both sides have
            clear goals and expectations from the start so that everyone
            involved knows what is important and what is to be achieved.
          </h4>

          <h4 className="font-dm text-lg">
            2. Open communication: Open and honest communication is the key to a
            successful cooperation. It is important that both sides share their
            thoughts and ideas and give each other feedback in order to achieve
            the best possible results.
          </h4>

          <h4 className="font-dm text-lg">
            {" "}
            3. Flexibility: Businesses and markets are constantly changing, and
            it is important that both sides remain flexible and willing to adapt
            as circumstances change.
          </h4>

          <h4 className="font-dm text-lg">
            4. Trust: Good cooperation is based on trust. It is important that
            both sides trust each other and trust that everyone is doing their
            best to achieve the common goals.
          </h4>

          <h4 className="font-dm text-lg">
            5.Collaboration: In the end, it's about working together and pulling
            together . It is important that both sides are willing to work
            together and support each other to achieve the best possible
            results.
          </h4>

          <h2 className="text-2xl font-times mt-4 mb-4">
            IF YOU HAVE ALREADY GOTTEN CLOSER AND NOW WANT TO WORK TOGETHER,
            HERE ARE OUR TOP 6 TIPS FOR YOUR JOINT ONBOARDING
          </h2>

          <h4 className="font-dm text-lg">
            1.It is important that both sides have clear communication from the
            beginning and are clear about goals, expectations, processes and
            responsibilities .
          </h4>

          <h4 className="font-dm text-lg">
            2. It is important that both parties understand and can rely on the
            terms of the contract . These include, for example, the duration of
            the cooperation, the scope of the services, the remuneration and the
            notice periods.
          </h4>

          <h4 className="font-dm text-lg">
            {" "}
            3. It is important that both sides know the processes and procedures
            that apply to the collaboration. These include, for example,
            meetings, reporting requirements, decision-making processes and the
            distribution of responsibilities .
          </h4>

          <h4 className="font-dm text-lg">
            4. It is important that the agency has access to all the necessary
            information and resources in order to be able to make the
            cooperation successful. This includes, for example, marketing
            materials, customer data and company policies, passwords and
            permissions .
          </h4>

          <h4 className="font-dm text-lg">
            5. It is important that the agency is well integrated into the
            company and has access to relevant people and departments . This
            includes, for example, meetings with decision-makers, employees from
            other departments and external partners
          </h4>

          <h4 className="font-dm text-lg">
            6. It is important that the agency is well trained and receives all
            the necessary training and support in order to be able to make the
            cooperation successful.{" "}
          </h4>

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

export default Blog6;
