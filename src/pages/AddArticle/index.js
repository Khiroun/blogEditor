import React, { useContext } from "react";

import { ArticleContext } from "./ArticleContext";
import TextField from "./TextField";
import Sections from "./Sections";
import FileUploadButton from "./FileUploadButton";

const AddArticle = () => {
  const value = useContext(ArticleContext);
  const {
    title,
    setTitle,
    author,
    setAuthor,
    description,
    setDescription,
    valid,
    submit,
  } = value;
  return (
    <div className="add">
      {valid !== "valid" && <h2 style={{ textAlign: "center" }}>{valid}</h2>}
      <TextField value={title} setValue={setTitle} placeholder="Title" />
      <TextField value={author} setValue={setAuthor} placeholder="Author" />
      <TextField
        value={description}
        setValue={setDescription}
        placeholder="Description"
        textArea={true}
      />
      <FileUploadButton />
      <Sections />
      <button className="add-article" onClick={submit}>
        Add Article
      </button>
    </div>
  );
};

export default AddArticle;
