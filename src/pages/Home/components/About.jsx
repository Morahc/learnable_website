import sample from '../../../assets/sample.jpg';

const About = () => {
  return (
    <section>
      <div>
        <h2 className='text-center'>What we do</h2>
        <div className='flex gap-4'>
          <div className='basis-1/2'>
            <img src={sample} />
          </div>
          <div className='basis-1/2'>
            <p>
              Learnable, an initiative of Genesys Tech Hub, is a 6-month internship program designed
              to raise world class young talents in the tech and innovation industry.
            </p>
            <p>
              We primarily educate and groom software developers and designers, preparing them for
              the industry.
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='basis-1/2'>
            <h3>Training & mentorship</h3>
            <p>
              We don’t just train with facilitators, we give our interns the opportunity to be
              individually guided by mentors who were once part of the Learnable internship and are
              now established, making significant impact in different tech companies.
            </p>
          </div>
          <div className='basis-1/2'>
            <img src={sample} />
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='basis-1/2'>
            <img src={sample} />
          </div>
          <div className='basis-1/2'>
            <h3>Talent outsourcing</h3>
            <p>
              After successfully completing the program, we enlist our graduates in our talent pool
              and outsource them to different companies around the world to work and make impacts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
