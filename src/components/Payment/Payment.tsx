import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="flex flex-col gap-28 items-end mb-14">
      <div className="flex flex-col w-[960px] border-2 border-b-4 border-gray-400">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="text-2xl font-medium">Персональные данные</div>
        </div>

        <span className="w-[100%] h-[2px] bg-[#928F94]"></span>

        <div className="px-4 py-8">
          <form action="" className="flex flex-col gap-8 mb-8">
            <div className="flex flex-col gap-9">
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

              <div className="">
                <div className="flex flex-col w-[280px]">
                  <label
                    htmlFor="telephone"
                    className="mb-2 text-base font-normal text-gray-700"
                  >
                    Контактный телефон
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                    placeholder="+7 ___  ___ __ __"
                  />
                </div>
              </div>
              <div className="">
                <div className="flex flex-col w-[280px]">
                  <label
                    htmlFor="email"
                    className="mb-2 text-base font-normal text-gray-700"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                    placeholder="inbox@gmail.ru"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="text-2xl font-medium">Способ оплаты</div>
        </div>

        <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

        <div className="flex flex-col gap-4 px-4 py-8  mb-8">
          <div className="flex items-center gap-4">
            <input type="checkbox" id="payment" className="hidden peer" />
            <label
              htmlFor="payment"
              className="w-8 h-8 border-2 border-gray-500 rounded-lg flex items-center justify-center cursor-pointer peer-checked:border-[#FFA800]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 [#FFA800] opacity-0 peer-checked:opacity-100 transition-opacity"
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
              htmlFor="payment"
              className="text-2xl text-gray-700 cursor-pointer peer-checked:text-[#FFA800]"
            >
              Онлайн
            </label>
          </div>

          <div className="flex gap-9 text-2xl font-bold">
            <span className="font-bold">Банковской картой</span>
            <span className="font-bold">PayPal</span>
            <span className="font-bold">Visa QIWI Wallet</span>
          </div>
        </div>

        <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

        <div className="flex gap-5 px-4 py-8 mb-8">
          <div className="flex items-center gap-4">
            <input type="checkbox" id="cash" className="hidden peer" />
            <label
              htmlFor="cash"
              className="w-8 h-8 border-2 border-gray-500 rounded-lg flex items-center justify-center cursor-pointer peer-checked:border-[#FFA800]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#FFA800] opacity-0 peer-checked:opacity-100 transition-opacity"
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
              htmlFor="cash"
              className="text-2xl text-gray-700 cursor-pointer peer-checked:text-[#FFA800]"
            >
              Наличными
            </label>
          </div>
        </div>
      </div>

      <Link to={"/confirmation"}>
        <button className="w-[323px] h-[60px] bg-[#FFA800] rounded-md text-2xl font-bold text-white uppercase">
          Купить билеты
        </button>
      </Link>
    </div>
  );
};

export default Payment;
