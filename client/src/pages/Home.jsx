import React, { useEffect } from "react";
import "../App.css";
import Hero from "../components/Hero";
import Title from "../components/Title";
import { GetProducts } from "../apicalls/products";
import { message } from "antd";
import { setLoader } from "../redux/loadersSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [filters, setFilters] = React.useState({
    status: "approved",
  });
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const respone = await GetProducts(filters);
      dispatch(setLoader(false));
      if (respone.success) {
        setProducts(respone.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Hero />
      {/* <Categories /> */}
      <Title content="Featured Ads" />
      {/* <FeaturedDisProducts /> */}
      {/* <Title content="Latest Uploads" /> */}
      {/* <LatestUploads /> */}
      <div className="grid grid-cols-4 gap-5">
        {products?.map((product) => {
          return (
            <div className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2">
              <img
                src={product.images[0]}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="px-2 flex flex-col gap-1">
                <h1 className="text-lg font-semibold ">{product.name}</h1>
                <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">{product.description}</p>
                <span className="flex items-center justify-between text-lg font-semibold text-green-500">
                  Rs. {product.price}
                  <p className="text-sm font-normal text-black">{product.condition}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
