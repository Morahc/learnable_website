// import img from '../assets/Genesys logo 1.png'
import logo from '../assets/Logo.png'

export default function Footer() {
  return (
    <div className="w-full h-72 mt-6 bg-orange-50 flex">
      <div className="w-1/5 flex-col ml-20 pt-14 pb-8">
    {/* <img src={img} className="mb-8 w-10" /> */}
   <img src={logo} className="w-10" />
      </div>
      <div className="w-1/5 flex-col">
        <h1 className='pt-14 font-medium text-sm'>GENESYS INITIATIVES</h1>
        <p className='pt-2 font-light '>Learnable</p>
        <p className='pt-1 font-light'>Codeville</p>
        <p className='pt-1 font-light'>Spark</p>
      </div>
      <div className="w-1/5 flex-col ">
        <h1 className='pt-14 font-medium text-sm'>Location</h1>
        <p className='pt-2 font-light'>KILOMETER 7, ENUGU/PORT</p>
        <p className='pt-1 font-light'>HARCOURT, EXPRESSWAY,</p>
        <p className='pt-1 font-light'>CENTENARY CITY, ENUGU,</p>
        <p className='pt-1 font-light'>NIGERIA.</p>
      </div>
      <div className='w-2/5 flex-col ml-16 mr-20'>
        <h1 className='col-span-2 pt-14 font-normal text-2xl'>STAY CONNECTED</h1>
        <p className='pt-6 font-light'>Join our mailing list to receive information about our work and new learning opportunities.</p>
      <div className='flex pt-6 mb-2'>
        <input type="search" placeholder='Enter Your Email' className='p-1 border-2 font-extralight w-72' />
        <button className='bg-orange-400 ml-2 py-1 px-4 rounded-lg text-white'>Subscribe</button>
      </div>
      </div>
      
    </div>
    
  )
}
