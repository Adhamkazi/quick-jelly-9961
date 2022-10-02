const footer = () => {
  return ` 
  <div id="footer_outer">
      <div id="footer_container">
          <div class="style_inner_footer">
              <h2>New TO YOOX</h2>
              <hr>
              <div class="stylr-ul-li">
                  <ul>
                      <li>Shopping Guide</li>
                      <li>iPhone/iPad/Android</li>
                      <li>Browse all Designer</li>
                      <li>Browse all Categories</li>
                  </ul>
              </div>
          </div>


          <div class="style_inner_footer">
              <h2>HELP</h2>
              <hr>
              <div>
                  <ul>
                      <li>SHIPPING times & costs</li>
                      <li>Payments and web security</li>
                      <li>Product quality</li>
                      <li>Track your order</li>
                      <li>Return & refund</li>
                      <li>FAQs</li>
                      <li>Size Guide</li>
                  </ul>
              </div>
          </div>



          <div class="style_inner_footer" id="style_news1">
              <div id="style_news2">
                  <span><i class="ri-mail-line"></i></span>
              <h2>YOOX NEWS</h2>
              <p>Sign up for the newsletter
                  and discover the latest arrivals and promotions
              </p>
              <div>
                  <input type="email" placeholder="INSERT YOUR E-MAIL ADDRESS" id="f_email" required>
              </div>
              <div style="width: 103%;">
                  <fieldset data-role="controlgroup" style="border:none;">
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female">
                      </fieldset>
                
              </div>
              <div id="chkbox">
                  <input type="checkbox">
                  <p>	I consent to receive YOOX newsletters via email. For further information, please consult the Privacy Policy.
                  </p>
              </div>
              <button id="submit_footer">SIGN UP</button>
              </div>
              
          </div>








          <div class="style_inner_footer">
              <h2>MY YOOX</h2>
              <hr>
              <div>
                  <ul>
                      <li>Login</li>
                      <li>My Order</li>
                      <li>My Details</li>
                      <li>Dream Box</li>
                      <li>Premiere</li>
                  </ul>
              </div>
          </div>



          <div class="style_inner_footer">
              <h2>ABOUT US</h2>
              <hr>
              <div>
                  <ul>
                      <li>Company Info</li>
                      <li>Press</li>
                      <li>Affilation</li>
                      <li>Careers</li>
                  </ul>
              </div>
          </div>

      </div>

  </div>

  <hr>

  <div class="footer_social">
      <div id="f_icon" class="style_f_icon">
          <span>CONNECT WITH US</span>
          <span><i class="ri-facebook-fill"></i></span>
          <span><i class="ri-twitter-fill"></i></span>
          <span><i class="ri-instagram-line"></i></span>
          <span><i class="ri-youtube-fill"></i></span>
          <span><i class="ri-pinterest-fill"></i></span>
          

      </div>
      <div class="f_mob_icon">
          <span><i class="ri-smartphone-line"></i></span>
          <span><i class="ri-smartphone-line" id="smrt_mob"></i></span>
          <span><p>DOWNLOAD THE APP FOR iOS / ANDROID</p></span>
      </div>
  </div>

  <div class="last_footer">
      <div id="style_last_footer_p">
          <p class="style_p">POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526</p>
          <p>LEGAL AREA / PRIVACY POLICY</p>
      </div>
  </div>`;
};

export { footer };
