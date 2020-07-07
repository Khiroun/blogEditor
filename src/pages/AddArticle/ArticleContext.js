import React, { createContext, useState } from "react";

import { v4 as uuid } from "uuid";
import axios from "axios";

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([]);
  const [image, setImage] = useState(null);
  const [valid, setValid] = useState("");

  const addSection = (section) => {
    section.id = uuid();
    setSections([...sections, section]);
  };

  const updateSectionTitle = (id, title) => {
    const newSections = sections.map((s) => {
      if (s.id === id) {
        console.log("found");
        s.title = title;
      }
      return s;
    });
    //console.log(newSections);
    setSections(newSections);
  };

  const updateSectionContent = (id, content) => {
    const newSections = sections.map((s) => {
      if (s.id === id) {
        s.content = content;
      }
      return s;
    });
    setSections(newSections);
  };

  const removeSection = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const validate = () => {
    if (title === "" || author === "" || description === "")
      return "Title, Author and Description fields cannot be empty";
    if (!image) return "Please choose a valid Image File";
    if (sections.length === 0) {
      return "Please enter at least one section";
    }
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      if (s.title === "") {
        return "Section Title cannot be empty";
      }
      if (s.content === "") {
        return "Section content cannot be empty";
      }
    }
    return "valid";
  };

  const submit = () => {
    setValid(validate());
    if (validate() === "valid") {
      setTitle("");
      setAuthor("");
      setValid("Posting");
      console.log("Posting");
      const backendUrl = "https://europe-west2-lieven0.cloudfunctions.net/api/";
      axios
        .post(`${backendUrl}article`, { title, author, description, sections })
        .then((res) => {
          console.log("Item Added");
          const data = res.data;
          const id = data.id;
          axios
            .post(`${backendUrl}uploadImage?articleId=${id}`, image)
            .then((res) => {
              console.log("Image posted");
              setValid("Article Added successfully");
            });
        })
        .catch((e) => console.log(e));
    }
  };

  const value = {
    title,
    setTitle,
    author,
    setAuthor,
    description,
    setDescription,
    sections,
    setSections,
    image,
    setImage,
    addSection,
    updateSectionTitle,
    updateSectionContent,
    removeSection,
    submit,
    valid,
  };

  return (
    <ArticleContext.Provider value={value}>
      {props.children}
    </ArticleContext.Provider>
  );
};
