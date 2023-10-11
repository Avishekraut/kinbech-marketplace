import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Tabs,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addproduct, EditProduct } from "../../../apicalls/products";
import { setLoader } from "../../../redux/loadersSlice";

const additionalThings = [
  {
    label: "Bill Available",
    name: "billAvaiable",
  },
  {
    label: "Warranty Available",
    name: "warrantyAvailable",
  },
];

const rules = [
  {
    required: true,
    message: "Required",
  },
];

function ProductsForm({
  showProductForm,
  setShowProductForm,
  selectedProduct,
  getData,
}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const formRef = React.useRef(null);
  const onFinish = async (values) => {
    try {
      dispatch(setLoader(true));
      let response = null;
      if (selectedProduct) {
        response = await EditProduct(selectedProduct._id, values);
      } else {
        values.seller = user._id;
        values.status = "pending";
        response = await Addproduct(values); // Ensure response is assigned here
      }

      dispatch(setLoader(false));
      if (response && response.success) {
        message.success(response.message);
        getData();
        setShowProductForm(false); // Close the form if the operation is successful
      } else {
        message.error(response ? response.message : "An error occurred.");
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const handleCancel = () => {
    setShowProductForm(false);
  };

  useEffect(() => {
    if (selectedProduct) {
      formRef.current.setFieldsValue(selectedProduct);
    }
  }, [selectedProduct]);

  return (
    <Modal
      title=""
      open={showProductForm}
      onCancel={handleCancel}
      centered
      width={1000}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="save" onClick={() => formRef.current.submit()}>
          Save
        </Button>,
      ]}
      onOk={() => {
        formRef.current.submit();
      }}
    >
      <div>
        <h1 className="text-2xl text-center font-semibold">
          {selectedProduct ? "Edit Product" : "Add Product"}
        </h1>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="General" key="1">
            <Form layout="vertical" ref={formRef} onFinish={onFinish}>
              <Form.Item label="Name" name="name" rules={rules}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label="Description" name="description" rules={rules}>
                <TextArea type="text" />
              </Form.Item>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="Price" name="price" rules={rules}>
                    <Input type="number" />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item label="Category" name="category" rules={rules}>
                    <Select>
                      <option value="Household Electronics">
                        Household Electronics
                      </option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                      <option value="Smartphone">Smartphone</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Camera">Camera</option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item label="Condition" name="condition" rules={rules}>
                    <Select>
                      <option value="Brand New">Brand New</option>
                      <option value="Used-Like-New">Used-Like New</option>
                      <option value="Used-Good">Used-Good</option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <div className="flex gap-10">
                {additionalThings.map((item) => {
                  return (
                    <Form.Item
                      label={item.label}
                      name={item.name}
                      valuePropName="checked"
                    >
                      <Input
                        type="checkbox"
                        className="w-8 h-8"
                        value={item.name}
                        onChange={(e) => {
                          formRef.current.setFieldsValue({
                            [item.name]: e.target.checked,
                          });
                        }}
                        checked={formRef.current?.getFieldsValue(item.name)}
                      />
                    </Form.Item>
                  );
                })}
              </div>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Images" key="2">
            <h1>Images</h1>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Modal>
  );
}

export default ProductsForm;
