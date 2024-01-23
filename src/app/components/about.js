import Image from "next/image";
import Arrow from "./arrow";

function AboutSection() {
  return (
    <>
      <div className="h-screen lg:max-w-4xl max-w-sm mx-auto">
        <div className="grid mt-24 lg:grid-cols-3 grid-rows-2  ">
          <div className="col-span-2">
            <div className="flex my-2">
              <div className="flex text-[#ccd6f6] text-2xl whitespace-nowrap items-center   ">
                <div className="text-[#64ffda] font-spacemono lg:text-2xl text-lg">
                  01.
                </div>
                <div className="font-bold lg:text-3xl text-xl"> About Me </div>
              </div>
              <div className="h-[0.05rem] lg:w-72 w-full bg-[#7e89a6]  my-auto ml-5 opacity-25  "></div>
            </div>
            <div className="max-w-lg">
              <p className="text-[#7e89a6] mt-12 font-semibold leading-relaxed ">
                Greetings! I'm Siddharth, and I enjoy exploring innovative
                technologies, putting my own spin on them. At 16, I embarked on
                creating my own chatbot named Jarvis, and the process not only
                fueled my passion but also imparted valuable lessons.
              </p>
              <p className="text-[#7e89a6] mt-3 font-semibold leading-relaxed ">
                Fast forward to the present, my keen interest in technology led
                me to pursue Computer Science Engineering at{" "}
                <a className="text-[#64ffda] hover:underline ease-in-out duration-500">
                  PES University
                </a>{" "}
                Bangalore. I've delved into various technologies, with a focus
                on NLP and web development. Additionally, I had the privilege of
                interning at{" "}
                <a className="text-[#64ffda] hover:underline ease-in-out duration-500">
                  Rakuten Symphony
                </a>{" "}
                during the summer.
              </p>
              <p className="text-[#7e89a6] mt-3 font-semibold leading-relaxed">
                Currently, I am immersed in my final year project titled - "
                <span className="text-[#64ffda]">
                  Question Generation Using Multimodal Contextual Analysis
                </span>
                ".
              </p>
              <p className="text-[#7e89a6] mt-3 font-semibold leading-relaxed">
                Here are some of the technologies I am working with with:
              </p>
              <div className="flex gap-16">
                <div className="flex flex-col text-sm gap-3 mt-4 font-spacemono tracking-tighter text-[#7e89a6]  ">
                  <div className="flex items-center">
                    <div className="text-[#64ffda]">
                      <Arrow />
                    </div>
                    <div>JavaScript</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#64ffda]">
                      <Arrow />
                    </div>
                    <div>Next.JS | React.JS</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#64ffda]">
                      <Arrow />
                    </div>
                    <div>MERN Stack</div>
                  </div>
                </div>
                <div className="flex flex-col text-sm gap-3 mt-4 font-spacemono tracking-tighter text-[#7e89a6]  ">
                  <div className="flex items-center">
                    <div className="text-[#64ffda]">
                      <Arrow />
                    </div>
                    <div>NLP</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#64ffda]">
                      <Arrow />
                    </div>
                    <div>Python</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#64ffda]">
                      <Arrow />
                    </div>
                    <div>MongoDB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mt-24 ">
            <img
              className="max-w-sm rounded mt-10 p-10 "
              src="/siddharth.jpeg"
              alt="Siddharth Kumar"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutSection;
