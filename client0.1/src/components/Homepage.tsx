import TypewriterLoop from "./typewriterLoop";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function HomePage() {
  const phrases = [
    "Fake user data..",
    "Mock database in seconds..",
    "10,000 users in 2 clicks..",
    "Data of customized schema..",
  ];

  return (
    <>
      <div className=" bg-black ">
        <div className="flex flex-col items-center justify-between text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400">
          <TopBar />
          <LeftSection />
          <RightSection phrases={phrases} />
          <Footer />
        </div>
      </div>
    </>
  );
}

function LeftSection() {
  return (
    <>
      <div className="w-screen  flex flex-col items-center justify-start  h-screen ">
       

        <div className="text-7xl/24 font-bold text-center w-[1000px] h-[250px] flex justify-center">
          Speed up development with dynamic test data.
        </div>

        <div className="text-3xl font-bold text-center w-[700px] h-[200px]">
          No more hardcoded data, just mock it like a pro. Design your schema &
          Get instant test data.
        </div>

        <div className="h-[200px]">
          <div className="h-[70px] w-[600px] flex justify-center items-center shadow-2xl">
            Start Generating Data
          </div>
        </div>
      </div>
    </>
  );
}

function RightSection({ phrases }: { phrases: string[] }) {
  return (
    <>
      <div className="w-[700px] flex flex-col items-end justify-center  h-screen ">
        <div className="text-8xl/36 font-bold text-right">
          <div>D E F I N E</div>
          <div> G E N E R A T E</div>
          <div>I T E R A T E</div>
        </div>
        <TypewriterLoop phrases={phrases} />
      </div>
    </>
  );
}

function TopBar() {
  return (
    <>
     <div className="text-6xl/32 font-bold text-left border-4 h-[150px]  w-screen ">
          F a u x DB
        </div>
    </>
  );
}



function Footer() {
  return (
    <footer className="w-full h-[150px] border-t border-gray-300 dark:border-gray-700 py-6 px-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col md:flex-row justify-between items-center">
      
      {/* Left: App Name */}
      <div className="text-2xl font-semibold mb-4 md:mb-0">
        Faux<span className="text-blue-500">DB</span>
      </div>

      {/* Center: Logo Placeholder */}
      <div className="mb-4 md:mb-0">
        {/* Replace with actual logo if needed */}
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>

      {/* Right: Socials */}
      <div className="flex space-x-20 text-xl bg-green-600 p-5 justify-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
