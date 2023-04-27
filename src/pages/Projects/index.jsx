import Card from './components/Card';
import Pagination from './components/Pagination';

const index = () => {
  return (
    <section className='space-y-8'>
      <form className='flex gap-x-2 w-full md:w-1/2'>
        <select className='form-select w-full'>
          <option selected>Learning Path</option>
        </select>
        <select className='form-select w-full'>
          <option selected>Learning Year</option>
        </select>
        <button type='submit' className='btn'>
          Filter
        </button>
      </form>
      <div className='flex flex-col items-center gap-y-10'>
        <div className='grid gap-4 md:grid-cols-3'>
          <Card />
          <Card />
          <Card />
        </div>
        <Pagination/>
      </div>
    </section>
  );
};

export default index;
