import Navbar from "./Navbar"
import { Helmet } from "react-helmet"

function Landing(){
    return (
        <div className="h-full w-full bg-[#0D1117] scrollbar-hide relative overflow-hidden m-0">
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
            <Helmet>
                <script type='text/javascript' src='./src/components/coolAnim.js'></script>
            </Helmet>
        </div>
    )
}

export default Landing
