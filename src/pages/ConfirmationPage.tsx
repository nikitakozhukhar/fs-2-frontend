import Header from "../components/Header/Header";
import TripDetails from "../components/TripDetails/TripDetails";
import Confirmation from "../components/Confirmation/Confirmation";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";

const ConfirmationPage = () => {
  return (
    <>
      <Header location={"train"} text={false} />
      <ProgressPageBar />
      <div className="flex w-[1440px] mx-auto">
        <div className="mr-10">
          <TripDetails />
        </div>
        <div className="">
          <Confirmation />
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
