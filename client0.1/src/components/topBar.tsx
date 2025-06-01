export default function TopBar() {

    return <>
        <div className="bg-amber-800 h-[70px] p-5 flex justify-between items-center text-white">
            <div>S U D O A P I</div>

            <div className="flex items-center gap-5">
                <input type="text" placeholder="Search" className=" bg-amber-600 rounded-xl p-2 text-white"/>
                <button className=" bg-amber-600 rounded-xl p-2 text-white">K</button>
            </div>

            <div>
                <button className=" bg-amber-600 rounded-xl p-2 text-white">LOGIN</button>
            </div>

        </div>
    </>
}