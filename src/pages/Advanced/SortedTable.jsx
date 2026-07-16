import { useMemo, useState } from "react";
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Bob", age: 20 },
  { id: 4, name: "David", age: 28 },
];
const SortedTable = () => {
  const [order, setOrder] = useState({
    sortField: "",
    sortOrder: "",
  });

  const handleSort = (field) => {
    let sort = "asc";
    if (order.sortOrder === sort && order.sortField === field) {
      sort = "dsc";
    }
    setOrder({
      sortField: field,
      sortOrder: sort,
    });
  };
  const sortedUsers = useMemo(() => {
    const sorted = [...users];
    if (!order.sortField) {
      return sorted;
    }
    sorted.sort((a, b) => {
      const field = order.sortField;
      let result;
      if (typeof a[field] === "string") {
        result = a[field].localeCompare(b[field]);
      } else {
        result = a[field] - b[field];
      }
      return order.sortOrder === "asc" ? result : -result;
    });
    return sorted;
  }, [order]);
  console.log(order, order.sortOrder);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id", "asc")}>ID</th>
            <th onClick={() => handleSort("name", "asc")}>Name</th>
            <th onClick={() => handleSort("age", "asc")}>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortedTable;
