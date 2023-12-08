// ProductDisplayPage.jsx
import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";

const ProductDisplayPage = () => {
  const [myproducts, SetmyProducts] = useState();
  const [limit, SetLimit] = useState(4);
  const [skip, Setskip] = useState(0);
  const [totalPage, SetTotalPage] = useState(0);
  function FetchProducts() {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        SetmyProducts(data);
        SetTotalPage((data?.total - 4) / 4);
        console.log(skip);
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    FetchProducts();
  }, [skip]);

  return (
    <div className="product-display-page">
      <Header />
      <div className="product-container">
        {myproducts?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <footer className="footer">
        <b>
          {" "}
          {skip / 4} of {totalPage} page
        </b>
        <br />
        <br />
        {skip > 0 ? (
          <>
            <button className="btn" onClick={() => Setskip(skip - 4)}>
              privious
            </button>{" "}
          </>
        ) : (
          <></>
        )}
        {skip === myproducts?.total - 4 ? (
          <></>
        ) : (
          <>
            {" "}
            <button
              className="btn"
              onClick={() => {
                if (skip >= myproducts?.total - 4) {
                  Setskip(0);
                } else {
                  Setskip(skip + 4);
                }
              }}
            >
              next
            </button>
          </>
        )}
      </footer>
    </div>
  );
};

export default ProductDisplayPage;
