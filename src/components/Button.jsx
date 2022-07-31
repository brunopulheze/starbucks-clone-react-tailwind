import React from 'react'

const Button = (props) => {
    const { text } = props;
    return (
        <button className="hover:bg-slate-50 border-solid border-black border-2 rounded-full px-5 py-1 mt-2 text-center font-bold">
            {text}
        </button>
    )
}

export default Button