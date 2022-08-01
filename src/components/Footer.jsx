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
            <div className="grid grid-cols-2 gap-4 lg:ga-0 justify-center md:grid-cols-4 px-4 lg:px-0 lg:mr-60 text-lightText">
                {sitemap.map((item, i) => (
                    <Sitemap key={i} data={item.sitemapList} socialIcons={socialIcons} />
                ))}
            </div>

            <div className="border my-6"></div>

            <div className="text-titleText mt-16 mb-12 flex justify-evenly w-fit mx-auto lg:ml-0 gap-6">
                {socialIcons.map((item, i) => (
                    <i className={`fa-brands fa-2xl ${item}`}></i>
                ))}
            </div>

            <div className="flex flex-col text-center lg:flex-row lg:justify-evenly w-full lg:w-fit mb-4">
                {legal.map((item, i) => (
                    <>
                        <p className='px-0 lg:first:pr-4 lg:first:pl-0 lg:px-4 hover:underline underline-offset-2 mb-4 lg:mb-0'>{item.p}</p>
                        <p className='hidden lg:inline-block'>{item.verticalBar ? '|' : null}</p>
                    </>
                ))}
            </div>

            <p className="text-lightText my-4 text-center lg:text-left text-sm mb-8">
                © 2022 Starbucks Coffee Company. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer