import { useState } from 'react';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect = ({ value, onChange }: CustomSelectProps) => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { value: 'date', label: 'Времени' },
    { value: 'price', label: 'Стоимости' },
    { value: 'duration', label: 'Длительности' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-top
          w-[150px] h-8 px-4 
          bg-white border-b border-gray-300 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-transparent
        "
      >
        {selected ? options.find(o => o.value === selected)?.label : ''}
        
      </button>
      
      {isOpen && (
        <div className="absolute -top-3 z-10 w-full mt-1 bg-white border-r border-b border-l border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setSelected(option.value);
                setIsOpen(false);
              }}
              className="
                px-4 py-2 hover:bg-[#FFCA62] cursor-pointer border-b border-gray-200
                "
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;