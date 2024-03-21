

function Homepage() {
    return(
        <div id="homepage" className=" h-screen w-screen flex justify-center items-center bg-slate-400">

            <div id="main" className="flex justify-center items-center h-2/5 w-3/6 bg-white">
                <div id="input-div" className="border-2 h-full w-full flex flex-col justify-center gap-4 items-start px-4" >
                    <h1 className="text-3xl font-semibold italic">Image Generation App</h1>
                    <input className="border-2 p-2 w-11/12" type="text" id="input-field" placeholder="Enter text..." />
                </div>
            </div>

            <div id="result">

            </div>

        </div>
    )
}

export default Homepage;