import React from "react";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-1 md:-m-2 w-full">
          {/* Left Column */}
          <div className="flex flex-wrap w-full md:w-1/2 hover:scale-75 hover:skew-y-3 hover:translate-x-4 transtion duration-500">
            <div className="p-1 md:p-2 w-1/2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669605.jpg?ga=GA1.1.708138110.1743831217&semt=ais_hybrid&w=740"
              />
            </div>
            <div className="p-1 md:p-2 w-1/2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1643123158858-eac2aabaa1ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9pbHMlMjBib3R0ZWxzfGVufDB8fDB8fHww"
              />
            </div>
            <div className="p-1 md:p-2 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://plus.unsplash.com/premium_photo-1725655711554-da8cb3870cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-full md:w-1/2 hover:translate-x-4 hover:scale-75 hover:skew-x-3 transtion duration-500">
            <div className="p-1 md:p-2 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://dummyimage.com/601x361"
              />
            </div>
            <div className="p-1 md:p-2 w-1/2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="p-1 md:p-2 w-1/2">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhZ3N8ZW58MHx8MHx8fDA%3D"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
