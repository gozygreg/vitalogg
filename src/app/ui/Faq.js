import React from "react";
import Image from "next/image";

const Faq = () => {
  return (
    <>
      <div className="bg-myBrown py-12">
        <div className="flex flex-col justify-center mx-[2rem] gap-0 md:flex-row gap-[4rem] justify-center items-start mx-[5rem] lg:mx-[10rem]">
          <div className="w-full md:flex-grow w-1/2 lg:flex-grow w-1/2 xl:[]">
            <h1 className="pt-10 text-3xl font-medium pb-6 md:text-4xl pt-0 lg:text-5xl pt-0">
              Frequently asked Questions
            </h1>
            <p className="text-sm font-medium text-textColor w-full md:w-[300px] lg:w-[400px]">
              Can&apos;t find what you&apos;re looking for? Explore our FAQs or contact us
              for further assistance.
            </p>
            <div>
              <Image
                src="/man.png"
                alt="man"
                height={586}
                width={600}
                className="w-full h-full w-full md:h-[400px] w-[400px]"
              />
            </div>
          </div>

          <div className="w-full md:flex-grow w-1/2 ">
            <div className="pt-[1rem] md:mt-10 pb-6 lg:pt-0 pb-6">
              <h2 className="text-lg font-medium">What is VitaloG ?</h2>
              <p className="text-[12px] italic pt-4 font-medium w-full md:w-[400px] lg:w-[500px]">
                VitaloG is a friendly health community where people facing
                health challenges come together. Through virtual support groups,
                chat rooms, and access to verified professionals, it helps build
                connections and strength. With accurate information and friendly
                support, VitaloG helps you make better health choices. Join our
                community today and feel supported on your health journey.
              </p>
            </div>
            <div className="pb-6">
              <h2 className="text-lg font-medium">How does it work?</h2>
              <p className="text-[12px] italic pt-4 font-medium w-full md:w-[400px] lg:w-[500px]">
                VitaloG works by allowing users to sign up and gain access to a
                supportive community of individuals facing similar health
                challenges. Within this community, users can connect with
                others, access verified information, and receive support from
                professionals. By facilitating these connections and resources,
                Vitalog aims to combat feelings of isolation and loneliness,
                fostering a sense of belonging and empowerment among its users.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-medium">
                How will you handle my medical details?
              </h2>
              <p className="md:text-[12px] italic pt-4 font-medium w-full md:w-[400px] lg:w-[500px]">
                We take the privacy and security of your medical details
                seriously at Vitalog, adhering to globally accepted standards to
                ensure your information is safeguarded. Our approach involves
                implementing robust encryption protocols to protect data both in
                transit and at rest. Additionally, we strictly adhere to
                regulations such as HIPAA (Health Insurance Portability and
                Accountability Act) and GDPR (General Data Protection
                Regulation), ensuring that your medical information is handled
                with the utmost confidentiality and transparency. Our platform
                is designed with privacy-enhancing features, granting you
                control over your data and enabling you to manage consent
                preferences. Rest assured that your medical details are treated
                with the highest level of care and security on Vitalog.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="w-full mx-[0rem] text-center px-8 text-justify md:text-center font-bold mx-1 text-xl lg:text-xl font-medium mx-[10rem] pt-12">
            Join VitaloG today! Register with your email to access exclusive
            benefits at launch and ensure you&apos;re the first to know when we go
            live. Your community awaits.
          </h1>
          <h1 className="text-3xl text-center md:text-center text-4xl font-medium text-black py-6">
            Join our WaitList
          </h1>
          <form className="flex flex-col gap-6 md:flex-row justify-center items-center md:gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="shadow outline-none border border-solid border-black border-1 px-2 py-2 w-[300px] rounded-md text-xs"
            />
            <button
              type="submit"
              className="text-xs text-white bg-deepGreen py-3 px-8 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Faq;
