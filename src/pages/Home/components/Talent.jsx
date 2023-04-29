import sample from '../../../assets/sample.jpg';

const Talents = () => {
  return (
    <section className='flex flex-col md:flex-row gap-6'>
      <div className='md:w-1/2'>
        <img src={sample} />
      </div>
      <div className='flex items-center justify-center md:w-1/2'>
        <div className='space-y-4'>
          <h2>Leverage our talent pool</h2>
          <p className='leading-5 md:leading-6 font-thin'>
            Are you looking to take your team to the next level? Look no further! We have a pool of
            talented individuals ready to join your organization and contribute to your success.
            Don&apos;t miss out on the opportunity to hire top-notch talent and elevate your business to
            new heights.
          </p>
          <button className='btn'>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Talents;
