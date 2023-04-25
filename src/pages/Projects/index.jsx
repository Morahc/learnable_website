import Card from './components/Card';

const index = () => {
  return (
    <section className='space-y-8'>
      <form className='flex gap-x-2 w-full md:w-1/2'>
        <select className='form-select w-full'>
          <option value='Learning Path'>Learning Path</option>
        </select>
        <select className='form-select w-full'>
          <option value='Session'>Learning Year</option>
        </select>
        <button type='submit' className='btn'>
          Filter
        </button>
      </form>
      <div className='flex flex-col items-center gap-3'>
        <div className='grid gap-4 md:grid-cols-3'>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className='font-thin'>1 2 3</div>
      </div>
    </section>
  );
};

export default index;
