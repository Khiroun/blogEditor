import React, { useState, useContext } from "react";
import { ArticleContext } from "./ArticleContext";

const FileUploadButton = () => {
  const { setImage } = useContext(ArticleContext);
  const [message, setMessage] = useState("No Image Added");
  const handleImageChange = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    setImage(formData);
    setMessage("Image Added successfully");
  };
  return (
    <div className="file-upload">
      <div className="file-select">
        <div className="file-select-button" id="fileName">
          Add Image for your article
        </div>
        <div className="file-select-name" id="noFile">
          {message}
        </div>
        <input
          type="file"
          name="chooseFile"
          id="chooseFile"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default FileUploadButton;
