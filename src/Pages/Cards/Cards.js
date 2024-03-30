import React from 'react';

const Cards = (props) => {
    const{title,img}= props.card
    return (
        <div className='w-[270px] h-[320px] relative  '>
            <div className='' >
            <img className='' src={img} alt="" />
            </div>
            <div className=' absolute bottom-0  h-[80px] w-full rounded-b-lg bg-red-700 flex justify-center items-center text-white '>
            <h1 className='font-semibold text-xl'>{title}</h1>
            </div>
        </div>
    );
};

export default Cards;