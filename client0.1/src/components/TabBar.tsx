import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function TabBar() {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Tab 1", content: "", isSubmitted: false },
  ]);

  const [currentContent, setCurrentContent] = useState("");

  const [activeTabId, setActiveTabId] = useState(1);

  const [modelId, setModelId] = useState("");
  const [data, setData] = useState("");

  const options = {
    readOnly: false,
    minimap: { enabled: false },
  };

  useEffect(() => {
    addTabViewHandler();
  }, [tabs]);

  function addTabViewHandler() {
    const currentTab = tabs.find((t) => t.id === activeTabId);
    if (!currentTab) return console.log("no tab found");
    setCurrentContent(currentTab.content);
  }

  async function tabClickHandler(tab: number) {
    const currentTab = tabs.find((t) => t.id === tab);
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
    const newTabs = tabs.filter((t) => t.id !== tab);
    setTabs(newTabs);
  }

  function addTabHandler() {
    const newTabId = Date.now();

    setTabs((prev) => [
      ...prev,
      {
        id: newTabId,
        name: `Tab ${tabs.length + 1}`,
        content: `new tab ${newTabId}`,
        isSubmitted: false,
      },
    ]);

    setActiveTabId(newTabId);
  }

  function handleEditorChange(value: any) {
    if (!activeTabId) return console.log("no active tab");
    //console.log(activeTabId, currentContent)

    setTabs((prev) =>
      prev.map((t) => (t.id === activeTabId ? { ...t, content: value } : t))
    );
  }

  async function handleSubmit() {
    //console.log(currentContent)
    setTabs((prev) =>
      prev.map((t) => (t.id === activeTabId ? { ...t, isSubmitted: true } : t))
    );
    const res = await axios.post("http://localhost:3000/", {
      input: currentContent,
    });
    localStorage.setItem(`${activeTabId}`, res.data);
    console.log(res);
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="bg-zinc-900 p-5 h-screen w-[700px]">
          <div className=" h-[60px] w-[500px] overflow-x-auto flex justify-left">
            {tabs.map((tab) =>
              tab.id === activeTabId ? (
                <div
                  key={tab.id}
                  className="bg-zinc-500 h-[50px] w-[150px] p-2 px-2 flex flex-shrink-0 items-center justify-between border-b-4 border-b-blue-700 text-white rounded-2xl cursor-pointer hover:bg-zinc-600 mx-1"
                  onClick={() => tabClickHandler(tab.id)}
                >
                  <div>{tab.name}</div>
                  <button onClick={() => tabCloseHandler(tab.id)}>X</button>
                </div>
              ) : (
                <div
                  key={tab.id}
                  className="bg-zinc-700 h-[50px] w-[150px] p-2 px-2 flex flex-shrink-0 items-center justify-between  text-white rounded-2xl cursor-pointer hover:bg-zinc-500 mx-1"
                  onClick={() => tabClickHandler(tab.id)}
                >
                  <div>{tab.name}</div>
                  <button onClick={() => tabCloseHandler(tab.id)}>X</button>
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

          <Editor
            height="60vh"
            width="60vh"
            theme="vs-dark"
            defaultLanguage="json"
            options={options}
            defaultValue=" "
            className="mt-2"
            value={currentContent}
            onChange={(value) => handleEditorChange(value)}
          />

          {tabs.find((t) => t.id === activeTabId)?.isSubmitted === true ? (
            <button
              className="bg-blue-600 p-5 rounded-lg mt-5 text-white hover:bg-blue-500"
              disabled={!currentContent}
            >
              SUBMITTED
            </button>
          ) : (
            <button
              className="bg-blue-600 p-5 rounded-lg mt-5 text-white hover:bg-blue-500"
              onClick={handleSubmit}
              disabled={!currentContent}
            >
              SUBMIT
            </button>
          )}
        </div>
        <div className="bg-zinc-600 p-5 h-screen w-[700px] overflow-auto">
          <div className="bg-red-800 text-white p-4 rounded-md ">
            {/* <pre className="bg-gradient-to-r from-gray-900 to-gray-700 text-green-300 p-6 rounded-xl shadow-lg font-mono text-sm overflow-x-auto">
                        <code> */}
            <SyntaxHighlighter
              language="json" // Specify the language
              style={darcula} // Apply the theme (darcula, atom-dark, vs, etc.)
              showLineNumbers={true} // Optional: show line numbers
              wrapLines={true} // Optional: wrap long lines
              customStyle={{
                // Tailwind-like styling via customStyle prop
                borderRadius: "0.75rem", // rounded-xl
                padding: "1.5rem", // p-6
                fontSize: "0.875rem", // text-sm
                overflowX: "auto", // overflow-x-auto
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
        </div>
      </div>
    </>
  );
}
