import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header, IMG_1, IMG_2 } from "./LayoutBanner.styles";

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
        <IMG_1 src="/images/porsche01.png/" />
        <IMG_2 src="/images/porsche02.png/" />
        <IMG_1 src="/images/porsche03.png/" />
        <IMG_2 src="/images/porsche01.png/" />
        <IMG_1 src="/images/porsche02.png/" />
        <IMG_2 src="/images/porsche03.png/" />
      </Slider>
    </Header>
  );
}
