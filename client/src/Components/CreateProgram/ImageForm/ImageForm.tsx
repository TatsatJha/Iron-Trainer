import { BsPlus } from 'react-icons/bs'

export default function ImageForm() {
  return (
    // Make sure Banners are 16:9 consistently
    <div className='bg-gray-50 border-gray-400 border-2 rounded-xl m-32 mb-16 mx-auto w-[48rem] h-[27rem] flex justify-center'>
        <div className='flex flex-col justify-center'>
          <button className='bg-gray-300 p-1 w-fit mx-auto rounded-xl border-gray-700 border-2'>
            <BsPlus className='text-4xl text-gray-700 stroke-[0.15px]'></BsPlus>
          </button> 
          <p className='text-center mx-auto'>Add Banner</p>
        </div>
    </div>
  )
}
