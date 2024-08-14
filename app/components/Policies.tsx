import React, { useState } from "react";

const Policies: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "flush-collapseOne"
  );

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handlePrivacyToggle = () => {
    if (openAccordion === "flush-collapseThree") {
      setOpenAccordion(null);
    } else {
      setOpenAccordion("flush-collapseThree");
    }
  };

  return (
    <section className="container-fluid py-5" id="policies">
      <div className="container">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-7 text-center">
            <div
              className="section-title position-relative text-center mx-auto mb-4 pb-3"
              style={{ maxWidth: "600px" }}
            >
              <h2 className="text-primary font-secondary">Your Privacy</h2>
              <h1 className="display-4 text-uppercase">Our Policies</h1>
            </div>
            <p className="mb-4">
              At Shappening Art, we strive to give our customers the most
              enjoyable shopping experience possible. To make sure that happens,
              we make sure our store policies are clear, fair, and transparent.
            </p>
            <div
              className="accordion accordion-flush text-start"
              id="accordionFlush"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionToggle("flush-collapseOne")}
                    aria-expanded={openAccordion === "flush-collapseOne"}
                  >
                    Returns and Refunds
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className={`accordion-collapse collapse ${openAccordion === "flush-collapseOne" ? "show" : ""}`}
                  data-bs-parent="#accordionFlush"
                >
                  <div className="accordion-body">
                    We do not accept returns, exchanges, nor issue refunds for
                    any of our products. As such, please be aware that all sales
                    are final. Please answer the questions about your desired
                    product(s) carefully. Orders are entered into the system
                    approximately 36 hours after purchase and processing begins
                    2-3 days after. If you receive an order confirmation, then
                    your purchase has been processed and can not be canceled. In
                    the case of damaged products, please contact us at{" "}
                    <a href="mailto:shappeninginfo@gmail.com">
                      shappeninginfo@gmail.com
                    </a>{" "}
                    within 2 days of delivery with a picture.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionToggle("flush-collapseTwo")}
                    aria-expanded={openAccordion === "flush-collapseTwo"}
                  >
                    Shipping Policy
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className={`accordion-collapse collapse ${openAccordion === "flush-collapseTwo" ? "show" : ""}`}
                  data-bs-parent="#accordionFlush"
                >
                  <div className="accordion-body">
                    When completing an order, the customer must provide a safe
                    and accurate address for delivery. Once an order has been
                    shipped and delivery confirmed, Shappening Art is no longer
                    responsible for any lost or stolen packages. Please contact
                    the carrier for information regarding delivery.
                    <br />
                    <br />
                    All products are hand-made and may take up to a week to be
                    shipped. For any customers that need their purchase
                    expedited, they may contact us at{" "}
                    <a href="mailto:shappeninginfo@gmail.com">
                      shappeninginfo@gmail.com
                    </a>
                    . All expedited processing comes with an additional cost.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleAccordionToggle("flush-collapseThree")}
                    aria-expanded={openAccordion === "flush-collapseThree"}
                  >
                    Privacy Policy
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className={`accordion-collapse collapse ${openAccordion === "flush-collapseThree" ? "show" : ""}`}
                  data-bs-parent="#accordionFlush"
                >
                  <div className="accordion-body">
                    <h6>What You Need to Know</h6>
                    <br />
                    This Privacy Policy describes how your personal information
                    is collected, used, and shared when you visit or make a
                    purchase from{" "}
                    <a href="mailto:shappeninginfo@gmail.com">
                      shappeninginfo@gmail.com
                    </a>
                    .<br />
                    <br />
                    <h6>Personal Information We Collect</h6>
                    <br />
                    When you visit the Site, we automatically collect certain
                    information about your device, including details about your
                    web browser, IP address, time zone, and some of the cookies
                    that are installed on your device. Additionally, as you
                    browse the Site, we collect information about the individual
                    web pages or products that you view, what websites or search
                    terms referred you to the Site, and information about how
                    you interact with the Site. We refer to this
                    automatically-collected information as “Device Information.”
                    <br />
                    <br />
                    <h6>
                      We Collect Device Information Using the Following
                      Technologies:
                    </h6>
                    <br />- “Cookies” are data files that are placed on your
                    device that often include an anonymous unique identifier.
                    For more about cookies, visit{" "}
                    <a href="https://www.allaboutcookies.org">
                      https://www.allaboutcookies.org
                    </a>
                    <br />
                    - “Log files” track actions occurring on the Site, and
                    collect data including your IP address, browser type,
                    Internet service provider, referring/exit pages, and
                    date/time stamps.
                    <br />
                    - “Web beacons,” “tags,” and “pixels” are files used to
                    record information about how you browse the Site.
                    <br />
                    <br />
                    Additionally, when you make a purchase or attempt to make a
                    purchase through the Site, we collect certain information
                    from you, including your name, billing address, shipping
                    address, and payment information (including credit card
                    numbers, e-mail address, and phone number). We refer to this
                    information as “Order Information.”
                    <br />
                    <br />
                    <h6>How Do We Use Your Personal Information?</h6>
                    <br />
                    When we talk about “Personal Information” in this Privacy
                    Policy, we are talking both about Device Information and
                    Order Information.
                    <br />
                    <br />
                    We use the Order Information that we collect generally to
                    fulfill any orders placed through the Site (including
                    processing your payment information, arranging for shipping,
                    and providing you with invoices and/or order confirmations).
                    Additionally, we use this Order Information to:
                    <br />
                    - Communicate with you;
                    <br />
                    - Screen our orders for potential risk or fraud; and
                    <br />
                    - When in line with the preferences you have shared with us,
                    provide you with information or advertising relating to our
                    products or services.
                    <br />
                    <br />
                    We use the Device Information that we collect to help us
                    screen for potential risk and fraud (in particular, your IP
                    address), and more generally to improve and optimize our
                    Site (for example, by generating analytics about how our
                    customers browse and interact with the Site, and to assess
                    the success of our marketing and advertising campaigns).
                    <br />
                    <br />
                    <h6>Sharing Your Personal Information</h6>
                    <br />
                    We share your Personal Information with third parties to
                    help us use it as described above. For example, we use
                    Shopify to power our online store--you can read more about
                    how Shopify uses your Personal Information here:{" "}
                    <a href="https://www.shopify.com/legal/privacy">
                      https://www.shopify.com/legal/privacy
                    </a>
                    <br />
                    We also use Google Analytics to help us understand how our
                    customers use the Site -- you can read more about how Google
                    uses your Personal Information here:{" "}
                    <a href="https://www.google.com/intl/en/policies/privacy">
                      https://www.google.com/intl/en/policies/privacy
                    </a>
                    and you can opt out of Google Analytics here:{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout">
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                    <br />
                    <br />
                    Finally, we may also share your Personal Information to
                    comply with applicable laws and regulations, to respond to a
                    subpoena, search warrant or other lawful request for
                    information we receive, or to otherwise protect our rights.
                    <br />
                    <br />
                    <h6>Behavioral Advertising</h6>
                    <br />
                    As described above, we use your Personal Information to
                    provide you with targeted advertisements or marketing
                    communications we believe may be of interest to you. We
                    track your browsing behavior on our online store.
                    Browser-based ad blockers can prevent us from tracking data.
                    For more information about how targeted advertising works,
                    you can visit the Network Advertising Initiative’s (“NAI”)
                    educational page at{" "}
                    <a href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work">
                      https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
                    </a>
                    <br />
                    <br />
                    You can opt out of targeted advertising by using the links
                    below:
                    <br />- Facebook:{" "}
                    <a href="https://www.facebook.com/settings/?tab=ads">
                      https://www.facebook.com/settings/?tab=ads
                    </a>
                    <br />- Google:{" "}
                    <a href="https://www.google.com/settings/ads/anonymous">
                      https://www.google.com/settings/ads/anonymous
                    </a>
                    <br />- Bing:{" "}
                    <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                      https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                    </a>
                    <br />
                    <br />
                    Additionally, you can opt out of some of these services by
                    visiting the Digital Advertising Alliance’s opt-out portal
                    at:{" "}
                    <a href="https://optout.aboutads.info/">
                      https://optout.aboutads.info/
                    </a>
                    <br />
                    <br />
                    <h6>Do Not Track</h6>
                    <br />
                    Please note that we do not alter our Site’s data collection
                    and use practices when we see a Do Not Track signal from
                    your browser.
                    <br />
                    <br />
                    <h6>Your Rights</h6>
                    <br />
                    If you are a European resident, you have the right to access
                    personal information we hold about you and to ask that your
                    personal information be corrected, updated, or deleted. If
                    you would like to exercise this right, please contact us
                    through the contact information below.
                    <br />
                    <br />
                    Additionally, if you are a European resident, we note that
                    we are processing your information in order to fulfill
                    contracts we might have with you (for example, if you make
                    an order through the Site), or otherwise to pursue our
                    legitimate business interests listed above. Additionally,
                    please note that your information will be transferred
                    outside of Europe, including to Canada and the United
                    States.
                    <br />
                    <br />
                    <h6>Data Retention</h6>
                    <br />
                    When you place an order through the Site, we will maintain
                    your Order Information for our records unless you ask us to
                    delete this information.
                    <br />
                    <br />
                    <h6>Changes</h6>
                    <br />
                    We may update this Privacy Policy from time to time in order
                    to reflect, for example, changes to our practices or for
                    other operational, legal or regulatory reasons.
                    <br />
                    <br />
                    <h6>Minors</h6>
                    <br />
                    The Site is not intended for individuals under the age of
                    12.
                    <br />
                    <br />
                    <h6>Contact Us</h6>
                    <br />
                    For more information about our privacy practices, if you
                    have questions, or if you would like to make a complaint,
                    please contact us by e‑mail at{" "}
                    <a href="mailto:shappeninginfo@gmail.com">
                      shappeninginfo@gmail.com
                    </a>
                    .
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={handlePrivacyToggle}
                  >
                    Close Privacy Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;
