import About from "../About/About"
import Experience from "../Experience/Experience"
import MainInterest from "../Experience/MainInterest"
import Project from "../Experience/Project"


function RightSection() {
  return (
    <div className="grid gap-y-20 px-5">
        <About/>
        <Experience/>
        <Project/>
        <MainInterest/>
    
      </div>

  )
}

export default RightSection