import Header from "../components/Header/Header";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";
import FilterWidget from "../components/FilterWidget/FilterWidget";
import TrainPreview from "../components/TrainPreview/TrainPreview";

const PlaceViewPage = () => {
  return (
    <>
      <Header location={"train"} text={false} />
      <ProgressPageBar />
      <div className="flex w-[1440px] mx-auto">
        <div className="mr-10">
          <FilterWidget />
        </div>
        <div className="">
          <TrainPreview />
        </div>
      </div>
    </>
  );
};

export default PlaceViewPage;