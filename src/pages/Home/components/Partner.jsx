import sample from '../../../assets/sample.jpg';

const Partner = () => {
  return (
    <section className='flex flex-col md:flex-row gap-6'>
      <div className='md:w-1/2'>
        <img src={sample} />
      </div>
      <div className='flex items-center justify-center md:w-1/2'>
        <div className='space-y-4'>
          <h2>Partner with us</h2>
          <p className='leading-5 md:leading-6 font-thin'>
            Partnering with us means joining forces to achieve common goals and maximize mutual
            benefits. We believe that collaboration is essential for success, and we welcome
            partnerships with businesses, organizations, and individuals who share our vision and
            values.
          </p>
          <button className='btn'>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Partner;
