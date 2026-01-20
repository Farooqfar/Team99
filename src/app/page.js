import CircularText from "@/components/CircularText";
import ColorBends from "@/components/ColorBends";
import FloatingLines from "@/components/FloatingLines";
import Image from "next/image";
import Navbar from "./components/Navbar";
import TextType from "@/components/TextType";
import FlowingMenu from "@/components/FlowingMenu";
import ImageTrail from "@/components/ImageTrail";

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
      <main className="relative flex justify-center items-center w-full h-screen overflow-hidden">
        <header className="fixed top-0 left-0 w-full h-auto z-20">
          <Navbar />
        </header>
        <div className="absolute text-white flex justify-center items-center flex-col w-full h-screen">
          <h1 className="text-9xl uppercase font-black ">mage marketer</h1>
          <p className="text-2xl text-center mt-1 w-[60%] ">
            The Last Digital Marketing Agency , You Will Ever Need Driving
            business growth through smart and impactful digital marketing
          </p>
          <div className="flex justify-center items-center gap-6 mt-6 z-10">
            <button className="bg-[#4c00ff] w-36 p-2 rounded text-xl hover:bg-white hover:text-[#4c00ff] hover:cursor-pointer transition-all duration-200">
              Contact Us
            </button>
            <button className="bg-[#F37A0E] w-40 p-2 rounded text-xl hover:bg-white hover:cursor-pointer hover:text-[#F37A0E] transition-all duration-200 ">
              Our Services
            </button>
          </div>
          <div className="absolute bottom-5 right-1 z-10">
            <CircularText text="Build • Market • Scale • " />
          </div>
        </div>
        <div className="bg-black w-full h-screen">
          <FloatingLines />
        </div>
      </main>
      <section className="relative bg-white rounded-[60px] w-full m-h-96 pt-10">
        <h1 className="text-[#F37A0E] text-3xl font-semibold text-center">
          WHO WE ARE
        </h1>
        <p className="text-black text-center text-4xl">
          Driving business growth through smart and impactful digital marketing
        </p>
        <div className="w-full flex justify-around flex-row p-10">
          <div className="w-1/2">
            <p className="text-black text-xl">
              Founded in 2025, Mage Marketer is a dynamic digital marketing
              agency in Pune. Our journey began with a simple yet powerful
              vision: to empower businesses with innovative digital marketing
              strategies that drive growth and success in the online world.
            </p>
            <br />
            <p className="text-black text-xl">
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
            <Image src="/logo.png" fill className="object-contain" />
          </div>
        </div>
        <div className="absolute overflow-hidden top-0 left-0 z-10 h-full w-full">
          <ImageTrail
            items={[
              "https://picsum.photos/id/287/300/300",
              "https://picsum.photos/id/1001/300/300",
              "https://picsum.photos/id/1025/300/300",
              "https://picsum.photos/id/1026/300/300",
              "https://picsum.photos/id/1027/300/300",
              "https://picsum.photos/id/1028/300/300",
              "https://picsum.photos/id/1029/300/300",
              "https://picsum.photos/id/1030/300/300",
              // ...
            ]}
            variant="1"
          />
        </div>
      </section>
      <section className="w-full h-1/3 flex items-center justify-around p-20">
        <div className="w-1/2 h-full flex justify-around items-center mt-12 ">
          <div className="flex flex-col justify-around items-center gap-20 h-full ">
            <div>
              <h1 className="text-6xl font-medium">3+</h1>
              <h3 className="text-2xl text-[#2058f9]">Years of Experience</h3>
            </div>
            <div>
              <h1 className="text-6xl font-medium">1,236 +</h1>
              <h3 className="text-2xl text-[#2058f9]">Successful Projects</h3>
            </div>
          </div>
          <div className="flex flex-col justify-around items-center gap-20 h-full">
            <div>
              <h1 className="text-6xl font-medium">436+</h1>
              <h3 className="text-2xl text-[#2058f9]">Brands Transformed</h3>
            </div>
            <div>
              <h1 className="text-6xl font-medium">780+</h1>
              <h3 className="text-2xl text-[#2058f9]">Campaigns Launched</h3>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <h1 className="text-3xl">Your Brand Deserves More</h1>
          <TextType
            text={["Growth", "Recongnition", "Visibility", "Engagement"]}
          />
          <p className="text-white text-xl pt-10">
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
    </>
  );
}
