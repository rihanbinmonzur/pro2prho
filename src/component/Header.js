
import {Link,uselocation} from 'react-router-dom';

function Header() {
    return(
        <>
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
                                    <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="logo" /></a>
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
                                                            <a href="product-details.html"><img src="assets/img/cart/1.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="cart-info">
                                                            <h5><a href="product-details.html">Holiday Candle</a></h5>
                                                            <p>1 x £9.00</p>
                                                            <a href="#" className="cart-delete" title="Remove this item"><i className="fa fa-trash-o"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="single-cart clearfix">
                                                        <div className="cart-image">
                                                            <a href="product-details.html"><img src="assets/img/cart/2.jpg" alt="" /></a>
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
                            <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="logo" /></a>
                        </div>

                        
                        <nav id="main-menu" className="main-menu">
                            <ul>
                                <Link to="/">Home</Link>
                                <li><a href="shop.html">shop</a>
                                    <ul className="sub-menu">
                                        <li><a href="shop.html">shop page</a></li>
                                        <li><a href="product-details.html">product details</a></li>
                                    </ul>
                                </li>
                              <Link to="/about">About</Link>
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
    
        </>
    );
}
export default Header;