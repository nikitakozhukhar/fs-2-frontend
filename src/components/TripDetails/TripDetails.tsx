const TripDetails = () => {
  return (
    <div className="flex flex-col w-[360px] mb-5 bg-[#3E3C41] ">
      <div className="px-5 py-7 text-3xl text-center text-gray-50 uppercase">
        Детали поездки
      </div>
      <span className="w-[360px] h-[1px] bg-white"></span>

      <div className="flex flex-col justify-start gap-5 px-5 py-5 mb-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
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
            <div className="text-gray-50 text-xl self-end">30.08.2025</div>
          </div>
          <div className="self-end">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="18"
                height="18"
                rx="4"
                stroke="#C4C4C4"
                stroke-width="2"
              />
              <line
                x1="5.61523"
                y1="9.76923"
                x2="14.3845"
                y2="9.76923"
                stroke="#C4C4C4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 text-xl text-gray-50">
          <div className="flex justify-between">
            <div className="font-light text-[#E5E5E5]">№ Поезда</div>
            <div className="font-semibold">116С</div>
          </div>
          <div className="flex justify-between">
            <div className="font-light text-[#E5E5E5]">Название</div>
            <div className="flex flex-col">
              <div className="self-end">Адлер</div>
              <div className="">Санкт-Петербург</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-2xl text-gray-50 font-medium">00:10</div>
              <div className="text-[#928F94]">30.08.2024</div>
            </div>

            <div className="flex flex-col">
              <div className="text-[#E5E5E5]">9:42</div>
              <div className="">
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z"
                    fill="#FFA800"
                    fill-opacity="0.79"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-2xl text-gray-50 font-medium self-end">
                9:52
              </div>
              <div className="text-[#928F94]">31.08.2024</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-gray-50">Москва</div>
              <div className="text-[#928F94]">Курский вокзал</div>
            </div>
            <div className="flex flex-col">
              <div className="self-end text-gray-50">Санкт-Петербург</div>
              <div className="text-[#928F94]">Ладожский вокзал</div>
            </div>
          </div>
        </div>
      </div>

      <span className="w-[360px] h-[1px] bg-white"></span>
      <div className="flex flex-col justify-start gap-5 px-5 py-5 mb-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="">
              <svg
                width="32"
                height="26"
                viewBox="0 0 32 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27 0C29.7615 0 32 2.23853 32 5V21C32 23.7615 29.7615 26 27 26H5C2.23853 26 0 23.7615 0 21V5C0 2.23853 2.23853 0 5 0H27ZM14.1628 14.2236V17.3333L14.0522 17.2267C12.5811 15.8075 11.0977 14.377 9.68408 13.0288L9.80811 12.908C11.2327 11.5205 12.6982 10.0935 14.1775 8.66663V11.949H22.3157V14.2236H14.1628Z"
                  fill="#FFA800"
                />
              </svg>
            </div>
            <div className="text-gray-50 text-2xl">Обратно</div>
            <div className="text-gray-50 text-xl self-end">09.09.2025</div>
          </div>
          <div className="self-end">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="18"
                height="18"
                rx="4"
                stroke="#C4C4C4"
                stroke-width="2"
              />
              <line
                x1="5.61523"
                y1="9.76923"
                x2="14.3845"
                y2="9.76923"
                stroke="#C4C4C4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 text-xl text-gray-50">
          <div className="flex justify-between">
            <div className="font-light text-[#E5E5E5]">№ Поезда</div>
            <div className="font-semibold">116С</div>
          </div>
          <div className="flex justify-between">
            <div className="font-light text-[#E5E5E5]">Название</div>
            <div className="flex flex-col">
              <div className="self-end">Адлер</div>
              <div className="">Санкт-Петербург</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-2xl text-gray-50 font-medium">00:10</div>
              <div className="text-[#928F94]">30.08.2024</div>
            </div>

            <div className="flex flex-col">
              <div className="text-[#E5E5E5]">9:42</div>
              <div className="">
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6373 20C10.6373 17.8073 10.6373 15.3821 10.6373 12.8239C17.1379 12.8239 23.5342 12.8239 30 12.8239C30 11.0299 30 9.36877 30 7.57475C23.6732 7.57475 17.2769 7.57475 10.6721 7.57475C10.6721 4.91694 10.6721 2.42525 10.6721 0C7.05678 3.3887 3.47625 6.77741 1.90735e-06 10.0664C3.44148 13.2558 7.05678 16.6445 10.6373 20Z"
                    fill="#FFA800"
                    fill-opacity="0.79"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-2xl text-gray-50 font-medium self-end">
                9:52
              </div>
              <div className="text-[#928F94]">31.08.2024</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-gray-50">Москва</div>
              <div className="text-[#928F94]">Курский вокзал</div>
            </div>
            <div className="flex flex-col">
              <div className="self-end text-gray-50">Санкт-Петербург</div>
              <div className="text-[#928F94]">Ладожский вокзал</div>
            </div>
          </div>
        </div>
      </div>

      <span className="w-[360px] h-[1px] bg-white"></span>

      <div className="flex justify-between px-5 py-5">
        <div className="flex gap-3">
          <div className="">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.9721 26C17.2752 26 8.72031 26 0.165369 26C-0.219806 21.9313 -0.260351 20.3648 3.83467 18.4118C9.91638 15.5229 16.0792 15.5839 22.2014 18.4118C22.9921 18.7779 23.7219 19.2865 24.4111 19.8358C25.5058 20.7106 26.0735 21.8499 25.9924 23.2943C25.9518 24.1487 25.9721 25.0235 25.9721 26Z"
                fill="#FFA800"
              />
              <path
                d="M19.4841 6.44946C19.5044 10.0503 16.6054 13.0002 13.0172 13.0206C9.42899 13.0206 6.50977 10.091 6.50977 6.51049C6.50977 2.9503 9.38844 0.0411096 12.9158 0.00042166C16.5243 -0.0402663 19.4638 2.86892 19.4841 6.44946Z"
                fill="#FFA800"
              />
            </svg>
          </div>
          <div className="text-2xl font-medium text-gray-50">Пассажиры</div>
        </div>
        <div className="">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="18"
              rx="4"
              stroke="#C4C4C4"
              stroke-width="2"
            />
            <line
              x1="5.61523"
              y1="9.76923"
              x2="14.3845"
              y2="9.76923"
              stroke="#C4C4C4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-5 mb-5">
        <div className="flex justify-between">
          <div className="text-[#928F94]">2 Взрослых</div>
          <div className="text-gray-50 text-xl font-semibold">5 840 <span className="text-gray-500">&#8381;</span></div>
        </div>
        <div className="flex justify-between">
          <div className="text-[#928F94]">1 Ребенок</div>
          <div className="text-gray-50 text-xl font-semibold">1 920 <span className="text-gray-500">&#8381;</span></div>
        </div>
      </div>

      <span className="w-[360px] h-[1px] bg-white"></span>

      <div className="flex justify-between px-5 py-5">
        <div className="text-2xl text-gray-50 font-semibold uppercase">итог</div>
        <div className="text-3xl text-[#FFA800] font-semibold">7 760 <span className="text-gray-400">&#8381;</span></div>
      </div>
    </div>
  );
};

export default TripDetails;
