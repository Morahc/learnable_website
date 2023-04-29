import sample from '../../../assets/sample.jpg';

const Hero = () => {
  return (
    <section>
      <div className='p-8 flex items-center gap-x-8'>
        <div className='space-y-8 basis-1/2'>
          <h1>
            <span>We Build</span> World-Class
          </h1>
          <h1>Tech Talents</h1>
          <p>
            The worldwide shortage of skilled tech professionals has had a significant impact on the
            economies of various countries. To address this issue, we are training individuals in
            technology and then outsourcing them to work in a variety of tech companies.
          </p>
          <div className='flex items-center gap-x-6'>
            <button className='btn'>Start your journey</button>
            <p>Watch video</p>
          </div>
          <div className='flex gap-6'>
            <div>
              <h3>456</h3>
              <p className='small'>Software Developers Tranined</p>
            </div>
            <div>
              <h3>3k+</h3>
              <p className='small'>Software Developers Tranined</p>
            </div>
            <div>
              <h3>232</h3>
              <p className='small'>Product Designers Tranined</p>
            </div>
          </div>
        </div>
        <div className='basis-1/2'>
          <img src={sample} className='w-full' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
