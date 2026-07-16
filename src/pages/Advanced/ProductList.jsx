import { useMemo, useState } from "react";
  const products = [
    {
      id: 1,
      name: "iPhone",
      category: "Electronics",
    },
    {
      id: 2,
      name: "React Book",
      category: "Books",
    },
  ];
const ProductList = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
var e = 0;
const updateFunction=()=>{

}
 const filteredProducts = useMemo(
  () =>
    products.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || item.category === category)
    ),
  [search, category]
);
  return (
    <div>
        {e}
        <button></button>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <span onClick={() => setCategory("Electronics")}>Electronics</span>
        <span onClick={() => setCategory("Books")}>Books</span>
        <span onClick={() => setCategory("All")}>All</span>
      </div>
      <div>
        {filteredProducts?.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
