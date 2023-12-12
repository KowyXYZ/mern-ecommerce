
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateProduct() {

    const {id} = useParams()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/updateProduct/' + id, {name, price, category, description})
        .then(result => {
            navigate('/')
            console.log(result)
        })
        .catch(err => console.log(err))
    }



     useEffect(() => {
          axios.get(`http://localhost:5000/getProducts/${id}`)
          .then(result => {
            setName(result.data.name)
            setPrice(result.data.price)
            setCategory(result.data.category)
            setDescription(result.data.description)
          })
          .catch(err => console.log(err))
     }, [])
        


  return (
    <div className='py-12'>
        <form onSubmit={handleSubmit} className={`flex flex-col gap-4 container mx-auto w-[400px]`}>
        <input className='p-2' type="text" placeholder='Product name' onChange={(e) => setName(e.target.value)} value={name}/>
        <input className='p-2' type="text" placeholder='Product price' onChange={(e) => setPrice(e.target.value)} value={price}/>

        <select className='p-2'  onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="default"  disabled>Choose one</option>
          <option value="Phones">Phones</option>
          <option value="Tech">Tech</option>
          <option value="Accessories">Accessories</option>
          <option value="PcParts">PcParts</option>
          <option value="DesktopPCs">DesktopPCs</option>
          <option value="Laptops">Laptops</option>
          <option value="Monitors">Monitors</option>
         </select>

        <textarea className='p-2' type="text" placeholder='Product description'onChange={(e) => setDescription(e.target.value)} value={description}/>

        <button className='w-full bg-blue-500 p-2'>Update item</button>
      </form>
    </div>
  )
}

export default UpdateProduct
