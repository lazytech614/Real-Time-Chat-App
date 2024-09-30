import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useConversationContext } from '../../context/ConversationContext';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversationContext();
  const { getConversation, loading } = useGetConversation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      const conversations = await getConversation(); // Call the function and wait for its result

      const conversation = conversations.find((c) => 
        c.fullName.toLowerCase().includes(search.toLowerCase())
      );

      if (conversation) {
        setSelectedConversation(conversation);
        setSearch("");
      } else {
        toast.error("No user found");
      }
    } catch (error) {
      toast.error("Error fetching conversations");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input 
          type="text" 
          placeholder='Search...' 
          className='input input-bordered rounded-full'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='bg-blue-600 rounded-full flex items-center justify-center p-2'>
          <IoIosSearch className='h-6 w-6 outline-none' />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
