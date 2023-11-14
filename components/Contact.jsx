import Image from "next/image";
import { TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import Rectangle from "../public/Rectangle.svg";

const Contact = () => {
  return (
    <div>
    <div className=" max-w-3xl rounded-3xl px-8 py-4 flex  text-left mx-auto bg-gradient-to-tr dark:from-[#f6ebeb20] dark:to-[#fff8ec20] from-[#f6ebeb90] to-[#fff8ec60]  shadow-md drop-shadow-2xl backdrop-blur-xl ">
      <div className="order-2 sm:w-[75%] lg:w-[80%] lg:basis-[60%] flex flex-col space-y-6 cirGradient bg-clip-text mt-9">
        <h2 className=" tracking-normal bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-4xl font-bold font-deca selection:text-gray-700 dark:selection:text-white/90 ">
          Get in touch{" "}
        </h2>
        <p className="text-sm md:text-md font-normal lg:text-lg xl:text-xl ">
          If you have any queries or would like to discuss potential
          opportunities, please don&apos;t hesitate to reach out to me using
          given links.
        </p>
        <div className="grid grid-cols-2 text-[0.7rem] md:text-[0.85rem] lg:text-base gap-2 md:gap-3 lg:gap-4">
          <a
            href="https://twitter.com/RatneshPat76900"
            target="_blank"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
            <TfiTwitterAlt className="text-[#518FC7] dark:text-[#2498fe] h-3 w-3 md:h-4 md:w-4 " />
            <h5 className="text-transparent dark:text-[#2498fe]">Ratnesh</h5>
          </a>
          <a
            href="https://www.linkedin.com/in/ratnesh-kurmi-064682240/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex align-middle items-center font-jak font-bold space-x-1 w-max "
          >
            <TfiLinkedin className="text-[#CA6298] dark:text-[#ff339c] h-3 w-3 md:h-4 md:w-4 " />
            <h5 className="text-transparent dark:text-[#ff339c]">Ratnesh</h5>
          </a>
        </div>
      </div>
      <div className="order-1 md:order-2  -rotate-[15deg] lg:rotate-0 lg:flex">
        <Image
          src={Rectangle}
          alt="contact"
          width={750}
          height={650}
          className=" select-none backdrop-shadow-xl h-24 w-24 md:h-40 md:w-44 lg:w-[15rem] lg:h-[16rem] xl:w-[16rem] xl:h-[18rem] "
        />
      </div>
    </div>
     
     </div>
       
    
  );
};


export default Contact;
