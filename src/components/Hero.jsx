import React from 'react';
import Button from './Button';

const Hero = (props) => {
    const { data } = props;
    return (
        <div>
            {data.map((item, i) => (
                <div key={i} className={`flex flex-col bg-starGreen mt-8 ${item.text, item.flexDirection}`}>
                    <div className="flex-none md:w-6/12 relative">
                        <div className="absolute w-full h-full bg-contain lg:bg-cover lg:bg-center" style={{ backgroundImage: `url(${item.img})` }}></div>
                    </div>
                    <img src={item.img} className="lg:hidden" />
                    <div>
                        <div className="p-10 sm:p-24  text-center">
                            <p className="text-[50px] font-bold">{item.title}</p>
                            <p className="text-[24px]">
                                {item.p}
                            </p>
                            <Button text={item.btn} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Hero