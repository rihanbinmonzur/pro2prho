import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
import { useCart } from "react-use-cart";


function Home() {

const { addItem } = useCart();

  const [featured,setFeatured]=useState([]);
  const [newCome,setNewCome]=useState([]);
  const [inspired,setInspired]=useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async (e) => {
     let feat = await axios.get(`front_api/products.php?query_type=featured&limit=5`)
     setFeatured(feat.data);
  }



  return (
    <Weblayout>
    
    <div className="banner-section section pt-120">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-6 col-12 mb-30">
                    
                    <div className="single-banner">
                        <img src="assets/img/banner/1.jpg" alt="banner" />
                        <div className="banner-content right">
                            <h1 className="white"><span>Gifts</span>Christmas</h1>
                            <a href="#" className="button">Shop Now</a>
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-12 mb-30">
                    
                    <div className="single-banner">
                        <img src="assets/img/banner/2.jpg" alt="banner" />
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
               
                {featured.length > 0 && featured.map((d, key) =>
                    <div className="col-lg-4 col-md-6 col-12 mb-60">
                        <div className="product">
                            <div className="image">
                                <a href="product-details.html" className="img"><img src={`${process.env.REACT_APP_API_URL}${d.image}`} alt="Product" /></a>
                                <a href="#" className="wishlist"><i className="fa fa-heart-o"></i></a>
                            </div>
                            <div className="content">
                                <div className="head fix">
                                    <div className="title-category float-left">
                                        <h5 className="title"><a href="product-details.html">{d.name}</a></h5>
                                        <a href="shop.html" className="category">Catalog</a>
                                    </div>
                                    <div className="price float-right">
                                        <span className="new">{d.price}</span>
                                        <span>  $46</span> 
                                    </div>
                                </div>
                                <div className="action-button fix">
                                    <button className='btn btn-primary' onClick={() => addItem(d)}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                 )}
                
            </div>
        </div>
    
       
    
    <div className="testimonial-section section bg-gray pt-100 pb-65" style={{backgroundImage: "url(img/bg/testimonial.png)"}}>
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
                            <img src="assets/img/testimonial/1.jpg" alt="customer" />
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                            <h5>Betty Moore</h5>
                        </div>
                        
                        
                        <div className="single-testimonial">
                            <img src="assets/img/testimonial/1.jpg" alt="customer" />
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                            <h5>Betty Moore</h5>
                        </div>
                        
                        
                        <div className="single-testimonial">
                            <img src="assets/img/testimonial/1.jpg" alt="customer" />
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
                    
                    
                    <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="subscribe-form validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <label htmlFor="mce-EMAIL" className="d-none">Subscribe to our mailing list</label>
                            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Your email address" required />
                            
                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value="" /></div>
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
                    
                    
                    <a href="blog-details.html" className="image"><img src="assets/img/blog/1.jpg" alt="blog" /></a>
                    
                    
                    <div className="content fix">
                        
                        
                        <span className="publish"><span>Published on:</span> 25 May 2017</span>
                        
                        
                        <h4 className="title"><a href="blog-details.html">If you are going to use a passage.</a></h4>
                        
                        
                        <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
                        
                         
                        <a href="blog-details.html" className="read-more">Read More</a>
                        
                    </div>
                    
                </div>
                
                
                <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
                    
                    
                    <a href="blog-details.html" className="image"><img src="assets/img/blog/2.jpg" alt="blog" /></a>
                    
                    
                    <div className="content fix">
                        
                        
                        <span className="publish"><span>Published on:</span> 25 May 2017</span>
                        
                        
                        <h4 className="title"><a href="blog-details.html">Ut enim ad minima veniam, quis.</a></h4>
                        
                        
                        <p>If you are going to use a passage of Lorem Ipsum, yneed to be sure there isn't anything embarrassing hidden ithe middle text. All the Lorem Ipsum.</p>
                        
                         
                        <a href="blog-details.html" className="read-more">Read More</a>
                        
                    </div>
                    
                </div>
                
                
                <div className="blog-item col-lg-4 col-md-6 col-12 mb-60">
                    
                    
                    <a href="blog-details.html" className="image"><img src="assets/img/blog/3.jpg" alt="blog" /></a>
                    
                    
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
    
       
    
 

</div>

</Weblayout>
  );
}

export default Home;
  