import sample from '../../../assets/sample.jpg';

const Card = () => {
  return (
    <div className='flex flex-col border shadow-sm'>
      <img src={sample} />
      <div className='p-4'>
        <h4 className='font-bold'>Title</h4>
        <div className='flex justify-between'>
          <p>Team Name</p>
          <p className='small italic'>Session</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
