import React from 'react';
import image1 from '../../../assets/gallery/gallery/Sunehri Kothi.jpg'
import image2 from '../../../assets/gallery/gallery/Garh Palace.jpg'
import image3 from '../../../assets/gallery/gallery/Chand Baori.jpg'
import image4 from '../../../assets/gallery/gallery/Mehandipur Balaji Temple.jpg'
import image5 from '../../../assets/gallery/gallery/Amer Fort.jpg'
import image6 from '../../../assets/gallery/gallery/Adhai din ka jhonpra.jpg'

export default function NearByAttraction() {
  return (
    <>
      <div className='p-5'>
        <h1 className='text-center sm:text-xl text-3xl font-bold text-secondrycolor pt-5'>Attractions Close to the National Park Ranthambore</h1>

        <div className='w-full h-auto my-10 sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 border rounded-md border-black'>
          <div>
            <img src={image1} alt='sundri kothi' />
          </div>
          <div className='rounded-md p-5 text-justify' >
            <h1 className='text-2xl py-2 font-bold '>1. Sunehri Kothi, Tonk :</h1>
            <p className='text-md font-semibold'>The distance between this stunning palace and the wild park is approximately 87.3 km. Being the Mansion of Gold, this location attracts a lot of visitors. This lovely mansion has elaborate artwork made out of diamonds and glasses, as well as polished gold interior decor. It draws a lot of tourists each year because of its attractive architecture. Its magnificent look attracts people. You may mistakenly believe that this is an ancient, ordinary haveli if you visit and only view the exterior; yet, the interior is lavishly adorned. This haveli's interior demonstrates the Persian and Rajput building styles used here.
            </p>
          </div>

        </div>

        <div className='w-full h-auto my-10 sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 border rounded-md border-black'>
          
          <div className='rounded-md p-5 text-justify' >
            <h1 className='text-2xl py-2 font-bold '>2. Garh Palace, Bundi :</h1>
            <p className='text-md font-semibold'>Due to its lack of Mughal architectural influence, this location in Bundi is well-known. This location, some 145 kilometers from the park, was formerly the royal family of Bundi's home. Vibrant paintings that portray the royal ancestors' lifestyles may be seen on the palace walls. The architectural wonders of Rajasthan are evident everywhere, like the Chhatris, Hathi Pol, and netted walls constructed of sandstone.
            </p>
          </div>
          <div>
            <img src={image2} alt='sundri kothi' />
          </div>

        </div>

        <div className='w-full h-auto my-10 sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 border rounded-md border-black'>
          <div>
            <img src={image3} alt='sundri kothi' />
          </div>
          <div className='rounded-md p-5 text-justify' >
            <h1 className='text-2xl py-2 font-bold '>3. Chand Baori Stepwell, Dausa:</h1>
            <p className='text-md font-semibold'>This stepwell is approximately 162 kilometers long and is a picturesque one. It’s a historic place as the stepwell was erected thousands of years ago and is perhaps the oldest stepwell in India. This 13-story stepwell features triangle stairs built symmetrically. People can reach the bottom and return in the same manner by following those steps. The stairs are precisely constructed and have a diamond-like appearance. They are built on three sides of the well. You may get the impression that this place is naturally cooler if you visit in the summer.</p>
          </div>

        </div>

        <div className='w-full h-auto my-10 sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 border rounded-md border-black'>

          <div className='rounded-md p-5 text-justify' >
            <h1 className='text-2xl py-2 font-bold '>4. Mehandipur Balaji Temple, Karauli:</h1>
            <p className='text-md font-semibold'>This temple, which is around 176 kilometers from the park, is well-known among Hindus. This is a well-known pilgrimage place located in Rajasthan's Dausa district. The temple's presiding deity is thought to possess some strong energies. Hindus think that this is where those afflicted by evil spirits or under the influence of black magic can find healing. It is their belief that those individuals can find relief here.
            </p>
          </div>
          <div>
            <img src={image4} alt='sundri kothi' />
          </div>

        </div>

        <div className='w-full h-auto my-10 sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 border rounded-md border-black'>
          <div>
            <img src={image5} alt='sundri kothi' />
          </div>
          <div className='rounded-md p-5 text-justify' >
            <h1 className='text-2xl py-2 font-bold '>5. Amer Fort, Jaipur:</h1>
            <p className='text-md font-semibold'>Situated approximately 145 km away from the Ranthambore National Park, this fort is among the top tourist destinations in Rajasthan. From the top of the fort, visitors may enjoy a breathtaking view of the entire pink city in addition to shopping for a variety of goods. Perched on a hill, this fort is a vast palace complex constructed of white marble and light yellow and pink sandstone. The Suraj Pol and the Chand Pol are the two separate access gates to this fort.
</p>
          </div>

        </div>

        <div className='w-full h-auto my-10 sm:grid sm:grid-cols-1 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 border rounded-md border-black'>

          <div className='rounded-md p-5 text-justify' >
            <h1 className='text-2xl py-2 font-bold '>6. Adhai Din ka Jhonpra, Ajmer:</h1>
            <p className='text-md font-semibold'>Located about 247 kilometers from the park, this is a well-known location. This one is a wrecked one yet it is noteworthy because it stands as a witness to the brutality of the Mughals. Prior to the construction of Adhai Din ka Jhonpra, this location was home to a Saraswati temple and a Sanskrit college. According to certain archives, Seth Viramdev Kala constructed the square-shaped structure for the Jain pilgrimage; however, a mosque was built in its place following Muhammad Ghori's invasion of the area, which also demolished the preexisting temple and college.
              People refer to this place as Adhai Din ka Jhonpra since it was built in just two and a half days. The oldest mosque in India is this one, and it is undoubtedly one
            </p>
          </div>
          <div>
            <img src={image6} alt='sundri kothi' />
          </div>

        </div>


      </div>
    </>
  )
}
