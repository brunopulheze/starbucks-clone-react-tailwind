import React from 'react'

const Sitemap = (props) => {
    const { data } = props;
    return (
        <>
            {data.map((item, i) => (
                <ul key={i}>
                    <p className="font-semibold text-titleText">{item.title}</p>
                    {item.list.map((item, i) => (
                        <li key={i} className="py-2">{item}</li>
                    ))}
                </ul>
            ))}
        </>
    )
}

export default Sitemap