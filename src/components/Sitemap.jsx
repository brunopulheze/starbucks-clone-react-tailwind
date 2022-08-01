import React from 'react'

const Sitemap = (props) => {
    const { data } = props;
    return (
        <>
            {data.map((item, i) => (
                <ul key={i}>
                    <p className="font-semibold text-titleText mb-6">{item.title}</p>
                    {item.list.map((item, i) => (
                        <li key={i} className="py-2 mb-4 hover:text-black">{item}</li>
                    ))}
                </ul>
            ))}
        </>
    )
}

export default Sitemap