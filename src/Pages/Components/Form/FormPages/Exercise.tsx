import React from 'react'
import FormQuestion from '../FormComponents/FormQuestion';

export default function Exercise() {
  return (
    <div>
        <form className='ml-14 w-fit p-4 rounded-xl border-black border-2 border-solid'>
            <FormQuestion question='Exercise Name' type='text'></FormQuestion>
            <FormQuestion question='Number of sets' type='number'></FormQuestion>
            <FormQuestion question='Rep range' type='text'></FormQuestion>
            <FormQuestion question='Descriptions' type='text-area'></FormQuestion>
        </form>
    </div>
  )
}
