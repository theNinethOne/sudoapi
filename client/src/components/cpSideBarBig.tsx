export default function CPSidebarBig({
    handleView,
    handleSidebar,
    viewFlag
} : {
    handleView: () => void,
    handleSidebar: () => void,
    viewFlag: boolean
    }) {
    return<>
        <div className="bg-slate-700 w-[300px] h-screen flex flex-col p-5 pt-5">
            <button 
                className="bg-slate-800 m-1 p-4 px-8 rounded-2xl text-white text-center hover:bg-slate-900"
                onClick={handleView}
            > { viewFlag ? "view models" : "add models"}</button>
            
            <button 
                className="bg-slate-800 m-1 p-4 px-8 rounded-2xl text-white text-center hover:bg-slate-900"
                onClick={handleSidebar}
                >back</button>
        </div>
    </>
}