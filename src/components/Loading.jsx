import loading from '../assets/loading.gif';

const Loading = () => {
  return (
    <div className="wrapper" style={{ background: 'white' }}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
