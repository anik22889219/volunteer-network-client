import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Home = () => {
    const [cards,setCards] =useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 gap-2 justify-items-center mt-7'>
            {
                cards.map(card=><Cards key={card.id}
                card={card}></Cards>)
            }
        </div>
    );
};

export default Home;