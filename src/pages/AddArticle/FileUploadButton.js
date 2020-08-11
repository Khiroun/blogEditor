import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const FileUploadButton = ({ imageChange }) => {
  const [message, setMessage] = useState("No Image Added");
  const handleImageChange = (e) => {
    imageChange(e);
    setMessage("Image Added successfully");
  };
  return (
    <Form.Group>
      <div className="file-upload">
        <div className="file-select">
          <div className="file-select-button" id="fileName">
            Add Image for your article
          </div>
          <div className="file-select-name" id="noFile">
            {message}
          </div>
          <Form.File
            name="chooseFile"
            id="chooseFile"
            onChange={handleImageChange}
            accept="image/*"
            required={true}
          />
        </div>
      </div>
    </Form.Group>
  );
};

export default FileUploadButton;
