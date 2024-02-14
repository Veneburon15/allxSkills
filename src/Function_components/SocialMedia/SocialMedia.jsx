import LinkedIn from '../../Assets/Iconos/LinkedIn-footerLogo.svg'
import Facebook from '../../Assets/Iconos/Facebook-footerLogo.svg'
import Threads from '../../Assets/Iconos/threads-icon.svg'
import Instagram from '../../Assets/Iconos/Instagram-footerLogo.svg'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <ul>
        <li><a href='https://www.threads.net/@allxskills' target='_blank'><img src={Threads} alt="Threads Icon" className='footerIcon threads'/></a></li>
        <li><a href='https://www.instagram.com/allxskills/' target='_blank'><img src={Instagram} alt="Instagram Icon" className='footerIcon'/></a></li>
        <li><a href='https://www.linkedin.com/company/allxskills' target='_blank'><img src={LinkedIn} alt="LinkedIn Icon" className='footerIcon linkedIn'/></a></li>
        <li><a href='https://www.facebook.com/profile.php?id=61554981489091' target='_blank'><img src={Facebook} alt="Facebook Icon" className='footerIcon'/></a></li>
    </ul>
  )
}

export default SocialMedia