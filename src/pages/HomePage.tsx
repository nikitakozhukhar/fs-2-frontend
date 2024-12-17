import About from '../components/About/About';
import Header from '../components/Header/Header';
import HowItWork from '../components/HowItWork/HowItWork';
import Review from '../components/Review/Review';

const HomePage = () => {
  return (
    <div className="min-h-[100vh]">
      <Header />
      <About />
      <HowItWork />
      <Review />
    </div>
  );
};

export default HomePage;