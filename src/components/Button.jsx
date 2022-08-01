import React from 'react'

const Button = (props) => {
    const { borderColor, hover } = props;
    return (
        <button className={`border-solid border-2 rounded-full px-5 py-1 mt-2 text-center font-bold ${borderColor} ${hover}`}>
            {props.children}
        </button>
    )
}

export default Button