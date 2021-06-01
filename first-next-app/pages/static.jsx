const staticPage = ({ time }) => {
  return <>{time}</>;
};

export const getStaticProps = async () => {
  return { Props: { time: new Date().toISOString } };
};

export default staticPage;
