import React from 'react';

export default ({handleBlur, handleChange, handleFocus, value}) => {
    return (
        <input type="text" onBlur={handleBlur} onChange={handleChange} onFocus={handleFocus} value={value}/>
    )
}