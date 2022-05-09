const navbar=()=>{
    return ` 
   
   

   <div class="c">
    <!-- Primary nav bar -->
     <div class="conta">
      <div><a href="" ><img style="height:45px;" width="100%" src="../Images/Screenshot 2022-05-02 223513.png" alt=""></a></div>
      <div id="navleft">
          <i style="font-size: 20px; color: rgb(228, 100, 179);" class="fa-solid fa-location-dot"></i>
          <h4 style="letter-spacing: 2px; color:#006bab;">PICK UP IN STORE</h4>
          <a style="color: black;" href="">Set Store</a>
      </div>
      </div>
 
    <nav>
      <div class="mobile_navbar">
        <div class="nav_container">
          <div class="ham_menu">
            <div></div>
            <div></div>
          </div>
          <a href="./index.html"
            ><img
              src="../Images/Logos-main.png"
              alt="Bath & Body"
          /></a>
          <div class="links">
            <div class="search"><i class="bx bx-search"></i></div>
            <div class="cart"><i class="bx bx-shopping-bag"></i></div>
          </div>
        </div>
      </div>

      <div class="mobile_menu">
        <div class="menu_container">
          <div class="nav_top">
            <div class="sign_in">Sign in <i class="bx bx-user"></i></div>
            <div>X</div>
          </div>
          <div>Shop By Category</div>
          <div>Shop By Concern</div>
          <div>Shop By Product Line</div>
          <div>Best Sellers</div>
          <div>Featured</div>
          <div>Our Story</div>
          <div>Perks Program</div>
          <div>Become A Consultant</div>
          <div>Blog</div>
          <div>Find A Consultant</div>
          <div class="country">
            <img
              src="https://www.rodanandfields.com/en-us/_ui/dest/images/flagUSA.png"
              alt="Flag"
            />
            <span>English</span>
          </div>
        </div>
      </div>

      <div class="navbar">
        <!-- <h4></h4> -->
        <a href="./index.html"
          ><img class="Pimage"
            src="../Images/Logos-main.png"
           
        /></a>
        <div class="links">
          
          <div class="search"><input type="text" placeholder="Search by fragrance or product or sanitizer or hand..."> <span><i class="fa-solid fa-magnifying-glass"></i></span></div>
          <div class="sign_in"><a href="./Login_SignUp/login.html"><img src="../Images/photo.png" alt=""></a></div>
          <div class="signInForm hide">
            <form id="sign_in">
              <label for="email">Email</label> <br />
              <input type="email" id="email" /> <br />
              <div class="user_required"></div>
              <label for="password">Password</label>
              <a href="#">Forgot Password?</a> <br />
              <input type="password" id="password" />
              <div class="pass_required"></div>
              <p>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
              <input class="form_btn" type="submit" value="Sign In" />
            </form>
          </div>
          <div class="cart"></div>
        <div class="country">
         
        
          <img
         
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651571161245/images/svg-icons/UI-AddToBag.svg?yocs=o_s_"
              alt="Flag"
            />
            <a href="../cart1/cart.html"><span id="starlord"></span></a>
          </div>
        </div>
      </div>
      <!-- search bar box  -->
      <div class="search_bar_area hide">
        <div class="search_container">
          <input type="text" id="search" /><span>X</span>
          <p>Search for products, concerns and keywords.</p>
          <div class="search_links">
            <div>
              <h4>Common Searches</h4>
              <ul>
                <li><a href="#">Acne</a></li>
                <li><a href="#">Moisturizer</a></li>
                <li><a href="#">Retinol</a></li>
                <li><a href="#">Face Serum</a></li>
                <li><a href="#">Brows</a></li>
              </ul>
            </div>
            <div>
              <h4>Popular Products</h4>
              <ul>
                <li><a href="#">R+F Lash Boost </a></li>
                <li><a href="#">REDEFINE Regimen</a></li>
                <li><a href="#">Multi-Function Eye Cream</a></li>
                <li><a href="#">Active Hydration Serum</a></li>
                <li><a href="#">Micro-Dermabrasion Paste</a></li>
              </ul>
            </div>
            <div>
              <div>
                <img
                  src="https://www.rodanandfields.com/en-us/medias/21-GR-Spot-Corrector-Core-Regimen-SEARCH-promotion-widescreen.jpg?context=bWFzdGVyfHJvb3R8MTUxMjN8aW1hZ2UvanBlZ3xoN2EvaDA5LzEyNzgwOTI4MjcwMzY2LmpwZ3xlZDYwZjU3ZDkyMDVhYzEyMmRjYzJjZGMzMjg3OGU2MGI0M2FkYjc0ZmE3YzUzYjgxOTgxMmU4ZjA1OWY1MDAw"
                  alt="img"
                />
                <div class="right">
                  <p>Tackle stubborn dark marks with REVERSE SPOT CORRECTOR.</p>
                  <a href="#">NEW&NOW</a>
                </div>
              </div>
            </div>
          </div>
          <div class="search_results">
            <p></p>
            <a href="#">View All</a>
          </div>
          <div class="serach_result_container"></div>
        </div>
      </div>

      <!-- cart box  -->
      <!-- <div class="cart_area">
        <div class="cart_box">
          <div class="cart_nav">
            <i class="bx bx-shopping-bag"></i>
            <h3>Your Bag</h3>
            <p>X</p>
          </div>
          <div class="cart_mid">
            <h3></h3>
            <p></p>
            <button class="cart_btn"></button>
          </div>
          <div class="cart_items"></div>
          <div class="cart_footer">
            <p></p>
            <div class="price_total">
              <h3>L</h3>
              <h3></h3>
            </div>
            <buttom class="cart_btn"></buttom>
          </div>
        </div>
      </div> -->

      <!-- secondary navbar  -->
      <div class="secondary_nav">
        <div class="drop">
          <a href="#">NEW&NOW</a>
          <div class="dropDown">
            <div>
              <!-- <h4>SHOP BY CATEGORY</h4> -->
              <ul>
                <li><a href="./regimens/regimens 1.html">NEW & NOW   <span class="Picon"><i class="fa-solid fa-angle-right"></i></span></a>


                    <ul>
                        <li><a href="./product.html">New Arrival</a></li>
                        <li onclick="myFunction()"><a href="../shradha/product.html">Men's Shop</a></li>
                        <li><a href="./product.html">Laundary Frangrance</a></li>
                        <li><a href="./product.html">Best Seller</a></li>
                        <li><a href="./product.html">Aromatherapy Shops</a></li>
                        
                      </ul>
                
                </li>
                <li><a href="./product.html">EXPLORE</a></li>
                <!-- <li><a href="./product.html">Eyes, Lips & Lashes</a></li>
                <li><a href="./product.html">Face Masks</a></li>
                <li><a href="./product.html">Dermacosmeticss</a></li>
                <li><a href="./product.html">Hand & Body</a></li>
                <li><a href="./product.html">Sun Protection</a></li>
                <li><a href="./product.html">Pro Skincare Tools</a></li>
                <li><a href="./product.html">Accessories</a></li>
                <li><a href="./product.html">Special Offers</a></li> -->
              </ul>
            </div>
            <!-- <div>
              <h4>SHOP BY CONCERN</h4>
              <ul>
                <li><a href="./product.html">Fine Lines & Deep Wrinkles</a></li>
                <li><a href="./product.html">Lifting & Firming</a></li>
                <li><a href="./product.html">Dull & Tired Skin</a></li>
                <li><a href="./product.html">Acne & Breakouts</a></li>
                <li><a href="./product.html">Teen Acne</a></li>
                <li><a href="./product.html">Uneven Tone & Brown Spots</a></li>
                <li>
                  <a href="./product.html">Sensitivity/Visible Redness</a>
                </li>
                <li><a href="./product.html">Pores & Blackheads</a></li>
                <li><a href="./product.html">Dry Skin</a></li>
              </ul>
            </div> -->
            <!-- <div>
              <h4>SHOP BY PRODUCT LINE</h4>
              <ul>
                <li><a href="./product.html">Redefine</a></li>
                <li><a href="./product.html">Reverse</a></li>
                <li><a href="./product.html">Recharge</a></li>
                <li><a href="./product.html">Unblemish</a></li>
                <li><a href="./product.html">Spotless</a></li>
                <li><a href="./product.html">Soothe</a></li>
                <li><a href="./product.html">Enhancements</a></li>
                <li><a href="./product.html">Essentials</a></li>
                <li><a href="./product.html">Dermacosmetics</a></li>
                <li><a href="./product.html">All Products</a></li>
              </ul>
            </div> -->
          </div>
        </div>
     
        <div class="drop">
          <a href="#">BODY CARE</a>
          <div class="dropDown">
            <div>
              <ul>
                <li><a href="#">FEATURED</a>   <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  
                  <ul>
                    <li><a href="./product.html">New Body Care</a></li>
                    <li><a href="./product.html">Retired Fragrace</a></li>
                    <li><a href="./product.html">Travel Size</a></li>
                    
                    
                  </ul>
                </li>
                <li><a href="#">BATH & SHOWER</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                    
                  <ul>
                    <li><a href="./product.html">All Bath & Shower</a></li>
                    <li><a href="./product.html">Bath & Shower Gel</a></li>
                    <li><a href="./product.html">Bubble Bath</a></li>
                    
                    <li><a href="./product.html">Bar Shop</a></li>
                    <li>
                      <a href="./product.html">Bar Accessories</a>
                    </li>
            
                  </ul>
                
                
                </li>
                <li><a href="#">MOISTURISER</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Moisturizer</a></li>
                    <li><a href="./product.html">Body Lotion</a></li>
                    <li><a href="./product.html">Body Cream</a></li>
                    
                    <li><a href="./product.html">Hand Cream</a></li>
                    <li>
                      <a href="./product.html">Lip Gloss & Balms</a>
                    </li>
                  
            
                  </ul>
                
                </li>
                <li><a href="#">FRAGRANCE</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Fragrance</a></li>
                    <li><a href="./product.html">Body Sprays & Mists</a></li>
                    <li><a href="./product.html">Furmes & Colonge</a></li>
                    
                   
                  
            
                  </ul>
                
                </li>
                <li><a href="#">AROMATHERAPY</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Aromatherapy/a></li>
                    <li><a href="./product.html">Body Wash & Shower Gell</a></li>
                    <li><a href="./product.html">Moisturizer</a></li>
                    <li><a href="./product.html">Mists & Sparys</a></li>
                    
                   
                  
            
                  </ul>
                
                </li>
                <li><a href="#">MEN'S</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <lionclick="myFunction()"><a href="../shradha/product.html">All Men's</a></lionclick=>
                    <li><a href="./product.html">Body Wash & Shower Gell</a></li>
                    <li><a href="./product.html">Moisturizer</a></li>
                    <li><a href="./product.html">Body Sparys & Colonge</a></li>
                    
                   
                  
            
                  </ul>
                
                </li>
                <li><a href="#">GIFTS SETS</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">Body Care Gifts</a></li>
                   
                   
                  
            
                  </ul>
                </li>
                <li><a href="#">EXPLORE BODY CARE</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="drop">
          <a href="#">HADS SOAPS & SANITIZERS</a>
          <div class="dropDown">
            <div>
              <ul>
                <li><a href="#">FEATURED  <span class="Picon"><i class="fa-solid fa-angle-right"></i></span></a> 
                  <ul>
                    <li><a href="./product.html">New Hand & Sanitizers</a></li>
                    <li><a href="./product.html">Gentel Soap & Clean</a></li>
                   
                   
                  
            
                  </ul>

                </li>
                <li><a href="#">HAND SOAPS
                  <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                </a>
                <ul>
                  <li onclick = "handshoap() "><a href="../shradha/product.html">New Hand & Sanitizers</a></li>
                  <li><a href="./product.html">Gentel Soap & Clean</a></li>
                 
                 
                
          
                </ul>

              
              </li>
                <li><a href="#">HAND SANITIZERS</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                 
                  <ul>
                    <li onclick = "sanitizer()"><a href="../shradha/product.html">All Hand Sanitizers</a></li>
                    <li><a href="./product.html">Pocket Bac Hand Sanitizers</a></li>
                    <li><a href="./product.html">Hands Sanitizers & Sprays
                    </a></li>
                    <li><a href="./product.html">Full Hand Sanitizers</a></li>
                    <li><a href="./product.html">Sanitizers Wipes</a></li>
                    <li><a href="./product.html">Hand Sanitizers Holders</a></li>
                   
                   
                  
            
                  </ul>

                
                </li>
                <li><a href="#">GIFTS SETS</a> <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Hands Soaps</a></li>
                    <li><a href="./product.html">Foaming Soaps</a></li>
                    <li><a href="./product.html">Gel & Noursing Soaps</a></li>
                    <li><a href="./product.html">Soaps Holder</a></li>
                   
                   
                  
            
                  </ul>

                
                </li>
                <li ><a href="#">EXPLORE HAND SOAPS & SANITIZERS</a> 
                
                </li>
                

              </ul>
            </div>
          </div>
        </div>
        <div class="drop">
          <a href="#">HOME FRANGRANCE</a>
          <div class="dropDown">
            <div>
              <ul>
                <li><a href="#">FEATURED</a><span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li onclick = "homefrag()"><a href="../shradha/product.html">New Home Frangrance </a></li>
                    <li><a href="./product.html">The White Barn Shop</a></li>
                    <li><a href="./product.html">Auto Refresh Wallflowers</a></li>
            
                   
                   
                  
            
                  </ul>
                
                
                </li>
                <li><a href="#">CANDELS</a><span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Candels </a></li>
                    <li><a href="./product.html">3 Wick Candels</a></li>
                    <li><a href="./product.html">2 Wick Candels</a></li>
                    <li><a href="./product.html">Candels Holders & Accessories</a></li>
            
                   
                   
                  
            
                  </ul>
                
                </li>
                <li><a href="#">AIR FRESHNER</a><span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Wallflowers</a></li>
                    <li><a href="./product.html">Wallflowers Plugs</a></li>
                    <li><a href="./product.html">Wallflowers Reffils</a></li>
                    <li><a href="./product.html">Alls sprays</a></li>
                    <li onclick = "carfarg()"><a href="../shradha/product.html">Car Frangrance</a></li>
            
                   
                   
                  
            
                  </ul>
                
                
                </li>
                <li><a href="#">EXPLORE</a>
                
                
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div class="drop"><a href="#">GIFTS</a>
          <div class="dropDown">
            <div>
              <ul>
                <li><a href="#">FEATURED</a><span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Wallflowers</a></li>
                    <li><a href="./product.html">Wallflowers Plugs</a></li>
                    <li><a href="./product.html">Wallflowers Reffils</a></li>
                    <li><a href="./product.html">Alls sprays</a></li>
                    <lionclick = "carfarg()"><a href="../shradha/product.html>Car Frangrance</a></lionclick>
            
                   
                   
                  
            
                  </ul>
                
                
                </li>
                <li><a href="#">GIFTS BY COLLECTIONS
                </a><span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Wallflowers</a></li>
                    <li><a href="./product.html">Wallflowers Plugs</a></li>
                    <li><a href="./product.html">Wallflowers Reffils</a></li>
                    <li><a href="./product.html">Alls sprays</a></li>
                    <lionclick = "carfarg()"><a href="../shradha/product.html</a></lionclick>
            
                   
                   
                  
            
                  </ul>
                
                
                </li>
                <li><a href="#">GIFTS BY RECEIPT</a>  <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Wallflowers</a></li>
                    <li><a href="./product.html">Wallflowers Plugs</a></li>
                    <li><a href="./product.html">Wallflowers Reffils</a></li>
                    <li><a href="./product.html">Alls sprays</a></li>
                    <lionclick = "carfarg()"><a href="../shradha/product.html</a></lionclick>
            
                   
                   
                  
            
                  </ul>
                
                
                </li>
                <li><a href="#">COLLECTIONS</a>  <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Wallflowers</a></li>
                    <li><a href="./product.html">Wallflowers Plugs</a></li>
                    <li><a href="./product.html">Wallflowers Reffils</a></li>
                    <li><a href="./product.html">Alls sprays</a></li>
                    <lionclick = "carfarg()"><a href="../shradha/product.html</a></lionclick>
            
                   
                   
                  
            
                  </ul>
                
                
                </li>
                <li><a href="#">GIFTS CARDS</a>  <span class="Picon"><i class="fa-solid fa-angle-right"></i></span>
                  <ul>
                    <li><a href="./product.html">All Wallflowers</a></li>
                    <li><a href="./product.html">Wallflowers Plugs</a></li>
                    <li><a href="./product.html">Wallflowers Reffils</a></li>
                    <li><a href="./product.html">Alls sprays</a></li>
                    <li><a href="./product.html">Car Frangrance</a></li>
            
                   
                   
                  
            
                  </ul>
                
                
                </li>
                <li><a href="#">EXPLORE GIFTS</a>
                  <ul>
                    <li><a href="./product.html">All Wallflowers</a></li>
                    <li><a href="./product.html">Wallflowers Plugs</a></li>
                    <li><a href="./product.html">Wallflowers Reffils</a></li>
                    <li><a href="./product.html">Alls sprays</a></li>
                    <li><a href="./product.html">Car Frangrance</a></li>
            
                   
                   
                  
            
                  </ul>
                
                
                </li>
                 

              </ul>
              </div>
        </div>
        </div>
        <div class="drop"><a href="#">TOP OFFERS</a>
        
        </div>
        
    </nav>
    </div>
   
    `
}

export  {navbar} ;