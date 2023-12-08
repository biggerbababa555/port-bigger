import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import picExp from "../../assets/project1.png"
import picExp2 from "../../assets/project2.png"
// import picExp3 from "../../assets/project3.png"
import picExp4 from "../../assets/project4.png"
// import picExp5 from "../../assets/project5.png"



import { useState } from "react"
import { faArrowRight, faEarthAmerica } from "@fortawesome/free-solid-svg-icons"



function Experience() {

    const [isMouseEnterExp1, setIsMouseEnterExp1] = useState(false);
    const [isMouseEnterExp2, setIsMouseEnterExp2] = useState(false);
    // const [isMouseEnterExp3, setIsMouseEnterExp3] = useState(false);
    const [isMouseEnterExp4, setIsMouseEnterExp4] = useState(false);
    // const [isMouseEnterExp5, setIsMouseEnterExp5] = useState(false);




    return (
        <div className="space-y-10 scroll-m-14" id="Experience-section">

            <div className=" text-primaryAccent font-medium">Experience</div>
            <div
                className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnterExp1 ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnterExp1(true)}
                onMouseLeave={() => setIsMouseEnterExp1(false)}
            >

                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnterExp1 ? 'exp1' : ''} ${isMouseEnterExp1 ? "text-primaryAccent" : ""}`}>2022-2023</span>
                    </div>
                    <div>
                        <img src={picExp} className="w-5/6 my-6 rounded-md shadow-md" />
                    </div>
                </div>
 
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnterExp1 ? "text-primaryTitle" : ""}`}>
                        Build Portfolio React + Tailwind.
                        <FontAwesomeIcon className={`text xs -rotate-45 duration-1000 ease-out ${isMouseEnterExp1 ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
                    </div>

                    <div className=" flex gap-4 text-xl">
                        <a href="https://github.com/biggerbababa555" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faGithub} /> </a>
                        <a href="https://www.youtube.com/channel/UC-rGM6ntvzdKXJgew7tmg7g" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faYoutube} /> </a>
                        <a href="https://bigger-react-portfolio.netlify.app/" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faEarthAmerica} /> </a>


                    </div>
                    <div className="text-sm">In this project, I undertook the exciting challenge of creating a dynamic and visually appealing portfolio website using React, a powerful JavaScript library for building user interfaces, and Tailwind CSS, a utility-first CSS framework. The primary goal was to craft a modern and responsive portfolio that not only showcases my skills and projects but also reflects my personal style and creativity.</div>
                    <div className="flex gap-5 text-sm">
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp1 ? "text-white" : "text-black"}`} >React</div>
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp1 ? "text-white" : ""}`} >Tailwind</div>

                    </div>

                </div>
            </div>

            <div
                className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnterExp2 ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnterExp2(true)}
                onMouseLeave={() => setIsMouseEnterExp2(false)}
            >

                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnterExp2 ? 'exp1' : ''} ${isMouseEnterExp2 ? "text-primaryAccent" : ""}`}>2022-2023</span>
                    </div>
                    <div>
                        <img src={picExp2} className="w-5/6 my-6 rounded-md shadow-md" />
                    </div>
                </div>

                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnterExp2 ? "text-primaryTitle" : ""}`}>Build Website Used Lottie Animation With React.
                        <FontAwesomeIcon className={`text xs -rotate-45 duration-1000 ease-out ${isMouseEnterExp2 ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
                    </div>

                    <div className=" flex gap-4 text-xl">
                        <a href="https://github.com/biggerbababa555/bigger-port" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faGithub} /> </a>
                        <a href="https://www.youtube.com/channel/UC-rGM6ntvzdKXJgew7tmg7g" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faYoutube} /> </a>
                        <a href="https://bigger-react-portfolio.netlify.app/" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faEarthAmerica} /> </a>


                    </div>
                    <div className="text-sm">Description</div>
                    <div className="flex gap-5 text-sm">
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp2 ? "text-white" : "text-black"}`} >React</div>
                        {/* <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp2 ? "text-white" : ""}`} >Tailwind</div> */}

                    </div>

                </div>
            </div>


            {/* <div
                className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnterExp3 ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnterExp3(true)}
                onMouseLeave={() => setIsMouseEnterExp3(false)}
            >

                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnterExp3 ? 'exp1' : ''} ${isMouseEnterExp3 ? "text-primaryAccent" : ""}`}>2022-2023</span>
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
            </div> */}




            <div
                className={`grid grid-cols-[25%_75%] px-2 py-6 rounded-md transition-all ${isMouseEnterExp4 ? "bg-gray-400" : ""}`}
                onMouseEnter={() => setIsMouseEnterExp4(true)}
                onMouseLeave={() => setIsMouseEnterExp4(false)}
            >

                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnterExp4 ? 'exp1' : ''} ${isMouseEnterExp4 ? "text-primaryAccent" : ""}`}>2023</span>
                    </div>
                    <div>
                        <img src={picExp4} className="w-5/6 my-6 rounded-md shadow-md" />
                    </div>
                </div>

                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnterExp4 ? "text-primaryTitle" : ""}`}>Create Register/Login Page Calls API.
                        <FontAwesomeIcon className={`text xs -rotate-45 duration-1000 ease-out ${isMouseEnterExp4 ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
                    </div>

                    <div className=" flex gap-4 text-xl">
                        <a href="https://github.com/biggerbababa555/login-react-useapi" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faGithub} /> </a>
                        <a href="https://www.youtube.com/channel/UC-rGM6ntvzdKXJgew7tmg7g" target="blank" className="hover:scale-110 transition-all"> <FontAwesomeIcon icon={faYoutube} /> </a>


                    </div>
                    <div className="text-sm">Description</div>
                    <div className="flex gap-5 text-sm">
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp4 ? "text-white" : "text-black"}`} >React</div>
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp4 ? "text-white" : "text-black"}`} >API</div>
                        <div className={`bg-primaryTitle px-3 py-1 rounded-md ${isMouseEnterExp4 ? "text-white" : "text-black"}`} >Sweet Alert</div>



                    </div>

                </div>
            </div>


            {/* <div
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
            </div> */}


        </div>
    )
}

export default Experience