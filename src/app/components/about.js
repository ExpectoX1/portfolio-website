import Image from "next/image";
import Arrow from "./arrow";

function AboutSection() {
  return (
    <>
      <div className="h-screen max-w-4xl mx-auto">
        <div className="grid mt-24 grid-cols-3  ">
          <div className="col-span-2">
            <div className="flex my-2">
              <div className="text-[#ccd6f6] text-2xl   ">
                <span className="text-[#64ffda] font-spacemono">01.</span>
                <span className="font-bold text-3xl"> About Me </span>
              </div>
              <div className="h-[0.05rem] w-72 bg-[#7e89a6]  my-auto ml-5 opacity-25  "></div>
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

          <div className="flex col-span-1 mt-24 relative">
            <div>
              <Image
                className="rounded-xl z-10 max-w-full object-cover -ml-5"
                src="/siddharth.jpeg"
                alt="Siddharth Kumar"
                height={700}
                width={700}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutSection;
