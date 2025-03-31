interface BannerProps {
  src: string;
}

const Banner: React.FC<BannerProps> = ({ src }) => {
  return (
    <div
      className="absolute top-0 left-0 -z-10 w-full h-[985px] bg-[url('/src/img/banner.png')] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="absolute top-0 left-0 bg-black bg-opacity-60 w-[100%] h-[60px] z-10"></div>
    </div>
  );
};

export default Banner;
