import { Modal, Table, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";
import { GetAllBids } from "../../../apicalls/products";
import moment from "moment";

const Bids = ({ showBidsModal, setShowBidsModal, selectedProduct }) => {
  const [bidsData, setBidsData] = React.useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllBids({
        product: selectedProduct._id,
      });
      dispatch(setLoader(false));
      if (response.success) {
        setBidsData(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        return record.buyer.name;
      }
    },
    {
      title: "Bid Amount",
      dataIndex: "bidAmount",
    },
    {
      title: "Bid Date",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(text).format("MMMM Do, h:mm a");
      },
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Contact Details",
      dataIndex: "contactDetails",
      render: (text, record) => {
        return (
          <div>
            <p>Phone: {record.mobile}</p>
            <p>Email: {record.buyer.email}</p>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    if (selectedProduct) {
      getData();
    }
  }, [selectedProduct]);
  return (
    <Modal
      open={showBidsModal}
      onCancel={() => setShowBidsModal(false)}
      centered
      width={1400}
      footer={null}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center">Bids</h1>
        <h1 className="text-lg">Item: {selectedProduct.name}</h1>
        <Table columns={columns} dataSource={bidsData} />
      </div>
    </Modal>
  );
};

export default Bids;
