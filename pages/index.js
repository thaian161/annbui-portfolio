import Head from 'next/head';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { RiSunFill } from 'react-icons/ri';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillYoutube,
} from 'react-icons/ai';
import { useState, useRef } from 'react';

import Image from 'next/legacy/image';
import AnnProfilePhoto from '../public/AnnBuiProfilePhoto.png';
import Developing from '../public/Developing.png';
import UXUI from '../public/UX:UI.png';
import Consulting from '../public/Consulting.png';
import Testing from '../public/Testing.png';
import Logo from '../public/Logo2.png';
import ABPortfolio from '../public/ABPortfolio.png';
import CSS from '../public/CSS.png';
import Bakeitup from '../public/Bakeitup.png';
import J from '../public/J.png';
import Scheduler from '../public/Scheduler.png';
import TinyApp from '../public/TinyApp.png';
import Tweeter from '../public/Tweeter.png';
import DP from '../public/DP.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const ref = useRef(null);
  const handleBoucingButtonDown = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=0.7" />
        <title>Ann Bui Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#f0f5fb] px-10 md:px-22 lg:px-40 dark:bg-[#2a3e5a]">
        <section className="min-h-fit">
          {/* -------NAV BAR SECTION------- */}

          <nav className="sticky top-0 z-10 w-full px-2 py-6 bg-[#f0f5fb] sm:px-4 flex justify-between dark:bg-[#2a3e5a]">
            <Image
              className="text-xl"
              src={Logo}
              width={100}
              height={100}
              alt="Developing Serive An Bui Provides"
            />

            <ul className="flex items-center">
              <li>
                {!darkMode && (
                  <h1
                    className="flex text-[#516f96]  hover:text-[#35557e] hover:scale-110 font-[800] font-Nunito cursor-pointer"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    Dark
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl"
                    />
                  </h1>
                )}
                {darkMode && (
                  <h1
                    className="flex text-yellow-400 font-[800] hover:text-yellow-200 hover:scale-110 font-Nunito cursor-pointer"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    Light
                    <RiSunFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl"
                    />
                  </h1>
                )}
              </li>
              <li className="hover:scale-110 transition ease-in-out delay-100">
                <a
                  className="bg-[#385E8F] text-[#ffffff] md:text-lg px-4 py-2 rounded-md ml-8 font-Nunito font-[800] cursor-pointer "
                  href="https://resume.creddle.io/resume/j1ryfjyu3f1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* -------ABOUT ME/ FRONT PAGE SECTION------- */}
          <div className="lg:flex row md:w-full">
            <div>
              <div className="text-center m-auto md:text-left">
                <h2 className="leading-[3.5rem] text-5xl py-2 text-[#385E8F] font-[700] md:text-6xl mt-10 mb-5 font-Poppins dark:text-[#f0f5fb]">
                  Heyyy, this is Ann{' '}
                  <p className="inline-block animate-waves delay-3000">👋🏼</p>
                </h2>

                <span className="font-Nunito font-[700] text-2xl md:text-3xl text-[#f0f5fb] bg-blue-300 px-2 rounded-md dark:bg-[#f28389]">
                  Jr Front-end Dev & UXUI Designer
                </span>
                <p className=" font-Open text-md lg:pr-14 py-5 leading-6 text-gray-800 md:text-xl max-w-4xl mx-auto mt-6 font-[500] dark:text-[#b8c9dc]">
                  I have a strong interest in Web Development and love the
                  ability to be{' '}
                  <span className="text-blue-400 font-[500] dark:text-[#FF787F]">
                    creative and design
                  </span>{' '}
                  visually appealing applications.
                  <br />
                  Passionate about creating beautiful and{' '}
                  <span className="text-blue-400 font-[500] dark:text-[#FF787F]">
                    user-centered products
                  </span>{' '}
                  that bring joy and meet the needs of users in their daily
                  lives.
                  <br />
                  <br />
                  High achiever, detail oriented to pixel perfect with
                  experience in Project Management and Documentation. With a
                  “work hard play hard” attitude,{' '}
                  <span className="text-blue-400 font-[500] dark:text-[#FF787F]">
                    willingness to learn
                  </span>{' '}
                  , and a desire to get my job done excellently!
                  <br />
                  <br />
                  Though I still have a lot to learn, I am eager to do so and
                  look forward to sharpening the skills I have gained from my
                  education.
                </p>
              </div>
              {/* -------SOCIAL MEDIA ICONS SECTION------- */}
              <div className=" text-4xl flex justify-center gap-14 py-3 text-gray-600 md:justify-start md:gap-6 md:mb-10 dark:text-[#bbdbff]">
                <a
                  href="https://github.com/thaian161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="hover:scale-125 hover:text-[#476fa4]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/thaian161/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className=" hover:scale-125 hover:text-[#476fa4]" />
                </a>
                <a href="mailto:hello.annbui@gmail.com">
                  <AiOutlineMail className="hover:scale-125 hover:text-[#476fa4]" />
                </a>
                <a
                  href="https://www.youtube.com/@JanthBui/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube className="hover:scale-125 hover:text-[#476fa4]" />
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-md">
              <div>
                {/* -------MY PROFILE PHOTO SECTION------- */}
                <div className="rounded-lg absolute border-dashed border-8 border-[#3482f679] dark:border-[#88b7fc7b] h-80 w-80 top-[2rem] left-[3rem] md:h-94 md:w-94  md:top-[2rem] md:left-[6rem] lg:top-[15rem] lg:left-[10rem]"></div>
                <div className="relative z-30 rounded-lg mx-auto mb-20 bg-gradient-to-b from-[#a1c4fd] to-[#c2e9fb] w-80 h-80 mt-10 overflow-hidden md:h-94 md:w-94 md:mt-20 lg:mt-52 lg:ml-32 md:my-4 md:mb-20 dark:bg-gradient-to-b dark:from-[#b2c3eb] dark:to-[#e4efe9]">
                  <Image
                    src={AnnProfilePhoto}
                    layout="fill"
                    objectFit="cover"
                    alt="Ann Bui Profile Picture"
                  />
                </div>
              </div>
              <div className="absolute z-20 top-40 -left-4 w-72 h-72 bg-[#c8fad9] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob2 dark:bg-green-500"></div>
              <div className="absolute z-20 top-7 -right-2 w-80 h-80 bg-[#E0D3FE] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob2 animation-delay-3000 dark:bg-purple-300"></div>
              <div className="absolute z-20 md:top-96 md:left-80 top-64 -bottom-8 left-[7rem] w-72 h-72 bg-[#fbacb2dc] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob  animation-delay-4000 dark:bg-pink-400"></div>
              <div className="absolute z-20  top-74 -bottom-4 left-2 w-72 h-72 bg-[#fff29a] rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob2 animation-delay-4000 dark:bg-yellow-300 md:top-[28rem]"></div>
            </div>
          </div>
        </section>
        {/* -------BOUCING ARROW DOWN-------*/}
        <section className="text-7xl flex justify-center mt-10 mb-24">
          <IoIosArrowDown
            onClick={handleBoucingButtonDown}
            className="text-[#FF787F] animate-bounce cursor-pointer  "
          />
        </section>

        {/* ------- SERVICES I OFFER SECTION------ */}
        <section className="mb-10">
          <div ref={ref}>
            <span className="font-Nunito  rounded-md font-[700] text-2xl py-1 md:text-3xl bg-gradient-to-b from-transparent via-transparent to-blue-200 dark:text-[#f0f5fb] dark:bg-gradient-to-b dark:from-transparent dark:via-transparent dark:to-[#FF787F]">
              Have a dream website/app in mind?
            </span>
            <p className=" font-Open text-md lg:pr-14 py-5 leading-6 md:text-xl font-[500] mt-2 dark:text-[#b8c9dc]">
              Let&apos;s work together to bring your ideas to life. I am{' '}
              <span className="text-blue-400 font-[500] dark:text-[#f28389]">
                available for part-time freelance work
              </span>{' '}
              My services are listed below
            </p>
          </div>
          {/* -------THREE SERVICES SECTION------- */}
          <div className="lg:flex gap-10">
            {/* -------DEVELOPING WEB CARD-------*/}
            <div className=" lg:w-1/3 text-center shadow-xl p-10 rounded-2xl my-10 bg-gradient-to-tl from-white to-blue-200 dark:bg-gradient-to-tl dark:from-[#b5c4d8] dark:to-[#6f90bd] flex-auto dark:shadow-[#6f87ac] ">
              <Image
                src={Developing}
                width={110}
                height={110}
                alt="Developing Serive An Bui Provides"
                className="hover:animate-waves"
              />
              <h3 className="text-lg font-Poppins font-medium pt-8 pb-4 leading-6 md:text-xl ">
                Developing Website || App
              </h3>
              <li className="text-left font-Open font-md">
                Build static website, landing page, promotion page, blogs...etc
              </li>
              <li className="text-left font-Open font-md">
                Build web applications
              </li>
              <li className="text-left font-Open font-md">
                Develop WordPress templates, pages, and posts, document the
                process, and make user guide for future reference
              </li>
              <h4 className="py-4 text-blue-500 font-Open font-[700]">
                Technology:
                <span className="text-gray-800 font-Open font-[500]">
                  <br /> ReactJS, Javascript (ES6+), WordPress, Tailwind, SCSS,
                  Custom CSS, NodeJS, mySQL, PostgreSQL, ExpressJS
                </span>
              </h4>
            </div>

            {/* -------UXUI CARD-------*/}
            <div className="lg:w-1/3  text-center shadow-lg p-10 rounded-2xl my-10 flex-auto bg-gradient-to-t from-white to-blue-100 dark:bg-gradient-to-t dark:from-[#b5c4d8] dark:to-[#6f90bd] dark:shadow-[#6f87ac] ">
              <Image
                src={UXUI}
                width={110}
                height={110}
                alt="UXUI - An Bui Provides"
                className="hover:animate-waves"
              />
              <h3 className="text-lg font-Poppins font-medium pt-8 pb-4  leading-6 md:text-xl">
                UX/UI Designing
              </h3>
              <li className="text-left font-Open font-md">
                UX research: understand user-story, conduct user
                research/surveys
              </li>
              <li className="text-left font-Open font-md">
                Create user interface: choose color scheme, typography, design
                pattern and system
              </li>
              <li className="text-left font-Open font-md">
                Build wire-frame, prototype and final look mock-up
              </li>
              <h4 className="py-4 text-blue-500 font-Open font-[700]">
                Tools:
                <span className="text-gray-800 font-Open font-[500]">
                  <br /> Figma, Plugins in Figma, Adobe Express
                </span>
              </h4>
            </div>
            {/* -------CONSULTING CARD-------*/}
            <div className="lg:w-1/3  text-center shadow-lg p-10 rounded-2xl my-10 flex-auto bg-gradient-to-tr from-white to-blue-200 dark:bg-gradient-to-tr dark:from-[#b5c4d8] dark:to-[#6f90bd] dark:shadow-[#6f87ac] ">
              <Image
                src={Consulting}
                width={110}
                height={110}
                alt="Consulting Serive An Bui Provides"
                className="hover:animate-waves"
              />
              <h3 className="text-lg font-Poppins font-medium pt-8 pb-4 leading-6 md:text-xl">
                Consulting Servies
              </h3>
              <li className="text-left font-Open font-md">
                End to end user testing and prodive feeback for your products
              </li>
              <li className="text-left font-Open font-md">
                Website audit to optimize SEO & re-design your website/app
                interface
              </li>
              <li className="text-left font-Open font-md">
                Feeling nervous before your interview? I can conduct a mock
                interview and provide feedback
              </li>
              <h4 className="py-4 text-blue-500 font-Open font-[700]">
                Contact me via:
                <span className="text-gray-800  font-Open font-[500]">
                  <br />
                  <a
                    className="cursor-pointer"
                    href="mailto:hello.annbui@gmail.com"
                  >
                    Email
                  </a>{' '}
                  or{' '}
                  <a
                    className="cursor-pointer"
                    href="https://www.linkedin.com/in/thaian161/"
                  >
                    Linkedin
                  </a>
                </span>
              </h4>
            </div>
          </div>
        </section>
        {/* -------PROJECTS PORTFOLIO SECTION------- */}
        <section>
          <div>
            <span className="font-Nunito font-[700] text-2xl py-1 md:text-3xl bg-gradient-to-b from-transparent via-transparent to-blue-200 dark:text-[#f0f5fb] rounded-md dark:bg-gradient-to-b dark:from-transparent dark:via-transparent dark:to-[#FF787F] ">
              My Projects
            </span>
            <p className="font-Open text-mdtext-md lg:pr-14 py-5 leading-6 md:text-xl font-[500] mt-2 dark:text-[#b8c9dc]">
              Here are some of my{' '}
              <span className="text-blue-400 font-[500] dark:text-[#f28389]">
                coding projects
              </span>{' '}
              and{' '}
              <span className="text-blue-400 font-[500] dark:text-[#f28389]">
                UX/UI design
              </span>{' '}
              I have done so far
            </p>
          </div>
          {/* -------SHOWCASE EACH PROJECT SECTION------- */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap font-Nunito font-[500]">
            {/* ---------------------Portfolio Page-------------------------- */}
            <div className="basis-1/3 flex-1">
              <Image
                src={ABPortfolio}
                className="rounded-t-xl object-cover hover:scale-110 transition ease-in-out delay-300"
                width={'100%'}
                height={'60%'}
                layout="responsive"
                alt="Ann Bui Portfolio Project"
              />
              <div className="flex flex-col items-center text-center shadow-xl  rounded-b-2xl bg-white font-Open text-md ">
                <p className="justify-center pt-5 px-6 leading-8">
                  This portfolio page :D
                </p>
                <p>
                  <span className="font-[700]">Tech stack:</span> NextJS,
                  ReactJS & Tailwind{' '}
                </p>

                <div className="flex items-center justify-center">
                  <button className=" text-lg w-1/2 px-6 pb-2 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                    <a
                      href="https://thaian161.github.io/annbui-portfolio/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Demo
                    </a>
                  </button>
                  <button className=" text-lg w-1/2 px-6 pb-2 m-4 duration-200 hover:scale-125 dark:text-[#f0f5fb] dark:hover:text-blue-200  hover:text-blue-400">
                    <a
                      href="https://github.com/thaian161/annbui-portfolio"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* ---------------------Dirty PAws-------------------------- */}
            <div className="basis-1/3 flex-1 ">
              <Image
                src={DP}
                className="rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300"
                width={'100%'}
                height={'60%'}
                layout="responsive"
                alt="Expense App Project"
              />
              <div className="flex flex-col items-center text-center shadow-xl  rounded-2xl bg-pink-400">
                <p className="justify-center py-2 px-6">
                  Dirty Paws: Dating App cartoon theme.
                </p>
                <p>Using ReactJS, ExpressJS and custom CSS</p>

                <div className="flex items-center justify-center">
                  <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                    <a
                      href="https://www.youtube.com/watch?v=vDzoe_sz0AQ"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Demo
                    </a>
                  </button>
                  <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                    <a
                      href="https://github.com/thaian161/Dirty-Paws"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* ------------------------Jugnle Plant Shop----------------------- */}
            <div className="basis-1/3 flex-1">
              <Image
                src={J}
                className="rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300"
                width={'100%'}
                height={'60%'}
                layout="responsive"
                alt="Jungle Plan Shop Project"
              />
              <div className="flex items-center justify-center">
                <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                  <a
                    href="https://www.youtube.com/watch?v=uNaOVM1S9eI"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </button>
                <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                  <a
                    href="https://github.com/thaian161/Jungle-Plant-Shop"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
            {/* ------------------Bake It Up----------------------------- */}

            <div className="basis-1/3 flex-1">
              <Image
                src={Bakeitup}
                className="rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300"
                width={'100%'}
                height={'60%'}
                layout="responsive"
                alt="Bake It Up"
              />
              <div className="flex items-center justify-center">
                <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                  <a
                    href="https://www.youtube.com/watch?v=0k2WaGUxCJ0&t=2s"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </button>
                <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                  <a
                    href="https://github.com/thaian161/Bake-It-Up"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
            {/* --------------------Tweeter--------------------------- */}

            <div className="basis-1/3 flex-1">
              <Image
                src={Tweeter}
                className="rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300"
                width={'100%'}
                height={'60%'}
                layout="responsive"
                alt="Tweeter Project"
              />
              <div className="flex items-center justify-center">
                <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                  <a
                    href="https://www.youtube.com/watch?v=x8zQIm24-B8&t=3s"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </button>
                <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                  <a
                    href="https://github.com/thaian161/tweeter"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
            {/* -----------------------Scheduler------------------------ */}

            <div className="basis-1/3 flex-1">
              <Image
                src={Scheduler}
                className="rounded-lg object-cover hover:scale-110 transition ease-in-out delay-300"
                width={'100%'}
                height={'60%'}
                layout="responsive"
                alt="Nflyte Mock-up Project"
              />
              <div className="flex items-center justify-center">
                <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                  <a
                    href="https://www.youtube.com/watch?v=OzJA77gHJeU"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </button>
                <button className=" text-lg w-1/2 px-6 py-3 m-4 duration-200 dark:text-[#f0f5fb] dark:hover:text-blue-200 hover:scale-125 hover:text-blue-400">
                  <a
                    href="https://github.com/thaian161/Scheduler-react"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
            {/* ----------------------------------------------- */}
          </div>
        </section>

        {/* -------BOUCING ARROW UP-------*/}
        <section className="text-7xl flex justify-center mt-2 mp-3 md:pb-5 ">
          <IoIosArrowUp
            onClick={handleBoucingButtonDown}
            className="text-[#FF787F] animate-bounce cursor-pointer "
          />
        </section>
      </main>

      <footer className="bg-[#385e8f] dark:bg-[#2a3e5a]">
        <div className="text-3xl flex justify-center gap-4 text-blue-200 pt-6 ">
          <a
            href="https://github.com/thaian161"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="hover:text-[#ffff] hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/thaian161/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="hover:text-[#ffff] hover:scale-125" />
          </a>
          <a href="mailto:hello.annbui@gmail.com">
            <AiOutlineMail className="hover:text-[#ffff] hover:scale-125" />
          </a>
          <a
            href="https://www.youtube.com/@JanthBui/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube className="hover:text-[#ffff] hover:scale-125" />
          </a>
        </div>
        <div className="p-5 text-center text-xl text-blue-200 font-[500] font-Nunito hover:text-white cursor-pointer">
          Designed & Build by Ann Bui ✌🏼
        </div>
      </footer>
    </div>
  );
}
