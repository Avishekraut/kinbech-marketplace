import { Button, Modal } from "antd";
import React from "react";

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
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="ok">
          OK
        </Button>,
      ]}
    >
      <h1>Products Form</h1>
    </Modal>
  );
}

export default ProductsForm;
