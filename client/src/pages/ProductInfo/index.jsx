import React, { useEffect } from "react";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetProductById, GetProducts } from "../../apicalls/products";
import { setLoader } from "../../redux/loadersSlice";
import Divider from "../../components/Divider";
import moment from "moment";
import BidModal from "./BidModal";

const ProductInfo = () => {
  const [showAddNewBid, setShowAddNewBid] = React.useState(false);
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
        <div className="grid grid-cols-2 gap-5">
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

          {/* Product Details */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">{product.name}</h1>
              <span className="font-medium text-green-500">
                {product.condition}
              </span>
              <span className="font-medium text-sm">
                Posted: {moment(product.createdAt).fromNow()}
              </span>
              <span>{product.description}</span>
            </div>
            <Divider />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">Item Details</h1>
              <div className="flex justify-between mt-2">
                <span>Price</span>
                <span>Rs. {product.price}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Category</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Bill Available</span>
                <span>{product.billAvailable ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Warranty Available</span>
                <span>{product.warrantyAvailable ? "Yes" : "No"}</span>
              </div>
            </div>
            <Divider />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">Seller Details</h1>
              <div className="flex justify-between mt-2">
                <span>Name</span>
                <span>{product.seller.name}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Email</span>
                <span>{product.seller.email}</span>
              </div>
            </div>

            <Divider />

            <div className="flex flex-col">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Bids</h1>
                <Button onClick={() => setShowAddNewBid(!showAddNewBid)}>
                  New Bid
                </Button>
              </div>
            </div>
          </div>
        </div>
        {showAddNewBid && <BidModal 
        product={product}
        reloadData={getData}
        showBidModal={showAddNewBid}
        setShowBidModal={setShowAddNewBid}
        />}
      </div>
    )
  );
};

export default ProductInfo;
