import Link from "next/link";
import React from "react";
import Image from "next/image";
import PhotoCard from "./ui/PhotoCard";
import Faq from "./ui/Faq";
import Footer from "./ui/Footer";
// import { motion } from 'framer-motion';

const Page = () => {
  return (
    <>
    
      <div className="relative mt-[5%] flex flex-col md:flex-row items-center justify-between z-30 mb-[-30px] md:px-4">
        <div className="hidden md:block pl-[20px] pl-[30px] py-[50px] lg:pl-[100px] xl:pl-[150px]">
          <div className="text-5xl flex flex-col gap-1 font-[800] text-lg lg:text-3xl xl:text-4xl">
            <h1 className="text-deepBlue font-medium">
              Welcome to{" "}
              <span className="text-deepGreen font-bold">VitaloG</span>
            </h1>
            <h1 className="text-deepBlue font-bold">Your Health Journey</h1>
            <h1 className="text-deepBlue font-bold">Our Community</h1>
          </div>
          <p className="text-xs text-deepBlue font-regular max-w-full w-[80%] xl:max-w-[60%] mt-6 pb-8">
            Health challenges can be overwhelming, and no one should navigate
            them alone.
          </p>
          <Link href="/">
            <button className="text-white bg-green-700 px-3 py-2 rounded text-xs font-medium">
              Join our waitlist
            </button>
          </Link>
        </div>
        <div className="block md:flex justify-center items-center relative">
          <div className="md:pr-[20px] lg:pr-[60px] xl:pr-[120px]">
            <div className="absolute top-0 left-0 w-[400px] h-full w-full bg-black opacity-50 z-10 md:opacity-0 lg:opacity-0 xl:opacity-0"></div>
            <Image
              src="/community.png"
              alt="people"
              width={500}
              height={500}
              className="h-full md:h-[400px] lg:h-[400px] xl:h-[500px] w-full md:w-[400px] lg:w-[400px] xl:w-[500px] z-20"
            />
            <div className="block w-full px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white  md:hidden lg:hidden xl:hidden">
              <div className="">
                <h1 className="text-3xl text-left font-medium py-2">
                  Welcome to{" "}
                  <span className="text-3xl font-bold py-2">VitaloG</span>
                </h1>
                <h1 className="text-2xl text-left font-bold py-2">
                  Your Health Journey
                </h1>
                <h1 className="text-2xl text-left font-bold py-2">
                  Our Community
                </h1>
                <p className="py-6 tracking-wider">
                  Health challenges can be overwhelming, and no one should
                  navigate them alone.
                </p>
                <Link href="/">
                  <button className="text-white bg-deepGreen px-3 py-4 rounded text-xl font-bold">
                    Join our waitlist
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-myGreen">
        <div className="text-justify md:px-[150px] px-[30px] text-center py-[7rem]">
          <p className="text-sm text-myGray font-semibold leading-12 tracking-wide">
            “At Vitalog, we tackle the isolation often felt in health
            challenges, acknowledging the vital necessity for support. Our
            solution transforms solitary patient journeys into a shared
            community experience, providing connection, understanding, and
            collective strength. We created a transformative platform, blending
            cutting-edge features to ensure you have the support you need every
            step of the way.”
          </p>
        </div>
        <div>
          <div className="">
            <h1 className="mx-2 text-2xl font-bold text-center md:pb-12 lg:pb-12">
              Their Words, Our Inspiration.
            </h1>
          </div>
          <PhotoCard />
        </div>
      </section>

      <div className="bg-myBrown">
        <div className="font-bold text-2xl text-center py-8">
          <h1 className="text-deepBlue">
            Why <span className="text-deepGreen">VitaloG?</span>
          </h1>
        </div>
        <div className="flex flex-col justify-between items-center pt-8 md:flex-row mx-4 gap-2 lg:mx-6 gap-8 xl:mx-16">
          <div className="">
            <Image
              src="/people.png"
              alt="people"
              height={782}
              width={746}
              className="rounded-2xl w-full h-full pb-10 md:h-[500px] pb-0 lg:w-[600px] pb-0 xl:h-[700px]"
            />
          </div>
          <div className="">
           
            <div className="mb-[4rem] mt-4 rounded-xl flex flex-col justify-center items-center shadow-xl md:flex-row md:mb-[-1rem] md:mt-[-2rem] gap-5 md:shadow-none">
              <div className="">
                <Image
                  src="/icon1.png"
                  alt="icon"
                  width={50}
                  height={50}
                  className="pt-6 md:pb-[8rem] lg:"
                />
              </div>

              <div className="w-full px-10 md:w-[450px] md:px-0 pb-4">
                <h2 className="text-center md:text-lg md:text-left lg:text-left text-deepBlue font-bold text-deepBlue font-bold">
                  Empowering Community Support
                </h2>
                <p className="text-justify text-sm text-myBlack py-4 text-left">
                  Join a resilient community of individuals on similar health
                  journeys. Vitalog provides a diverse ecosystem of verified
                  health professionals and empathetic peers, fostering a sense
                  of belonging and support.
                </p>
              </div>
            </div>

            <div className="mb-[4rem] rounded-xl flex flex-col justify-center items-center shadow-xl md:flex-row md:mb-[-1.7rem] gap-5 md:shadow-none">
              <div>
                <Image
                  src="/icon2.png"
                  alt="icon"
                  width={50}
                  height={50}
                  className="pt-4 md:pb-[8rem] lg:"
                />
              </div>

              <div className="w-full px-10 md:w-[450px] md:px-0 pb-4">
                <h2 className="text-center md:text-lg md:text-left lg:text-left text-deepBlue font-bold text-deepBlue font-bold">
                  Virtual Support Groups and Dedicated Chat Rooms
                </h2>
                <p className="text-justify text-sm text-myBlack py-4 text-left">
                  Engage in open dialogue and shared experiences through our
                  virtual support groups and dedicated chat rooms. Connect with
                  others facing similar challenges, exchange ideas, and find
                  encouragement in a safe and inclusive space.
                </p>
              </div>
            </div>
            <div className="mb-[4rem] rounded-xl flex flex-col justify-center items-center shadow-xl md:flex-row md:mb-[-2rem] gap-5 md:shadow-none">
              <div>
                <Image
                  src="/icon3.png"
                  alt="icon"
                  width={50}
                  height={50}
                  className="pt-4 md:pb-[8rem] lg:"
                />
              </div>
              <div className="w-full px-10 md:w-[450px] md:px-0 pb-4">
                <h2 className="text-center md:text-lg md:text-left lg:text-left text-deepBlue font-bold text-deepBlue font-bold">
                  Verified Health Professionals
                </h2>
                <p className="text-justify text-sm text-myBlack py-4 text-left">
                  Access personalized guidance from verified health
                  professionals. Vitalog connects you with experts who can
                  provide tailored advice through private consultations,
                  ensuring you make informed decisions about your health.
                </p>
              </div>
            </div>
            <div className="mb-[4rem] rounded-xl flex flex-col justify-center items-center shadow-xl md:flex-row md:mb-[-2rem] gap-5 md:shadow-none">
              <div>
                <Image
                  src="/icon4.png"
                  alt="icon"
                  width={50}
                  height={50}
                  className="pt-4 md:pb-[8rem] lg:"
                />
              </div>
              <div className="w-full px-10 md:w-[450px] md:px-0 pb-4">
                <h2 className="text-center md:text-lg md:text-left lg:text-left text-deepBlue font-bold text-deepBlue font-bold">
                  Informed Decision-Making
                </h2>
                <p className="text-justify text-sm text-myBlack py-4 text-left">
                  Navigate your health journey with confidence. Vitalog combines
                  accurate information, peer support, and professional guidance
                  to empower you with the knowledge needed to make informed
                  decisions.
                </p>
              </div>
            </div>
            <div className="mb-[4rem] rounded-xl flex flex-col justify-center items-center shadow-xl md:flex-row md:mb-[-2rem] gap-5 md:shadow-none">
              <div>
                <Image
                  src="/icon5.png"
                  alt="icon"
                  width={50}
                  height={50}
                  className="pt-4 md:pb-[8rem] lg:"
                />
              </div>
              <div className="w-full px-10 md:w-[450px] md:px-0 pb-4">
                <h2 className="text-center md:text-lg md:text-left lg:text-left text-deepBlue font-bold text-deepBlue font-bold">
                  Revolutionizing Healthcare Engagement
                </h2>
                <p className="text-justify text-sm text-myBlack py-4 text-left">
                  We&apos;re not just a platform; we&apos;re a movement. Vitalog
                  transforms the healthcare experience, making it a
                  collaborative journey where you are understood, supported, and
                  connected.
                </p>
              </div>
            </div>
         
          </div>
        </div>
      </div>
      <section className="mt-[6%]">
        <div className="text-center">
          <h1 className="px-6 md:text-deepBlue font-bold text-2xl md:px-0">
            Unlock the Benefits of{" "}
            <span className="text-2xl text-black font-bold">VitaloG: </span>
            <span className="text-lg text-black">
              A Health Journey Revolution
            </span>
          </h1>
          <p className="italic w-full px-4 text-justify md:text-[12px] text-deepBlue md:w-[550px] md:text-center md:mx-auto pt-4 pb-10">
            At VitaloG, our platform is designed to empower a diverse range of
            individuals and organizations committed to the well-being of others.
            Here&apos;s how VitaloG caters to different needs.
          </p>
        </div>
        <div className="flex justify-center items-center md:gap-16 md:mx-8 pb-6">
          <div className="w-full px-4 md:w-[700px] px-0">
            <div className="flex flex-col justify-center items-center shadow-xl rounded-xl px-8 py-8 mb-6 md:shadow-none md:flex-row justify-center md:mb-[-2.2rem] md:gap-7">
              <div>
                <Image
                  src="/gameIcon.png"
                  alt="icon"
                  height={50}
                  width={50}
                  className="pb-4 md:pb-[8rem]"
                />
              </div>
              <div className="md:w-[450px] md:px-0">
                <h2 className="text-center md:text-lg md:text-left font-semibold text-deepBlue pb-2">
                  Patients Seeking Support
                </h2>
                <p className="text-sm text-myBlack pb-4">
                  Embark on your health journey with a strong support system.
                  VitaloG offers a nurturing community where individuals facing
                  health challenges can connect, share experiences, and find
                  encouragement.{" "}
                </p>
                <div className="text-center md:pb-6 md:text-left">
                  <Link href="">
                    <button className="bg-white py-2 px-4 shadow rounded-md text-[12px] text-deepGreen font-bold">
                      Get Support
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center shadow-xl rounded-xl px-8 py-8 mb-6 md:shadow-none md:flex-row justify-center md:mb-[-2.2rem] md:gap-7">
              <div>
                <Image
                  src="/crossIcon.png"
                  alt="icon"
                  height={50}
                  width={50}
                  className="pb-4 md:pb-[8rem]"
                />
              </div>
              <div className="md:w-[450px] md:px-0">
                <h2 className="text-center md:text-lg md:text-left font-semibold text-deepBlue pb-2">
                  Health Professionals Ready to Provide Help
                </h2>
                <p className="text-sm text-myBlack pb-4">
                  Are you a healthcare professional eager to make a difference?
                  VitaloG provides a platform for verified health professionals
                  to offer private consultations, extending personalized
                  guidance to those in need.
                </p>
                <div className="text-center md:pb-6 md:text-left">
                  <Link href="">
                    <button className="bg-white py-2 px-4 shadow rounded-md text-[12px] text-deepGreen font-bold">
                      Pre-Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center shadow-xl rounded-xl px-8 py-8 mb-6 md:shadow-none md:flex-row justify-center md:mb-[-2.2rem] pt-2 md:gap-7">
              <div>
                <Image
                  src="/arrowIcon.png"
                  alt="icon"
                  height={50}
                  width={50}
                  className="pb-4 md:pb-[8rem]"
                />
              </div>
              <div className="md:w-[450px] md:px-0">
                <h2 className="text-center md:text-lg md:text-left font-semibold text-deepBlue pb-2">
                  Organizations Dedicated to Health Causes
                </h2>
                <p className="text-sm text-myBlack pb-4">
                  For organizations devoted to health causes, VitaloG opens
                  doors to a dynamic pool of members. Connect with a diverse
                  community, spread awareness, and collaborate to make a
                  collective impact on the well-being of individuals worldwide.{" "}
                </p>
                <div className="text-center md:pb-6 md:text-left">
                  <Link href="">
                    <button className="bg-white py-2 px-4 shadow rounded-md text-[12px] text-deepGreen font-bold">
                      Pre-Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/people2.png"
              alt=""
              height={600}
              width={600}
              className="hidden md:hidden lg:block "
            />
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </>
  );
};

export default Page;
