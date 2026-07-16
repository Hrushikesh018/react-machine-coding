import { useRef, useState } from 'react';
import './Todo.css'
const AutoComplete=()=>{
    const countries = [
  "Argentina",
  "Australia",
  "Belgium",
  "Belize",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Denmark",
  "Dominican Republic",
  "Egypt",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Japan",
  "Jordan",
  "Kenya",
  "Kuwait",
  "Luxembourg",
  "Madagascar",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Oman",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "United States",
  "Vietnam"
];
    const [search,setSearch] = useState('')
    const [suggestions,setSuggestions] = useState([])
    const [active,setActive] = useState(-1)
    const timeOutRef = useRef(null)
    
    const handleSuggestionClick=(i)=>{
        setSearch(i)
        setSuggestions([])
        setActive(-1)
    }
    const handleInputChange=(item)=>{
        console.log(item,'git clala')
        if(item.trim()===''){
            setSuggestions([])
            return
        }
        const filtered = countries.filter(country=>country.toLowerCase().includes(item.toLowerCase()))
        setSuggestions(filtered)
        setActive(-1)
    }
    const debounce=(item)=>{
        
            if(timeOutRef.current){
                clearTimeout(timeOutRef.current)
            }
        timeOutRef.current = setTimeout(()=>handleInputChange(item),300)
    }
    const handleKeyDown=(e)=>{
        if(e.key==='ArrowDown'){
            setActive(prev=>prev <suggestions.length-1 ? prev +1:prev)
        }
         if(e.key==='ArrowUp'){
                 setActive(prev=>prev > 0 ? prev -1:prev)
        }
         if(e.key==='Enter'){
                if(active>=0){
                    handleSuggestionClick(suggestions[active])
                }
        }
    }
    return(
        <div>
            <input value={search} onChange={(e)=>{setSearch(e.target.value);debounce(e.target.value)}}
            onKeyDown={handleKeyDown}/>
            <div >
                {suggestions?.map((item,index)=>(
                    <div key={index} onClick={()=>handleSuggestionClick(item)} style={{background:index===active ? "black":''}}>{item}</div>
                ))}
            </div>
        </div>
    )
}

export default AutoComplete;