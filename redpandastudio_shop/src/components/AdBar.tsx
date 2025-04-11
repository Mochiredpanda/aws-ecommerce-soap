// Used for promotional ad on the top of screen

export default function AdBar() {
    return (
        <div className="bg-red-100 text-sm text-gray-800 flex justify-center items-center px-4 py-2 gap-4">
            {/* Promotion Slogan */}
            <span>Limited Spring Scents</span>

            {/* Button */}
            <button className="bg-slate-500 text-white text-xs px-4 py-1 rounded-full hover:bg-slate-700">
                EXPLORE NOW
            </button>
        </div>

    )
}