import Header from "../components/Header/Header";
import Passanger from "../components/Passanger/Passanger";
import TripDetails from "../components/TripDetails/TripDetails";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";

const PassangersPage = () => {
  return (
    <>
      <Header location={"train"} text={false} />
      <ProgressPageBar />
      <div className="flex w-[1440px] mx-auto">
        <div className="mr-10">
          <TripDetails />
        </div>
        <div className="">
          <Passanger />
        </div>
      </div>
    </>
  );
};

export default PassangersPage;
