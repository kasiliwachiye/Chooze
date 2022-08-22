import React from "react";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";

const CampaignDetails = ({
  campaignImage = "https://dummyimage.com/720x600",
  campaignTitle = "Campaign Title",
}) => {
  return (
    <>
      <NavBar />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={campaignImage}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {campaignTitle}
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CampaignDetails;
