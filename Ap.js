import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
     




<div id="main-wrapper" className="section">


    

    
    <div className="header-section section">
       
        
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col">

                        
                        <div className="header-top-wrapper">
                            <div className="row">

                                
                                <div className="header-social col-md-4 col-12">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                </div>

                                
                                <div className="header-logo col-md-4 col-12">
                                    <a href="index.html" className="logo"><img src="img/logo.png" alt="logo" /></a>
                                </div>

                                
                                <div className="account-menu col-md-4 col-12">
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="#" data-toggle="dropdown"><i className="fa fa-shopping-cart"></i><span className="num">2</span></a>
                                            
                                            
                                            <div className="mini-cart-brief dropdown-menu text-left">
                                                
                                                <div className="all-cart-product clearfix">
                                                    <div className="single-cart clearfix">
                                                        <div className="cart-image">
                                                            <a href="product-details.html"><img src="img/cart/1.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h5><a href="product-details.html">Holiday Candle</a></h5>
                                                            <p>1 x £9.00</p>
                                                            <a href="#" className="cart-delete" title="Remove this item"><i className="fa fa-trash-o"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="single-cart clearfix">
                                                        <div className="cart-image">
                                                            <a href="product-details.html"><img src="img/cart/2.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h5><a href="product-details.html">Christmas Tree</a></h5>
                                                            <p>1 x £9.00</p>
                                                            <a href="#" className="cart-delete" title="Remove this item"><i className="fa fa-trash-o"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="cart-totals">
                                                    <h5>Total <span>£12.00</span></h5>
                                                </div>
                                                
                                                <div className="cart-bottom  clearfix">
                                                    <a href="checkout.html">Check out</a>
                                                </div>
                                            </div>
                                            
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="header-bottom section">
            <div className="container">
                <div className="row">
                   
                    
                    <div className="header-bottom-wrapper text-center col">

                        
                        <div className="header-bottom-logo">
                            <a href="index.html" className="logo"><img src="img/logo.png" alt="logo" /></a>
                        </div>

                        
                        <nav id="main-menu" className="main-menu">
                            <ul>
                                <li className="active"><a href="index.html">home</a></li>
                                <li><a href="shop.html">shop</a>
                                    <ul className="sub-menu">
                                        <li><a href="shop.html">shop page</a></li>
                                        <li><a href="product-details.html">product details</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">about</a></li>
                                <li><a href="#">pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="cart.html">cart</a></li>
                                        <li><a href="checkout.html">checkout</a></li>
                                        <li><a href="wishlist.html">wishlist</a></li>
										<li><a href="under-construction.html">Under Construction</a></li>
                                    </ul>
                                </li>
                                <li><a href="blog.html">blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="blog.html">blog page</a></li>
                                        <li><a href="blog-details.html">blog details</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">contact</a></li>
                            </ul>
                        </nav>

                        
                        <div className="header-search">
                            
                            
                            <button className="search-toggle"><i className="ion-ios-search-strong"></i></button>
                            
                            
                            <div className="header-search-form">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button><i className="ion-ios-search-strong"></i></button>
                                </form>
                            </div>
                            
                        </div>
                        
                        
                        <div className="mobile-menu section d-md-none"></div>

                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
    
       
    
    <div className="hero-slider section fix">

        
        <div className="hero-item" style="background-image: url(img/hero/1.jpg)">

            
            <div className="hero-content text-center m-auto">

                <h2>Save 25%</h2>
                <h1>Christmas Sale</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                <a href="#">LEARN MORE</a>

            </div>


        </div>

        
        <div className="hero-item" style="background-image: url(img/hero/2.jpg)">

            
            <div className="hero-content text-center m-auto">

                <h2>Save 25%</h2>
                <h1>Christmas Sale</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                <a href="#">LEARN MORE</a>

            </div>


        </div>

    </div>
    
       
    
    <div className="banner-section section pt-120">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-6 col-12 mb-30">
                    
                    <div className="single-banner">
                        <img src="img/banner/1.jpg" alt="banner" />
                        <div className="banner-content right">
                            <h1 className="white"><span>Gifts</span>Christmas</h1>
                            <a href="#" className="button">Shop Now</a>
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-12 mb-30">
                    
                    <div className="single-banner">
                        <img src="img/banner/2.jpg" alt="banner" />
                        <div className="banner-content left">
                            <h2 className="black"><span className="small">Save <span className="red">25%</span></span><span className="red">Offer</span> Christmas</h2>
                            <a href="#" className="link">Shop Now</a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    
       
    
    <div className="product-section section pt-70 pb-60">
        <div className="container">
           
            
            <div className="row">
                <div className="section-title text-center col mb-60">
                    <h1>Featured Products</h1>
                </div>
            </div>
            
            
            <div className="row">
                
                
                <div className="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div className="product">

                        
                        <div className="image">
                            
                            <a href="product-details.html" className="img"><img src="img/product/1.jpg" alt="Product" /></a>
                            
                            <a href="#" className="wishlist"><i className="fa fa-heart-o"></i></a>
                            
                            <span className="label">New</span>
                        </div>
                        
                        
                        <div className="content">
                            
                            
                            <div className="head fix">
                               
                                
                                <div className="title-category float-left">
                                    <h5 className="title"><a href="product-details.html">Holiday Candle</a></h5>
                                    <a href="shop.html" className="category">Catalog</a>
                                </div>
                                
                                <div className="price float-right">
                                    <span className="new">$38</span>
                                    
                                   <span> $46</span> 
                                
                            </div>
                            
                            
                            <div className="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                
                <div className="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div className="product">

                        
                        <div className="image">
                            
                            <a href="product-details.html" className="img"><img src="img/product/2.jpg" alt="Product" /></a>
                            
                            <a href="#" className="wishlist"><i className="fa fa-heart-o"></i></a>
                            
                         
                        </div>
                        
                        
                        <div className="content">
                            
                            
                            <div className="head fix">
                               
                                
                                <div className="title-category float-left">
                                    <h5 className="title"><a href="product-details.html">Christmas Tree</a></h5>
                                    <a href="shop.html" className="category">Catalog</a>
                                </div>
                                
                                <div className="price float-right">
                                    <span className="new">$38</span>
                                   
                                 <span>  $46</span> 
                                </div>
                                
                            </div>
                            
                            
                            <div className="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                
                <div className="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div className="product">

                        
                        <div className="image">
                            
                            <a href="product-details.html" className="img"><img src="img/product/3.jpg" alt="Product" /></a>
                            
                            <a href="#" className="wishlist"><i className="fa fa-heart-o"></i></a>
                            
                            
                        </div>
                        
                        
                        <div className="content">
                            
                            
                            <div className="head fix">
                               
                                
                                <div className="title-category float-left">
                                    <h5 className="title"><a href="product-details.html">Santa Claus Doll</a></h5>
                                    <a href="shop.html" className="category">Catalog</a>
                                </div>
                                
                                <div className="price float-right">
                                    <span className="new">$38</span>
                                    
                                 <span>   $46</span> 
                                </div>
                                
                            </div>
                            
                            
                            <div className="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                
                <div className="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div className="product">

                        
                        <div className="image">
                            
                            <a href="product-details.html" className="img"><img src="img/product/4.jpg" alt="Product" /></a>
                            
                            <a href="#" className="wishlist"><i className="fa fa-heart-o"></i></a>
                            
                            <span className="label">New</span>
                        </div>
                        
                        
                        <div className="content">
                            
                            
                            <div className="head fix">
                               
                                
                                <div className="title-category float-left">
                                    <h5 className="title"><a href="product-details.html">Holiday Cap</a></h5>
                                    <a href="shop.html" className="category">Catalog</a>
                                </div>
                                
                                <div className="price float-right">
                                    <span className="new">$38</span>
                                    
                                   <span> $46</span> 
                                </div>
                                
                            </div>
                            
                            
                            <div className="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                
                <div className="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div className="product">

                        
                        <div className="image">
                            
                            <a href="product-details.html" className="img"><img src="img/product/5.jpg" alt="Product" /></a>
                            
                            <a href="#" className="wishlist"><i className="fa fa-heart-o"></i></a>
                            
                            <span>New</span> 
                        </div>
                        
                        
                        <div className="content">
                            
                            
                            <div className="head fix">
                               
                                
                                <div className="title-category float-left">
                                    <h5 className="title"><a href="product-details.html">Holiday Doll</a></h5>
                                    <a href="shop.html" className="category">Catalog</a>
                                </div>
                                
                                <div className="price float-right">
                                    <span className="new">$38</span>
                                    
                                
                                </div>
                                
                            </div>
                            
                            
                            <div className="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
                
                <div className="col-lg-4 col-md-6 col-12 mb-60">
                   
                    <div className="product">

                        
                        <div className="image">
                            
                            <a href="product-details.html" className="img"><img src="img/product/6.jpg" alt="Product" /></a>
                            
                            <a href="#" className="wishlist"><i className="fa fa-heart-o"></i></a>
                            
                          <span>  New</span> 
                        </div>
                        
                        
                        <div className="content">
                            
                            
                            <div className="head fix">
                               
                                
                                <div className="title-category float-left">
                                    <h5 className="title"><a href="product-details.html">Holiday Candle</a></h5>
                                    <a href="shop.html" className="category">Catalog</a>
                                </div>
                                
                                <div className="price float-right">
                                    <span className="new">$38</span>
                                    
                                 
                                </div>
                                
                            </div>
                            
                            
                            <div className="action-button fix">
                                <a href="#">add to cart</a>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
    
       
    
    <div className="testimonial-section section bg-gray pt-100 pb-65" style="background-image: url(img/bg/testimonial.png)">
        <div className="container">
           
            
            <div className="row">
                <div className="section-title text-center col mb-60">
                    <h1>Customer Reviews</h1>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-8 col-md-10 col-12 ml-auto mr-auto">
                    
                    
                    <div className="testimonial-slider text-center">
                        
                        
                        <div className="single-testimonial">
                            <img src="img/testimonial/1.jpg" alt="customer" />
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                            <h5>Betty Moore</h5>
                        </div>
                        
                        
                        <div className="single-testimonial">
                            <img src="img/testimonial/1.jpg" alt="customer" />
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                            <h5>Betty Moore</h5>
                        </div>
                        
                        
                        <div className="single-testimonial">
                            <img src="img/testimonial/1.jpg" alt="customer" />
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                            <h5>Betty Moore</h5>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
    
       
    
    <div className="newsletter-section section pt-100 pb-120">
        <div className="container">
           
            
            <div className="row">
                <div className="section-title text-center col mb-55">
                    <h1>Newsletter</h1>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                </div>
            </div>
            
            <div className="row">
                <div className="text-center col">
                    
                    
                    <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="subscribe-form validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <label for="mce-EMAIL" className="d-none">Subscribe to our mailing list</label>
                            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email address" required />
                            
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value="" /></div>
                            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">subscribe</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            
        </div>
    </div>
    
       
    
    <div className="blog-section section bg-gray pt-100 pb-60">
        <div className="container">
           
            
            <div className="row">
                <div className="section-title text-center col mb-60">
                    <h1>Christmas Blog</h1>
                </div>
            </div>
            
            <div className="row">
                
                
                <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
                    
                    
                    <a href="blog-details.html" className="image"><img src="img/blog/1.jpg" alt="blog" /></a>
                    
                    
                    <div className="content fix">
                        
                        
                        <span className="publish"><span>Published on:</span> 25 May 2017</span>
                        
                        
                        <h4 className="title"><a href="blog-details.html">If you are going to use a passage.</a></h4>
                        
                        
                        <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
                        
                         
                        <a href="blog-details.html" className="read-more">Read More</a>
                        
                    </div>
                    
                </div>
                
                
                <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
                    
                    
                    <a href="blog-details.html" className="image"><img src="img/blog/2.jpg" alt="blog" /></a>
                    
                    
                    <div className="content fix">
                        
                        
                        <span className="publish"><span>Published on:</span> 25 May 2017</span>
                        
                        
                        <h4 className="title"><a href="blog-details.html">Ut enim ad minima veniam, quis.</a></h4>
                        
                        
                        <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
                        
                         
                        <a href="blog-details.html" className="read-more">Read More</a>
                        
                    </div>
                    
                </div>
                
                
                <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
                    
                    
                    <a href="blog-details.html" className="image"><img src="img/blog/3.jpg" alt="blog" /></a>
                    
                    
                    <div className="content fix">
                        
                        
                        <span className="publish"><span>Published on:</span> 25 May 2017</span>
                        
                        
                        <h4 className="title"><a href="blog-details.html">At vero eos et accusamus et iusto</a></h4>
                        
                        
                        <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
                        
                         
                        <a href="blog-details.html" className="read-more">Read More</a>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
    
       
    
    <div className="footer-section section bg-dark" style="background-image: url(img/bg/footer-bg.png)">
        <div className="container">
            
            <div className="row">
                <div className="col">

                    
                    <div className="footer-top section pt-80 pb-50">
                        <div className="row">

                            
                            <div className="footer-widget col-lg-4 col-md-6 col-12 mb-40">

                                <img className="footer-logo" src="img/footer-logo.png" alt="logo" />
                                <p>Contrary to popular belief, Lorem Ipsum is nosimply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over Lorem Ipsum is nosimply random text.</p>

                            </div>

                            
                            <div className="footer-widget col-lg-2 col-md-3 col-12 mb-40">

                                <h4 className="widget-title">Information</h4>

                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Services</a></li> 
                                       <li><a href="#">Team member</a></li>
                                    <li><a href="#">Clinet</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>  

                            </div>

                            
                            <div className="footer-widget col-lg-2 col-md-3 col-12 mb-40">

                                <h4 className="widget-title">Categories</h4>

                                <ul>
                                    <li><a href="#">Costumes</a></li>
                                    <li><a href="#">Lights</a></li>
                                    <li><a href="#">Lights</a></li>
                                    <li><a href="#">Christmas Trees</a></li>
                                    <li><a href="#">Decorations</a></li>
                                </ul>  

                            </div>

                            
                            <div className="footer-widget col-lg-4 col-md-6 col-12 mb-40">

                                <h4 className="widget-title">Contact Us</h4>

                                <ul>
                                    <li><span>Address:</span> ur address goes here,street Crossroad 123</li>
                                    <li><span>Phone:</span> +99 859 658 589 . +69 587 456 25</li>
                                    <li><span>Eax:</span> +55 784 7585 . + 985 698 586</li>
                                    <li><span>Email:</span> christ@email.com</li>
                                </ul>  

                            </div>

                        </div>
                    </div>
                    
                    
                    <div className="footer-bottom section text-center">
                        <p><a href="templateshub.net">Templates Hub</a></p>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
    

</div>

</>

  );
}
export default App;