
// 'use client';

// import { useState } from 'react';
// import { Input } from '@/components/ui/input';

// type SearchBarProps = {
//   value: string;
//   onChange: (value: string) => void;
// };

// const SearchBar = ({ value, onChange }: SearchBarProps) => {
//   const [inputValue, setInputValue] = useState(value);
//   const [isFocused, setIsFocused] = useState(false);

//   const handleSearch = () => {
//     onChange(inputValue);
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleSearch();
//       }}
//       className="w-full max-w-3xl mx-auto mt-10"
//     >
//       <div
//         className={`flex items-center rounded-md overflow-hidden border transition-all duration-300 bg-gray-800 ${
//           isFocused ? 'border-yellow-500' : 'border-gray-700'
//         }`}
//       >
//         <Input
//           type="text"
//           placeholder="Search for premium cars..."
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className="flex-grow bg-transparent text-yellow-100 placeholder-yellow-400 border-none focus:ring-0 focus:outline-none text-base px-5 py-3"
//         />
//         <button
//           type="submit"
//           className="px-5 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;


'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    onChange(inputValue);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="w-full px-4 sm:px-6 md:px-0 max-w-3xl mx-auto mt-6"
    >
      <div
        className={`flex items-center rounded-lg overflow-hidden border transition-all duration-300 bg-gray-800 ${
          isFocused ? 'border-yellow-500' : 'border-gray-700'
        }`}
      >
        <Input
          type="text"
          placeholder="Search for premium cars..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-grow bg-transparent text-yellow-100 placeholder-yellow-400 border-none focus:ring-0 focus:outline-none text-sm sm:text-base px-4 py-3"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all text-sm sm:text-base"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
