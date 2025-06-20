import { useEffect, useState } from "react";
import TypewriterLoop from "./typewriterLoop";
import { useNavigate } from "react-router-dom";
import schema from "/src/assets/schema.png";
import result from "/src/assets/result.png";

export default function HomePage() {
  const phrases = [
    "Fake user data..",
    "Mock database in seconds..",
    "10,000 users in 2 clicks..",
    "Data of customized schema..",
  ];

  return (
    <>
      <div className=" bg-gradient-to-b from-black via-amber-700 to-black ">
        <div className="flex flex-col items-center justify-between ">
          <TopBar />
          <LeftSection />
          <MidSection />
          <RightSection phrases={phrases} />
          <Footer />
        </div>
      </div>
      
    </>
  );
}

function LeftSection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen flex flex-col items-center justify-start  h-screen text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400">
        <div className="text-7xl/24 font-bold text-center w-[1000px] h-[250px] flex justify-center flex-col items-center">
          <span>Speed up development with</span>
          <div className="flex flex-row items-center w-[350px] justify-between">
            <WordRepeater words={["TEST", "MOCK", "FAKE"]} />
            <span>data.</span>
          </div>
        </div>

        <div className="text-3xl font-bold text-center w-[700px] h-[200px]">
          No more hardcoded data, just mock it like a pro. Design your schema &
          Get instant test data.
        </div>

        <div className="h-[100px] mt-10 flex flex-row justify-between items-center space-x-5">
          <div
            onClick={() => navigate("/pricingPage")}
            className="group h-[70px] w-[300px] flex justify-center items-center text-black font-bold rounded-lg bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"
          >
            <div className="bg-black"></div>
            <button className="text-white bg-black h-[65px] w-[295px] rounded-lg group-hover:bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 group-hover:text-black group-hover:text-5xl transition duration-300 ease-in-out">
            Pricing
            </button>
          </div>

          <div
            onClick={() => navigate("/codeEditor")}
            className="h-[70px] w-[300px] flex justify-center items-center text-black font-bold rounded-lg bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 cursor-pointer hover:scale-110 transition duration-500 ease-in-out"
          >
            <button className="text-white bg-black h-[65px] w-[295px] rounded-lg hover:bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 hover:text-black hover:text-5xl transition duration-300 ease-in-out">
            Generate
            </button>
          </div>
        </div>

        <div className="h-[100px] mt-2 flex flex-row justify-between items-center space-x-5">
          <div
            onClick={() => navigate("/formsPage")}
            className="h-[70px] w-[300px] flex justify-center items-center text-black font-bold rounded-lg bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"
          >
            <button className="text-white bg-black h-[65px] w-[295px] rounded-lg hover:bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 hover:text-black hover:text-5xl transition duration-300 ease-in-out">
            Forms
            </button>
          </div>

          <div
            onClick={() => navigate("/promptInteractivePage")}
            className="h-[70px] w-[300px] flex justify-center items-center text-black font-bold rounded-lg bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"
          >
            <button className="text-white bg-black h-[65px] w-[295px] rounded-lg hover:bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 hover:text-black hover:text-5xl transition duration-300 ease-in-out">
            Prompt
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

function RightSection({ phrases }: { phrases: string[] }) {
  return (
    <>
      <div className="w-[750px] p-10 m-10 flex flex-col items-end justify-center  h-screen text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400">
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

function MidSection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row w-[1000px] m-10 p-10 justify-between items-center">
        <div className="text-6xl/24 font-bold text-left flex flex-col text-transparent  bg-clip-text bg-gradient-to-l from-pink-500 via-yellow-300 to-cyan-400">
          <div>Your Schema.</div>
          <div>Your Data.</div>
          <div>Instantly.</div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <img src={schema} alt="schema image" />
          <img src={result} alt="result image" />
        </div>
        
      </div>
      <div
            onClick={() => navigate("/codeEditor")}
            className="h-[70px] w-[600px] m-10 flex justify-center items-center font-bold rounded-lg bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-500 cursor-pointer"
          >
            <button className="text-white bg-black h-[65px] w-[595px] rounded-lg">Get Started</button>
          </div>
    </>
  );
}

function TopBar() {
  return (
    <>
      <div className="text-6xl/32 font-bold text-left border-4 h-[150px] pl-10 w-screen text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400">
        F a u x DB
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="w-full h-[150px] bg-diffused-inferno bg-gradient-to-t flex flex-row justify-between items-center ">
      {/* Left: App Name */}
      <div className="text-2xl font-semibold mb-4 md:mb-0 text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400">
        Faux<span className="text-blue-500">DB</span>
      </div>

      {/* Center: Logo Placeholder */}
      <div className="mb-4 md:mb-0">
        {/* Replace with actual logo if needed */}
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>

      {/* Right: Socials */}
      <div className="flex  justify-center  ">
        <div className="h-[50px] w-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </div>

        <div className="h-[50px] w-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        </div>

        <div className="h-[50px] w-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}

function WordRepeater({ words }: { words: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="font-mono text-transparent  bg-clip-text bg-gradient-to-l from-pink-600 via-amber-400 to-cyan-600">
        {words[currentIndex]}
      </div>
    </>
  );
}
