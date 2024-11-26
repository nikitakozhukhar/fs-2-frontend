import Header from "../components/Header/Header";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";
import FilterWidget from "../components/FilterWidget/FilterWidget";
import LastTickets from "../components/LastTickets/LastTickets";
import TrainDetails from "../components/TrainDetails/TrainDetails";

const TrainViewPage = () => {
  return (
    <>
      <Header location={"train"} text={false} />
      <ProgressPageBar />
      <div className="train-container">
        <aside className="aside-widgets">
          <FilterWidget />
          <LastTickets />
        </aside>
          <section className="train-details-container">
            <TrainDetails />
          </section>
      </div>
    </>
  );
};

export default TrainViewPage;
