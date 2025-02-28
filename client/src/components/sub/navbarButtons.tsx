export default function NavBtn( {
    prop,
    clickHandler
} : {
    prop : string,
    clickHandler: () => void //| Promise<void>
} ) {
    return<>
    <div 
        onClick={ clickHandler }
        className="bg-cyan-500 px-4 py-2 m-2 w-[80px] rounded-xl flex items-center justify-center hover:bg-cyan-600 hover:shadow-amber-200">{ prop }</div>
    </>
}