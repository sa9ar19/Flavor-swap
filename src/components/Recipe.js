import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Recipe = () => {
  const location = useLocation();
  const recipe = location.state;

  return (
    <div>
      <div className="font-sans">
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 bg-gray-100 rounded-sm w-full lg:sticky top-0 text-center p-8">
              
            <h2 className="text-2xl font-extrabold text-gray-800">
                {recipe.title}
              </h2>

              <div className="mt-2 mb-6">
                <ul className="space-y-3  mt-4 pl-4 text-sm text-gray-800">
                  <li>
                   {recipe.description}
                   </li>
                </ul>
              </div>
              
              <img
                src={`http://localhost:3000/uploads/`+recipe.image}
                alt="Product"
                className="w-9/12 rounded object-cover mx-auto"
              />

              <hr className="border-white border-2 my-6" />

              
              {/* <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto">
                <img
                  src="https://readymadeui.com/images/coffee6.webp"
                  alt="Product1"
                  className="w-20 cursor-pointer"
                />
                <img
                  src="https://readymadeui.com/images/coffee3.webp"
                  alt="Product2"
                  className="w-20 cursor-pointer"
                />
                <img
                  src="https://readymadeui.com/images/coffee4.webp"
                  alt="Product3"
                  className="w-20 cursor-pointer"
                />
                <img
                  src="https://readymadeui.com/images/coffee5.webp"
                  alt="Product4"
                  className="w-20 cursor-pointer"
                />
              </div> */}

            </div>

            <div className="lg:col-span-2">
              

              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">
                  Time : {recipe.time} mins
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">Ingredients</h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                  {recipe.ingredients}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">
                  Instructions
                </h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                  {recipe.method}
                </ul>
              </div>

              <div className="mt-8 max-w-md">
                <h3 className="text-lg font-bold text-gray-800">Reviews(10)</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">5.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-2/3 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">4.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/3 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">3.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/6 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">2.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-1/12 h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">1.0</p>
                    <svg
                      className="w-5 fill-gray-800 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                      <div className="w-[6%] h-full rounded bg-gray-800"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
