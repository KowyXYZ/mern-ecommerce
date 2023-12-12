import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function CreateProduct() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const [active, setActive] = useState(false)

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', name)
    formData.append('price', price)
    formData.append('category', category)
    formData.append('description', description)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(category === '') return
        axios.post('http://localhost:5000/createProduct', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(result => {
            navigate('/')
            console.log(result)
        })
        .catch(err => console.log(err))
    }   
    

    
    useEffect(() => {
      axios.get('http://localhost:5000/getProducts')
      .then(result => setProducts(result.data))
      .catch(err => console.log(err))
    }, [])



    const deleteProduct = (id) => {
      axios.delete(`http://localhost:5000/deleteProduct/${id}`)
      .then(result => {console.log(result) 
        window.location.reload()})
      .catch(err => console.log(err))
    }


    const categories = ['Phones', 'Laptops', 'Tech', 'Accessories', 'PcParts', 'DesktopPCs', 'Monitors']
    const [cat, setCat] = useState('')
    const filterCat = products.filter((item) => item.category === cat)

  return (
    <div className='w-full py-12 flex flex-col gap-4'>

      <div className='flex justify-center items-center'>
         <button className='text-lime-500' onClick={() => setActive(!active)}>Add item [+]</button>
      </div>
    
      <form onSubmit={handleSubmit} className={`${active ? 'flex' : 'hidden'} flex flex-col gap-4 container mx-auto w-[400px]`}>
        <input className='p-2' type="text" placeholder='Product name' onChange={(e) => setName(e.target.value)} />
        <input className='p-2' type="text" placeholder='Product price' onChange={(e) => setPrice(e.target.value)}/>

        <select className='p-2' defaultValue={'default'} onChange={(e) => setCategory(e.target.value)}>
          <option value="default"  disabled>Choose one</option>
          <option value="Phones">Phones</option>
          <option value="Tech">Tech</option>
          <option value="Accessories">Accessories</option>
          <option value="PcParts">PcParts</option>
          <option value="DesktopPCs">DesktopPCs</option>
          <option value="Laptops">Laptops</option>
          <option value="Monitors">Monitors</option>
         </select>

        <textarea className='p-2' type="text" placeholder='Product description'onChange={(e) => setDescription(e.target.value)} />

        <input type="file" className='p-2' onChange={(e) => setImage(e.target.files[0])}/>

        <button className='w-full bg-lime-500 p-2'>Add item</button>
      </form>


      <div className='flex justify-center flex-col gap-4 items-center mt-14'>
  
          <div className='flex justify-center items-center gap-4'>
            <input type="text" />
            <p>Search</p>
          </div>
          
          <p>Categories</p>
          <div className='flex gap-8'>
            {categories.map((cat, i) => {
              return(
                <p onClick={() => setCat(cat)}>{cat}</p>
              )
            })}
          </div>
          
      </div>
     
      <div className='flex gap-4 flex-wrap justify-center items-center mt-24'>
          
            {filterCat.map((product, index) => {
                return(
                    <div  key={index} className='w-[500px] border-2 p-4 flex text-center gap-1 justify-center items-center flex-col'>
                        <Link to={`/products/${product._id}`} className='text-[20px] font-black'>{product.name}</Link>
                        <p>Price: {product.price}$</p>
                        <p>{product.category}</p>
                        <p className='w-[300px]'>Description:{product?.description?.slice(0, 20)}...</p>
                        <Link to={`/products/update/${product._id}`} className='text-[lightblue]'>Update [$]</Link>
                        <button onClick={() => {deleteProduct(product._id)}} className='text-[red]'>Delete [X]</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CreateProduct
