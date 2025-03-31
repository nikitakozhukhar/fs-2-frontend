import * as Yup from "yup";
import { useState, useEffect } from "react";
import { FormikConfig, useFormik, getIn } from "formik";
import orderStore from "../../store/orderStore";

import OpenedCircle from "../../img/svg/openedCircle.svg?react";
import ClosedCircle from "../../img/svg/closedCircle.svg?react";
import RemovePassenger from "../../img/svg/removePassenger.svg?react";

interface PassengerProp {
  passengerNumber: number;
  passengerId: number;
  onRemove: (index: number) => void;
  isLast?: boolean;
}
interface MyFormikConfig extends FormikConfig<any> {
  context?: {
    documentType: string;
  };
}

const PassengerForm: React.FC<PassengerProp> = ({
  passengerNumber,
  passengerId,
  onRemove,
  isLast,
}) => {
  const { updatePassengerInfo } = orderStore();

  const [open, setIsOpen] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("Выберите категорию"),
    firstName: Yup.string()
      .required("Введите имя")
      .min(2, "Имя должно содержать минимум 2 символа"),
    secondName: Yup.string()
      .required("Введите фамилию")
      .min(2, "Фамилия должна содержать минимум 2 символа"),
    patronymic: Yup.string().required("Введите отчество"),
    gender: Yup.string().required("Выберите пол"),
    birthDate: Yup.date()
      .required("Введите дату рождения")
      .max(new Date(), "Дата не может быть в будущем"),
    mobility: Yup.boolean(),
    documentType: Yup.string().required("Выберите тип документа"),
    documentData: Yup.object().shape({
      series: Yup.string().when("documentType", {
        is: "passport",
        then: (schema) =>
          schema
            .required("Введите серию паспорта")
            .matches(/^\d{4}$/, "Серия должна содержать 4 цифры"),
        otherwise: (schema) => schema.notRequired(),
      }),
      number: Yup.string()
        .required("Введите номер документа")
        .test("passportOrCertificate", function (value) {
          const documentType = this.options.context?.documentType;

          if (!value)
            return this.createError({ message: "Введите номер документа" });

          if (documentType === "passport") {
            return /^\d{6}$/.test(value)
              ? true
              : this.createError({
                  message: "Номер паспорта должен содержать 6 цифр",
                });
          } else if (documentType === "birthCertificate") {
            return /^[IVXLCDM]+\s[А-ЯЁ]{2}\s\d{6}$/.test(value)
              ? true
              : this.createError({
                  message: "Формат свидетельства: VIII КУ 123456",
                });
          } else {
            return this.createError({ message: "Неверный тип документа" });
          }
        }),
    }),
  });

  const formik = useFormik({
    initialValues: {
      category: "adult",
      firstName: "",
      secondName: "",
      patronymic: "",
      gender: "male",
      birthDate: "",
      mobility: false,
      documentType: "passport",
      documentData: {
        series: "",
        number: "",
      },
    },
    validationSchema,
    context: { documentType: "" },
    onSubmit: (values) => {
      updatePassengerInfo(
        passengerNumber,
        {
          isAdult: values.category === "adult",
          firstName: values.firstName,
          lastName: values.secondName,
          patronymic: values.patronymic,
          gender: values.gender === "male",
          birthday: values.birthDate,
          documentType: values.documentType,
          documentData:
            values.documentType === "passport"
              ? `${values.documentData.series} ${values.documentData.number}`
              : values.documentData.number,
        },
        values.category === "adult"
      );
    },
  } as MyFormikConfig);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWasSubmitted(true);

    await formik.setTouched({
      category: true,
      firstName: true,
      secondName: true,
      patronymic: true,
      gender: true,
      birthDate: true,
      mobility: true,
      documentType: true,
      documentData: {
        series: formik.values.documentType === "passport",
        number: true,
      },
    });

    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      setIsFormValid(true);
      try {
        await formik.submitForm();
      } catch (error) {
        console.error("Form submission error:", error);
      }
    } else {
      setIsFormValid(false);
    }
  };

  const handleDocumentTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    formik.handleChange(e);
    formik.setFieldValue("documentData", { series: "", number: "" });
    formik.setFieldTouched("documentData.series", false);
    formik.setFieldTouched("documentData.number", false);
  };

  useEffect(() => {
    const checkFormValidity = async () => {
      const isValid = await validationSchema.isValid(formik.values);
      setIsFormValid(isValid);
    };
    checkFormValidity();
  }, [formik.values]);

  return (
    <div className="flex flex-col w-[960px]">
      <div
        className={`mb-10 border-2 border-b-4 border-gray-400 ${
          isLast ? "mb-8" : ""
        }`}
      >
        <div className="flex justify-between items-center py-8 px-8 bg-[#F9F9F9]">
          <div className="flex items-center gap-5 ">
            <div onClick={() => setIsOpen(!open)} className=" cursor-pointer">
              {open ? <OpenedCircle /> : <ClosedCircle />}
            </div>
            <div className="text-2xl font-medium">
              Пассажир {passengerNumber + 1}
            </div>
          </div>
          <div
            onClick={() => onRemove(passengerId)}
            className="text-xl text-gray-600 cursor-pointer"
          >
            <RemovePassenger />
          </div>
        </div>

        <span className="w-[100%] h-[1px] bg-[#928F94]"></span>

        {open && (
          <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col">
              {formik.status && (
                <div className="p-4 mb-4 text-red-600 bg-red-100 rounded-lg">
                  {formik.status}
                </div>
              )}
              <div className="relative w-[280px] px-4">
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
                  className="absolute top-1/2 right-7 -translate-y-1/2 pointer-events-none"
                  width="12"
                  height="6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L6 6L12 0H0Z" fill="#928F94" />
                </svg>
              </div>

              <div className="flex justify-between px-4 py-8">
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
                  {formik.touched.secondName && formik.errors.secondName && (
                    <div className="mt-1 text-sm text-red-600">
                      {getIn(formik.errors, "secondName")}
                    </div>
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
                    <div className="mt-1 text-sm text-red-600">
                      {getIn(formik.errors, "firstName")}
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
                    <div className="mt-1 text-sm text-red-600">
                      {getIn(formik.errors, "patronymic")}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-8 px-4 py-8">
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
                  {formik.touched.birthDate && formik.errors.birthDate && (
                    <div className="mt-1 text-sm text-red-600">
                      {getIn(formik.errors, "birthDate")}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 px-4 py-8">
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
                    formik.values.mobility
                      ? "text-orange-500 "
                      : "text-gray-700"
                  } cursor-pointer select-none transition-text duration-200`}
                >
                  ограниченная подвижность
                </label>
              </div>
              <span className="w-[959px] h-[1px] bg-gray-300"></span>

              <div className="flex gap-8 px-4 py-8">
                <div className="flex flex-col gap-2">
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
                      onChange={handleDocumentTypeChange}
                      onBlur={formik.handleBlur}
                      className="w-full h-[50px] px-2 text-xl border-2 border-gray-400 rounded-lg appearance-none cursor-pointer outline-none bg-white pr-12"
                    >
                      <option value="passport">Паспорт РФ</option>
                      <option value="birthCertificate">
                        Свидетельство о рождении
                      </option>
                    </select>
                    <svg
                      className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none"
                      width="12"
                      height="6"
                    >
                      <path d="M0 0L6 6L12 0H0Z" fill="#928F94" />
                    </svg>
                  </div>
                </div>

                {formik.values.documentType === "passport" ? (
                  <div className="flex gap-5">
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
                        placeholder="1234"
                        maxLength={4}
                      />
                      <div className="mt-1 text-sm text-red-600">
                        {getIn(formik.errors, "documentData.series")}
                      </div>
                    </div>
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
                        placeholder="123456"
                        maxLength={6}
                      />
                      <div className="mt-1 text-sm text-red-600">
                        {getIn(formik.errors, "documentData.number")}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-[280px]">
                    <label
                      htmlFor="birthCertNumber"
                      className="mb-2 text-base font-normal text-gray-400"
                    >
                      Номер свидетельства
                    </label>
                    <input
                      id="birthCertNumber"
                      name="documentData.number"
                      value={formik.values.documentData.number}
                      onChange={(e) => {
                        const value = e.target.value
                          .toUpperCase()
                          .replace(/[^IVXLCDMА-ЯЁ0-9\s]/g, "");
                        formik.setFieldValue("documentData.number", value);
                      }}
                      onBlur={formik.handleBlur}
                      className="h-[50px] p-2 border-2 border-gray-400 rounded-lg appearance-none outline-none text-xl"
                      placeholder="VIII КУ 123456"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      Формат: Римские цифры (VIII), пробел, 2 буквы (КУ),
                      пробел, 6 цифр
                    </div>
                    <div className="mt-1 text-sm text-red-600">
                      {getIn(formik.errors, "documentData.number")}
                    </div>
                  </div>
                )}
              </div>

              <span className="w-[959px] h-[1px] bg-gray-300"></span>

              <div
                className={`flex justify-end px-4 py-8 ${
                  wasSubmitted && isFormValid ? "bg-green-100" : ""
                }`}
              >
                <button
                  type="submit"
                  className={`px-10 py-2 border-[1px] border-[#292929] rounded-lg text-2xl font-bold ${
                    wasSubmitted && isFormValid ? "bg-green-500 text-white" : ""
                  }`}
                >
                  Следующий пассажир
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PassengerForm;
