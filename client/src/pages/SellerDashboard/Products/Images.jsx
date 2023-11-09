import { Button, Upload, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";
import { UploadProductImage } from "../../../apicalls/products";
import { RiDeleteBin6Line } from "react-icons/ri";

const Images = ({ selectedProduct, setShowProductForm, getData }) => {
  const [showPreview = false, setShowPreview] = React.useState(true);
  const [images = [], setImages] = React.useState(selectedProduct.images);
  const [file = null, setFile] = React.useState(null);
  const dispatch = useDispatch();
  const upload = async () => {
    try {
      dispatch(setLoader(true));
      //upload image to cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("productId", selectedProduct._id);
      const response = await UploadProductImage(formData);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        setImages([...images, response.data]);
        setShowPreview(false);
        getData();
      } else {
        message.error(response.message);
      }
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
        onChange={(info) => {
          setFile(info.file);
          setShowPreview(true);
        }}
        showUploadList={showPreview}
      >
        <div className="flex gap-5 mb-5">
          {images.map((image) => {
            return (
              <div className="flex gap-2 border border-solid border-gray-300 rounded p-3 items-end">
                <img
                  className="h-20 w-20 object-cover"
                  src={image}
                  alt="img"
                ></img>
                <RiDeleteBin6Line size={18} onClick={() => {}} />
              </div>
            );
          })}
        </div>
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
