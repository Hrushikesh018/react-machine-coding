import { useMemo, useState } from "react";

function MultiSelectDropdown({
  options = [],
  value = [],
  onChange,
  placeholder = "Search...",
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [options, searchTerm]);

  const handleSelect=(option)=>{
    const exists = value.some(item=>item.value===option.value)

    if(exists){
        onChange(value.filter(item=>item.value!==option.value))
    }else{
        onChange([...value,option])
    }
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Select options</button>
      {isOpen && (
        <div>
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.map((option)=>(
            <label key={option.value}>
                <input
                type="checkbox"
                checked={
                    value.some(item=>item.value===option.value)
                }
                onChange={()=>handleSelect(option)}
                />
                {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelectDropdown;
