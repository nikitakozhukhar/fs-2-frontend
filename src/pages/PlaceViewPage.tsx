import Header from "../components/Header/Header";
import TrainPreview from "../components/TrainPreview/TrainPreview";
import FilterWidget from "../components/FilterWidget/FilterWidget";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";

const PlaceViewPage = () => {
  return (
    <>
      <Header location={"train"} text={false} />
      <ProgressPageBar />
      <div className="container flex mx-auto">
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
