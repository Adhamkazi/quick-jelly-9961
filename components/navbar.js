const navbar = () => {
    return ` 
  <div id="style_top_div">
      <div class="style_sub_top_div style_coun">
          <div id="country"><a href="#"><span>INDIA</span></a></div>
          <div id="cust_care"><a href="#"><span>CUSTOMER CARE</span></a></div>
      </div>

      <div class="style_sub_top_div style_reg">
          <div id=""><a  href="register.html"><span><i class="ri-pencil-line"></i>REGISTER</span></a></div>
          <div id=""><a  href="login.html"><span><i class="ri-lock-unlock-line"></i>LOGIN</span></a></div>
      </div>
     
  </div>

  <div class="style_man_top_div">
      <div id="style_man_sub_top_div">
          <div><a href=""><span>WOMEN</span></a></div>
          <div><a href="woman.html"><span>MEN</span></a></div>
          <div><a href="kids.html"><span>KIDS</span></a></div>
          <div><a href="design.html"><span>DESIGN+ART</span></a></div>
  
      </div>
      <div >
         <img src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" id="img_voox" alt="">
      </div>
     
      <div id="style_cart_icon">
          <div><a href=""><i class="ri-search-line"></i></a></div>
          <div><a href=""><i class="ri-heart-3-line"></i></a></div>
          <div><a href=""><i class="ri-shopping-cart-line"></i></a></div>
      </div>
      
  </div>`;
};

export { navbar }; //put it in a locker
