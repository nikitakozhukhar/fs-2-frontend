import Header from "../components/Header/Header";
import Payment from "../components/Payment/Payment";
import TripDetails from "../components/TripDetails/TripDetails";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar";

const PaymentPage = () => {
  return (
    <>
      <Header location={"train"} text={false} />
      <ProgressPageBar />
      <div className="container flex mx-auto">
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
