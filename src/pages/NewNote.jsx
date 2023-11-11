import React from 'react';
import { Header } from '../components';

const NewNote = () => {
  return (
    <div className="w-[1540px] m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-slate-800">
      <Header category="Page" title="New Note"/>
      <div className="flex space-even items-center gap-x-8">
        <div className="bg-gray-200 w-[800px] h-[700px] p-3  rounded-lg shadow-xl">
            Sample text
        </div>
        <div className="bg-gray-200 w-[300px] h-[500px] p-3  rounded-lg shadow-xl">
            text
        </div>
      </div>
    </div>
  )
}

export default NewNote