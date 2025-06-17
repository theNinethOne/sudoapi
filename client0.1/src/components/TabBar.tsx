import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Tab {
  id: number;
  name: string;
  content: string;
  isSubmitted: boolean;
}

export default function TabBar() {
  const [tabs, setTabs] = useState<Tab[]>();

  const [currentContent, setCurrentContent] = useState("");

  const [activeTabId, setActiveTabId] = useState(1);
  const [data, setData] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [contextCopy, setContextCopy] = useState(false);
  const [addressCopy, setAddresCopy] = useState(false);

  const options = {
    readOnly: false,
    minimap: { enabled: false },
  };

  const randomWords = [
    "bliss",
    "dream",
    "light",
    "smile",
    "grace",
    "bloom",
    "calm",
    "faith",
    "hope",
    "joy",
    "kind",
    "love",
    "peace",
    "soul",
    "true",
    "wise",
    "vast",
    "pure",
    "wild",
    "bold",
    "crisp",
    "gleam",
    "vivid",
    "fresh",
    "hush",
    "ideal",
    "jolly",
    "keen",
    "lull",
    "mirth",
    "noble",
    "omen",
    "prime",
    "quiet",
    "reach",
    "shine",
    "sweet",
    "trust",
    "unify",
    "valor",
    "warm",
    "yield",
    "zest",
    "arise",
    "begin",
    "craft",
    "dwell",
    "eager",
    "flair",
    "glide",
  ];

  useEffect(() => {
    addTabViewHandler();
  }, [tabs]);

  function addressCopyHandler() {
    navigator.clipboard.writeText(`http://localhost:3000/routes?modelId=${localStorage.getItem(activeTabId.toString())}`);
    setAddresCopy(true)
    const timeout = setTimeout(() => setAddresCopy(false), 2000);
    return () => clearTimeout(timeout);
  }

  function contextCopyHandler() {
    navigator.clipboard.writeText(data);
    setContextCopy(true)
    const timeout = setTimeout(() => setContextCopy(false), 2000);
    return () => clearTimeout(timeout);
  }

  async function initiateTabs(value: string, newTabId: number) {
    setIsFirstRender(false);
    // const newTabId = Date.now();

    setTabs((prev) => [
      ...(prev ?? []),
      {
        id: newTabId,
        name: `${tabNameGenerator(randomWords)}`,
        content: `${value}`,
        isSubmitted: true,
      },
    ]);

    setActiveTabId(newTabId);

    const modelId = localStorage.getItem(`${newTabId}`) || "";
    const res = await axios.get(
      `http://localhost:3000/routes?modelId=${modelId}`
    );
    const renderData = JSON.stringify(res.data.data, null, "\t");
    console.log(renderData);
    setData(renderData);
    return res;
  }

  function tabNameGenerator(randomWords: string[]) {
    const randomIndex = Math.floor(Math.random() * (randomWords.length - 2));
    return (
      randomWords[randomIndex] +
      "-" +
      randomWords[randomIndex + 1] +
      "-" +
      randomWords[randomIndex + 2]
    );
  }

  function addTabViewHandler() {
    const currentTab = tabs?.find((t) => t.id === activeTabId);
    if (!currentTab) return console.log("no tab found");
    setCurrentContent(currentTab.content);
  }

  async function tabClickHandler(tab: number) {
    const currentTab = tabs?.find((t) => t.id === tab);
    if (!currentTab) return console.log("no tab found");
    setCurrentContent(currentTab.content);
    setActiveTabId(tab);

    const modelId = localStorage.getItem(`${tab}`) || "";
    const res = await axios.get(
      `http://localhost:3000/routes?modelId=${modelId}`
    );
    const renderData = JSON.stringify(res.data.data, null, "\t");
    console.log(renderData);
    setData(renderData);
    return res;
  }

  function tabCloseHandler(tab: number) {
    const newTabs = tabs?.filter((t) => t.id !== tab);
    setTabs(newTabs);
  }

  function addTabHandler() {
    const newTabId = Date.now();

    setTabs((prev) => [
      ...(prev ?? []),
      {
        id: newTabId,
        name: `${tabNameGenerator(randomWords)}`,
        content: ``,
        isSubmitted: false,
      },
    ]);

    setActiveTabId(newTabId);
  }

  function handleEditorChange(value: any) {
    if (!activeTabId) return console.log("no active tab");
    //console.log(activeTabId, currentContent)

    setTabs((prev) =>
      prev?.map((t) => (t.id === activeTabId ? { ...t, content: value } : t))
    );
  }

  async function handleSubmit() {
    //console.log(currentContent)
    setTabs((prev) =>
      prev?.map((t) => (t.id === activeTabId ? { ...t, isSubmitted: true } : t))
    );
    const res = await axios.post("http://localhost:3000/", {
      input: currentContent,
    });
    localStorage.setItem(`${activeTabId}`, res.data);
    console.log(res);
  }

  return (
    <>
      {tabs?.length}
      {isFirstRender ? (
        <PromptPage
          initTab={initiateTabs}
          activeTabId={activeTabId}
          isInitRender={() => setIsFirstRender(false)}
        />
      ) : (
        <div className="flex flex-row w-screen">
          <div className="flex flex-row  bg-black w-full">
            <div className="p-5 h-screen w-[700px]">
              <div className=" h-[70px] w-[550px] overflow-x-auto flex justify-left items-center my-4 mt-10">
                {tabs?.map((tab) =>
                  tab.id === activeTabId ? (
                    <div
                      key={tab.id}
                      className="group bg-gradient-to-r from-green-500 to-cyan-400 h-[50px] w-[200px] flex flex-shrink-0 items-center justify-between text-black text-md text-center px-4 rounded-2xl cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
                      onClick={() => tabClickHandler(tab.id)}
                    >
                      <div>{tab.name}</div>
                      <button
                        className="h-[30px] w-[30px] bg-zinc-500 group-hover:bg-zinc-600 flex items-center justify-center rounded-full text-white"
                        onClick={() => tabCloseHandler(tab.id)}
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <div
                      key={tab.id}
                      className="group bg-zinc-700 h-[50px] w-[200px] text-md px-4 flex flex-shrink-0 items-center justify-between  text-white rounded-2xl cursor-pointer hover:bg-zinc-500 mx-1"
                      onClick={() => tabClickHandler(tab.id)}
                    >
                      <div>{tab.name}</div>
                      <button
                        className="h-[30px] w-[30px] bg-zinc-500 group-hover:bg-zinc-600 flex items-center justify-center rounded-full text-white"
                        onClick={() => tabCloseHandler(tab.id)}
                      >
                        X
                      </button>
                    </div>
                  )
                )}
                <button
                  className="w-[50px] h-[50px] bg-zinc-600 flex-shrink-0 rounded-2xl items-center justify-center text-white  hover:bg-zinc-500 mx-1"
                  onClick={addTabHandler}
                >
                  +
                </button>
              </div>

              <div className="bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 h-[560px] w-[560px] flex justify-center items-center rounded-lg mt-2">
                <div className="bg-zinc-900 h-[550px] w-[550px] flex justify-center items-center rounded-lg">
                  <Editor
                    height="60vh"
                    width="60vh"
                    theme="vs-dark"
                    defaultLanguage="json"
                    options={options}
                    defaultValue=" "
                    className="mt-2 p-2"
                    value={currentContent}
                    onChange={(value) => handleEditorChange(value)}
                  />
                </div>
              </div>

              {tabs?.find((t) => t.id === activeTabId)?.isSubmitted === true ? (
                <div className="bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 m-4 rounded-lg flex justify-center items-center h-[60px] w-[510px] hover:scale-110 transition duration-700 ease-in-out">
                  <button
                    className="bg-black rounded-lg text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 h-[50px] w-[500px]"
                    disabled={!currentContent}
                  >
                    SUBMITTED
                  </button>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 rounded-lg flex justify-center items-center h-[60px] w-[510px] m-5 hover:scale-110 transition duration-700 ease-in-out">
                  <button
                    className="bg-black rounded-lg text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 h-[50px] w-[500px]"
                    onClick={handleSubmit}
                    disabled={!currentContent}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </div>
            <div className="p-5 h-screen w-[700px] overflow-auto flex flex-col items-center justify-center">
              <div className="bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 rounded-xl h-[610px] w-[610px] flex items-center justify-center flex-col mb-6">
                {/* <pre className="bg-gradient-to-r from-gray-900 to-gray-700 text-green-300 p-6 rounded-xl shadow-lg font-mono text-sm overflow-x-auto">
                        <code> */}

                <div className="h-[50px] w-[600px] bg-zinc-700 rounded-xl flex justify-end items-center">
                  <button
                    className="h-[40px] w-[80px] bg-zinc-500 mx-2 border-2 border-white rounded-xl text-white hover:scale-105 transition duration-700 ease-in-out"
                    onClick={contextCopyHandler}
                  >
                    {contextCopy ? "Copied" : "Copy"}
                  </button>
                </div>
                <SyntaxHighlighter
                  language="json" // Specify the language
                  style={atomDark} // Apply the theme (darcula, atom-dark, vs, etc.)
                  showLineNumbers={true} // Optional: show line numbers
                  wrapLines={true} // Optional: wrap long lines
                  customStyle={{
                    // Tailwind-like styling via customStyle prop
                    borderRadius: "0.75rem", // rounded-xl
                    padding: "1.5rem", // p-6
                    fontSize: "0.875rem", // text-sm
                    overflowX: "auto", // overflow-x-auto
                    height: " 535px ",
                    width: "600px",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow-lg
                  }}
                  codeTagProps={{
                    className: "font-mono", // Apply font-mono to the actual <code> tag
                  }}
                >
                  {data}
                </SyntaxHighlighter>
                {/* </code>
                    </pre> */}
              </div>
              <div className="h-[60px] w-[510px] bg-black rounded-xl flex items-center justify-between border-2 border-white flex-row hover:scale-110 transition duration-700 ease-in-out">
                <div className="h-[60px] w-[450px] text-white text-center flex items-center justify-center">{`http://localhost:3000/routes?modelId=${localStorage.getItem(activeTabId.toString())}`}</div>
                <button
                  className="h-[40px] w-[80px] bg-black mx-2 border-2 border-white rounded-xl text-white hover:scale-105 transition duration-300 ease-in-out"
                  onClick={addressCopyHandler}
                >
                  {addressCopy ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



function PromptPage( { initTab, activeTabId, isInitRender } : { initTab : ( value : string, newTabId : number ) => void, activeTabId : number, isInitRender : () => void }) {
  const options = {
    readOnly: false,
    minimap: { enabled: false },
  };

  const [userPrompt, setUserPrompt] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleEditorChange = (value: any) => {
    setUserPrompt(value);
  };

   async function handleSubmit() {
    const res = await axios.post("http://localhost:3000/", {
        input: userPrompt,
      });
      localStorage.setItem(`${activeTabId}`, res.data);
    initTab( userPrompt, activeTabId );
    setIsClicked(false);
    isInitRender()
  };

  const handelInnerClick = (e : React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsClicked(true);
  };


  return (
    <>
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
              defaultValue=' { "myVariable" : "string" } '
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
