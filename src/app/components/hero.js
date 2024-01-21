import Link from "next/link";
import SocialMedia from "./socialmedia";
import Email from "./email";

function HeroSection() {
  return (
    <>
      
      <Email/>
      <SocialMedia/>
      

      <div className="lg:max-w-5xl lg:mx-auto md:max-w-3xl max-w-sm mx-auto h-[90vh] overflow-hidden">
        <div
          className="text-[#64ffda] lg:mt-28 font-spacemono mt-36
         lg:mx-2 mb-5 lg:text-lg text-base"
        >
          Hi, my name is
        </div>
        <div className="lg:text-[4.4rem] lg:mb-10 font-bold text-[#ccd6f6] text-3xl lg:mt-10">
          Siddharth Kumar.
        </div>
        <div className="lg:text-[4.4rem] lg:mb-12 font-bold text-[#8892b0] text-4xl mt-2">
          I build things for the web.
        </div>
        <div className="text-[#7e89a6] lg:font-semibold text-base max-w-lg mt-5 mb-14 justify-center lg:tracking-wide  text-justify">
          I'm an aspiring software engineer specializing in multiple domains
          like Web Dev, AI/ML, NLP . Currently I'm focused at researching about{" "}
          <a href="/" className="text-[#64ffda]">
            Multimodal Question Generation
          </a>{" "}
          using Natrual Language Processing.
        </div>
        <Link
          href={"/"}
          className="border font-spacemono  border-[#64ffda] px-14 py-4 rounded text-[#64ffda] hover:bg-[#64ffda] hover:text-black transition duration-300 ease-in-out"
        >
          Find out more!
        </Link>
      </div>
    </>
  );
}
export default HeroSection;
