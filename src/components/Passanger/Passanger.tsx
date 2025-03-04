import { Link } from "react-router-dom";
import OpenedCircle from "../../img/svg/openedCircle.svg?react";
import { useFormik } from "formik";
import * as Yup from "yup";
import usePersonInfoStore from "../../store/personInfoStore";

const Passanger = () => {

  const { personData, setPersonData } = usePersonInfoStore();
  
  const validationSchema = Yup.object({
    category: Yup.string().required(""),
    firstName: Yup.string().required(""),
    secondName: Yup.string().required(""),
    patronymic: Yup.string().required(""),
    gender: Yup.string().required(""),
    birthDate: Yup.date().required(""),
    mobility: Yup.boolean(),
    documentType: Yup.string().required(""),
    documentData: Yup.object({
      series: Yup.string().required(""),
      number: Yup.string().required(""),
    }),
  });

  const formik = useFormik({
    initialValues: personData,
    validationSchema,
    onSubmit: (values) => {
      setPersonData(values);
    },
  });

  return (
    <div className="flex flex-col w-[960px] ">
      <div className="mb-10 border-2 border-b-4 border-gray-400">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="flex items-center gap-5 ">
            <div className=" cursor-pointer">
              <OpenedCircle />
            </div>
            <div className="text-2xl font-medium">Пассажир 1</div>
          </div>
          <div className="text-xl text-gray-600 cursor-pointer">x</div>
        </div>

        <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

        <div className="px-4 py-8">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
            <div className="relative w-[280px]">
              <select
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full h-[50px] p-2 text-xl border-2 border-gray-400 rounded-lg appearance-none cursor-pointer outline-none bg-white pr-12"
              >
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
                  htmlFor="secondName"
                  className="mb-2 text-base font-normal text-gray-700"
                >
                  Фамилия
                </label>
                <input
                  id="secondName"
                  name="secondName"
                  value={formik.values.secondName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                  placeholder="Введите фамилию"
                />
              </div>

              <div className="flex flex-col w-[280px]">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-base font-normal text-gray-700"
                >
                  Имя
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                  placeholder="Введите имя"
                />
              </div>

              <div className="flex flex-col w-[280px]">
                <label
                  htmlFor="patronymic"
                  className="mb-2 text-base font-normal text-gray-700"
                >
                  Отчество
                </label>
                <input
                  id="patronymic"
                  name="patronymic"
                  value={formik.values.patronymic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                  placeholder="Введите отчество"
                />
              </div>
            </div>

            <div className="flex gap-8">
              {/* Пол */}
              <div className="flex flex-col gap-2 w-[204px] ">
                <div className="text-lg font-medium text-gray-700">Пол</div>
                <div className="flex h-[50px] justify-center items-center border-2 border-gray-400 rounded-lg">
                  <div className="h-full flex-1 border-r-2 border-slate-700">
                    <label className="h-full flex items-center justify-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formik.values.gender === "male"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="hidden peer"
                      />
                      <div className="h-full w-full flex items-center justify-center peer-checked:bg-orange-500">
                        <span className="text-3xl text-black-700 font-bold">
                          М
                        </span>
                      </div>
                    </label>
                  </div>

                  <div className="h-full flex-1">
                    <label className="h-full flex items-center justify-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formik.values.gender === "female"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="hidden peer"
                      />
                      <div className="h-full w-full flex items-center justify-center peer-checked:bg-orange-500">
                        <span className="text-3xl text-black-700 font-bold">
                          Ж
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Дата рождения */}
              <div className="flex flex-col gap-2 w-[240px] ">
                <label
                  htmlFor="birth_date"
                  className="text-lg font-medium text-gray-700"
                >
                  Дата рождения
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="h-[50px] p-2 border-2 border-gray-400 rounded-lg outline-none text-gray-600 focus:border-blue-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="mobility"
                className="hidden"
                checked={formik.values.mobility}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="mobility"
                className={`w-8 h-8 border-2 border-gray-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                  formik.values.mobility
                    ? "text-orange-500 border-orange-500"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-orange transition-opacity duration-200 ${
                    formik.values.mobility ? "opacity-100" : "opacity-0"
                  }`}
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
                className={`${
                  formik.values.mobility ? "text-orange-500 " : "text-gray-700"
                } cursor-pointer select-none transition-text duration-200`}
              >
                ограниченная подвижность
              </label>
            </div>
            <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

            <div className="flex gap-8 px-4 py-8">
              <div className="flex flex-col justify-between">
                <label
                  htmlFor="documentType"
                  className="text-base font-normal text-gray-400"
                >
                  Тип документа
                </label>

                <div className="relative w-[205px]">
                  <select
                    id="documentType"
                    name="documentType"
                    value={formik.values.documentType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                    name="documentData.series"
                    value={formik.values.documentData.series}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                    name="documentData.number"
                    value={formik.values.documentData.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                    placeholder="  __   __   __   __   __   __"
                  />
                </div>
              </div>
            </div>

            <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

            <div className="flex justify-end px-4 py-8">
              <button
                type="submit"
                className="px-10 py-2 border-[1px] border-[#292929] rounded-lg text-2xl font-bold"
              >
                Следующий пассажир
              </button>
            </div>
          </form>
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
