import React from "react";

const Citydetail = () => {
  return (
    <div>
      <div class=" flex mt-20 justify-center ">
        <div class="flex flex-col bg-white  p-5 w-full max-w-xs rounded-lg shadow-2xl">
          <div class="font-bold text-xl">Sydney</div>
          <div class="text-sm text-gray-500">Thursday 10 May 2020</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img src="./img/clear.png" alt="" class="p-1" />
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">24°</div>
            <div class="flex flex-col items-center ml-6">
              <div>Cloudy</div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm text-gray-500">9k/h</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm text-gray-500">68%</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm text-gray-500">10km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citydetail;
