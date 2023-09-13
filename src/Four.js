import React from 'react';
import data from './BitMoji.json';

const Four = () => {
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
     <div className='grid grid-rows-2 grid-cols-4'>
     {data.map((item, index) => (
        <div style={{ width: '282px' }} className='pt-5 ' key={index}>
          <div className='relative'>
            <div
              className='flex flex-col justify-between'
              style={{
                width: '270px',
                height: '360px',
              }}
            >
              <i
                style={{ top: '-10px' }}
                className="fa-solid fa-circle-plus absolute right-0 top-0 text-2xl"
              ></i>
              <div className='bg-green-100' style={{ height: '100px', background: randomColor() }}>
                <div
                  className='w-24 h-24 absolute left-20 top-14'
                  style={{
                    borderRadius: '50%',
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                  }}
                ></div>
              </div>
              <p className='mt-10 text-center'>
                Sorry to interrupt, but it will soon be too late to help us in this short fundraiser. This Saturday, 9 September
              </p>
              <div className='text-center'>
                <i className="fa-brands fa-linkedin text-3xl mr-5"></i>
                <i className="fa-brands fa-facebook text-3xl mr-5"></i>
                <i className="fa-brands fa-square-twitter text-3xl mr-5"></i>
                <i className="fa-brands fa-behance text-3xl mr-5"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
     </div>
    </>
  );
};

export default Four;
