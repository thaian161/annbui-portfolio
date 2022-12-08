import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';

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
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl"> Ann Bui Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-sm" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-300 to-pink-300 text-white px-4 py-2 rounded-md ml-8"
                  href="https://resume.creddle.io/resume/j1ryfjyu3f1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
