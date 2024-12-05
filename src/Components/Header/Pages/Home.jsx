import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Pages/styles.css';
import { Autoplay} from 'swiper/modules';
import img1 from '../../../assets/gallery/slidersimg/tiger1.webp';
import img2 from '../../../assets/gallery/slidersimg/tiger2.webp';
import img3 from '../../../assets/gallery/slidersimg/tiger3.webp';
import img4 from '../../../assets/gallery/slidersimg/tiger4.webp';
import img5 from '../../../assets/gallery/slidersimg/tiger5.webp';
import img6 from '../../../assets/gallery/slidersimg/tiger6.webp';
import Our_Services from '../../Main-Content/Our_Services';
// import videos from '../../../assets/gallery/gallery/Tiger walking reference.mp4'

export default function Home() {
  const data = [
    {
      "id": 1,
      "image": img2
    },
    {
      "id": 2,
      "image": img1
    },
    {
      "id": 3,
      "image": img3
    },
    {
      "id": 4,
      "image": img4
    },
    {
      "id": 5,
      "image": img5
    },
    {
      "id": 6,
      "image": img6
    }

  ]
  return (
    <>
      <div className='w-full h-auto overflow-auto overflow-x-hidden'>
        <div className=' -mt-14'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Autoplay]}
              className="mySwiper rounded-xl"
            >
              {
                data.map((data, i) => (
                  <SwiperSlide key={i} className=''>
                    <img className='w-screen  h-screen' src={data.image} alt="image" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <Our_Services />
        </div>
      </div>
    </>
  )
}
