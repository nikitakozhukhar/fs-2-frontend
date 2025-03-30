// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export const getCities = async (term: string) => {
//   try {
//     const response = await axios.get(
//       `https://students.netoservices.ru/fe-diplom/routes/cities?name=${encodeURIComponent(term)}`
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error('Ошибка при получении данных');
//   }
// };

// // Компонент для отображения списка городов
// const CitiesQuery = ({ term }: { term: string }) => {
//   const { isLoading, isError, data, error } = useQuery({
//     queryKey: ['cities', term],
//     queryFn: () => getCities(term),
//   });

//   if (isLoading) {
//     return <div>Загрузка...</div>;
//   }

//   if (isError) {
//     return <div>Ошибка: {error.message}</div>;
//   }

//   return (
//     <div>
//       {data?.map((city: any) => (
//         <div key={city.id}>{city.name}</div>
//       ))}
//     </div>
//   );
// };

// export default CitiesQuery;