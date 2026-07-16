import { useEffect, useState } from "react";

const API_URL = "https://swapi.dev/api/people";
function Apicallcomponent() {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState(API_URL);
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const res = await response.json();

      setData((prev) => [...prev, ...res.results]);
      setNextUrl(res.next);
      setPageCount((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(API_URL);
  }, []);

  const handleNext = () => {
    fetchData(nextUrl);
  };
  console.log(nextUrl,'this is next url')
  const handleLoadAll = async() => {
    let currentUrl = nextUrl
    let loadedPages = pageCount
    try {
        while(currentUrl && loadedPages<6){
            const response  = await fetch(currentUrl)
            const res = await response.json();
            setData(prev=>[...prev,...res.results])
            currentUrl = res.next
            loadedPages++
        }
        setNextUrl(currentUrl)
        setPageCount(loadedPages)
    } catch (error) {
        console.log(error)
    }
  };
 
  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleLoadAll}>Load All</button>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Gender</th>
          <th>Birth yaer</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.created-item.name}>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.mass}</td>
              <td>{item.gender}</td>
              <td>{item.birth_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Apicallcomponent;
