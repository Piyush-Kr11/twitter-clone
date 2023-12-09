import React from "react";

const Profilepage = () => {
  const [data, setData] = React.useState(undefined);
  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch("https:dummyjson.com/products");
      const response = await data.json();
      setData(response);
    };
    getData();
  }, []);
  return (
    <>
    <div
              style={{
                display: "flex",
                flexWrap:"wrap",
                // justifyContent: "flex-start",
                // alignItems: "center",
              }}
            >
      {data
        ? data.products.map((item) => (
            <div width="100px" height= "100px" border="2px solid red">
              <div>{item.title}</div>
              <img src={item.thumbnail} alt="image not found" width="100px" height="100px"/>
              <div>{item.price}</div>
              <button>Buy Rs{item.price}</button>
              </div>
          ))
        : ""}
        </div>
    </>
  );
};

export default Profilepage;
