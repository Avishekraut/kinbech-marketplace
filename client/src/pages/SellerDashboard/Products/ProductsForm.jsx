import { Button, Col, Form, Input, Modal, Row, Select, Tabs } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const additionalThings = [
  {
    label: "Bill Available",
    name: "Bill Available",
  },
  {
    label: "Warranty Available",
    name: "Warranty Available",
  },
];

function ProductsForm({ showProductForm, setShowProductForm }) {
  const handleCancel = () => {
    setShowProductForm(false);
  };

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
        <Button key="ok">OK</Button>,
      ]}
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="General" key="1">
          <Form layout="vertical">
            <Form.Item label="Name" name="name">
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <TextArea type="text" />
            </Form.Item>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Form.Item label="Price" name="price">
                  <Input type="number" />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Category" name="category">
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
                <Form.Item label="Condition" name="condition">
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
                  <Form.Item label={item.label} name={item.name}>
                    <Input type="checkbox" className="w-8 h-8" />
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
    </Modal>
  );
}

export default ProductsForm;
