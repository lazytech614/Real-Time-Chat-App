import React, {useState} from 'react'

const Checkbox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [gender, selectGender] = useState("")

  return (
    <div className='w-full h-10 bg-[#1D232A] p-2 px-4 rounded-lg border border-gray-700 text-[#9CA3AF] relative'>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>{gender === "" ? "Select gender" : `${gender}`}</div>
        {isOpen && (
            <div className='absolute bottom-[-160px] left-0 w-full flex flex-col gap-2 bg-[#1D232A] p-2 rounded-lg'>
                <div className='bg-black p-2 rounded-lg cursor-pointer' onClick={() => {selectGender("Male"); setIsOpen(false)}}>Male</div>
                <div className='bg-black p-2 rounded-lg cursor-pointer' onClick={() => {selectGender("Female"); setIsOpen(false)}}>Female</div>
                <div className='bg-black p-2 rounded-lg cursor-pointer' onClick={() => {selectGender("Others"); setIsOpen(false)}}>Others</div>
            </div>
        )}
    </div>
  )
}

export default Checkbox