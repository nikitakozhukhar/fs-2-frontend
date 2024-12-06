import { Link } from "react-router-dom";

const Passanger = () => {
  return (
    <div className="flex flex-col w-[960px] ">
      <div className="mb-10 border-2 border-b-4 border-gray-400">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="flex items-center gap-5">
            <div className="">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="#928F94"
                  stroke-width="2"
                />
                <line
                  x1="8"
                  y1="16"
                  x2="24"
                  y2="16"
                  stroke="#928F94"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-2xl font-medium">Пассажир 1</div>
          </div>
          <div className="text-xl text-gray-600 cursor-pointer">x</div>
        </div>

        <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

        <div className="px-4 py-8">
          <form action="" className="flex flex-col gap-8">
            <div className="relative w-[280px]">
              <select className="w-full h-[50px] p-2 text-xl border-2 border-gray-400 rounded-lg appearance-none cursor-pointer outline-none bg-white pr-12">
                <option value="adult">Взрослый</option>
                <option value="child">Ребенок</option>
              </select>
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none"
                width="12"
                height="6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L6 6L12 0H0Z" fill="#928F94" />
              </svg>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col w-[280px]">
                <label
                  htmlFor="second_name"
                  className="mb-2 text-base font-normal text-gray-700"
                >
                  Фамилия
                </label>
                <input
                  id="second_name"
                  name="second_name"
                  className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                  placeholder="Введите фамилию"
                />
              </div>

              <div className="flex flex-col w-[280px]">
                <label
                  htmlFor="name"
                  className="mb-2 text-base font-normal text-gray-700"
                >
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                  placeholder="Введите имя"
                />
              </div>

              <div className="flex flex-col w-[280px]">
                <label
                  htmlFor="third_name"
                  className="mb-2 text-base font-normal text-gray-700"
                >
                  Отчество
                </label>
                <input
                  id="third_name"
                  name="third_name"
                  className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                  placeholder="Введите отчество"
                />
              </div>
            </div>

            <div className="flex gap-8">
              {/* Пол */}
              <div className="flex flex-col gap-2 w-[204px] ">
                <div className="text-lg font-medium text-gray-700">Пол</div>
                <div className="flex justify-around h-[50px] p-2 border-2 border-gray-400 rounded-lg ">
                  <div className="">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="hidden peer"
                      />
                      <div className="flex items-center justify-center  peer-checked:bg-orange-500">
                        <span className="text-3xl text-black-700 font-bold ">
                          М
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className="">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="hidden peer"
                      />
                      <div className="flex items-center justify-center  peer-checked:bg-orange-500">
                        <span className="text-3xl text-black-700 font-bold">
                          Ж
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Дата рождения */}
              <div className="flex flex-col gap-2 w-[240px]">
                <label
                  htmlFor="birth_date"
                  className="text-lg font-medium text-gray-700"
                >
                  Дата рождения
                </label>
                <input
                  type="date"
                  id="birth_date"
                  className="h-[50px] p-2 border-2 border-gray-400 rounded-lg outline-none text-gray-600 focus:border-blue-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input type="checkbox" id="mobility" className="hidden peer" />
              <label
                htmlFor="mobility"
                className="w-8 h-8 border-2 border-gray-500 rounded-lg flex items-center justify-center cursor-pointer peer-checked:bg-blue-500 peer-checked:border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label
                htmlFor="mobility"
                className="text-gray-700 cursor-pointer"
              >
                ограниченная подвижность
              </label>
            </div>
          </form>
        </div>

        <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

        <div className="flex gap-8 px-4 py-8">
          <div className="flex flex-col justify-between">
            <label
              htmlFor="document"
              className="text-base font-normal text-gray-400"
            >
              Тип документа
            </label>

            <div className="relative w-[205px]">
              <select
                id="document"
                className="w-full h-[50px] p-2 text-xl border-2 border-gray-400 rounded-lg appearance-none cursor-pointer outline-none bg-white pr-12"
              >
                <option value="passport">Паспорт РФ</option>
                <option value="Birth_certificate">
                  Свидетельство о рождении
                </option>
              </select>
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none"
                width="12"
                height="6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L6 6L12 0H0Z" fill="#928F94" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3">
            <div className="flex flex-col w-[205px]">
              <label
                htmlFor="series"
                className="mb-2 text-base font-normal text-gray-400"
              >
                Серия
              </label>
              <input
                id="series"
                name="series"
                className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                placeholder=" __   __   __   __"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <div className="flex flex-col w-[280px]">
              <label
                htmlFor="number"
                className="mb-2 text-base font-normal text-gray-400"
              >
                Номер
              </label>
              <input
                id="number"
                name="number"
                className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                placeholder="  __   __   __   __   __   __"
              />
            </div>
          </div>
        </div>

        <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

        <div className="flex justify-end px-4 py-8">
          <button className="px-10 py-2 border-[1px] border-[#292929] rounded-lg text-2xl font-bold">
            Следующий пассажир
          </button>
        </div>
      </div>

      <div className="self-end ">
        <Link to={"/payment"}>
          <button className="py-4 px-12 border-2 border-[#FFA800] rounded-lg bg-[#FFA800] text-white text-2xl uppercase">
            купить билеты
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Passanger;
