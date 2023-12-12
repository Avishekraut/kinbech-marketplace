import React, { useEffect } from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetProductById, GetProducts } from "../../apicalls/products";
import { setLoader } from "../../redux/loadersSlice";

const ProductInfo = () => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [product, setProduct] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const respone = await GetProductById(id);
      dispatch(setLoader(false));
      if (respone.success) {
        setProduct(respone.data);
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
    product && (
      <div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-2">
            <img
              src={product.images[selectedImageIndex]}
              alt="Product image"
              className="w-full h-96 object-cover rounded-md"
            />

            <div className="flex gap-5">
              {product.images.map((image, index) => {
                return (
                  <img
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                      selectedImageIndex === index
                        ? "border-2 border-green-500 border-solid p-[2px]"
                        : ""
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                    src={image}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductInfo;
