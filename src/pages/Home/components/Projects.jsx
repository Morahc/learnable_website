import sample from '../../../assets/sample.jpg';

const Projects = () => {
  return (
    <section className='flex flex-col md:flex-row gap-6 bg-orange-50'>
      <div className='flex items-center justify-center md:w-1/2'>
        <div className='space-y-4'>
          <h2>Projects of past interns</h2>
          <p className='leading-5 md:leading-6 font-thin'>
            Talk is cheap! Check out these amazing projects created by some of our past interns! We&lsquo;re so proud to have provided a platform for their creativity and growth.
          </p>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='md:w-1/2'>
        <img src={sample} />
      </div>
    </section>
  );
};

export default Projects;