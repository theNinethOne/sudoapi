export default function CPSidebarBig({
    handleView,
    handleSidebar
} : {
    handleView: () => void,
    handleSidebar: () => void
    }) {
    return<>
        <div className="bg-slate-700 w-[300px] h-screen flex flex-col p-5 pt-5">
            <button 
                className="bg-slate-800 m-1 p-4 px-8 rounded-2xl text-white text-center hover:bg-slate-900"
                onClick={handleView}
            >add code</button>
            <button 
                className="bg-slate-800 m-1 p-4 px-8 rounded-2xl text-white text-center hover:bg-slate-900"
                onClick={handleView}
                >view models</button>
            <button 
                className="bg-slate-800 m-1 p-4 px-8 rounded-2xl text-white text-center hover:bg-slate-900"
                onClick={handleSidebar}
                >back</button>
        </div>
    </>
}