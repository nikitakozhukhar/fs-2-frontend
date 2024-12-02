import Header from "../components/Header/Header";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";
import TripDetails from "../components/TripDetails/TripDetails";
import Payment from "../components/Payment/Payment";

const PaymentPage = () => {
  return (
    <>
    <Header location={"train"} text={false} />
    <ProgressPageBar />
    <div className="flex w-[1440px] mx-auto">
      <div className="mr-10">
        <TripDetails />
      </div>
      <div className="">
       <Payment />
      </div>
    </div>
  </>
  );
};

export default PaymentPage;