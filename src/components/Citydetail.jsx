import React from "react";

const Citydetail = (props) => {
    const details=props;
    const temprature=Math.round(details.citydetail.main.temp-273);
    const date=new Date();
    console.log(props)
  return (
    <div>
      <div class=" flex mt-20 justify-center ">
        <div class={`flex  flex-col bg-white ${details.citydetail.weather[0].main} p-5 w-full max-w-xs rounded-lg shadow-2xl`}>
          <div class="font-bold text-xl">{props.citydetail.name}</div>
          <div class="text-sm text-gray-500"> {date.getDate()}-{date.getMonth()}-{date.getFullYear()}</div>
          <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <img src= {`../../public/img/${details.citydetail.weather[0].main}.png`} alt="" class="p-1" />
          </div>
          <div class="flex flex-row items-center justify-center mt-6">
            <div class="font-medium text-6xl">{temprature}°</div>
            <div class="flex flex-col items-center ml-6">
              <div>{details.citydetail.weather[0].main}</div>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-6">
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Wind</div>
              <div class="text-sm text-gray-500">{details.citydetail.wind.speed}</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Humidity</div>
              <div class="text-sm text-gray-500">{details.citydetail.main.humidity}%</div>
            </div>
            <div class="flex flex-col items-center">
              <div class="font-medium text-sm">Visibility</div>
              <div class="text-sm text-gray-500">{details.citydetail.visibility}m</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citydetail;
