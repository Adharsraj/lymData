import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import UseDocumentTitle from "../Hooks/UseDocumentTitle";

const TermsOfUse = () => {
  UseDocumentTitle("LYM DATA | Terms")

  return (
    <>
      <Navbar />
      <div className="max-w-[1640px] mx-auto p-4 font-dm grid justify-center mb-20  gap-8 ">
        <div className="mt-32">
          <h1 className="md:text-lg lg:w-[700px] lg">
          Welcome to LYMData!
          </h1>
          <h2 className="mt-5 text-6xl font-bold font-sans">Terms and conditions</h2>
          <div>
          <h1 className="mt-16 font-semibold text-4xl font-sans">INTRODUCTION</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            LYMData, is regularly dedicated to digital creation activities, providing a wide variety of services in which it is located: branding, motion graphics, UX UI, animation, brand consulting, Data visualization, Infographics, IxD, Interactive design, information architecture, consulting, digitization consulting, storytelling, application development, platform development, heuristics, user testing, digital product design, digital product development, application design, software design, logo design, identity design, style guide design, design systems design, user interface animation, and UX consulting.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            These Terms & Conditions (“Terms”) are entered into by and between of LYMData S.R.L., an Argentinian corporation ("LYMData", "we," or "us") and the entity or person accessing this website (“Website”) or placing an order for or accessing any Services made available by LYMData (“Customer” or “you” or “your”). “Services" means the products and services that are made available online by LYMData as defined in these Terms, other services, or products that LYMData may make available from time to time.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            By agreeing to these Terms, you warrant that you are authorized to agree to these Terms on behalf of you and/or your company.<strong><u> IF YOU DO NOT AGREE TO THESE TERMS & CONDITIONS, DO NOT USE OUR WEBSITE OR ANY SERVICES.</u></strong>
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            <strong>“Agreement”</strong> means these Terms together with any applicable Order Forms, and any exhibits, appendices identified or referenced in these Terms, and any amendments attached hereto or hereafter attached by mutual written agreement of the parties (all of which are incorporated herein by reference).
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            <strong>“Modifications”</strong> we may make changes to these Terms from time to time. When we do, we will revise the "Last updated" date given above. It is your responsibility to review these Terms frequently and to remain informed of any changes to them. The then-current version of these Terms will supersede all earlier versions. You agree that your continued use of our Services after such changes have been published to our Services will constitute your acceptance of such revised Terms.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">SERVICE ACCESS AND AVAILABILITY</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            <strong>Service Access & Availability.</strong> Subject to your compliance with these terms and conditions, LYMData will make the Services available to you pursuant to the terms of the Agreement and solely for Customer’s internal business needs.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            LYMData shall: (a) use commercially reasonable efforts to make the online Services available 24 hours a day, 7 days a week, except for: (b) planned downtime (of which LYMData shall give advance electronic notice), (c) emergency maintenance that is reasonably unforeseeable and necessary for purposes of maintaining the integrity or operation of the Services, regardless of the notice provided by LYMData and (d) any unavailability caused by circumstances beyond LYMData’s reasonable control, including, for example, an act of God, act of government, flood, fire, earthquake, civil unrest, act of terror, strike or other labor problem (other than one involving LYMData employees), Internet service provider failure or delay, integrated third party applications , or denial of service attack, and (e) provide the Services in accordance with laws and government regulations applicable to LYMData’s provision of its Services to its customers generally (i.e., without regard for Customer’s particular use of the Services), and subject to Customer’s use of the Services in accordance with the Agreement, the Documentation and the applicable Order Form. Your rights to access and use the Services are limited by all terms set forth in the Agreement.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">RESTRICTIONS; UPDATES & SUPPORT</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            <strong>Restrictions.</strong> You must comply with all applicable laws when implementing, configuring, and using the Services. Except as expressly permitted under these Terms, you will not, and will not permit anyone else to: (a) make the functionality of the Services to any third party through any means, including, without limitation, any hosting, application services provider, service bureau, or other type of service; (b) use any automated tool (e.g., robots, spiders) to access or use the Services; (c) rent, lease, or sublicense your access to the Services to another person; (d) circumvent or disable any digital rights management, usage rules, or other security features of the Services or attempt to gain unauthorized access to the Services or its related systems or networks; (e) use the Services in a manner that overburdens, or that threatens the integrity, performance, or availability of, the Services; (f) remove, alter, or obscure any proprietary notices (including copyright and trademark notices) on any portion of the Services; (g) send material containing software viruses, worms, trojan horses, or other harmful computer code, files, scripts, agents, or programs; or (h) use the Services in connection with any Apps or websites that are directed to children under 18 years old, without employing appropriate settings within the LYMData to limit data collection from such children in accordance with applicable law. More information on these settings is available <strong>here</strong>
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            If you have questions about how to use these settings or have any reason to believe that these resources may not address your particular use case, please reach out to the LYMData Support team via email info@lymdata.com.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            Notwithstanding anything to the contrary in the Agreement, use of the Services in violation of the foregoing restrictions by Customer that, in LYMData’s judgment, threatens the integrity, performance, availability, or security of the Services may result in LYMData’s immediate suspension of, or limitation in Customer’s access to, the Services.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            <strong>Updates and Support.</strong> LYMData will maintain, support, update, and provide error corrections for the Services to the same extent it does so for its customers generally. Ultimately, you are responsible for timely integration and launch of the Services. If LYMData provides you with an update or maintenance release for the offline components of the LYMData Services, unless you receive a separate license from LYMData for that update or release that expressly supersedes these Terms, such update or release will be subject to the terms and conditions of these Terms. LYMData shall have no liability for any damages that may result from Customer’s failure to implement upgrades or updates to the Services if Customer is notified in writing by LYMData of an upgrade or update. All support requests must be sent to the LYMData Support team via email _____________________________.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            <strong>PRIVACY POLICY</strong> You acknowledge and agree that you will provide a privacy policy to your end users, which shall be in compliance with applicable laws and self-regulatory guidelines, including, without limitation each of the Self-Regulatory in accordance with the stipulations of the new General Data Protection Regulation of the European Union "GDPR (EU)" with entry into force as of May 25 and Law N° 25.326 on the Protection of Personal Data of Argentina .
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            Your privacy policy will further include clear, meaningful, and conspicuous notice consistent with applicable laws, regulations, and self-regulatory guidelines that includes, <strong>here.</strong>
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            You further agree and give consent to obtain consent to your practices from your end users with regard to cookies and/or targeting and online behavioral advertising to the extent required by applicable laws, regulations, and self-regulatory guidelines <strong>here.</strong>
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            You acknowledge and agree that your use of the Services is subject to DHHN’s Privacy Policy, located at https://lymdata.com/privacy LYMData’s Privacy Policy does not cover your Digital Properties, or the use of your Digital Properties, by your end users. It is your obligation to provide your own privacy policy to your end users.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            <strong>Data Security.</strong> LYMData will maintain appropriate technical, administrative, and physical safeguards for the protection of information on its servers, including customer data, against unauthorized access, alteration, disclosure or destruction. However, you acknowledge and agree that no method of transmission over the Internet or method of electronic storage is completely secure, and that LYMData cannot guarantee the absolute security of such information.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            <strong>Compliance with Applicable Law.</strong> You will comply with all laws, regulations, and self-regulatory guidelines applicable to your business and operations and to your use of the Services, including those governing the privacy, security (in accordance with the stipulations of the new General Data Protection Regulation of the European Union "GDPR (EU)" with entry into force as of May 25, Law N° 25.326 on the Protection of Personal Data of Argentina and Consumer Protection Law No. 24.240.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">NOTICES OF INFRINGMENT & TAKEDOWN BY LYMData</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            LYMData prohibits the posting of any information that infringes or violates the copyright rights and/or other intellectual property rights (including rights of privacy and publicity) of any person or entity.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            If you believe that your intellectual property right (or such a right that you are responsible for enforcing) is infringed by any content on the Site, please write to us at the address shown on the Contact Us page.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">USE POLICIES</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            You are solely responsible for any content and other material that you submit, publish, transmit, or display on, though, or with our Services. Customer will not use LYMData’s Services in violation of LYMData’s Acceptable Use Policy currently available at https://lymdata.com/privacy
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">TRADEMARKS AND PROPIETARY RIGHTS</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            LYMData Trademark Rights. The LYMData logo, and any other trademarks (service marks, designs and logos) or service marks used by LYMData or slogan displayed on the Services ("LYMData Marks") are trademarks of LYMData and its suppliers or licensors, and may not be copied, imitated or used, in whole or in part, without the prior written permission of LYMData or the applicable trademark holder. You may not use any metatags or any other "hidden text" utilizing "LYMData" or any other LYMData Marks without LYMData’s prior written permission.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            In addition, the look and feel of the Services, including all page headers, custom graphics, button icons and scripts, is the trade dress of LYMData and may not be copied, imitated or used, in whole or in part, without LYMData’s prior written permission.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            All other trademarks, registered trademarks, product names and company names or logos mentioned in the Services are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier, or otherwise does not constitute or imply endorsement, sponsorship, or recommendation thereof by LYMData.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">LINKS AND THIRD-PARTY CONTENT</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            <strong>Third Party Content.</strong> You may enable the Services to display, or contain links to, third party products, services, and websites. Any opinions, advice, statements, services, offers, or other information that constitute part of the content expressed, authored, or made available by other users or other third parties on the Services, or which is accessible through or may be located using the Services (collectively, "Third-Party Content") are those of the respective authors or producers and not of LYMData or its shareholders, directors, officers, employees, agents, or representatives. LYMData does not control Third-Party Content and does not guarantee the accuracy, integrity or quality of such Third-Party Content. LYMData is not responsible for the performance of, does not endorse, and is not responsible or liable for, any Third-Party Content or any information or materials advertised in any Third-Party Content. By using LYMData’s Services, you and/or your end users may be exposed to content that is offensive, indecent, or objectionable. We are not responsible or liable, directly or indirectly, for any damage or loss caused to you by your or a third party’s use of or reliance on any goods, services, or information available on or through any third-party service or Third-Party Content. It is your responsibility to evaluate the information, opinion, advice, or other content available on and through our Services.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            If the Websites contain links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to the Websites, you do so entirely at your own risk and subject to the terms and conditions of use for such websites. We reserve the right to withdraw linking permission without notice.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">LINKING TO THE WEBSITES AND SOCIAL MEDIA FEATURES</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part without our express written consent. Therefore, we recommend you contact us first, to avoid any type of controversy.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">LIMITATION OF LIABILITY</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            IN NO EVENT WILL LYMData, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITES, ANY WEBSITES LINKED TO THEM, ANY CONTENT ON THE WEBSITES OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITES OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE. THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW WHICH MAY INCLUDE FRAUD.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">DISCLAIMER</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            The content and functionality on the site are provided with the understanding that LYMData is not herein engaged in rendering professional advice and services to you.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            All content and functionality on the site are provided “as is,” without warranty of any kind, either express or implied, including, without limitation, implied warranties of merchantability and fitness for a particular purpose.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            LYMData and its third-party content providers make no warranties, express or implied, as to the ownership, accuracy, or adequacy of the site content. LYMData shall have no liability or responsibility for any information published on linked websites, contained in any user submissions published on the site, or provided by third parties.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            Neither LYMData nor its third-party content providers shall be liable for any indirect, incidental, consequential, or punitive damages or for lost revenues or profits, whether advised of the possibility of such damages or losses and regardless of the theory of liability.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            You understand and consent that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Websites will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITES OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITES LINKED TO IT.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            You understand and consent that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Websites will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITES OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITES LINKED TO IT.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            YOUR USE OF THE WEBSITES, THEIR CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITES IS AT YOUR OWN RISK. THE WEBSITES, THEIR CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER LYMData NOR ANY PERSON ASSOCIATED WITH LYMData MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITES. WITHOUT LIMITING THE FOREGOING, NEITHER LYMData NOR ANYONE ASSOCIATED WITH LYMData REPRESENTS OR WARRANTS THAT THE WEBSITES, THEIR CONTENT OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITES WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE WEBSITES OR THE SERVER(S) THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            LYMData HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            SOME JURISDICTIONS DO NOT ALLOW EXCLUSION OF WARRANTIES OR LIMITATIONS ON THE DURATION OF IMPLIED WARRANTIES, SO THE ABOVE DISCLAIMER MAY NOT APPLY TO YOU IN THEIR ENTIRETIES BUT WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">INDEMNIFICATION</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            You agree to defend, indemnify, and hold harmless LYMData, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these Terms of Use or your use of the Websites, including, but not limited to, any use of the Websites’ content, services and products other than as expressly authorized in these Terms of Use or your use of any information obtained from the Websites.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">USE SITE OF CONTENT</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            You may not otherwise reproduce, modify, distribute, transmit, post, or disclose the Site Content without LYMData prior written consent.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">MISCELLANEOUS</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            <strong>Governing law and jurisdiction.</strong> All matters relating to the Websites and these Terms of Use, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of Argentina without giving effect to any choice or conflict of law provision or rule (whether of Argentina or any other jurisdiction).
            </h2>
            <h2 className="mt-7 lg:w-[1000px] md:text-lg">
            Any legal suit, action or proceeding arising out of, or related to, these Terms of Use or the Websites shall be instituted exclusively in the Argentina in the City of Buenos Aires although we retain the right to bring any suit, action or proceeding against you for breach of these Terms of Use in your country of residence or any other relevant country. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts. You and LYMData hereby agree to submit to this jurisdiction of, and agree that venue is proper in, those courts in any such legal action or proceeding.
            </h2>

            <h1 className="mt-16 font-semibold text-4xl font-sans">CONTACTING US</h1>
            <h2 className="mt-20 lg:w-[1000px] md:text-lg">
            If you have any questions or concerns about our Services or these Terms, you may contact us at: info@lymdata.com
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfUse;
