const FirstClass = () => {
  const data = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
    [
      [9, 10],
      [11, 12],
    ],
    [
      [13, 14],
      [15, 16],
    ],
    [
      [17, 18],
      [19, 20],
    ],
    [
      [21, 22],
      [23, 24],
    ],
    [
      [25, 26],
      [27, 28],
    ],
    [
      [29, 30],
      [31, 32],
    ],
  ];

  return (
    <div className="flex w-[921px] h-[145px] m-auto mb-5 border-2 rounded-3xl ">
      <div className="flex relative z-0 h-[100%] ">
        <div className="w-[45px] h-[100%] border-2 flex justify-between items-center rounded-l-xl">
          <div className="w-[5px] h-[50px] border-gray-500 border-2 bg-gray-500 -ml-0.5"></div>
          <div className="flex-grow h-[100%] relative">
            <span className="absolute -mt-1 top-0 left-1/2 transform -translate-x-1/2 w-[20px] h-[8px]  border-gray-500 border-2"></span>
            <span className="absolute -mb-1 bottom-0 left-1/2 transform -translate-x-1/2 w-[20px] h-[8px]  border-gray-500 border-2"></span>
          </div>
          <div className="w-[5px] h-[40px]  border-gray-500 border-2 bg-gray-500 -mr-0.5"></div>
        </div>

        <div className="relative z-0 flex flex-col justify-between items-center w-[35px] h-[100%] py-3 border-2">
          <span className="absolute -top-[28px] flex justify-center items-center w-[35px] bg-black font-bold text-white">07</span>
          <span className="absolute -left-[6px] top-[49%] rotate-[30deg] w-[70px] h-[1px]  border-gray-400 border-t-[1px]"></span>
          <span className="absolute -left-[8px] top-[70%] rotate-[30deg] w-[45px] h-[1px]  border-gray-400 border-t-[1px]"></span>
          <span className="absolute z-10 -right-[20px] top-[90px] w-[35px] h-[5px] rotate-90 bg-white"></span>
          <div className="">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M132,139.824A61.912,61.912,0,1,0,70.088,77.912,61.981,61.981,0,0,0,132,139.824ZM132,48a29.912,29.912,0,1,1-29.912,29.912A29.947,29.947,0,0,1,132,48Z"></path>
              <path d="M176,152H88a48.053,48.053,0,0,0-48,48V352H72V496H192V352h32V200A48.053,48.053,0,0,0,176,152Zm16,168H160V464H104V320H72V200a16.019,16.019,0,0,1,16-16h88a16.019,16.019,0,0,1,16,16Z"></path>
              <path
                d="M370.088,139.824a61.912,61.912,0,1,0-61.912-61.912A61.981,61.981,0,0,0,370.088,139.824Zm0-91.824a29.912,29.912,0,1,1-29.912,29.912A29.947,29.947,0,0,1,370.088,48Z"
                className="ci-primary"
              ></path>
              <path
                d="M425.759,193.354a61.586,61.586,0,0,0-115.833-1.392L248,357.1V400h64v96H416V400h64V349.3ZM448,368H384v96H344V368H280v-5.1l59.889-159.7a29.585,29.585,0,0,1,55.645.669L448,354.7Z"
                className="ci-primary"
              ></path>
            </svg>
          </div>
          <div className="">
            <svg
              fill="currentColor"
              width="20px"
              height="20px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.46875 0C8.777344 0 4.9375 3.816406 4.9375 8.5C4.9375 13.183594 8.777344 17 13.46875 17L16 17L16 22L21 22L21 17L32 17L32 41L25.8125 41C26.140625 40.535156 26.464844 39.980469 26.78125 39.3125C27.992188 36.75 29 32.601563 29 26C29 25.449219 28.550781 25 28 25L9 25C8.96875 25 8.9375 25 8.90625 25C8.390625 25.046875 7.996094 25.480469 8 26C8 26.792969 8.003906 27.558594 8.03125 28.28125C7.585938 28.113281 7.078125 28 6.5 28C4.027344 28 2 30.027344 2 32.5C2 34.972656 4.027344 37 6.5 37L9.34375 37C9.617188 37.890625 9.90625 38.648438 10.21875 39.3125C10.535156 39.980469 10.859375 40.535156 11.1875 41L7.5 41C6.132813 41 5 42.132813 5 43.5L5 47.5C5 48.867188 6.132813 50 7.5 50L45.5 50C47.421875 50 49 48.421875 49 46.5L49 42C49.003906 41.949219 49.003906 41.894531 49 41.84375L44.4375 14.5625C46.019531 13.019531 47 10.871094 47 8.5C47 3.816406 43.160156 0 38.46875 0 Z M 13.46875 2L38.46875 2C42.082031 2 45 4.898438 45 8.5C45 12.101563 42.082031 15 38.46875 15L17.1875 15C17.054688 14.972656 16.914063 14.972656 16.78125 15L13.46875 15C9.855469 15 6.9375 12.101563 6.9375 8.5C6.9375 4.898438 9.855469 2 13.46875 2 Z M 42.625 15.90625L47 42.15625L47 46.5C47 47.339844 46.339844 48 45.5 48L7.5 48C7.214844 48 7 47.785156 7 47.5L7 43.5C7 43.214844 7.214844 43 7.5 43L33 43C33.550781 43 34 42.550781 34 42L34 17L38.46875 17C39.976563 17 41.394531 16.597656 42.625 15.90625 Z M 18 17L19 17L19 20L18 20 Z M 10.09375 27L26.90625 27C26.792969 32.6875 25.9375 36.386719 24.96875 38.4375C24.453125 39.53125 23.933594 40.214844 23.53125 40.59375C23.226563 40.878906 22.957031 40.972656 22.9375 41L14.0625 41C14.042969 40.972656 13.773438 40.878906 13.46875 40.59375C13.066406 40.214844 12.546875 39.53125 12.03125 38.4375C11.0625 36.386719 10.207031 32.6875 10.09375 27 Z M 6.5 30C7.308594 30 7.875 30.394531 8.21875 30.71875C8.363281 32.347656 8.574219 33.757813 8.84375 35L6.5 35C5.109375 35 4 33.890625 4 32.5C4 31.109375 5.109375 30 6.5 30 Z M 40 35C38.894531 35 38 35.894531 38 37C38 38.105469 38.894531 39 40 39C41.105469 39 42 38.105469 42 37C42 35.894531 41.105469 35 40 35Z" />
            </svg>
          </div>
        </div>

        <div className="relative z-0 flex justify-center py-6 w-[50px] h-[100%] border-2">
          <svg
            viewBox="0 0 48 80"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="gray"
            aria-label="Train Conductor Icon"
          >
            <g fill="gray">
              <g fill="gray" fillRule="nonzero">
                <path d="M13.411 38.112c-.024.018-.047.036-.069.055l-.466.314c-1.0879956.664044-2.2245567 1.2450274-3.4 1.738-2.10330751.789071-4.03014528 1.9856134-5.67 3.521-3.801 3.989-3.806 9.926-3.806 14.26 0 1.1045695.8954305 2 2 2h44c1.1045695 0 2-.8954305 2-2 0-4.334-.005-10.271-3.806-14.26-1.6392643-1.5351641-3.5654032-2.7316947-5.668-3.521-1.1684264-.489525-2.298582-1.0658007-3.381-1.724l-.485-.327c-.023-.02-.046-.038-.071-.056-1.3381761-.8430497-2.2704996-2.199584-2.578-3.751 3.315281-3.6488365 5.101413-8.4322619 4.989-13.361-.0047594-.9140046-.0635285-1.8269293-.176-2.734 2.1489313-2.4204309 3.8124583-5.2314521 4.9-8.28.2748894-.78435875.0360329-1.65698129-.6-2.192-4.8373305-4.03184951-10.6538712-6.71433695-16.861-7.776-.1741771-.02400079-.3508229-.02400079-.525 0-6.2092848 1.0605186-12.0280488 3.74307678-16.867 7.776-.63603287.53501871-.87488941 1.40764125-.6 2.192 1.08754171 3.0485479 2.75106874 5.8595691 4.9 8.28-.1108001.9071698-.1678996 1.8200941-.171 2.734-.1120301 4.9277098 1.6732829 9.7101435 4.987 13.359-.3071818 1.5515294-1.2386347 2.9085723-2.576 3.753zM24 40c2.2777437-.0223796 4.4882922-.7745338 6.307-2.146.4303505 1.1546778 1.1369308 2.186395 2.058 3.005-4.687 3.658-7.165 10.489-8.365 15.149-1.2-4.66-3.678-11.491-8.366-15.149.9206556-.8205175 1.6247739-1.8553997 2.05-3.013 1.8202812 1.3759572 4.0343002 2.1310232 6.316 2.154z" />
                <path d="M21 10.63h6c.5522847 0 1-.4477153 1-1 0-.55228475-.4477153-1-1-1h-6c-.5522847 0-1 .44771525-1 1 0 .5522847.4477153 1 1 1z" />
              </g>
            </g>
          </svg>

          <span className="absolute bottom-[53px] left-[21px] w-[30px] h-[2px] bg-gray-300"></span>
        </div>
      </div>

      <div className="relative z-0 flex w-[700px] h-full">
        {data.map((numbers, idx) => (
          <div
            key={idx}
            className={`relative flex justify-between w-[90px] h-full border-t-[5px] border-l-[5px] border-b-[5px] border-gray-500 ${
              idx === data.length - 1 ? "border-r-[5px]" : ""
            }`}
          >
            {numbers.map((column, colIdx) => (
              <div className="border-b-gray-400 ">
                <div
                  key={colIdx}
                  className="flex flex-col-reverse self-start border-b-4 border-b-gray-500"
                >
                  {column.map((num, numIdx) => (
                    <div
                      key={numIdx}
                      className="flex items-center justify-center w-[30px] h-[40px] bg-slate-200 border-4 cursor-pointer"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <span className="absolute z-0 bottom-[17px] w-[83px] h-[1px] bg-slate-200"></span>
          </div>
        ))}
        <div className="absolute z-20 top-[88px] w-[700px] h-[25px] bg-white"></div>
      </div>

      <div className="flex flex-col items-center justify-between py-1 border-2 w-[40px] ">
        <div className="relative">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M132,139.824A61.912,61.912,0,1,0,70.088,77.912,61.981,61.981,0,0,0,132,139.824ZM132,48a29.912,29.912,0,1,1-29.912,29.912A29.947,29.947,0,0,1,132,48Z"></path>
            <path d="M176,152H88a48.053,48.053,0,0,0-48,48V352H72V496H192V352h32V200A48.053,48.053,0,0,0,176,152Zm16,168H160V464H104V320H72V200a16.019,16.019,0,0,1,16-16h88a16.019,16.019,0,0,1,16,16Z"></path>
            <path
              d="M370.088,139.824a61.912,61.912,0,1,0-61.912-61.912A61.981,61.981,0,0,0,370.088,139.824Zm0-91.824a29.912,29.912,0,1,1-29.912,29.912A29.947,29.947,0,0,1,370.088,48Z"
              className="ci-primary"
            ></path>
            <path
              d="M425.759,193.354a61.586,61.586,0,0,0-115.833-1.392L248,357.1V400h64v96H416V400h64V349.3ZM448,368H384v96H344V368H280v-5.1l59.889-159.7a29.585,29.585,0,0,1,55.645.669L448,354.7Z"
              className="ci-primary"
            ></path>
          </svg>
          <span className="absolute top-[40px] left-[10px] w-[20px] h-[1px] bg-slate-500"></span>
          <span className="absolute top-[50px] right-[0px] rotate-90 w-[21px] h-[1px] bg-slate-500"></span>
          <span className="absolute top-[70px] right-[8px] -rotate-45 w-[25px] h-[1px] bg-slate-500"></span>
          <span className="absolute top-[52px] left-[15px] rotate-90 w-[25px] h-[4px] bg-gray-500"></span>
        </div>
        <div className="">
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 7.249h-5.598l-3.777-5.665c-0.137-0.202-0.366-0.334-0.625-0.334h-8c-0 0-0.001 0-0.001 0-0.259 0-0.487 0.131-0.621 0.331l-0.002 0.003-3.777 5.665h-5.599c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h3.315l1.938 21.319c0.036 0.384 0.356 0.682 0.747 0.682 0 0 0 0 0.001 0h16c0 0 0.001 0 0.001 0 0.39 0 0.71-0.298 0.745-0.679l0-0.003 1.938-21.319h3.316c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM12.401 2.75h7.196l2.999 4.499h-13.195zM23.314 29.25h-14.63l-1.863-20.5 18.358-0.001zM11 11.25c-0.414 0-0.75 0.336-0.75 0.75v0 14c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-14c-0-0.414-0.336-0.75-0.75-0.75v0zM16 11.25c-0.414 0-0.75 0.336-0.75 0.75v0 14c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-14c-0-0.414-0.336-0.75-0.75-0.75v0zM21 11.25c-0.414 0-0.75 0.336-0.75 0.75v0 14c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-14c-0-0.414-0.336-0.75-0.75-0.75v0z"></path>
          </svg>
        </div>
      </div>

      <div className="relative left-[15px] flex justify-center align-middle">
        <svg
          fill="gray"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 900 900"
        >
          <path d="M609.5,395.049v87.301l49.801,49.799h24.1c16.6,0,30-13.4,30-30v-77c0-16.601-13.4-30-30-30h-73.9V395.049z"></path>
          <path d="M267.7,395.049H197c-16.6,0-30,13.4-30,30v77c0,16.6,13.4,30,30,30h115.1h92.6l-92.6-92.6L267.7,395.049z"></path>
          <polygon points="589.5,462.249 589.5,395.049 522.301,395.049 "></polygon>
          <path d="M664.9,365.85c-2.9-22-16.201-65.4-75.801-76.4c-58.5-10.8-74.699-50.5-79.1-71.7c-1-4.5-7-5.5-9.301-1.4 c-12,21.5-30.299,67.6,7.602,100.7c47.299,41.4,109.299,21.9,148.6,53.3C660.301,373.15,665.4,370.25,664.9,365.85z"></path>
          <path d="M762.1,130.75c-41-41-88.699-73.2-141.9-95.7c-55.1-23.2-113.6-35-173.799-35c-60.2,0-118.7,11.8-173.8,35.1 c-53.2,22.5-100.9,54.7-141.9,95.7s-73.1,88.6-95.6,141.8C11.8,327.75,0,386.25,0,446.45c0,60.2,11.8,118.7,35.1,173.799 c22.5,53.201,54.7,100.9,95.7,141.9s88.7,73.201,141.9,95.701c55.101,23.299,113.5,35.1,173.8,35.1 c60.301,0,118.7-11.801,173.801-35.1c53.199-22.5,100.898-54.701,141.898-95.701s73.201-88.699,95.701-141.9 c23.299-55.1,35.1-113.5,35.1-173.799c0-60.3-11.801-118.7-35.1-173.8C835.199,219.45,803.1,171.75,762.1,130.75z M446.4,782.851 c-89.9,0-174.4-35-237.9-98.5c-63.5-63.5-98.5-148-98.5-237.901c0-71.3,22-139.1,62.8-195.8l469.501,469.5 C585.5,760.851,517.699,782.851,446.4,782.851z M720,642.249L609.801,532.05L250.6,172.85c56.7-40.8,124.6-62.8,195.8-62.8 c89.901,0,174.401,35,237.901,98.5s98.5,148,98.5,237.9C782.801,517.749,760.801,585.55,720,642.249z"></path>
        </svg>
      </div>
    </div>
  );
};

export default FirstClass;