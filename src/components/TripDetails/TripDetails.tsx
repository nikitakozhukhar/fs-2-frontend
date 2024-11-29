const TripDetails = () => {
  return (
    <div className="flex flex-col w-[360px] bg-[#3E3C41] ">
      <div className="px-5 py-7 text-3xl text-center text-gray-50 uppercase">
        Детали поездки
      </div>
      <span className="w-[360px] h-[1px] bg-white"></span>
      <div className="flex flex-col justify-start px-5 py-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="">
              <svg
                width="32"
                height="26"
                viewBox="0 0 76 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 0C2.23877 0 0 2.23859 0 5V55C0 57.7614 2.23877 60 5 60H71C73.7612 60 76 57.7614 76 55V5C76 2.23859 73.7612 0 71 0H5ZM42.3628 32.8239V40C45.9434 36.6445 49.5586 33.2558 53 30.0664C49.5239 26.7774 45.9434 23.3887 42.3281 20V27.5747H23V32.8239H42.3628Z"
                  fill="#FFA800"
                />
              </svg>
            </div>
            <div className="text-gray-50 text-2xl">Туда</div>
            <div className="self-end">30.08.2025</div>
          </div>
          <div className="">4</div>
        </div>
        <div className="">2</div>
        <div className="">3</div>
      </div>
      <span className="w-[360px] h-[1px] bg-white"></span>
      <div className="px-5 py-5">2</div>
      <span className="w-[360px] h-[1px] bg-white"></span>
      <div className="px-5 py-5">3</div>
      <span className="w-[360px] h-[1px] bg-white"></span>
      <div className="px-5 py-5">Итого 7760</div>
    </div>
  );
};

export default TripDetails;
