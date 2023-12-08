import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { data } from '../contents/header';


const Header = () => {
    return(
        <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle font-semibold'>{data.name}</div>
            <div className='text-primaryAccent font-semibold'>{data.title}</div>
            <div className='text-sm  w-5/6'>{data.caption}</div>
            <div className='mt-4'>
              <a href={data.link} target='blank'>
                <span className='text-primarySubcontent bg-primary bg-primaryTitle py-2 px-4 rounded-lg'>
                  {data.btnText}
                  <span className='rotcate-0 inline-block ml-2 text-sm'> <FontAwesomeIcon className='animate-bounce' icon={faArrowLeft} /></span>
                </span>
              </a>
            </div>
          </div>
    )
}
export default Header;