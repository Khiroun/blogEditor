import React, { createContext, useReducer } from "react";
import types from "./types";

import { v4 as uuid } from "uuid";

export const ArticleContext = createContext();

const initialState = {
  title: "",
  author: "",
  description: "",
  sections: [],
  image: null,
  valid: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.UPDATE_SECTION_TITLE:
      return {
        ...state,
        sections: state.sections.map((s) => {
          if (s.id === payload.id) {
            s.title = payload.title;
          }
          return s;
        }),
      };
    case types.UPDATE_SECTION_CONTENT:
      return {
        ...state,
        sections: state.sections.map((s) => {
          if (s.id === payload.id) {
            s.content = payload.content;
          }
          return s;
        }),
      };
    case types.REMOVE_SECTION:
      return {
        ...state,
        sections: state.sections.filter((s) => s.id !== payload.id),
      };
    case types.ADD_SECTION:
      return {
        ...state,
        sections: [...state.sections, { id: uuid(), ...payload.section }],
      };

    case types.SET_TITLE:
      return { ...state, title: payload.title };
    case types.SET_DESCRIPTION:
      return { ...state, description: payload.description };
    case types.SET_AUTHOR:
      return { ...state, author: payload.author };
    case types.SET_IMAGE:
      return { ...state, image: payload.image };
    case types.SUBMIT:
      return { ...state };
    default:
      return { ...state };
  }
};

export const ArticleProvider = (props) => {
  const [article, dispatch] = useReducer(reducer, initialState);
  /*
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
*/

  const validate = () => {
    if (
      article.title === "" ||
      article.author === "" ||
      article.description === ""
    )
      return "Title, Author and Description fields cannot be empty";
    if (!article.image) return "Please choose a valid Image File";
    if (article.sections.length === 0) {
      return "Please enter at least one section";
    }
    for (let i = 0; i < article.sections.length; i++) {
      const s = article.sections[i];
      if (s.title === "") {
        return "Section Title cannot be empty";
      }
      if (s.content === "") {
        return "Section content cannot be empty";
      }
    }
    return "valid";
  };

  const value = { article, dispatch, validate };
  return (
    <ArticleContext.Provider value={value}>
      {props.children}
    </ArticleContext.Provider>
  );
};
