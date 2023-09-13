import React from "react";
import data from './TwoData.json'

const Two = () => {
  return (
    <>
      <div className="ms-2">
        <nav className="flex justify-between items-center bg-slate-900 pe-2 rounded">
          <div className="w-20 h-20">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/148/84/1004/batman-batman-logo-minimalism-simple-wallpaper-preview.jpg"
              alt="logo"
            />
          </div>
          <div>
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded m-2"
              style={{ width: "100px", height: "45px" }}
            >
              Login
            </button>

            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded"
              style={{ width: "100px", height: "45px" }}
            >
              SignUp
            </button>
          </div>
        </nav>
        <div className="text-2xl font-light flex flex-col items-center">
          <h1> Well show you how easy it is to get your entire team up and running with Trello.</h1>
          <span className="text-rose-900 font-bold">Click on a team below</span>
          <h1> for all of the boards and tools you need to succeed</h1>
        </div>
        <div className="grid grid-cols-3 gap-y-8 gap-2">
          {data.map((val, index) => (
            <div
              key={index}
              className="bg-white p-4 w-auto rounded-lg shadow-md flex flex-col h-auto"
             
            >
              <div>
                <img
                  src={val.img}
                  alt={val.name}
                  className="w-full h-48 object-cover rounded-t-lg" // Set a fixed height for the image
                />
                <h1 className="text-center text-lg font-semibold mt-4 bg-yellow-400">{val.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Two;
