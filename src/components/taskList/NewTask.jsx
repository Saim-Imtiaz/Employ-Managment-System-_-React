import React from 'react'

const NewTask = ({data}) => {
  // If data is empty, don't render the box
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  return (
    <div className='h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm capitalize'>
          {data.category || "No Category"}
        </h3>
        <h4 className='text-sm'>{data.date || "No Date"}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>{data.title || "No Title"}</h2>

      <p className='text-sm mt-2'>
        {data.description || "No Description Available"}
      </p>

      <div className="mt-4">
        <button className='bg-yellow-500 rounded py-1 px-2 text-sm'>Accept Task</button>
      </div>
    </div>
  )
}

export default NewTask
