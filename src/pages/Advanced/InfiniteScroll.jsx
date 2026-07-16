import { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (currentSkip) => {
    try {
      setLoading(true);
      const resposne = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${currentSkip}`,
      );
      const data = await resposne.json();
      setProducts((prev) => [...prev, ...data.products]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(0);
  }, []);
  useEffect(() => {
    const hanleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (reachedBottom && !loading) {
        const nextSkip = skip + 10;
        fetchData(nextSkip);
        setSkip(nextSkip);
      }
    };
    window.addEventListener("scroll", hanleScroll);

    return () => {
      window.removeEventListener("scroll", hanleScroll);
    };
  }, [skip,loading]);

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};
export default InfiniteScroll;
