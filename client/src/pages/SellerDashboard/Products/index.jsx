import React, { useEffect, useState } from "react";
import { Button, Table, message } from "antd";
import ProductsForm from "./ProductsForm";
import { useDispatch } from "react-redux";
import { GetProducts } from "../../../apicalls/products";
import { setLoader } from "../../../redux/loadersSlice";
import { BiEdit } from "react-icons/bi";

function Products() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts();
      dispatch(setLoader(false));
      if (response.success) {
        setProducts(response.products);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message(error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Condition",
      dataIndex: "condition",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-5 cursor-pointer">
            <BiEdit
              size={18}
              onClick={() => {
                setSelectedProduct(record);
                setShowProductForm(true);
              }}
            />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-end">
        <Button type="default" onClick={() => {
          setSelectedProduct(null);
          setShowProductForm(true)
        }}>
          Add Product
        </Button>
      </div>
      <Table className="mt-4" columns={columns} dataSource={products} />
      {showProductForm && (
        <ProductsForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
          selectedProduct={selectedProduct}
          getData={getData}
        />
      )}
    </div>
  );
}

export default Products;
