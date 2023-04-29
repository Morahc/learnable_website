import sample from '../../../assets/sample.jpg';

const Tracks = () => {
  return (
    <section className='flex flex-col md:flex-row gap-x-8'>
      <div className='flex items-center justify-center md:basis-1/2'>
        <div className='space-y-4'>
          <h2>Learning tracks</h2>
          <p className='leading-5 md:leading-6 font-thin'>
            We aim to build an ecosystem for young techies and startup companies that create value
            and make a difference while being up to date with the new technologies.
          </p>
        </div>
      </div>
      <div className='md:basis-1/2'>
        <img src={sample} />
      </div>
    </section>
  );
};

export default Tracks;
