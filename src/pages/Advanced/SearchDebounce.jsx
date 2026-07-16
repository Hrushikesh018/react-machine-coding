import { useEffect, useRef, useState } from "react";

const SearchDebounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef();

  const fetchData = async (value) => {
    if (!value.trim()) {
      setValues([]);
      setShowDropdown(false);
      return;
    }
    try {
      setLoading(true);
      const data = await fetch(
        `https://dummyjson.com/products/search?q=${value}`,
      );
      const res = await data.json();
      setValues(res.products);
      setShowDropdown(true);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  const handleDropdownClick = (val) => {
    setSearchTerm(val);
    setShowDropdown(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div ref={containerRef} style={{ width: "300px", position: "relative" }}>
      <input value={searchTerm} onChange={handleSearch} />
      {showDropdown && (
        <div
          style={{
            maxHeight: "250px",
            overflowY: "auto",
            position: "absolute",
            width: "100%",
            background: "white",
          }}
        >
          {values.length === 0 ? (
            <div>No results found</div>
          ) : (
            values.map((item) => (
              <div
                onClick={() => handleDropdownClick(item.title)}
                key={item.id}
              >
                {item.title}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default SearchDebounce;
