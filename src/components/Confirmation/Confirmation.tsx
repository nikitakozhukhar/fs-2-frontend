const Confirmation = () => {
  return (
    <div className="flex flex-col gap-8 w-[960px] ">
      <div className="border-2 border-[#C4C4C4]">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="text-2xl font-medium">Поезд</div>
        </div>

        <div className="flex h-[353px] border-t-2 border-b-2 border-[#928F94]">
          {/* Column 1 */}
          <div className="w-[197px] flex flex-col justify-center items-center bg-[#E4E0E9]">
            <div className="w-20 h-20 rounded-full flex items-center justify-center">
              <svg
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.7879 63.7038C56.7164 65.6856 59.433 66.369 59.5361 69C48.4635 69 37.5284 69 26.4557 69C26.6277 66.4031 29.2755 65.6856 30.2727 63.7379C29.3786 63.5329 28.5534 63.3962 27.7625 63.157C23.8423 61.9611 21.057 58.3392 21.057 54.2047C20.9882 45.389 20.9882 36.6416 21.0226 27.8601C21.0226 23.794 22.9139 20.7187 26.7308 19.3861C29.8257 18.3269 33.1268 17.6777 36.3936 17.3701C42.7896 16.7893 49.22 16.7893 55.5472 18.1219C57.1634 18.4636 58.7452 19.0444 60.1895 19.762C63.2843 21.2996 64.9005 23.9306 64.9349 27.3134C65.0037 36.3683 65.0381 45.4232 64.9349 54.478C64.9005 58.6467 61.8057 62.2003 57.748 63.2254C57.129 63.4304 56.4757 63.5329 55.7879 63.7038ZM40.1762 28.1676C35.5683 28.1676 31.0636 28.1676 26.6277 28.1676C26.6277 32.7463 26.6277 37.1884 26.6277 41.6304C31.2012 41.6304 35.6371 41.6304 40.1762 41.6304C40.1762 37.12 40.1762 32.7122 40.1762 28.1676ZM59.433 28.1676C54.8251 28.1676 50.3204 28.1676 45.8844 28.1676C45.8844 32.7463 45.8844 37.1884 45.8844 41.6304C50.4579 41.6304 54.8939 41.6304 59.433 41.6304C59.433 37.12 59.433 32.7122 59.433 28.1676ZM34.743 54.068C34.7774 51.8128 32.8861 49.9335 30.6166 49.9335C28.4158 49.9335 26.5589 51.7103 26.4901 53.8972C26.4214 56.1523 28.2439 58.0658 30.5134 58.1342C32.8174 58.1683 34.7086 56.3232 34.743 54.068ZM59.5017 53.9997C59.5017 51.7445 57.5761 49.8993 55.3065 49.9335C53.1057 49.9677 51.2832 51.7787 51.2488 53.9655C51.2144 56.2207 53.0713 58.1 55.3409 58.1342C57.6448 58.1342 59.5017 56.2548 59.5017 53.9997Z"
                  fill="white"
                />
                <circle
                  cx="43"
                  cy="43"
                  r="42"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="mt-4 text-lg font-semibold">116C</div>
            <div className="mt-2">
              <div className="flex items-center justify-between">
                <span>Адлер</span>
                <span className="mx-2">
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z"
                      fill="#292929"
                    />
                  </svg>
                </span>
                <span>Москва</span>
              </div>
              <div className="text-center mt-1">Санкт-Петербург</div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-[480px] flex flex-col justify-between gap-8 px-8 py-10">
            <div className="flex justify-between mb-4">
              <div>
                <div className="text-lg font-bold">00:10</div>
                <div className="text-sm">Москва</div>
                <div className="text-sm">Курский вокзал</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mx-2 text-lg font-normal text-[#C4C4C4]">
                  9:42
                </div>
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
              <div>
                <div className="text-lg font-bold">9:52</div>
                <div className="text-sm">Санкт-Петербург</div>
                <div className="text-sm">Ладожский вокзал</div>
              </div>
            </div>
            {/* Reverse */}
            <div className="flex justify-between">
              <div>
                <div className="text-lg font-bold">00:10</div>
                <div className="text-sm">Москва</div>
                <div className="text-sm">Курский вокзал</div>
              </div>
              <div className="flex flex-col items-center">
              <div className="mx-2 text-lg font-normal text-[#C4C4C4]">9:42</div>
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
              <div>
                <div className="text-lg font-bold">9:52</div>
                <div className="text-sm">Санкт-Петербург</div>
                <div className="text-sm">Ладожский вокзал</div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="w-[283px] flex flex-col justify-center items-center">
            <div className="text-center mb-4">
              <div className="text-lg font-bold">Сидячий</div>
              <div className="text-sm">88 мест</div>
              <div className="text-lg font-semibold">
                <span>от </span>
                <span className="text-yellow-500">2500</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <div>
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Option SVG */}
                </svg>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Option SVG */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default Confirmation;
