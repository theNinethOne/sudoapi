import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function PromptPage() {
  const options = {
    readOnly: false,
    minimap: { enabled: false },
  };

  const [userPrompt, setUserPrompt] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleEditorChange = (value: any) => {
    setUserPrompt(value);
  };

  const handleSubmit = () => {
    console.log(userPrompt);
  };

  const handelInnerClick = (e : React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsClicked(true);
  };


  return (
    <>
      {isClicked}
      <div onClick={() => setIsClicked(false)} className="bg-black h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="h-[250px] w-[650px] text-8xl/24 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400">
            Hello, Welcome..
          </div>
          <div
            onClick={ handelInnerClick }
            className={`h-[360px] w-[780px] flex items-center justify-center rounded-lg ${ isClicked ? "bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400" : "bg-black" }`}
          >
            <Editor
              height="40vh"
              width="90vh"
              theme="vs-dark"
              defaultLanguage="json"
              options={options}
              defaultValue=" "
              className=""
              value={userPrompt}
              onChange={(value) => handleEditorChange(value)}
            />
          </div>
          <div className="bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 hover:bg-black rounded-lg flex justify-center items-center h-[60px] w-[510px] m-5">
            <button
              className="bg-black rounded-lg text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 h-[50px] w-[500px]"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
