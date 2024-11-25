import Header from "../components/Header/Header";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";
import FilterWidget from "../components/FilterWidget/FilterWidget";

const TrainViewPage = () => {
  return (
    <>
      <Header location={"train"} text={false} />
      <ProgressPageBar />
      <div className="train-container">
        <FilterWidget />
      </div>
    </>
  );
};

export default TrainViewPage;
