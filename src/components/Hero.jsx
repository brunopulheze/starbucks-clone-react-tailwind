import React from 'react';
import Button from './Button';

const Hero = (props) => {
    const { data } = props;
    return (
        <div>
            {data.map((item, i) => (
                <div key={i} className={`w-full flex flex-col mt-8 ${item.text} ${item.flexDirection} ${item.bgColor}`}>
                    <div className="flex-none md:w-6/12 relative">
                        <div className={`absolute z-10 w-full h-full bg-contain bg-no-repeat lg:bg-center ${item.bgSize}`} style={{ backgroundImage: `url(${item.img})` }}></div>
                    </div>
                    <img src={item.img} className="lg:hidden" />
                    <div className='flex justify-center lg:w-6/12'>
                        <div className={`w-full p-10 text-center ${item.padding}`}>
                            <p className={`${item.titleTextSize} font-black mb-4`}>{item.title}</p>
                            <p className={`text-[24px] ${item.marginBottom}`}>
                                {item.p}
                            </p>
                            <Button borderColor={item.borderColor} hover={item.hover}>
                                {item.btn}
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Hero