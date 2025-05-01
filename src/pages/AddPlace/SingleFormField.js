import React from 'react'

function SingleFormField({label, name, id, type, placeholder, value, onChangeEvent, handleBlur, touched, errors}) {
    if(type === 'textarea') {
        // alert("ssSf");
        return (
            <div className="form-group">
                <label htmlFor={id}>{label}</label>
                <textarea type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChangeEvent}  rows="5" onBlur={handleBlur}/>
                {touched[name] && errors[name] && (
          <div className="error">{errors[name]}</div>
        )}
            </div>
        )
    }
    
  return (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChangeEvent} onBlur={handleBlur}/>
        {touched[name] && errors[name] && (
          <div className="error">{errors[name]}</div>
        )}
    </div>
  )
}

export default SingleFormField