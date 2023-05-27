import React from 'react'
import './footer.css'
import {SiFacebook,SiTwitter,SiLinkedin,SiInstagram} from 'react-icons/si'

const footer = () => {
  return (
    <footer class="footerbody">
  	 <div class="footerContainer">
  	 	<div class="footerRow">
  	 		<div class="footer-column">
  	 			<h4>Agriculture</h4>
  	 			<ul>
  	 				<li><a href="/">About us</a></li>
  	 				<li><a href="/">Our Policy</a></li>
  	 				<li><a href="/">Our Services</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-column">
  	 			<h4>Get help</h4>
  	 			<ul>
  	 				<li><a href="/">FAQ</a></li>
  	 				<li><a href="/">FAQ</a></li>
  	 				<li><a href="/">FAQ</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-column">
  	 			<h4>Equipments</h4>
  	 			<ul>
  	 				<li><a href="/">Tractor</a></li>
  	 				<li><a href="/">Grain Trailers</a></li>
  	 				<li><a href="/">Combine</a></li>
  	 				<li><a href="/">Other Equipments</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div class="footer-column">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
				<a href="/"><SiFacebook/></a>
                <a href="/"><SiTwitter/></a>
                <a href="/"><SiLinkedin/></a>
                <a href="/"><SiInstagram/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default footer
