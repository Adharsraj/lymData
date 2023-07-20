import React, { useEffect } from "react";
import Footer from "../Components/FooterZipsy";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const TermsOfUse = () => {
  UseDocumentTitle("LYM DATA | Home")

  return (
    <>
      <Navbar />
      <div className="max-w-[1640px] mx-auto p-4 font-dm grid justify-center mb-20  gap-8 mt-20">
        <div>
          <h1 className="md:text-lg lg:w-[700px] lg">
            This is the legal bit – so you can use our website and know what
            you’re agreeing to. If you have any questions, please get in touch.
          </h1>
          <h2 className="mt-5 text-4xl font-times">Terms of use</h2>
          <div>
            <h2 className="mt-2 lg:w-[1000px] md:text-lg">
              We are BYND LIMITED, whose registered office is at 60 Great
              Portland Street, London, W1W 7RT and whose registered company
              number is 07123452. We're also associated with BYND LLC, a limited
              liability company based in the US. Both companies are trading
              under the Beyond brand.
            </h2>
            <h2 className="mt-2">Last updated: May 2018</h2>
          </div>
          <div className="md:ml-14 md:text-lg lg:w-[950px]">
            <h1 className="mt-4 mb-4">1. Use</h1>
            <h3 className="mt-4 mb-4 ">
              This website contains information about Beyond Consultancy
              (“Beyond”) and its subsidiaries. Please read carefully the
              following conditions of use. By accessing this website, you are
              deemed to have agreed to these conditions.
            </h3>
            <h1 className="mt-4 mb-4">2. Changes</h1>
            <h3 className="mt-4 mb-4 ">
              Beyond reserves the right at any time and without notice to make
              changes to these conditions of use or to the contents of this
              website or to suspend or terminate the provision of this website
              for any reason.
            </h3>
            <h1 className="mt-4 mb-4">3. Intellectual Property</h1>
            <h3 className="mt-4 mb-4 ">
              The content of this website may be copied for the purpose of
              viewing but may not be permanently stored or copied for further
              distribution or any commercial purpose. The trade marks and images
              used on this website are protected by intellectual property law
              and may not be reproduced or appropriated, in whole or part, in
              any format, without the written permission of the relevant owner.
            </h3>
            <h1 className="mt-4 mb-4">4. Limitation and Exclusion of Liability</h1>
            <h3 className="mt-4 mb-4 ">
              Although Beyond takes reasonable care to ensure that information
              on this website is accurate when posted, Beyond does not warrant
              or represent that the information is accurate, complete or
              current. Beyond does not accept liability for any errors or
              omissions in any information contained on this website or for any
              loss or damages of any kind arising from access to, use of or
              reliance on any such information. Beyond does not warrant that the
              use of this website will be uninterrupted, without delay or free
              from errors, omissions or viruses.
            </h3>
            <h1 className="mt-4 mb-4">5. Investor Information</h1>
            <h3 className="mt-4 mb-4 ">
              Nothing contained on this website shall be deemed to be an
              invitation, offer or inducement to invest or deal in or to take
              any other investment decision in relation to the shares of Beyond
              or the giving of investment, legal or tax advice. The financial
              information presented on this web site may not comprise full
              financial statements within the meaning of the United Kingdom
              Companies Act 1985. Before making any investment decision, you
              should seek independent professional financial advice.
            </h3>
            <h1 className="mt-4 mb-4">6. Foreign Jurisdictions</h1>
            <h3 className="mt-4 mb-4 ">
              The information on this website is designed for use in the United
              Kingdom and is not intended for distribution or use in any
              jurisdiction where its publication or availability would be
              contrary to local law or regulation.
            </h3>
            <h1 className="mt-4 mb-4">7. Third Party Websites</h1>
            <h3 className="mt-4 mb-4 ">
              Links to or from external websites, which are not maintained or
              controlled by Beyond, are provided for convenience only. The
              existence of such links does not imply any endorsement or
              verification by Beyond of (and Beyond accepts no responsibility
              for) the content of any such external website.
            </h3>
            <h1 className="mt-4 mb-4">8. Governing Law</h1>
            <h3 className="mt-4 mb-4 ">
              These terms and conditions shall be governed and construed in
              accordance with the laws of England and Wales. Any disputes shall
              be subject to the exclusive jurisdiction of the Courts of England
              and Wales.
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfUse;
