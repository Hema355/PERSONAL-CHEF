import { useFormik } from 'formik'
import React from 'react'
import*as Yup from'yup'
const recipeSchema=Yup.object().shape({

})

const AddRecipe = () => {
  const recipeFom=useFormik({
    initialValues:{
      title:'',
      type:'',
      image:'',
      category:'',
      discription:''
    },
    onSubmit:(value)=>{
      console.log(value);
    },
    validationSchema:recipeSchema

    
  })
  return (
    <div>
      <body className='d-flex justify-content-center align-items-center vh-100'>
        

      <div className="card w-25">
        <div className="card-body p-5">
          <form onSubmit={recipeFom.handleSubmit}>
3

        <h4>Recipe</h4>
        <span  style={{color:'red',fontSize:14}}>{recipeFom.touched.title&&recipeFom.errors.title}</span>
        <label htmlFor="name">Dish Name</label>
        <input type="text" name='title' className='form-control'onChange={recipeFom.handleChange} value={recipeFom.title.values} />
        <span  style={{color:'red',fontSize:14}}>{recipeFom.touched.type&&recipeFom.errors.type}</span>
        <label htmlFor="type">Type</label>
        <input type="type" name='type' className='form-control' onChange={recipeFom.handleChange} value={recipeFom.type.values}/>
        <span  style={{color:'red',fontSize:14}}>{recipeFom.touched.category&&recipeFom.errors.category}</span>
        <label htmlFor="category">Category</label>
        <input type="category"className='form-control'name='category' onCanPlay={recipeFom.handleChange} value={recipeFom.category.values} />
        <span  style={{color:'red',fontSize:14}}>{recipeFom.touched.image&&recipeFom.errors.image}</span>
        <label htmlFor="file">image</label>
        <input type="file" className='file' name='image' onChange={recipeFom.handleChange} value={recipeFom.image.values} />
        <span  style={{color:'red',fontSize:14}}>{recipeFom.touched.discription&&recipeFom.errors.discription}</span>
        <label htmlFor="discription">Discription</label>
        <textarea name="discription" className='form-control' onChange={recipeFom.handleChange} value={recipeFom.discription.values}></textarea>
    <div className='text-center'>

        <button className='btn btn-success'onChange={recipeFom.handleChange}>Send</button>
    </div>
          </form>
  

        </div>
      </div>
      </body>
    </div>
  )
}

export default AddRecipe