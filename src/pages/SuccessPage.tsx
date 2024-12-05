import Header from "../components/Header/Header";
import SuccessInfoBanner from "../components/SuccessInfoBanner/SuccessInfoBanner";


const SuccessPage = () => {
  return (
    <>
      <Header location={"success"} text={false} findForm={false}/>
       <SuccessInfoBanner />
    </>
  );
};

export default SuccessPage;