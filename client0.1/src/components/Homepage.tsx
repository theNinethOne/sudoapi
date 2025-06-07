import TypewriterLoop from "./typewriterLoop";

export default function HomePage() {

    const phrases = [
        "Welcome to the Neon World...",
        "Crafting bold UI experiences.",
        "React + Tailwind + Magic ✨",
        "Let's build something amazing!"
      ];

    return <>
        <div className="">
        <div className="h-screen w-screen bg-diffused-inferno flex items-center justify-center text-white">
      {/* <h1 className="text-4xl font-bold">Welcome to the Diffused World</h1> */}
      <TypewriterLoop phrases={phrases} />
    </div>
        </div>
    </>
}