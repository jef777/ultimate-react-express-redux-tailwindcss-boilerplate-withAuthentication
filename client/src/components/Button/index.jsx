import React from 'react'

const Button = ({ onSubmit, name, type, onClick, className }) => (
    <button
        className={className}
        onClick={onClick}
        type={type}
        onSubmit={onSubmit}
    >
        {name}
    </button>
)

export default Button
