import Header from "../components/Header/Header";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";
import FilterWidget from "../components/FilterWidget/FilterWidget";
import LastTickets from "../components/LastTickets/LastTickets";

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

          </section>
      </div>
    </>
  );
};

export default TrainViewPage;
