import { useState } from "react";
import { formData } from "../FormData"
import "./Form.css"

export const Form = () => {
  const [formdata, setFormData] = useState(formData);
  const handleChange=(e)=>{
    const id=e.target.id 
    const value=e.target.value
    setFormData(p=>({
      ...p,[id]:{...p[id],value}
    })
    )
  }

  const validate=()=>{
    const cpy={...formdata}
    let compare=true
    if (!/^[a-zA-Z\s]{3,50}$/.test(cpy.name.value.trim())) {
      cpy.name.error = "Enter a valid name (only letters, 3–50 characters)";
      compare = false;
    } else {
      cpy.name.error = "";
    }

    if (!/^\d{10}$/.test(cpy.phone.value)) {
      cpy.phone.error = "Enter a valid 10-digit phone number";
      compare = false;
    } else {
      cpy.phone.error = "";
    }

    setFormData(cpy)
    return compare
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (validate()) {
        console.log("form submitted");
      }
      console.log(
        Object.fromEntries(
          Object.values(formdata).map((item) => [item.id, item.value])
        )
      );
    }}>
      {Object.values(formdata).map(item => {
      return (
        <div key={item.id} className="form-group">
          <label htmlFor={item.id}>{item.label}</label>
          <br/>

          {item.type === "textarea" ? (
            <textarea
              id={item.id}
              name={item.id}
              placeholder={item.placeholder}
              required={item.required}
              value={item.value}
              onChange={handleChange}
              rows="5"
            />
          ) : item.type === "select" ? (
            <select id={item.id} name={item.id} required={item.required} onChange={handleChange}>
              <option value="">Select...</option>
              {item.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={item.type}
              id={item.id}
              name={item.id}
              placeholder={item.placeholder}
              required={item.required}
              value={item.value}
              onChange={handleChange}
            />
          )}
          <br />
          {item.error && <small style={{color:"red"}}>{item.error}</small>}
        </div>
      );
    })}
      <button className="sThemeBtn">Submit</button>
      


    </form>
  )
}
