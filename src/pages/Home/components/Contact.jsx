import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { HiLocationMarker, HiOutlineMail, HiPhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <section className='flex flex-col justify-center items-center space-y-12'>
      <div className='text-center'>
        <h1 className='mb-5'>Contact Us</h1>
        <p>Have a question or just want to say hi? We would love to hear from you.</p>
      </div>
      <div className='flex rounded shadow-lg border'>
        <div className='flex flex-col justify-between bg-blue-900 text-white p-8 rounded-md md:rounded-r-md'>
          <div className='space-y-2'>
            <h3>Contact Information</h3>
            <p>Everything you need to know about the learnable program</p>
          </div>
          <ul className='flex flex-col gap-y-5'>
            <li className='flex items-center gap-2'>
              <HiPhone className='text-3xl' />
              <span>+234 813 983 3301</span>
            </li>
            <li className='flex items-center gap-2'>
              <HiOutlineMail className='text-3xl' />
              <span>Learnable@genesystechhub.com</span>
            </li>
            <li className='flex items-center gap-2'>
              <HiLocationMarker className='text-3xl' />
              <div>
                {/* <span>KILOMETER 7, ENUGU/ PORTHARCOURT, </span>
                <span>EXPRESSWAY,CENTENARY CITY, ENUGU,</span>
                <span>NIGERIA.</span> */}
              </div>
            </li>
          </ul>
          <div className='flex gap-4 text-lg'>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsYoutube />
          </div>
        </div>
        <form className='space-y-6 p-8 w-full'>
          <div className='flex gap-6'>
            <div className='md:basis-1/2'>
              <label htmlFor='firstname'>First Name</label>
              <input className='form-input mt-2' type='text' name='firstname' />
            </div>
            <div className='md:basis-1/2'>
              <label htmlFor='lastname'>Last Name</label>
              <input className='form-input mt-2' type='text' name='lastname' />
            </div>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input className='form-input mt-2' type='email' name='email' />
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea className='form-input mt-2' name='message' rows={5} />
          </div>
          <div className='flex justify-end'>
            <button type='submit' className='btn bg-blue-900'>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
