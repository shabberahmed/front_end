import React from "react";

const One = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-0 xl:grid xl:grid-cols-4 xl:grid-rows-1">
      <div className="main relative xl:col-span-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/899/311/large_2x/teacher-portrait-photo.jpg"
          alt="Your Image"
          className="w-full"
        />
        <div
          className="absolute bg-opacity-50 bg-gray-900 w-full h-full top-0 left-0"
        >
          <div className="text-5xl text-neutral-100 absolute bottom-60 left-20">
            GROUPON
          </div>
          <div className="text-4xl text-neutral-100 absolute bottom-40 left-20">
            Groupon prototypes, iterates, and innovates faster with Webflow
          </div>
          <div>
            <div className="text-neutral-100 text-xl absolute bottom-20 left-20">
              read more <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd main */}
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-0 xl:grid xl:col-span-2">
        {/* 1st div */}
        <div className="image-container relative p-0 m-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9d0CfZ_eexCcCHUVrVpWR7ME21GwPKpYszhKqFwVic2c3RRQUAVViYo4W5zm4iExUhPo&usqp=CAU"
            alt="Your Image"
            className="w-full"
          />
          <div className="color-overlay absolute top-0 left-0 w-full h-full bg-opacity-50 bg-green-600">
            <h1 className="text-3xl text-white absolute top-20 left-8 font-mono">
              Digital Agencies
            </h1>
            <p className="text-white absolute bottom-20 left-3 font-bold">
              Salt uses Webflow to build fresh solutions for their clients
            </p>
          </div>
          <div className="text-neutral-100 absolute bottom-2 right-4 font-bold">
            read more <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
          </div>
        </div>

        {/* 2nd div */}
        <div className="image-container relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtwROsPzG-xrUE7LwpWRid0BRcVt5kGPD-QE7yjYck4ADR7R4Tz9AyeP3uxxjbo5MMzU&usqp=CAU"
            alt="Your Image"
            className="w-full"
          />
          <div className="color-overlay absolute top-0 left-0 w-full h-full bg-opacity-50 bg-red-500">
            <h1 className="text-3xl text-white absolute top-20 left-8 font-mono">
              Freelancers
            </h1>
            <p className="text-white absolute bottom-20 left-3 font-bold">
              Web designers build businesses with Webflow
            </p>
          </div>
          <div className="text-neutral-100 absolute bottom-2 right-4 font-bold">
            read more <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
          </div>
        </div>

        {/* 3rd div */}
        <div className="image-container relative">
          <img
            src="https://media.istockphoto.com/id/1226700383/photo/business-start-up-start-new-project-or-new-idea-concept-wooden-blocks-with-launching-rocket.jpg?s=612x612&w=0&k=20&c=mFZNviz-42OJ-Q7FVkmEtG9L6KEw1RjbV1MgCWV9egY="
            alt="Your Image"
            className="w-full"
          />
          <div className="color-overlay absolute top-0 left-0 w-full h-full bg-opacity-50 bg-blue-300">
            <h1 className="text-3xl text-white absolute top-20 left-8 font-mono">
              Startups
            </h1>
            <p className="text-white absolute bottom-20 left-3 font-bold">
              New Story used Webflow to launch their startup in 3 weeks
            </p>
          </div>
          <div className="text-neutral-100 absolute bottom-2 right-4 font-bold">
            read more <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
          </div>
        </div>

        {/* 4th div */}
        <div className="image-container relative">
          <img
            src="https://media.istockphoto.com/id/1344903849/photo/paper-people-chain-with-hearts-teamwork-and-love-concept.jpg?s=612x612&w=0&k=20&c=GOdcg8KptYmQa6ETVrHBZe0c8aIrxv5Vv_zl3aZ8fr4="
            alt="Your Image"
            className="w-full"
          />
          <div className="color-overlay absolute top-0 left-0 w-full h-full bg-opacity-50 bg-indigo-500">
            <h1 className="text-3xl text-white absolute top-20 left-8 font-mono">
              Nonprofits
            </h1>
            <p className="text-white absolute bottom-20 left-3 font-bold">
              Possible makes an impact with the help of Webflow
            </p>
          </div>
          <div className="text-neutral-100 absolute bottom-2 right-4 font-bold">
            read more <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
