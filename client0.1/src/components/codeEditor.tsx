import Editor from '@monaco-editor/react';
import TabBar from './TabBar';


export default function CodeEditor () {

    const options = {
        readOnly: false,
        minimap: { enabled: false },
    };

    return <>
            <TabBar/>
        {/* <div className='bg-zinc-800 m-5 p-5 rounded-lg h-screen'>
            <Editor height="80vh" width="80vh" theme='vs-dark' defaultLanguage="json" options={ options } defaultValue=" " />
        </div> */}
    
    </>
}