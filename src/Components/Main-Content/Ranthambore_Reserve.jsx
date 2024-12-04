import React from 'react';
import img1 from '../../assets/gallery/todo/Jeep Safari (2).jpg';
import img2 from '../../assets/gallery/todo/Jogi Mehal.jpg';
import img3 from '../../assets/gallery/todo/Kachida Valley.jpg';
import img4 from '../../assets/gallery/todo/malik talao.jpg';
import img5 from '../../assets/gallery/todo/Padam Talao.jpg';
import img6 from '../../assets/gallery/todo/Trinetra Ganesh Temple.jpg';
import img7 from '../../assets/gallery/todo/Raj Bagh Ruins.jpg';
import img8 from '../../assets/gallery/todo/Raj Bagh Talao.jpg';
import img9 from '../../assets/gallery/todo/Ranthambore Fort.jpg';
import Famous_Tiger from './Famous_Tiger';

export default function Ranthambore_Reserve() {

    const Card = [
        {
            id: 1,
            img: img1,
            name: "Safari Experience",


        }
        , {
            id: 2,
            img: img2,
            name: "Jogi Mahal",

        }
        , {
            id: 3,
            img: img3,
            name: "Kachida Valley",

        }
        , {
            id: 4,
            img: img4,
            name: "Malik Talao",

        }
        , {
            id: 5,
            img: img5,
            name: "Padam Talao",

        }
        , {
            id: 6,
            img: img6,
            name: "Trinetra Ganesh Temple",

        }
        , {
            id: 7,
            img: img7,
            name: "Raj Bagh Talao",

        }
        , {
            id: 8,
            img: img8,
            name: "Raj Bagh Ruins",

        }
        , {
            id: 9,
            img: img9,
            name: "Ranthambore Fort",

        }
     
    ]

  return (
    <>
    <div className='bgimagess h-auto w-screen py-10 font-Merriweatherblack'>
    <div>
                  <h1 className='text-center pt-7 font-semibold sm:text-2xl md:text-4xl text-secondrycolor'>Activities in the Tiger Reserve of Ranthambore</h1>
    </div>
              <div className='w-full h-full z-50 mt-10'>
                  <div className="flex items-center justify-center mx-auto flex-wrap gap-y-5 gap-x-6">

                      {
                          Card.map((card, i) => (
                              <div key={i} className='bg-white text-center w-[370px] h-[280px] overflow-hidden rounded-xl shadow-lg'>
                                  <img className="w-full h-[230px] rounded-t-xl object-cover hover:scale-105 duration-200 ease-in-out " src={card.img} />
                                  <div className="w-full h-full pt-2">
                                      <h1 className="text-xl font-bold">{card.name}</h1>
                                  </div>
                              </div>
                          ))
                      }


                  </div>

              </div>
    </div>
    <Famous_Tiger/>
    </>
  )
}
