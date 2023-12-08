
// import picExp from "../../assets/project1.png"
// import picExp2 from "../../assets/project2.png"
// import picExp3 from "../../assets/project3.png"
// import picExp4 from "../../assets/project4.png"

import picFrontend from "../../assets/frontend.png"
import picDevops from "../../assets/devops.png"
import picMobile from "../../assets/mobileapp.png"






    

function MainInterest() {




    return (
        <div className="space-y-10 scroll-m-14" id="Maininterest-section">



            <div className="min-h-screen">
                <div className="max-w-2xl mx-auto flex flex-col items-center justify-center py-16">

                    <h1 className="text-4xl font-bold text-primaryAccent mb-4 ">Main Interest</h1>

                    {/* Updated container with flexbox */}
                    <div className="flex flex-row space-x-4 py-10">

                        {/* Image 1 with text */}
                        <div className="flex flex-col items-center">
                            <div className="w-1/2  overflow-hidden rounded-md shadow-md mb-4">
                                <img
                                    src={picFrontend}
                                    alt="Main Interest"
                                    className="w-full h-full object-cover transition-transform transform hover:scale-110"
                                />
                            </div>
                            <p className="text-center">Frontend Development</p>
                        </div>

                        {/* Image 2 with text */}
                        <div className="flex flex-col items-center">
                            <div className="w-1/2  overflow-hidden rounded-md shadow-md mb-4">
                                <img
                                    src={picDevops}
                                    alt="Main Interest"
                                    className="w-full h-full object-cover transition-transform transform hover:scale-110"
                                />
                            </div>
                            <p className="text-center">DevOps</p>
                        </div>

                        {/* Image 3 with text */}
                        <div className="flex flex-col items-center">
                            <div className="w-30 overflow-hidden rounded-md shadow-md mb-4">
                                <img
                                    src={picMobile}
                                    alt="Main Interest"
                                    className="w-full h-full object-cover transition-transform transform hover:scale-110"
                                />
                            </div>
                            <p className="text-center">Mobile Development</p>
                        </div>

                    </div>
                </div>
            </div>










        </div>
    )
}

export default MainInterest