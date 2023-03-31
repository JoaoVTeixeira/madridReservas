import React from 'react';
import {
  Anchor,
  Image
} from 'react-bootstrap';
import './style.css'
import '../../paginas/style.css'
import twitter from './twitter.png'
import facebook from './fb.png'

import { Link } from 'react-router-dom';

function FooterIcons() {
  return (
    <div class="my-5">

    <footer class="text-center text-lg-start central" >
      <div class="container d-flex justify-content-center py- footerCont">
        <div className='Sociais'>       
          <div className='centraliza'>
            <Link to='https://instagram.com' className='Icones btn btn-primary btn-lg btn-floating mx-2'><Image className='Icones' src='https://www.sendible.com/hs-fs/hubfs/Imported_Blog_Media/sm-icons-instagram-glyph-logo.png?width=120&height=120&name=sm-icons-instagram-glyph-logo.png'/></Link>
          </div>
          <div className='centraliza'>
            <Link  to='https://facebook.com' className='Icones btn btn-primary btn-lg btn-floating mx-2'> <Image className='Icones' src={facebook}/></Link>
          </div>
          <div className='centraliza'>
            <Link to='https://twitter.com' className='Icones btn btn-primary btn-lg btn-floating mx-2'> <Image className='Icones' src={twitter}/></Link>
          </div>
          </div>
 
        <div className='centraliza Whats'>
          <Link to='https://web.whatsapp.com/' className='Icones btn btn-primary btn-lg btn-floating mx-2 btnWhats'> <Image className='IconesWhats' src="https://cdn-icons-png.flaticon.com/512/174/174879.png"/></Link>
        </div>
      </div>

  </footer>
  
</div>
 
  );


}

export default FooterIcons;