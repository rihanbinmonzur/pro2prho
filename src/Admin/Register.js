
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Admin/Recss.css';


function Register(){
    const navigate =useNavigate();


    const handleSubmit =async(e) => {
      e.preventDefault();
      if(e.target.password.value !== e.target.rpassword.value){
        alert("password not match");
        return false;
      }
   
     let datas={
      name:e.target.name.value,
      email:e.target.email.value,
      password:e.target.password.value,
      contact_no:e.target.contact_no.value,
     };
     

    try{
      let url = 'http://localhost/christmas-api/users_add.php';

      let response=await axios({
        method:'post',
        responseType:'json',
        url:url,
        data:datas
      });
    if (response.data.error==0)
      navigate('/login')
    else
      alert(response.data.message)
     }catch(e){
      console.log(e);
    }
  
    }

    return(
      <section className="vh-100 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit}>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" name="name" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" name='email' className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="contact" name='contact_no' className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="contact">Contact no</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" autoComplete='new-password' name='password' className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                 
                  <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                   <input type="password" id="form3Example4cdg" autoComplete='newpassword' name='rpassword' className="form-control form-control-lg" />
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button  type="submit" data-mdb-button-init
                    data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p>

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

export default Register;