import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




function Contact() {
  return (
    <div className='flex items-end gap-5 text-2xl py-7 '>

            <a href="https://github.com/biggerbababa555" target="blank" className="hover:scale-110 transition-all">
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
              </a>
              <a href="https://www.facebook.com/bigger.thanthesun" target="blank" className="hover:scale-110 transition-all">

            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/bigger_kp/?hl=th" target="blank" className="hover:scale-110 transition-all">

            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faInstagram} />

            </a>
            {/* <a href="https://github.com/biggerbababa555" target="blank" className="hover:scale-110 transition-all">

            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faEnvelope} />

            </a> */}

          </div>
  )
}

export default Contact