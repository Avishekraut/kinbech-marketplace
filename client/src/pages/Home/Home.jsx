import React, { useEffect } from "react";
import "../../App.css";
import Hero from "../../components/Hero";
import { GetProducts } from "../../apicalls/products";
import { message } from "antd";
import { setLoader } from "../../redux/loadersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Filters from "./Filters";
import { IoFilter } from "react-icons/io5";

const Home = () => {
  const [showFilters, setShowFilters] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  const [filters, setFilters] = React.useState({
    status: "approved",
    category: [],
    condition: [],
  });
  const navigate = useNavigate();
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
  }, [filters]);

  return (
    <div>
      {/* <Hero /> */}
      {/* <h1 className="my-6 font-semibold text-lg">Featured Ads</h1> */}
      <div className="flex gap-4">
        {showFilters && (
          <Filters
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            filters={filters}
            setFilters={setFilters}
          />
        )}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-5 items-center">
            {!showFilters && (
              <IoFilter
                size={24}
                className="cursor-pointer"
                onClick={() => setShowFilters(!showFilters)}
              />
            )}
            <input
              type="text"
              placeholder="Search Products here"
              className="border border-gray-300 rounded border-solid w-full p-2"
            />
          </div>
          <div
            className={`
        grid gap-5 ${showFilters ? "grid-cols-3" : "grid-cols-4"}
        `}
          >
            {products?.map((product) => {
              return (
                <div
                  className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2 cursor-pointer"
                  key={product._id}
                  onClick={() => navigate(`/product/${product._id}`)}
                >
                  <img
                    src={product.images[0]}
                    alt=""
                    className="w-full h-52 object-cover"
                  />
                  <div className="px-2 flex flex-col gap-1">
                    <h1 className="text-lg font-semibold ">{product.name}</h1>
                    <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {product.description}
                    </p>
                    <span className="flex items-center justify-between text-lg font-semibold text-green-500">
                      Rs. {product.price}
                      <p className="text-sm font-normal text-black">
                        {product.condition}
                      </p>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
