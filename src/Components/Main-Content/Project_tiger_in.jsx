import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './About_Ranthambore.css';
// import required modules
import { EffectCoverflow } from 'swiper/modules';
import image1 from '../../assets/gallery/gallery/1.jpg';
import image2 from '../../assets/gallery/gallery/2.jpg';
import image3 from '../../assets/gallery/gallery/3.jpg';
import image4 from '../../assets/gallery/gallery/4.jpg';
import image5 from '../../assets/gallery/gallery/5.jpg';
// import image6 from '../../assets/gallery/gallery/6.jpg';
import image7 from '../../assets/gallery/gallery/7.jpg';
import image8 from '../../assets/gallery/gallery/8.jpg';
import image9 from '../../assets/gallery/gallery/bear.jpg';
import image10 from '../../assets/gallery/gallery/gilheri.jpg';
import image11 from '../../assets/gallery/gallery/rabit.jpg';
import image12 from '../../assets/gallery/gallery/9.jpg';
import image13 from '../../assets/gallery/gallery/10.jpg';
import image14 from '../../assets/gallery/gallery/11.jpg';
import Ranthambore_Reserve from './Ranthambore_Reserve';


export default function Project_tiger_in() {
        return (
                <>
                        <div className='w-full h-auto'>
                                <h1 className='text-center my-7 text-3xl text-primercolor font-bold'> Our Gallery </h1>
              

                                <div className='swiperimagess w-full h-full py-10'>

                                        <Swiper
                                                effect={'coverflow'}
                                                grabCursor={true}
                                                centeredSlides={true}
                                                slidesPerView={4}


                                                coverflowEffect={{
                                                        rotate: 50,
                                                        stretch: 0,
                                                        depth: 50,
                                                        modifier: 1,
                                                        slideShadows: true,

                                                }}

                                                breakpoints={{
                                                        320: {
                                                                slidesPerView: 2,
                                                                spaceBetween: 1,
                                                        },
                                                        768: {
                                                                slidesPerView: 4,
                                                                spaceBetween: 40,
                                                        },
                                                        1024: {
                                                                slidesPerView: 5,
                                                                spaceBetween: 50,
                                                        },
                                                }}

                                                //   pagination={true}
                                                modules={[EffectCoverflow]}
                                                className="mySwiper"
                                        >
                                                <SwiperSlide>
                                                        <img src={image12} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image13} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image14} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image1} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image2} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image3} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image4} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image5} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                        <img src={image7} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image8} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image9} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image10} />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                        <img src={image11} />
                                                </SwiperSlide>
                                        </Swiper>
                                </div>
                        </div>
                        <Ranthambore_Reserve />
                </>
        )
}
