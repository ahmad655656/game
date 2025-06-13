import React from 'react'

const InputForm = ({name, type, labelInput} : {name: string, type: string, labelInput: string}) => {
  return (
    <div>
        <label className="block text-sm text-white/70 dark:text-gray-200">{name}</label>
            <input type={type} placeholder={labelInput} className="block w-full border-b-white/70 border-b-[1px] px-4 py-2 mt-2 text-white rounded-sm bg-transparent focus:outline-none" />
    </div>
  )
}

export default InputForm