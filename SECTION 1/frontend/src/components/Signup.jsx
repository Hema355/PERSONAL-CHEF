import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
const signupSchema=Yup.object().shape({

})
export const Signup = () => {
  const signupForm=useFormik({
    initialValues:({
      name:'',
      email:'',
      number:'',
      gender:'',
      date:'',
      address:'',
      code:'',
      
    }),
    onsubmit:(values)=>{
      console.log(values);
    },
    validationSchema:signupSchema
  })
  return (
    <div>
         <body className='d-flex justify-content-center align-items-center vh-100 w-100'>
          <div className="signup">
            <form onsubmit={signupForm.handleSubmit}>


          <h3>Signup</h3>
          <span style={{color:'red',fontSize:14, marginLeft:14}}>{signupForm.touched.name&&signupForm.errors.name}</span>
          <label htmlFor="name">Name</label>
          <input type="text"className='myinput2' name='name'onChange={signupForm.handleChange.name} value={signupForm.values.name} />
          <span style={{color:'red',fontSize:14, marginLeft:14}}>{signupForm.touched.email&&signupForm.errors.email}</span>
          <label htmlFor="email">Email</label>
          <input type="email" className='myinput2'name='email'onChange={signupForm.handleChange.email} value={signupForm.values.email} />
          <span style={{color:'red',fontSize:14, marginLeft:14}}>{signupForm.touched.number&&signupForm.errors.number}</span>
          <label htmlFor="number">Number</label>
          <input type="number" className='myinput2' name='number' onChange={signupForm.handleChange.number} value={signupForm.values.number}/>
          <span style={{color:'red',fontSize:14, marginLeft:14}}>{signupForm.touched.gender&&signupForm.errors.gender}</span>
          <label htmlFor="gender">Gender</label>
          <input type="gender" className='myinput2'name='gender' onChange={signupForm.handleChange.gender} value={signupForm.values.gender} />
          <span style={{color:'red',fontSize:14, marginLeft:14}}>{signupForm.touched.date&&signupForm.errors.date}</span>
          <label htmlFor="date">DOB</label>
          <input type="date"className='myinput2'name='date' onChange={signupForm.handleChange.date} value={signupForm.values.date} />
          <span style={{color:'red',fontSize:14, marginLeft:14}}>{signupForm.touched.address&&signupForm.errors.address}</span>
          <label htmlFor="address">Address</label>
          <input type="address" className='myinput2'name='address' onChange={signupForm.handleChange.address} value={signupForm.values.address} />
          <span style={{color:'red',fontSize:14, marginLeft:14}}>{signupForm.touched.code&&signupForm.errors.code}</span>
          <label htmlFor="code">Pincode</label>
          <input type="code"className='myinput2'name='code' onChange={signupForm.handleChange.code} value={signupForm.values.code} />
          <div>
            <button className='sibt'>Send</button>
          </div>
            </form>    
          </div>

         </body>

    </div>
  )
}
export default Signup
