import { Button, Upload } from "antd";
import React from "react";

const Images = (selectedProduct, setShowProductForm, getData) => {
  return (
    <div>
      <Upload listType="picture" beforeUpload={() => false}>
        <Button type="dashed">Upload Image</Button>
      </Upload>
    </div>
  );
};

export default Images;
