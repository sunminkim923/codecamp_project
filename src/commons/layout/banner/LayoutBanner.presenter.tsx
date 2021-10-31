import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header, ImgItem } from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Header>
      <Slider {...settings}>
        <ImgItem src="/images/IMG_Banner01.png" />
        <ImgItem src="/images/IMG_Banner02.png" />
        <ImgItem src="/images/IMG_Banner03.png" />
      </Slider>
    </Header>
  );
}
