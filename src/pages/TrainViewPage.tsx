import Header from "../components/Header/Header";
import ProgressPageBar from "../components/ProgressPageBar/ProgressPageBar"

const TrainViewPage = () => {
  return (
    <>
      <Header location={'train'} text={false}/>
      <ProgressPageBar />
      
    </>
    
  );
};

export default TrainViewPage;