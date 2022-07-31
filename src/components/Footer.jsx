import React from 'react'
import {
    legal,
    sitemap,
    socialIcons
} from '../helpers/data';
import Sitemap from './Sitemap';

const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-2 md:grid-cols-4 mx-10 md:mr-44 text-lightText">
                {sitemap.map((item, i) => (
                    <Sitemap key={i} data={item.sitemapList} socialIcons={socialIcons} />
                ))}
            </div>

            <div className="border my-6"></div>

            <div className="text-titleText mt-8 flex justify-evenly w-80">
                {socialIcons.map((item, i) => (
                    <i className={`fa-brands fa-2xl ${item}`}></i>
                ))}
            </div>

            <div className="flex justify-evenly w-fit mt-8">
                {legal.map((item, i) => (
                    <>
                        <p className='px-4'>{item.p}</p>
                        <p className>{item.verticalBar ? '|' : null}</p>
                    </>
                ))}
            </div>

            <p className="text-lightText my-4">
                © 2022 Starbucks Coffee Company. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer