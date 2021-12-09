const Hero = (props) => {
  const { data } = props;

  return <div>{data.restaurant.name}</div>;
};

export default Hero;
