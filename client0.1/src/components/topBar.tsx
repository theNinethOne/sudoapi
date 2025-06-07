export default function TopBar() {
  return (
    <>
      <div className="bg-zinc-800 h-[80px] p-5 flex justify-between items-center text-white">
        <div>S U D O A P I</div>

        <div className="flex items-center gap-5">
          <input
            type="text"
            placeholder="http://localhost:3000/routes?modelId=XXXXXXXX"
            className=" bg-zinc-600 rounded-xl p-2 w-[600px] text-white"
          />
          <button className=" bg-zinc-600 rounded-full h-[50px] w-[50px] flex items-center justify-center text-white">
            K
          </button>
        </div>

        <div>
          {/* <button className=" bg-amber-600 rounded-xl p-2 text-white">LOGIN</button> */}
        </div>
      </div>
    </>
  );
}
