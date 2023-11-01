import { Button, Upload, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";

const Images = ({selectedProduct, setShowProductForm, getData}) => {
  const [file = null, setFile] = React.useState(null);
  const dispatch = useDispatch();
  const upload = () => {
    try {
      dispatch(setLoader(false));
      //upload image logic here
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  return (
    <div>
      <Upload
        listType="picture"
        beforeUpload={() => false}
        onChange={(info) => setFile(info.file)}
      >
        <Button type="dashed">Upload Image</Button>
      </Upload>

      <div className="flex justify-end gap-4 mt-4">
        <Button
          type="default"
          onClick={() => {
            setShowProductForm(false);
          }}
        >
          Cancel
        </Button>
        <Button type="default" disabled={!file} onClick={upload}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default Images;
