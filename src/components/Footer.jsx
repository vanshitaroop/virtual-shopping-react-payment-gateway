import React from 'react'
import logo from "../images/logo.png"
const Footer = () => {
  return (
   <>
  
      <footer>
         <div class="container">
            <div class="row">
               <div class="col-md-4">
                   <div class="full">
                      <div class="logo_footer">
                        <a href="#"><img width="210" src={logo} alt="#" /></a>
                      </div>
                      <div class="information_f">
                        <p><strong>ADDRESS:</strong> to be added</p>
                        <p><strong>TELEPHONE:</strong> +91 6353655232</p>
                        <p><strong>EMAIL:</strong> vasnhitaroopchandani7@gmail.com</p>
                      </div>
                   </div>
               </div>
               <div class="col-md-8">
                  <div class="row">
                  <div class="col-md-7">
                     <div class="row">
                        <div class="col-md-6">
                     <div class="widget_menu">
                        <h3>Menu</h3>
                        <ul>
                           <li><a href="index.html">Home</a></li>
                           <li><a href="about.html">About</a></li>
                           <li><a href="contact.html">Contact</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="widget_menu">
                        <h3>Team members</h3>
                        <ul>
                          <li>Vanshita</li>
                          <li>Miten</li>
                          <li>Chahiti</li>
                          <li>Poojan</li>

                        </ul>
                     </div>
                  </div>
                     </div>
                  </div>     
                  <div class="col-md-5">
                     <div class="widget_menu">
                        <h3>Newsletter</h3>
                        <div class="information_f">
                          <p>Subscribe by our newsletter</p>
                        </div>
                        <div class="form_sub">
                           <form action="https://formspree.io/f/xeqwegjv"  method="POST">
                              <fieldset>
                                 <div class="field">
                                    <input type="email" placeholder="Enter Your Mail" name="email" />
                                    <input type="submit" value="Subscribe" />
                                 </div>
                              </fieldset>
                           </form>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   
   </>
  )
}

export default Footer