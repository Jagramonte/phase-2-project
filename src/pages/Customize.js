import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useState } from "react";
import "./Customize.css";

function Customize({setDests}) {
  const [formData, setFormData] = useState({
    Continent: "",
    Location: "",
    Image: "",
    Description: "",
    Price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ formData });
    fetch("http://localhost:3010/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newDest) => {
        setFormData({
          Continent: "",
          Location: "",
          Image: "",
          Description: "",
          Price: "",
        });
       setDests((previous) => [...previous,newDest])
      });
  }
  return (
    <Form className="customize-form" onSubmit={handleSubmit}>
      <Form.Field>
        <label>Continent</label>
        <input
          name="Continent"
          placeholder="Continent"
          value={formData.Continent}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Location</label>
        <input
          name="Location"
          placeholder="City"
          value={formData.Location}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Image</label>
        <input
          name="Image"
          placeholder="Image Url"
          value={formData.Image}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          name="Description"
          placeholder="Description"
          value={formData.Description}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Price</label>
        <input
          name="Price"
          placeholder="Price"
          value={formData.Price}
          onChange={handleChange}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default Customize;
