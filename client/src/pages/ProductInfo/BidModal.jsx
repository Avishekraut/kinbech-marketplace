import { Button, Form, Input, Modal, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../redux/loadersSlice";
import { PlaceNewBid } from "../../apicalls/products";
import { AddNotification } from "../../apicalls/notifications";

const BidModal = ({ showBidModal, setShowBidModal, product, reloadData }) => {
  const { user } = useSelector((state) => state.users);
  const formRef = React.useRef(null);
  const rules = [{ required: true, message: "Required" }];
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await PlaceNewBid({
        ...values,
        product: product._id,
        seller: product.seller._id,
        buyer: user._id,
      });
      dispatch(setLoader(false));
      if (response.success) {
        message.success("Bid added successfully");

        //send notification to seller
        await AddNotification({
          title: "New Bid Alert!",
          message: ` ${user.name} just placed a new bid of Rs.${values.bidAmount} on your product, ${product.name}.`,
          user: product.seller._id,
          onClick: `/profile`,
          read: false,
        });

        reloadData();
        setShowBidModal(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(setLoader(false));
    }
  };
  return (
    <Modal
      onCancel={() => setShowBidModal(false)}
      open={showBidModal}
      centered
      width={600}
      footer={[
        <Button key="Cancel" onClick={() => setShowBidModal(false)}>
          Cancel
        </Button>,
        <Button key="submit" onClick={() => formRef.current.submit()}>
          Submit
        </Button>,
      ]}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-semibold text-center">New Bid</h1>
        <Form layout="vertical" ref={formRef} onFinish={onFinish}>
          <Form.Item label="Bid Amount" name="bidAmount" rules={rules}>
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Mobile Number" name="mobile" rules={rules}>
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
