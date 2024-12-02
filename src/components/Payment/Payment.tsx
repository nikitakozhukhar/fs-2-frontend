
const Payment = () => {
  return (
    <div className="flex flex-col w-[960px] border-2 border-b-4 border-gray-400">
      <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
        <div className="text-2xl font-medium">Персональные данные</div>
      </div>

      <span className="w-[100%] h-[2px] bg-[#928F94]"></span>

      <div className="px-4 py-8">
        <form action="" className="flex flex-col gap-8">
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
        </form>
      </div>

      <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

      <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
        <div className="text-2xl font-medium">Способ оплаты</div>
      </div>

      <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

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
            <label htmlFor="mobility" className="text-gray-700 cursor-pointer">
              ограниченная подвижность
            </label>
          </div>
      
    </div>
       
       
          
  );
};

export default Payment;