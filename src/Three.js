import React, { useState } from "react";

function MyInput() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputOpacity = isFocused ? 1 : 0.6;

  return (
    <input
      type="text"
      style={{
        width: "800px",
        opacity: inputOpacity,
      }}
      placeholder="&#128269;     Search"
      className="mt-1 m-3 block px-3 p-3 bg-orange-100 border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

function Three() {
  return (
    <>
      <div className="">
        <div className="relative">
          <nav className="fixed top-0 w-full ">
            <div className="flex flex-row bg-orange-700 pt-2 pe-10">
              <i class="fa-solid fa-bars text-3xl text-white ms-3 mt-2"></i>
              <div className="w-10 h-10 ms-10 mt-1">
                <img
                  src="https://icon-library.com/images/sign-in-with-google-icon/sign-in-with-google-icon-16.jpg"
                  alt=""
                />
              </div>
              <span
                className="text-neutral-100 w-10 mb-3"
                style={{ transform: "rotate(90deg)" }}
              >
                <hr />
              </span>
              <h1 className="text-2xl mt-2 ms-4 text-rose-100 font-extralight">
                Home
              </h1>

              {/* Insert the MyInput component here */}
              <MyInput />

              <div className="flex mt-1 ms-3 mt-2">
                <i class="fa-sharp fa-solid fa-grip-vertical text-3xl text-white"></i>
                <i
                  class="fa-sharp fa-solid fa-grip-vertical text-3xl text-white"
                  style={{ marginLeft: "-8.5px" }}
                ></i>
              </div>
              <div
                className="bg-white w-8 h-8 ms-6 mt-2 flex items-center justify-center"
                style={{ borderRadius: "50%" }}
              >
                <i className="fa-solid fa-bell text-black"></i>
              </div>
              <div
                className="w-10 h-10 ms-10 mt-1"
                style={{
                  backgroundImage:
                    'url("https://img.freepik.com/free-vector/botanical-capital-letter_53876-111467.jpg?w=2000")',
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
          </nav>
        </div>
        {/* nav end */}
        {/* second session */}

        <div className="mt-12">
          <div className="flex bg-gray-200">
            {/* side menu */}
            <div
              
              className="bg-gray-200 p-4 rounded-lg space-y-4 w-56"
            >
              <div className="p-2 flex items-center">
                <i className="fa-solid fa-house text-xl"></i>
                <span className="text-xl ms-4">Home</span>
              </div>
              <div className="p-2 flex items-center">
                <i className="fa-solid fa-table-cells-large text-xl"></i>
                <span className="text-xl ms-4">Collections</span>
              </div>
              <div className="p-2 flex items-center">
                <i className="fa-solid fa-tty text-xl"></i>
                <span className="text-xl ms-4">Communities</span>
              </div>
              <div className="p-2 flex items-center">
                <i className="fa-solid fa-user text-xl"></i>
                <span className="text-xl ms-4">Profile</span>
              </div>
              <div className="p-2 flex items-center">
                <i className="fa-solid fa-user-group text-xl"></i>
                <span className="text-xl ms-4">People</span>
              </div>
              <div className="p-2 flex items-center">
                <i className="fa-solid fa-bell text-xl"></i>
                <span className="text-xl ms-4">Notification</span>
              </div>
              <hr style={{ borderTop: ".5px solid black", height: "1px" }} />

              <div className="p-2 flex items-center">
                <i className="fa-solid fa-gear text-xl"></i>
                <span className="text-xl ms-4">Settings</span>
              </div>
              <div className="p-2 flex items-center">
                <i className="fa-solid fa-comment-dots text-xl"></i>
                <span className="text-xl ms-4">Send Feedback</span>
              </div>
              <div className="p-2 flex items-center">
                <i className="fa-solid fa-handshake text-xl"></i>
                <span className="text-xl ms-4">Help</span>
              </div>
              <div></div>
            </div>
            {/* 3rd part */}
            <div>
              {/* 1st */}
              {/* input main */}
              <div className=" mx-auto mt-8">
                <div className="flex justify-between items-center bg-white rounded-lg px-3 py-2">
                  <div>
                    <img
                      src="https://img.freepik.com/free-vector/botanical-capital-letter_53876-111467.jpg?w=2000"
                      alt="Image"
                      className="w-20 h-20"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Type something here"
                    className="w-full px-5 py-5 mb-4"
                  />

                  <label htmlFor="fileInput" className="cursor-pointer">
                    <i class="fa-solid fa-camera text-3xl"></i>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                
                  />
                </div>
              </div>
              {/* input main end */}
              <div
                className="bg-white shadow-lg p-3 mt-10"
               
              >
                <h1 className="ms-12">
                  Mike Farris{" "}
                  <span className="text-green-600">
                    <i class="fa-solid fa-caret-right"></i> Entrepreneurs and
                    Startups
                  </span>
                </h1>
                <p className="">
                  From the Desk of Mike Farris... Helping People Who Want To
                  Help Themselves... Things My Mother Taught Me...
                  http://lnkd.in/eNMacpopp
                </p>
                <div className="mt-4 flex item-center ">
                  <div
                    className="text-md bg-blue-100 flex items-center justify-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "",
                      borderRadius: "50%",
                    }}
                  >
                    +1
                  </div>
                  <div className="flex-grow"></div>
                  <div className="flex">
                    <div
                      className="text-md bg-blue-100 flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-message"></i>
                    </div>
                    <div
                      className="text-xl bg-blue-100 ms-4 flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white shadow-lg p-3 mt-10"
               
              >
                <h1 className="ms-12">
                  Mike Farris{" "}
                  <span className="text-green-600">
                    <i class="fa-solid fa-caret-right"></i> Entrepreneurs and
                    Startups
                  </span>
                </h1>
                <p className="">
                  From the Desk of Mike Farris... Helping People Who Want To
                  Help Themselves... Things My Mother Taught Me...
                  http://lnkd.in/eNMacp xx
                </p>
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div className="mt-4 flex item-center ">
                  <div
                    className="text-md bg-blue-100 flex items-center justify-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "",
                      borderRadius: "50%",
                    }}
                  >
                    +1
                  </div>
                  <div className="flex-grow"></div>
                  <div className="flex">
                    <div
                      className="text-md bg-blue-100 flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-message"></i>
                    </div>
                    <div
                      className="text-xl bg-blue-100 ms-4 flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 1st end */}

            {/* 2nd */}
            <div className="ms-5">
              <div
                className="bg-white shadow-lg p-3 mt-10"
               
              >
                <h1 className="ms-12">
                  Mike Farris{" "}
                  <span className="text-green-600">
                    <i class="fa-solid fa-caret-right"></i> Entrepreneurs and
                    Startups
                  </span>
                </h1>
                <p className="">
                  From the Desk of Mike Farris... Helping People Who Want To
                  Help Themselves... Things My Mother Taught Me...
                  http://lnkd.in/eNMacp
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5YNrNp4AM0Sp0KbtFVoBWa-lAfm7T1Kovxil69KRPEM6x9G1FwMX_XiCWij5-t7NWNI&usqp=CAU"
                  alt=""
                />
                <div className="mt-4 flex item-center ">
                  <div
                    className="text-md bg-blue-100 flex items-center justify-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "",
                      borderRadius: "50%",
                    }}
                  >
                    +1
                  </div>
                  <div className="flex-grow"></div>
                  <div className="flex">
                    <div
                      className="text-md bg-blue-100 flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-message"></i>
                    </div>
                    <div
                      className="text-xl bg-blue-100 ms-4 flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div
                className="bg-white shadow-lg p-3 mt-10"
              >
                <h1 className="ms-12">
                  Mike Farris
                  <span className="text-green-600">
                    <i class="fa-solid fa-caret-right"></i> Entrepreneurs and
                    Startups
                  </span>
                </h1>
                <p className="">
                  From the Desk of Mike Farris... Helping People Who Want To
                  Help Themselves... Things My Mother Taught Me...
                  http://lnkd.in/eNMacp
                </p>
                <div className="mt-4 flex item-center ">
                  <div
                    className="text-md bg-blue-100 flex items-center justify-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "",
                      borderRadius: "50%",
                    }}
                  >
                    +1
                  </div>
                  <div className="flex-grow"></div>
                  <div className="flex">
                    <div
                      className="text-md bg-blue-100 flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-message"></i>
                    </div>
                    <div
                      className="text-xl bg-blue-100 ms-4 flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                        background: "",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* heelo */}
          </div>
        </div>
        {/* side menu */}
      </div>
    </>
  );
}

export default Three;
