import { BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Pagination = () => {
  return (
    <div className='flex gap-4 items-center'>
      <BsChevronLeft/>
      <div className='flex gap-3 font-thin cursor-pointer'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <BsChevronRight/>
    </div>
  )
}

export default Pagination