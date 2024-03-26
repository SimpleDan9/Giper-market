import React from 'react'
import Slider from 'react-slick'
import useGetBanner from '../../service/query/useGetBanner'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right:"38px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  left:"38px", zIndex:"50" }}
      onClick={onClick}
    />
  );
}

const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const Banner = () => {

  const { data, isLoading } = useGetBanner();


  return <Slider {...setting}>
    {data?.map((item) => (
      <div key={item.id}>
        <img src={item.img} alt="" />
      </div>
    ))}
  </Slider>
}

export default Banner
