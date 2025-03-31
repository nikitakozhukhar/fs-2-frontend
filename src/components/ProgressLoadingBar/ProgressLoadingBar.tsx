import { progressStore } from "../../store/progressStore";

const ProgressLoadingBar = () => {
  const { progress } = progressStore();

  const getProgressColor = () => {
    if (progress < 30) return "bg-orange-200";
    if (progress < 70) return "bg-orange-500";
    return "bg-green-500";
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-[3px] bg-gray-200 z-50 ${
        progress >= 100 ? "opacity-0 transition-opacity duration-500" : ""
      }`}
    >
      <div
        className={`h-full ${getProgressColor()} transition-all duration-300ease-out`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressLoadingBar;
