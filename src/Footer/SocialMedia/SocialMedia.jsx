import LinkedIn from '../../Assets/Iconos/LinkedIn-footerLogo.svg'
import Facebook from '../../Assets/Iconos/Facebook-footerLogo.svg'
import WhatsApp from '../../Assets/Iconos/WhatsApp-footerLogo.svg'
import Email from '../../Assets/Iconos/Email-footerLogo.svg'
import Instagram from '../../Assets/Iconos/Instagram-footerLogo.svg'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <ul>
        <li><a href='#' target='_blank'><img src={WhatsApp} alt="WhatsApp Icon" className='footerIcon'/></a></li>
        <li><a href='#' target='_blank'><img src={Email} alt="Email Icon" className='footerIcon'/></a></li>
        <li><a href='#' target='_blank'><img src={Instagram} alt="Instagram Icon" className='footerIcon'/></a></li>
        <li><a href='#' target='_blank'><img src={LinkedIn} alt="LinkedIn Icon" className='footerIcon linkedIn'/></a></li>
        <li><a href='#' target='_blank'><img src={Facebook} alt="Facebook Icon" className='footerIcon'/></a></li>
    </ul>
  )
}

export default SocialMedia