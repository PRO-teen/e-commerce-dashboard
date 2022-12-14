import React  from 'react';


const AddProduct =()=>{
    const [name , setName] = React.useState('');
    const [price , setPrice] = React.useState('');
    const [category , setCategory] = React.useState('');
    const [company , setCompany] = React.useState('');
    const [error , setError] = React.useState(false);

    const addProduct = async()=>{
        console.log(!name)

        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }





        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
          method: "post",
          body: JSON.stringify({ name, price, category, company, userId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
    result = await result.json();
    console.log(result);
}

    return (
      <div className='product' >
        <h1>Add Product</h1>
        <input text="text" placeholder="Enter Product name" className='inputBox'
        value={name} onChange={(e) => {setName(e.target.value)}} />
        { error && !name &&  <span className='invalid-input'>enter the name</span>}

        <input text="text" placeholder="Enter product Price" className='inputBox'
         value={price} onChange={(e) => {setPrice(e.target.value)}}/>
         { error && !price &&  <span className='invalid-input'>enter the price</span>}

        <input text="text" placeholder="Enter Product Category" className='inputBox'
        value={category}  onChange={(e) => {setCategory(e.target.value)}} />
        { error && !category &&  <span className='invalid-input'>enter the category</span>}

        <input text="text" placeholder="Enter Product Company" className='inputBox'
         value={company} onChange={(e) => {setCompany(e.target.value)}} />
         { error && !company &&  <span className='invalid-input'>enter the company</span>}

        <button onClick={addProduct} type='submit' className='appButton' >Add Product</button>
      </div>
    )
}
export default AddProduct;