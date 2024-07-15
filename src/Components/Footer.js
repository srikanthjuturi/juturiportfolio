import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

export default function Footer() {
  return (
    
        <div className='footer' >
        <a href="https://www.instagram.com/bad_caption_22" target="_blank" className='social-media-icons' rel="noopener noreferrer">
        <InstagramIcon className='social-media-icon'/>
      </a>
      <a href="https://wa.me/916301815418?text=Hi MAWA" target="_blank" className='social-media-icons' rel="noopener noreferrer">
         <WhatsAppIcon className='social-media-icon'/>
      </a> 
      <a href="https://www.linkedin.com/in/juturi-srikanth" target="_blank" className='social-media-icons' rel="noopener noreferrer">
         <LinkedInIcon className='social-media-icon'/>
      </a>    
      <a href="https://www.facebook.com/yourpage" target="_blank" className='social-media-icons' rel="noopener noreferrer">
        <FacebookIcon className='social-media-icon'/>
      </a>
      <a href="https://www.twitter.com/yourpage" target="_blank" className='social-media-icons' rel="noopener noreferrer">
        <TwitterIcon className='social-media-icon'/>
      </a>
      

    </div>
    
  )
}
