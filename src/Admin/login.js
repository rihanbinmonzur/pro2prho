
import axios from 'axios';
import React, {useEffect, useState} from 'react';



function Login(){
  


  

      
   
 
    return(
          <section className="vh-100 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Log in</h2>

              <form onSubmit={handleSubmit}>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" name="email" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example1cg">your email</label>
                </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" autoComplete='new-password' name='password' className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>
    <div className="d-flex justify-content-center">
                  <button  type="submit" data-mdb-button-init
                    data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                </div>
                 </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}
export default Login;