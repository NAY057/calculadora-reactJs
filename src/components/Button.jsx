import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({text,type,clickHandler}) => (
        <button className={type} onClick={()=> clickHandler(text)}>
            <span>{text}</span>
        </button>
    )

Button.prototype = {
    text: PropTypes.string,
    type: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
    // func = de tipo funcion 
}

export default Button