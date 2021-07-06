import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out all the amazing car wash options!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className="cards__items">
                 <CardItem 
                 src="images/img-2.jpg"
                 text="Experience the best car wash service"
                 label="Car Wash"
                 path='/servicelist'
                 />

                <CardItem 
                 src="images/img-1.jpg"
                 text="Get your car wash at your own convenience"
                 label="Premium Car Wash"
                 path='/servicelist'
                 />

           <CardItem 
                 src="images/img-4.png"
                 text="Customize Add ons for your car"
                 label="Add ons"
                 path='/servicelist'
                 />


                </ul> 
                <ul className="cards__items">
                 <CardItem 
                 src="images/img-5.jpg"
                 text="Deep Cleaning Wash for your Car"
                 label="Deep Cleaning of Car"
                 path='/servicelist'
                 />

                <CardItem 
                 src="images/img-8.jpg"
                 text="Regular Outer Wash for your car"
                 label="Outer Wash"
                 path='/servicelist'
                 />

               <CardItem 
                 src="images/img-6.jpg"
                 text="Sanitization for your entire car "
                 label="Santization"
                 path='/servicelist'
                 />


                </ul> 
        </div>
      </div>
    </div>
  );
}

export default Cards;
