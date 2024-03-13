'use client'
import React from "react";
import { PhotocardArr } from "../Data/data";
import Image from "next/image";

const PhotoCard = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === PhotocardArr.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? PhotocardArr.length - 1 : prevIndex - 1
      );
    };
  return (
    <div className="relative grid grid-cols-1 ml-0 p-2 md:grid-cols-2 lg:grid-cols-4 ml-4">
     <div className='flex transition-transform duration-500 transform-gpu' style={{ width: `${PhotocardArr.length * 100}%`, marginLeft: `-${currentIndex * 100}%` }}>
      {PhotocardArr.map((photocard, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center p-2 pt-8 transition-transform duration-500 transform-gpu group"
        >
          <div className="overflow-none">
            <div className={"front flex items-center justify-center overflow-none"}>
              <Image
                src={photocard.imageUrl}
                alt=""
                width={400}
                height={400}
                className="max-h-full max-w-full h-[600px] w-[600px] md:h-[500px] w-[500px] xl:h-[400px] w-[800px] p-2"
              />
            </div>
            <div>
              <h2 className="text-center py-4 text-black font-bold lg:py-6">
                {photocard.name}
              </h2>
            </div>
          </div>

          <div className="absolute top-[-20px] left-0  w-full h-full mx-0 flex items-center justify-center transform rotate-y-180 opacity-0 transition-opacity duration-500 group-hover:opacity-100 xl:top[-24px]">
            <div
              className="mx-4 bg-deepGreen h-[600px] w-[600px] mt-0 rounded-md transform rotate-y-180 
        opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:h-[500px] w-[500px] lg:h-[400px] w-[500px] mt-[-14px]"
            >
              <h2 className="m-[3%] text-white text-xl text-center pt-8 lg:m-[2%] ">
                My Story
              </h2>
              <p className="p-8 text-white text-[20px] text-justify md:text-[14px] lg:p-2 text-center  xl:[12px]">
                {photocard.description}
              </p>
            </div>
          </div>
        </div>
        
      ))}
      </div>
       <button className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center lg:hidden" onClick={prevSlide}>{'<'}</button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center lg:hidden" onClick={nextSlide}>{'>'}</button>
    </div>
  );
};

export default PhotoCard;




// 'use client'
// import React from 'react';
// import { PhotocardArr } from '../Data/data';
// import Image from 'next/image';

// const PhotoCard = () => {
//   const [currentIndex, setCurrentIndex] = React.useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === PhotocardArr.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? PhotocardArr.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//       <div className="flex transition-transform duration-500 transform-gpu" style={{ width: `${PhotocardArr.length * 100}%`, marginLeft: `-${currentIndex * 100}%` }}>
//         {PhotocardArr.map((photocard, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center items-center p-4 pt-8 w-full relative"
//           >
//             <div>
//               <div className="front relative flex items-center justify-center transition-transform transform-gpu backface-hidden">
//                 <Image
//                   src={photocard.imageUrl}
//                   alt=""
//                   width={400}
//                   height={400}
//                   className="max-w-full max-h-full h-[500px] w-[400px] lg:h-[350px] w-[400px]"
//                 />
//               </div>
//               <div className="back absolute top-[-5px] left-10px h-full w-full] mx-4 bg-deepGreen rounded-md transform-gpu transition-transform opacity-0 hover:opacity-100 flex flex-col items-center justify-center lg:h-[400px] w-[320px]">
//                 <div className='text-justify'>
//                 <h2 className="text-center text-white text-xl pb-2 font-bold lg:text-xl">My Story</h2>
//                 <p className="text-white text-lg px-4 lg:text-sm">{photocard.description}</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h2 className="py-4 text-black font-bold lg:py-6">{photocard.name}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center lg:hidden" onClick={prevSlide}>{'<'}</button>
//       <button className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center lg:hidden" onClick={nextSlide}>{'>'}</button>
//     </div>
//   );
// };

// export default PhotoCard;
