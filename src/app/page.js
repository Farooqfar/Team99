import CircularText from "@/components/CircularText";
import ColorBends from "@/components/ColorBends";
import FloatingLines from "@/components/FloatingLines";
import Image from "next/image";
import Navbar from "./components/Navbar";
import TextType from "@/components/TextType";
import FlowingMenu from "@/components/FlowingMenu";
import ImageTrail from "@/components/ImageTrail";
import Marquee from "react-fast-marquee";

import { FaInstagram } from "react-icons/fa";
import LightRays from "@/components/LightRays";
import DomeGallery from "@/components/DomeGallery";
import { GiHiking } from "react-icons/gi";
import { PiArrowLineUpRight } from "react-icons/pi";
import { IoColorPalette } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { CgPerformance } from "react-icons/cg";
import { CgWebsite } from "react-icons/cg";

export default function Home() {
  const demoItems = [
    {
      link: "#",
      text: "Team99 ",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Social Media Marketing",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Website Development",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Graphics Desinging",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      link: "#",
      text: "Video Production",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-auto z-20">
        <Navbar />
      </header>
      <main className="relative flex justify-center items-center w-full h-vh overflow-hidden">
        <div className="absolute text-white flex justify-center items-center flex-col w-full h-screen ">
          <h1 className="text-9xl uppercase font-black ">Team 99</h1>
          <p className="text-xl text-center mt-1 w-[60%] ">
            The Last Digital Marketing Agency , You Will Ever Need Driving
            business growth through smart and impactful digital marketing
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 z-10">
            <button className="bg-[#4c00ff] w-36 p-2 rounded  hover:bg-white hover:text-[#4c00ff] hover:cursor-pointer transition-all duration-200">
              Contact Us
            </button>
            <button className="bg-[#F37A0E] w-40 p-2 rounded hover:bg-white hover:cursor-pointer hover:text-[#F37A0E] transition-all duration-200 ">
              Our Services
            </button>
          </div>
          <div className="absolute bottom-5 right-1 z-10">
            <CircularText text="Build • Market • Scale • " />
          </div>
        </div>
        <div className="bg-black w-full h-screen ">
          <FloatingLines />
          {/* <LightRays
            raysSpeed={1.1}
            lightSpread={2}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.2}
            noiseAmount={0}
            distortion={0}
            className="custom-rays w-full h-full"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          /> */}
        </div>
      </main>
      <section className="relative bg-white rounded-[60px] w-full m-h-96 pt-10">
        <h1 className="text-[#2058F9] text-2xl font-semibold text-center">
          WHO WE ARE
        </h1>
        <p className="text-black text-center text-xl">
          Driving business growth through smart and impactful digital marketing
        </p>
        <div className="w-full flex justify-around flex-row p-10">
          <div className="w-1/2">
            <p className="text-black text-sm">
              Founded in 2025, Mage Marketer is a dynamic digital marketing
              agency in Pune. Our journey began with a simple yet powerful
              vision: to empower businesses with innovative digital marketing
              strategies that drive growth and success in the online world.
            </p>
            <br />
            <p className="text-black text-sm">
              The name <strong>Team 99</strong> reflects our approach to digital
              marketing, combining the art of creativity to craft magical
              solutions for our clients. Our team consists of passionate
              professionals with diverse backgrounds in{" "}
              <strong>
                SEO, Social Media, Content Creation, Web Development and more.
              </strong>{" "}
              United by a shared commitment to excellence, we work
              collaboratively to deliver exceptional results for our clients
              whether it scaling brands or helping students.
            </p>
          </div>
          <div className="relative w-1/3">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
        </div>
      </section>
      <section className="w-full h-1/3 flex items-center justify-around p-20">
        <div className="w-1/2 h-full flex justify-around items-center mt-12 ">
          <div className="flex flex-col justify-around items-center gap-20 h-full ">
            <div>
              <h1 className="text-5xl font-medium">3+</h1>
              <h3 className="text-xl text-[#2058f9]">Years of Experience</h3>
            </div>
            <div>
              <h1 className="text-5xl font-medium">1,236 +</h1>
              <h3 className="text-xl text-[#2058f9]">Successful Projects</h3>
            </div>
          </div>
          <div className="flex flex-col justify-around items-center gap-20 h-full">
            <div>
              <h1 className="text-5xl font-medium">436+</h1>
              <h3 className="text-xl text-[#2058f9]">Brands Transformed</h3>
            </div>
            <div>
              <h1 className="text-5xl font-medium">780+</h1>
              <h3 className="text-xl text-[#2058f9]">Campaigns Launched</h3>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <h1 className="text-2xl">Your Brand Deserves More</h1>
          <TextType
            text={["Growth", "Recongnition", "Visibility", "Engagement"]}
          />
          <p className="text-white text-lg pt-10">
            At Team 99, we believe your brand deserves more than just
            visibility, It deserves meaningful growth. We blend creativity with
            technology to craft strategies that resonate with the right audience
            and deliver real impact. Every project is backed by data-driven
            insights, innovative ideas and a deep understanding of digital
            behavior. From boosting engagement to building recognition, we
            ensure your brand thrives in today fast-changing digital space. With
            Mage Marketer as your partner, success isnt just a goal, it becomes
            a consistent outcome.
          </p>
        </div>
      </section>
      <section className="w-full h-96 mt-10 flex justify-center items-center">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full relative">
          <FlowingMenu
            items={demoItems}
            speed={15}
            textColor="#ffffff"
            bgColor="#060010"
            marqueeBgColor="#1A45C0"
            marqueeTextColor="#FFFFFF"
            borderColor="#ffffff"
          />
        </div>
      </section>
      <section className="w-full m-h-96 bg-white rounded-4xl p-10 flex justify-center items-center flex-col">
        <div>
          <h1 className="text-center text-[#2058F9] text-2xl font-semibold">
            Our Services
          </h1>
          <h2 className="text-black text-center text-xl">
            Strategic Services Designed to Elevate Your Brand
          </h2>
        </div>
        <h3 className="text-black text-center w-1/2 mt-4 text-sm">
          We understand that the digital landscape is constantly evolving and we
          are here to guide you through it. With our comprehensive range of
          digital marketing services, we can assist you in achieving your online
          goals and growing your business.
        </h3>
        <div className="w-full h-full flex justify-center items-center flex-wrap gap-8 mt-10">
          <div className="relative group  w-64 h-80 rounded-xl flex flex-col jusctify-center items-center p-8 gap-4 hover:rotate-3 hover:scale-110 shadow-2xl hover:cursor-pointer hover:bg-[#2058F9] transition-all duration-200 ease-in">
            <GiHiking className="h-14 w-14 text-white bg-[#2058F9] rounded-xl p-1 group-hover:bg-white group-hover:text-[#2058F9]" />

            <h1 className="text-black text-xl font-medium text-center group-hover:text-white">
              Strategy &<br /> Consulting
            </h1>

            <p className="text-black text-center text-sm group-hover:text-white">
              Expert business strategies and Consulting to drive success
            </p>
            <button className="absolute text-black bottom-8 border border-black p-1 pl-2 pr-2 rounded flex gap-2 justify-center items-center group-hover:text-white group-hover:bg-black hover:cursor-pointer">
              Learn more <PiArrowLineUpRight />
            </button>
          </div>
          <div className="relative group bg-white w-64 h-80 rounded-xl flex flex-col jusctify-center items-center p-8 gap-4 hover:rotate-3 hover:scale-110 shadow-2xl hover:cursor-pointer hover:bg-[#2058F9] transition-all duration-200 ease-in">
            <FaInstagram className=" h-14 w-14 text-white bg-[#2058F9] rounded-xl p-1 group-hover:bg-white group-hover:text-[#2058F9]" />

            <h1 className="text-black text-xl font-medium text-center group-hover:text-white">
              Social Media <br /> Marketing
            </h1>

            <p className="text-black text-center text-sm group-hover:text-white">
              Boost brand engagement with powerful social media compaigns
            </p>
            <button className="absolute text-black bottom-8 border border-black p-1 pl-2 pr-2 rounded flex gap-2 justify-center items-center group-hover:text-white group-hover:bg-black hover:cursor-pointer">
              Learn more <PiArrowLineUpRight />
            </button>
          </div>
          <div className="relative group bg-white w-64 h-80 rounded-xl flex flex-col jusctify-center items-center p-8 gap-4 hover:rotate-3 hover:scale-110 shadow-2xl hover:cursor-pointer hover:bg-[#2058F9] transition-all duration-200 ease-in">
            <IoColorPalette className=" h-14 w-14 text-white bg-[#2058F9] rounded-xl p-1 group-hover:bg-white group-hover:text-[#2058F9]" />

            <h1 className="text-black text-xl font-medium text-center group-hover:text-white">
              Graphics <br /> Designing
            </h1>

            <p className="text-black text-center text-sm group-hover:text-white">
              Creative graphic designs that strengthen brand identity
            </p>
            <button className="absolute text-black bottom-8 border border-black p-1 pl-2 pr-2 rounded flex gap-2 justify-center items-center group-hover:text-white group-hover:bg-black hover:cursor-pointer">
              Learn more <PiArrowLineUpRight />
            </button>
          </div>
          <div className="relative group bg-white w-64 h-80 rounded-xl flex flex-col jusctify-center items-center p-8 gap-4 hover:rotate-3 hover:scale-110 shadow-2xl hover:cursor-pointer hover:bg-[#2058F9] transition-all duration-200 ease-in">
            <FaVideo className=" h-14 w-14 text-white bg-[#2058F9] rounded-xl p-1 group-hover:bg-white group-hover:text-[#2058F9]" />

            <h1 className="text-black text-xl font-medium text-center group-hover:text-white">
              Video <br /> Production
            </h1>

            <p className="text-black text-center text-sm group-hover:text-white">
              professional video production telling your brands unique story
            </p>
            <button className="absolute text-black bottom-8 border border-black p-1 pl-2 pr-2 rounded flex gap-2 justify-center items-center group-hover:text-white group-hover:bg-black hover:cursor-pointer">
              Learn more <PiArrowLineUpRight />
            </button>
          </div>
          <div className="relative group bg-white w-64 h-80 rounded-xl flex flex-col jusctify-center items-center p-8 gap-4 hover:rotate-3 hover:scale-110 shadow-2xl hover:cursor-pointer hover:bg-[#2058F9] transition-all duration-200 ease-in">
            <CgPerformance className=" h-14 w-14 text-white bg-[#2058F9] rounded-xl p-1 group-hover:bg-white group-hover:text-[#2058F9]" />

            <h1 className="text-black text-xl font-medium text-center group-hover:text-white">
              Performance <br /> Marketing
            </h1>

            <p className="text-black text-center text-sm group-hover:text-white">
              Tergeted compaigns that deliver measurable business growth
            </p>
            <button className="absolute text-black bottom-8 border border-black p-1 pl-2 pr-2 rounded flex gap-2 justify-center items-center group-hover:text-white group-hover:bg-black hover:cursor-pointer">
              Learn more <PiArrowLineUpRight />
            </button>
          </div>
          <div className="relative group bg-white w-64 h-80 rounded-xl flex flex-col jusctify-center items-center p-8 gap-4 hover:rotate-3 hover:scale-110 shadow-2xl hover:cursor-pointer hover:bg-[#2058F9] transition-all duration-200 ease-in">
            <CgWebsite className=" h-14 w-14 text-white bg-[#2058F9] rounded-xl p-1 group-hover:bg-white group-hover:text-[#2058F9]" />

            <h1 className="text-black text-xl font-medium text-center group-hover:text-white">
              Website <br /> Development
            </h1>

            <p className="text-black text-center text-sm group-hover:text-white">
              Tergeted compaigns that deliver measurable business growth
            </p>
            <button className="absolute text-black bottom-8 border border-black p-1 pl-2 pr-2 rounded flex gap-2 justify-center items-center group-hover:text-white group-hover:bg-black hover:cursor-pointer">
              Learn more <PiArrowLineUpRight />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-96 flex pt-10">
        <div className="w-1/2 h-full flex justify-around  m-0 p-0 overflow-hidden">
          <Marquee
            autoFill
            direction="down"
            className="h-full m-0 p-0"
          >
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-gray-400 m-2">
              <Image src="/9.webp" alt="Logo" width={100} height={100} />
            </div>
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-black m-2">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
             <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-gray-400 m-2">
              <Image src="/9.webp" alt="Logo" width={100} height={100} />
            </div>
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-black m-2">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
          </Marquee>
          <Marquee autoFill direction="up" gradient={false} speed="25">
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-gray-400 m-2">
              <Image src="/9.webp" alt="Logo" width={100} height={100} />
            </div>
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-black m-2">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
             <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-gray-400 m-2">
              <Image src="/9.webp" alt="Logo" width={100} height={100} />
            </div>
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-black m-2">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
          </Marquee>
          <Marquee autoFill direction="down" gradient={false} className="">
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-gray-400 m-2">
              <Image src="/9.webp" alt="Logo" width={100} height={100} />
            </div>
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-black m-2">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
             <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-gray-400 m-2">
              <Image src="/9.webp" alt="Logo" width={100} height={100} />
            </div>
            <div className="bg-white w-28 h-28 flex justify-center items-center gaps-4 rounded-2xl border border-black m-2">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
          </Marquee>
        </div> 

        <div className="w-1/2 h-full flex justify-center gap-2 flex-col p-16">
          <h1 className=" text-[#2058F9] text-2xl font-semibold">Our Clients</h1>
          <p className="text-xl">Powering growth for businesses across industries.</p>
          <p className="text-sm">
            At Team 99, we believe that every brand has a unique journey to
            growth and our mission is to guide you through it with carefully
            designed strategies. We combine deep market research, innovative
            tools and creative storytelling to craft campaigns that resonate
            with your audience and drive measurable impact. Our approach is not
            just about running ads or creating content — its about weaving
            together the right mix of SEO, social media, design and analytics
            into a cohesive roadmap. This ensures that your brand not only
            captures attention but also builds trust, engagement and
            long-lasting connections. With Mage Marketer as your partner, you
            gain more than a service provider — you gain a growth curator
            dedicated to unlocking your full potential.
          </p>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col items-center gap-10 p-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-medium text-center text-[#2058F9]">
            Meet Our Expert Team
          </h1>
          <p className="text-center w-1/2 mt-1 text-sm">
            Our team is made up of skilled professionals who are passionate
            about delivering high-quality solutions. With experience,
            creativity, and dedication, we work together to bring the best
            results for our clients.
          </p>
        </div>
        <DomeGallery
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
        />
      </section>
    </>
  );
}
