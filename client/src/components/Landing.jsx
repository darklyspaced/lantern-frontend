import Navbar from "./Navbar"
import DataFetching from "./helpers/DataFetching"
import { Helmet, HelmetProvider } from "react-helmet-async"
import "animate.css"

function Landing(){
    return (
        <HelmetProvider>
            <div className="h-full w-full bg-[#0D1117] scrollbar-hide relative overflow-scroll m-0 scroll-smooth">
                <Navbar />
                <h1 className="text-white text-5xl font-semibold relative top-[7%] ml-[17%]">Reimagining the tasking experience</h1>
                <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0" 
                    className="[&>img]:select-none [&>img]:h-[50vmin] [&>img]:w-[40vmin] [&>img]:object-right [&>img]:object-cover flex gap-[4vmin] relative left-[39%] top-[35%] translate-y-[-40%]">
                    <img className="image" src="/image1.jpg" draggable="false" />
                    <img className="image" src="/image3.jpg" draggable="false" />
                    <img className="image" src="/image4.jpg" draggable="false" />
                    <img className="image" src="/image5.jpg" draggable="false" />
                    <img className="image" src="/image6.jpg" draggable="false" />
                </div>

                <div className="text-5xl font-semibold relative text-white top-[40%] ml-[17%]">
                    <h1 className="transition ease-in duration-300 invisible text-white">From the ground up</h1>
                    <h1 className="transition ease-in duration-300 invisible text-white">While keeping all your favourite applications around</h1>
                </div>
                <DataFetching />

                <Helmet>
                    <script type='text/javascript' src='./src/components/coolAnim.js'></script>
                </Helmet>
            </div>
        </HelmetProvider>
    )
}

export default Landing
