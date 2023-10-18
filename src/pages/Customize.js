import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import {useState} from "react"



function Customize(){
    
    const [formData, setFormData] = useState({
        Continent : "",
        Location : "",
        Image : "" ,
        Description : "",
        Price : "",
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value })
    }
    function handleSubmit (e) {
        e.preventDefault();
        
        fetch( "http://localhost:3010/destinations",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(formData)
        }
        )
        .then((r) => r.json())
        .then((newDest) => {
            setFormData({
                Continent : "",
                Location : "",
                Image : "" ,
                Description : "",
                Price : "",
            })
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
         <Form.Field>
          <label>Continent</label>
          <input 
            name = "continent"
            placeholder= "Continent"
            value = {formData.continent}
            onChange = {handleChange}
          />
         </Form.Field>
         <Form.Field>
          <label>Location</label>
          <input 
          name = "location"
          placeholder = "City" 
          value = {formData.location}
          onChange = {handleChange}
          />
         </Form.Field>
         <Form.Field>
          <label>Image</label>
          <input 
          name = "image"
          placeholder="Image Url"
          value = {formData.image}
          onChange = {handleChange}
          />
         </Form.Field>
         <Form.Field>
          <label>Description</label>
          <input 
          name = "description"
          placeholder='Description'
          value = {formData.description}
          onChange = {handleChange} />
         </Form.Field>
         <Form.Field>
          <label>Price</label>
          <input 
          name = "price"
          placeholder='Price'
          value = {formData.price} 
          onChange = {handleChange}/>
         </Form.Field>
         <Button type='submit'>Submit</Button>
        </Form>
)}
    


export default Customize;



