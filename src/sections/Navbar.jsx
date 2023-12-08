import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const navs = [
    { title: "About", sectionId: "About-section" },
    { title: "Experience", sectionId: "Experience-section" },
    { title: "Project", sectionId: "Project-section" },
    { title: "Main Interest", sectionId: "Maininterest-section" },
];

const Navbar = () => {
    const handleClick = (sectionId) => {
        console.log(sectionId);
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className='flex flex-col gap-3 font-semibold py-8'>
            {navs.map((e, i) => (
                <div
                    key={`nav-${e}-${i}`}
                    onClick={() => handleClick(e.sectionId)}
                    className="cursor-pointer transition duration-300 ease-in-out transform hover:translate-x-2"
                >
                    <FontAwesomeIcon className="mr-2 text-primaryTitle" icon={faArrowRight} />
                    {e.title}
                </div>
            ))}
        </div>
    );
};

export default Navbar;
