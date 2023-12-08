import { faFigma, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import picExp from "../../assets/project1.png"
// import picExp2 from "../../assets/project2.png"
import picExp3 from "../../assets/project3.png"
// import picExp4 from "../../assets/project4.png"
import picExp5 from "../../assets/project5.png"
import picExp6 from "../../assets/project6.png"



import { useState } from "react"
import { faArrowRight, faEarthAmerica } from "@fortawesome/free-solid-svg-icons"



function Project() {

    // const [isMouseEnterExp1, setIsMouseEnterExp1] = useState(false);
    // const [isMouseEnterExp2, setIsMouseEnterExp2] = useState(false);
    const [isMouseEnterExp3, setIsMouseEnterExp3] = useState(false);
    const [isMouseEnterExp4, setIsMouseEnterExp4] = useState(false);
    const [isMouseEnterExp5, setIsMouseEnterExp5] = useState(false);




    return (
        <div className="space-y-10 scroll-m-14" id="Project-section">

            <div className=" text-primaryAccent font-medium">Project</div>
            

            


            <div
                className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnterExp3 ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnterExp3(true)}
                onMouseLeave={() => setIsMouseEnterExp3(false)}
            >

                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnterExp3 ? 'exp1' : ''} ${isMouseEnterExp3 ? "text-primaryAccent" : ""}`}>2022</span>
                    </div>
                    <div>
                        <img src={picExp3} className="w-5/6 my-6 rounded-md shadow-md" />
                    </div>
                </div>

                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnterExp3 ? "text-primaryTitle" : ""}`}>Build Website E-Commerce [Gaming Mouse].
                        <FontAwesomeIcon className={`text xs -rotate-45 duration-1000 ease-out ${isMouseEnterExp3 ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
                    </div>

                    <div className=" flex gap-4 text-xl">
                        <a href="https://github.com/biggerbababa555/BiggyMouse" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faGithub} /> </a>
                        <a href="https://www.youtube.com/channel/UC-rGM6ntvzdKXJgew7tmg7g" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faYoutube} /> </a>
                        <a href="https://biggerbababa555.github.io/BiggyMouse/" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faEarthAmerica} /> </a>


                    </div>
                    <div className="text-sm">Description</div>
                    <div className="flex gap-5 text-sm">
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp3 ? "text-white" : "text-black"}`} >HTML</div>
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp3 ? "text-white" : "text-black"}`} >Javascript</div>
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp3 ? "text-white" : "text-black"}`} >CSS</div>



                    </div>

                </div>
            </div>




            <div
                className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnterExp4 ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnterExp4(true)}
                onMouseLeave={() => setIsMouseEnterExp4(false)}
            >

                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnterExp4 ? 'exp1' : ''} ${isMouseEnterExp4 ? "text-primaryAccent" : ""}`}>2021</span>
                    </div>
                    <div>
                        <img src={picExp6} className="w-5/6 my-6 rounded-md shadow-md" />
                    </div>
                </div>

                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnterExp4 ? "text-primaryTitle" : ""}`}>Budget tracker (Web App).
                        <FontAwesomeIcon className={`text xs -rotate-45 duration-1000 ease-out ${isMouseEnterExp4 ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
                    </div>

                    <div className=" flex gap-4 text-xl">
                        <a href="https://github.com/biggerbababa555/Insertionsort_project" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faGithub} /> </a>
                        <a href="https://www.youtube.com/channel/UC-rGM6ntvzdKXJgew7tmg7g" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faYoutube} /> </a>
                        <a href="https://biggerbababa555.github.io/Insertionsort_project/index.html" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faEarthAmerica} /> </a>


                    </div>
                    <div className="text-sm">Description</div>
                    <div className="flex gap-5 text-sm">
                    <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp4 ? "text-white" : "text-black"}`} >HTML</div>
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp4 ? "text-white" : "text-black"}`} >Javascript</div>
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp4 ? "text-white" : "text-black"}`} >CSS</div>



                    </div>

                </div>
            </div> 


            <div
                className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnterExp5 ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnterExp5(true)}
                onMouseLeave={() => setIsMouseEnterExp5(false)}
            >

                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnterExp4 ? 'exp1' : ''} ${isMouseEnterExp5 ? "text-primaryAccent" : ""}`}>2023</span>
                    </div>
                    <div>
                        <img src={picExp5} className="w-5/6 my-6 rounded-md shadow-md" />
                    </div>
                </div>

                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnterExp5 ? "text-primaryTitle" : ""}`}>Design Ux/Ui ShowDelivery Application On Figma.
                        <FontAwesomeIcon className={`text xs -rotate-45 duration-1000 ease-out ${isMouseEnterExp5 ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
                    </div>

                    <div className=" flex gap-4 text-xl">
                        <a href="https://www.figma.com/file/OU3TUtG3PGk5ugyWYDBweC/ChoDelivery?type=design&node-id=0%3A1&mode=design&t=Cjs6HAQMUlMmj8Cn-1" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faFigma} /> </a>
                        <a href="https://www.youtube.com/channel/UC-rGM6ntvzdKXJgew7tmg7g" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faYoutube} /> </a>


                    </div>
                    <div className="text-sm">Description</div>
                    <div className="flex gap-5 text-sm">
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp5 ? "text-white" : "text-black"}`} >Figma</div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Project