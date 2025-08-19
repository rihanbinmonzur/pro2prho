
import {Link,uselocation} from 'react-router-dom';
import { useCart } from "react-use-cart";

function Header() {

  const { 
      isEmpty,
      items,
      updateItemQuantity,
      cartTotal,
      setCartMetadata,
      removeItem,
      metadata,
      totalUniqueItems } = useCart();
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
                                                <li><a href="#" data-toggle="dropdown"><i className="fa fa-shopping-cart"></i><span className="num">{totalUniqueItems} </span></a>
                                                    
                                                    <div className="mini-cart-brief dropdown-menu text-left">
                                                        <div className="all-cart-product clearfix">
                                                            {!isEmpty && items.map((d, key) =>
                                                            <div className="single-cart clearfix">
                                                                <div className="cart-image">
                                                                    <a href="product-details.html"><img src={`${process.env.REACT_APP_API_URL}${d.image}`} alt="" /></a>
                                                                </div>
                                                                <div className="cart-info">
                                                                    <h5><a href="product-details.html">{d.name}</a></h5>
                                                                    <p>{d.quantity} x {d.price}</p>
                                                                    <a href="#" className="cart-delete" onClick={() => removeItem(d.id)} title="Remove this item"><i className="fa fa-trash-o"></i></a>
                                                                </div>
                                                            </div>
                                                            )}
                                                            
                                                        </div>
                                                        
                                                        <div className="cart-totals">
                                                            <h5>Total <span>{cartTotal}</span></h5>
                                                        </div>
                                                        
                                                        <div className="cart-bottom  clearfix">
                                                            <Link  to={`checkout`} >Check out</Link>
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
                                        <li>   <Link to="/">Home</Link></li>
                                    <li> <a href="shop.html">shop</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop.html">shop page</a></li>
                                                <li><a href="product-details.html">product details</a></li>
                                            </ul>
                                        </li>
                                    <li><Link to="/about">About</Link></li>
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