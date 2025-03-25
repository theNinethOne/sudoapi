export default function CPSidebarSmall({
    handleSidebar
} : {
    handleSidebar: () => void
    }) {
    return<>
        <div className="bg-slate-700 w-[80px] h-screen flex flex-col pt-5">
            <button className="bg-slate-800 m-2 p-4 rounded-2xl text-white text-center hover:bg-slate-900">+</button>
            <button className="bg-slate-800 m-2 p-4 rounded-2xl text-white text-center hover:bg-slate-900">0</button>
            <button className="bg-slate-800 m-2 p-4 rounded-2xl text-white text-center hover:bg-slate-900"
                onClick={handleSidebar}
                >X</button>
        </div>
    </>
}