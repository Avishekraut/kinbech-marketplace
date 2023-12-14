import { Button, Form, Input, Modal } from "antd";
import React from "react";

const BidModal = ({ showBidModal, setShowBidModal, product, reloadData }) => {
  const formRef = React.useRef(null);
  const rules = [{ required: true, message: "Required" }];
  const onFinish = async (values) => {
    try {
    } catch (error) {}
  };
  return (
    <Modal
      onCancel={() => setShowBidModal(false)}
      open={showBidModal}
      centered
      width={600}
      onOk={() => formRef.current.submit()}
      footer={[
        <Button key="Cancel" onClick={() => setShowBidModal(false)}>
          Cancel
        </Button>,
        <Button key="submit">Submit</Button>,
      ]}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-semibold text-center">New Bid</h1>
        <Form layout="vertical" ref={formRef} onFinish={onFinish}>
          <Form.Item label="Bid Amount" name="bidAmount" rules={rules}>
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Mobile Number" name="mobileNumber" rules={rules}>
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Message" name="message" rules={rules}>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default BidModal;
