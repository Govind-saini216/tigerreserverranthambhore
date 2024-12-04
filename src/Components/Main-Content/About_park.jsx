import React from 'react';
import './About_Ranthambore.css';
import tigerpng from '../../assets/gallery/gallery/pngegg.png'
// import tigerpng from '../../assets/gallery/todo/tiger3.png'
import Project_tiger_in from './Project_tiger_in';

export default function About_park() {
    return (
        <>
        <div>
            <div className='w-screen sm:h-[183vh] md:h-auto py-4 imgaeee'>

                <div className='pt-10'>
                    <h1 className='text-center text-3xl text-red-700 font-semibold'>About Park</h1>
                    <h3 className=' text-center sm:text-base md:text-2xl text-red-700 font-semibold'>Ranthambore National Park</h3>
                </div>

                <div className=' w-[100vw] h-[100vh] my-16 grid sm:grid-cols-1 md:grid-cols-2 grid-rows-1'>
                    <div className='sm:w-screen md:w-[50vw] h-full bg-cover'>
                        <img className='w-full h-full' src={tigerpng} alt='tiger.jpg' />
                    </div>
                    <div className='sm:w-screen md:w-[50vw]  h-[50vh] space-y-5'>
                        <div className='w-[90%] h-full  mx-auto rounded-2xl border border-t-0 border-l-black border-b-black border-r-black ' >
                            <p className='text-justify sm:p-3 md:p-5 sm:text-base md:text-xs lg:text-base overflow-hidden'>
                                    Because of its large population of Bengal Tigers, Rajasthan's Ranthambore National Park is a popular tourist destination. Visitors flock to here, one of Northern India's largest and oldest national parks, to observe a variety of flora and fauna. Having been created in 1980, this wild park spans a massive 1,334 square kilometers. Because of the Ranthambore Fort, which is situated inside this lovely park, the park was given the name Ranthambore. Bengal Tigers are abundant in this park and are plainly seen from a distance.
                            </p>
                        </div>
                        <div className='w-[90%] h-full mx-auto sm:p-3 md:p-5 rounded-2xl border border-t-0 border-l-black border-b-black border-r-black ' >
                            <p className='text-justify md:p-5 sm:text-base md:text-xs lg:text-base overflow-hidden'>
                                    Due to the greater likelihood of tiger sightings in this park when compared to other parks, a large number of people visit it. In addition to tigers, other animals that call this park home include leopards, sloth bears, hyenas, wild boars, sambar deer, and chital. Due to the nearly 300 kinds of resident and migratory birds that call this vast park home, birdwatchers can also visit it for birdwatching. Kingfisher, Painted Spurfowl, Sarus Crane, big Cormorant, Bronze-winged Jacana, Sandpiper, Nightjar, Great Horned Owl, Painted Sandgrouse, and many more common species can be seen in this lovely park.
                            </p>
                        </div>

                    </div>                     
                </div>


            </div>
            </div>
        <Project_tiger_in/>
        </>
    )
}
