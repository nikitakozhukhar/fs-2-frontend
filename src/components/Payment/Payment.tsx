import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { User } from "../../store/orderStore";
import orderStore from "../../store/orderStore";

const Payment = () => {
  const { user, setUserData } = orderStore();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Обязательное поле"),
    lastName: Yup.string().required("Обязательное поле"),
    patronymic: Yup.string().required("Обязательное поле"),
    phone: Yup.number().required("Обязательное поле"),
    email: Yup.string()
      .email("Некорректный email")
      .required("Обязательное поле"),
    paymentMethod: Yup.string().required("Обязательное поле"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      patronymic: user.patronymic,
      phone: user.phone,
      email: user.email,
      paymentMethod: user.paymentMethod,
    },
    validationSchema,
    onSubmit: (values) => {
      Object.entries(values).forEach(([key, value]) => {
        setUserData(key as keyof User, value as User[keyof User]);
      });
    },
  });

  return (
    <div className="flex flex-col gap-28 items-end mb-14">
      <div className="flex flex-col w-[960px] border-2 border-b-4 border-gray-400">
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="text-2xl font-medium">Персональные данные</div>
        </div>

        <span className="w-[100%] h-[2px] bg-[#928F94]"></span>

        <div className="px-4 py-8">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-8 mb-8"
          >
            <div className="flex flex-col gap-9">
              <div className="flex justify-between">
                <div className="flex flex-col w-[280px]">
                  <label
                    htmlFor="lastName"
                    className="mb-2 text-base font-normal text-gray-700"
                  >
                    Фамилия
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                    placeholder="Введите фамилию"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500">{formik.errors.lastName}</div>
                  )}
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
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500">
                      {formik.errors.firstName}
                    </div>
                  )}
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
                  {formik.touched.patronymic && formik.errors.patronymic && (
                    <div className="text-red-500">
                      {formik.errors.patronymic}
                    </div>
                  )}
                </div>
              </div>

              <div className="">
                <div className="flex flex-col w-[280px]">
                  <label
                    htmlFor="phone"
                    className="mb-2 text-base font-normal text-gray-700"
                  >
                    Контактный телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                    placeholder="+7 ___  ___ __ __"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-red-500">{formik.errors.phone}</div>
                  )}
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
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                    placeholder="inbox@gmail.ru"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500">{formik.errors.email}</div>
                  )}
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

        <div className="flex flex-col gap-4 px-4 py-8 mb-8">
       
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="online"
              name="paymentMethod"
              value="online"
              checked={formik.values.paymentMethod === "online"}
              onChange={() => formik.setFieldValue("paymentMethod", "online")}
              className="hidden"
            />
            <label
              htmlFor="online"
              className={`w-8 h-8 border-2 border-gray-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                formik.values.paymentMethod === "online"
                  ? "border-orange-500"
                  : "border-gray-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transition-opacity duration-200 ${
                  formik.values.paymentMethod === "online"
                    ? "text-orange-500 opacity-100"
                    : "opacity-0"
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
              htmlFor="online"
              className={`text-2xl cursor-pointer select-none transition-text duration-200 ${
                formik.values.paymentMethod === "online"
                  ? "text-orange-500"
                  : "text-gray-700"
              }`}
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
            <input
              type="checkbox"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={formik.values.paymentMethod === "cash"}
              onChange={() => formik.setFieldValue("paymentMethod", "cash")}
              className="hidden"
            />
            <label
              htmlFor="cash"
              className={`w-8 h-8 border-2 border-gray-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                formik.values.paymentMethod === "cash"
                  ? "border-orange-500"
                  : "border-gray-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transition-opacity duration-200 ${
                  formik.values.paymentMethod === "cash"
                    ? "text-orange-500 opacity-100"
                    : "opacity-0"
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
              htmlFor="cash"
              className={`text-2xl cursor-pointer select-none transition-text duration-200 ${
                formik.values.paymentMethod === "cash"
                  ? "text-orange-500"
                  : "text-gray-700"
              }`}
            >
              Наличными
            </label>
          </div>
        </div>
      </div>

      <Link to={"/confirmation"}>
        <button
          type="submit"
          onClick={(e) => {
            // e.preventDefault();
            formik.handleSubmit();
          }}
          className="w-[323px] h-[60px] bg-[#FFA800] rounded-md text-2xl font-bold text-white uppercase"
        >
          Купить билеты
        </button>
      </Link>
    </div>
  );
};

export default Payment;
