import { useState } from "react";
import "./Todo.css";
const Table = () => {
  const [sortConfig, setSortingConfig] = useState({
    key:null,
    direction: asc
  });
  const [inputdata,setInputData] = useState('')
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Johnson", age: 25, city: "Bangalore" },
    { id: 2, name: "Bob Smith", age: 30, city: "Hyderabad" },
    { id: 3, name: "Charlie Brown", age: 28, city: "Mumbai" },
    { id: 4, name: "David Miller", age: 35, city: "Delhi" },
    { id: 5, name: "Emma Wilson", age: 22, city: "Chennai" },
    { id: 6, name: "Frank Thomas", age: 40, city: "Pune" },
    { id: 7, name: "Grace Lee", age: 27, city: "Kolkata" },
    { id: 8, name: "Henry Adams", age: 32, city: "Bangalore" },
    { id: 9, name: "Isabella Clark", age: 29, city: "Hyderabad" },
    { id: 10, name: "Jack White", age: 26, city: "Mumbai" },
  ]);
  const handleSort = (key) => {
    let direction  = "asc"
    console.log("came inside");
    if(sortConfig.key===key && sortConfig.direction==='asc'){
        direction ="desc"
    }
    setSortingConfig({key,direction})
  };
  const handleFilter=(e)=>{
    setInputData(e.target.value)
  }
  const displayUsers = users.filter(item=>item.name.toLowerCase().includes(inputdata.toLowerCase())||item.city.toLowerCase().includes(inputdata.toLowerCase()))

  const sorted = [...displayUsers].sort((a,b)=>{
    if(!sortConfig.key) return 0;
    const valA = a[sortConfig.key]
    const valN = b[sortConfig.key]

    if(typeof valA === 'number'){
      return  sortConfig.direction === 'asc' ? valA-valN :valN-valA
    }
    return sortConfig.direction === "asc" ? valA.localeCompare(valN) : valN.localeCompare(valA)
  })
  return (
    <div>
      <table className="tablec">
        <thead>
          <tr>
            <th>id</th>
            <th onClick={() => handleSort("name")}>name</th>
            <th onClick={() => handleSort("age")}>age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item) => (
            <tr key={item.id} className="rowc">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input value={inputdata} onChange={handleFilter} name="search"/>

    </div>
  );
};
export default Table;
