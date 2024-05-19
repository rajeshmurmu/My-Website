import React from "react";

export default function MainContainer() {
  return (
    <div>
      {/* <!-- ############################## main-container ##################################### --> */}
      <div className="main-container w-full h-auto bg-slate-400">
        <div id="projects" className="content w-4/5 m-auto">
          <div className="flex justify-center flex-col items-center p-5">
            <div className="project-heading p-5">
              <h1 className="text-5xl font-bold">My Projects</h1>
            </div>
            <div className="project-discription py-5 lg:px-40 text-center">
              <p className="text-base xl:text-xl xl:px-36">
                Here you will find some of the personal projects that I created,
                with each containing its own case study.
              </p>
            </div>
          </div>
          <div className="projects py-5">
            {/* <!-- project1 --> */}
            <div className="grid lg:grid-cols-2 gap-4 xl:my-10 w-full">
              <div className="project-img-container">
                <div className="relative flex justify-center items-center">
                  <img src="/projects/project_1.png" alt="" />
                </div>
              </div>
              <div className="">
                <div className="content-box flex justify-center items-center p-4 flex-col h-full">
                  <div className="content">
                    <h1 className="text-4xl py-2 font-bold">Youtube Clone</h1>
                    <p className="py-2 text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias sunt libero blanditiis culpa nemo esse numquam saepe
                      nisi sapiente? Omnis et numquam aperiam, facere iure velit
                      delectus consequuntur in maxime?
                    </p>
                  </div>
                  <div className="btn py-8 self-start">
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-100 rounded px-6 py-2 text-white font-bold mr-3">
                      Source
                    </button>
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-100 rounded px-6 py-2 text-white font-bold ml-3">
                      <a
                        href="https://youtubebyrajeshson.netlify.app/"
                        target="_blank"
                      >
                        Preview
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- project2 --> */}
            <div className="grid lg:grid-cols-2 gap-4 xl:my-10 w-full">
              <div className="project-img-container">
                <div className="relative flex justify-center items-center">
                  <img src="/projects/project_2.png" alt="" />
                </div>
              </div>
              <div className="">
                <div className="content-box flex justify-center items-center p-4 flex-col h-full">
                  <div className="content">
                    <h1 className="text-4xl py-2 font-bold">Netflix Clone</h1>
                    <p className="py-2 text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias sunt libero blanditiis culpa nemo esse numquam saepe
                      nisi sapiente? Omnis et numquam aperiam, facere iure velit
                      delectus consequuntur in maxime?
                    </p>
                  </div>
                  <div className="btn py-8 self-start">
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-100 rounded px-6 py-2 text-white font-bold mr-3">
                      Source
                    </button>
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-100 rounded px-6 py-2 text-white font-bold ml-3">
                      <a
                        href="https://netflixbyrajeshson.netlify.app/"
                        target="_blank"
                      >
                        Preview
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- project3 --> */}
            <div className="grid lg:grid-cols-2 gap-4 xl:my-10 w-full">
              <div className="project-img-container">
                <div className="relative flex justify-center items-center">
                  <img src="/projects/project_3.png" alt="" />
                </div>
              </div>
              <div className="">
                <div className="content-box flex justify-center items-center p-4 flex-col h-full">
                  <div className="content">
                    <h1 className="text-4xl py-2 font-bold">Nike Clone</h1>
                    <p className="py-2 text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias sunt libero blanditiis culpa nemo esse numquam saepe
                      nisi sapiente? Omnis et numquam aperiam, facere iure velit
                      delectus consequuntur in maxime?
                    </p>
                  </div>
                  <div className="btn py-8 self-start">
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-100 rounded px-6 py-2 text-white font-bold mr-3">
                      Source
                    </button>
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-100 rounded px-6 py-2 text-white font-bold ml-3">
                      <a
                        href="https://nikebyrajeshson.netlify.app/"
                        target="_blank"
                      >
                        Preview
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- project4 --> */}
            <div className="grid lg:grid-cols-2 gap-4 xl:my-10 w-full">
              <div className="project-img-container">
                <div className="relative flex justify-center items-center">
                  <img src="/projects/project_4.png" alt="" />
                </div>
              </div>
              <div className="">
                <div className="content-box flex justify-center items-center p-4 flex-col h-full">
                  <div className="content">
                    <h1 className="text-4xl py-2 font-bold">Photo gallery</h1>
                    <p className="py-2 text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias sunt libero blanditiis culpa nemo esse numquam saepe
                      nisi sapiente? Omnis et numquam aperiam, facere iure velit
                      delectus consequuntur in maxime?
                    </p>
                  </div>
                  <div className="btn py-8 self-start">
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-100 rounded px-6 py-2 text-white font-bold mr-3">
                      Source
                    </button>
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-600 duration-100 rounded px-6 py-2 text-white font-bold ml-3">
                      <a
                        href="https://imagegallery-by-rajeshson.netlify.app/"
                        target="_blank"
                      >
                        Preview
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
