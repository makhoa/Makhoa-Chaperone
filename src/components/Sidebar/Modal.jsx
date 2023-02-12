import React from 'react';
import './Modal.css';
import { useState } from "react";
import { useForm } from 'react-hook-form';


export default function Modal({Childern}) 
{
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const [Open,setIsOpen] = useState(true);

  if (!Open) {return null}
     

  return (
     
      <div className='background col-sm-3 col-md-6 col-lg-12'>
        <form onSubmit={handleSubmit (onSubmit)}>
        <div className='Modalbackground col-sm-3 col-md-6 col-lg-12' >
          <button className="Modalclose"  onClick={()=>setIsOpen(false)} >X</button>

          {Childern}  
          <div className="Modal-container"> 
          <div className="inline"> 
              <div className='col-25'><i class="fa fa-user icon">Name</i></div>
              <div className="col-75"> 
                <input class="input-field" type="text" placeholder="Name" name="Name" {...register("Name", { required: true, maxLength: 20 })} />
              </div>
          </div>
           
          
          

          <div className="inline"> 
            <div className='col-25'><i >Gender</i></div>
            <div className="col-75">
              <input type="radio" value="Male" name="gender" class="fas fa-mars" /> Male
              <input type="radio" value="Female" name="gender" class="fas fa-venus" /> Female
              <input type="radio" value="Other" name="gender" class="fas fa-genderless" /> Other
            </div>
          </div>
         

          <div className="inline"> 
            <div  className="col-25">
              <i class="fa fa-envelope icon">Email</i></div>
            <div className="col-75">
              <input class="input-field" type="text" placeholder="Email" name="email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}/>
            </div>
          </div>
        

          <div className="inline"> 
            <div className="col-25"><i class="fas fa-phone icon">Phone</i></div>
            <div className="col-75">
              <input class="input-field" type="number" placeholder="+91 98765432210" name="phone" {...register("Mobile number", {required: true, minLength: 6, maxLength: 13})}/>
            </div>
          </div>
        

           <div className="inline">
            <div className='col-25'> <i class="far fa-address-card icon">CustomerID</i></div>
            <div className="col-75">
              <input class="input-field" type="alphanumeric" placeholder="576802-ERD348 45" name="CustomerID" {...register("CustomerID", {required: true, pattern: /576802-ERD348 45/i})} />
            </div>
          </div>
         

          <div className="inline"> 
            <div className='col-25'><i >Date of Birth</i></div>
            <div className="col-75">
              <input class="input-field" type="date" placeholder="11/02/2023" name="Date Of Birth" className="far fa-calendar icon"/>
            </div>
          </div>
         

          <div className="inline">
            <div className='col-25'>
            <i >Membership</i>
            </div>    
            <div className="col-75">      
              <input type="radio" value="Male" name="gender" class="fa-regular fa-credit-card" /> Classic
              <input type="radio" value="Female" name="gender" class="fa-sharp fa-regular fa-credit-card" /> Silver
              <input type="radio" value="Other" name="gender" class="fa-duotone fa-credit-card" /> Gold
            </div>
          </div>
          <div className="footer">
            <button class="btn danger" onClick={()=> alert('Failed to porpulate CustomerInfo')}>Cancel</button>
            <button class="btn success" onClick={()=> alert('CustomerInfo saved Successfully')}>Save</button>
          </div>
        </div>  

      </div>    
     </form>
  </div>
    
  )
}
