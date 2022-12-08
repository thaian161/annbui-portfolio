import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillYoutube,
} from 'react-icons/ai';

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ann Bui Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          {/* Nav Bar Section */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl"> Ann Bui Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-sm" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-300 to-pink-300 text-white px-4 py-2 rounded-md ml-8 font-Montserrat"
                  href="https://resume.creddle.io/resume/j1ryfjyu3f1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* About Me Section */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium ">
              Ann Bui
            </h2>
            <h3 className="text-2xl py-2"> Front-end Dev & UXUI Designer</h3>
            <p className="text-md py-5 leading-6 text-gray-800">
              Junior Front-end Dev who transitioned from Business Administration
              field. I have a strong interest in Web Development and love the
              ability to be creative and design visually appealing applications.
              <br />
              Passionate about creating beautiful and user-centered products
              that bring joy and meet the needs of users in their daily lives.
              <br />
              <br />
              High achiever, detail oriented to pixel perfect with experience in
              Project Management and Documentation. With a “work hard play hard”
              attitude, a willingness to learn, and a desire to get my job done
              excellently!
              <br />
              <br />
              Though I still have a lot to learn, I am eager to do so and look
              forward to sharpening the skills I've gained from my education.
            </p>
          </div>
          {/* Social Media Icon links section */}
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://github.com/thaian161"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/thaian161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a href="mailto:hello.annbui@gmail.com">
              <AiOutlineMail />
            </a>
            <a
              href="https://www.youtube.com/@JanthBui/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
          </div>
          {/* My Photo Section */}
          <div className=""></div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
