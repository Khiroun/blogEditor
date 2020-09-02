import React, { useReducer, useState } from "react";
import axios from "axios";
import TextField from "./TextField";
import FileUploadButton from "./FileUploadButton";
import types from "./types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editorJsTools";
import { Container } from "react-bootstrap";

const initialState = {
  title: "",
  author: "",
  description: "",
  blocks: [],
  image: null,
  valid: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_TITLE:
      return { ...state, title: payload.title };
    case types.SET_DESCRIPTION:
      return { ...state, description: payload.description };
    case types.SET_AUTHOR:
      return { ...state, author: payload.author };
    case types.SET_IMAGE:
      return { ...state, image: payload.image };
    case types.SET_BLOCKS:
      return { ...state, blocks: payload.blocks };

    case types.SUBMIT:
      return { ...state };
    default:
      return { ...state };
  }
};

const AddArticle = () => {
  const [article, dispatch] = useReducer(reducer, initialState);
  const [submitting, setSubmitting] = useState(false);
  const validate = () => {
    if (
      article.title === "" ||
      article.author === "" ||
      article.description === ""
    )
      return "Title, Author and Description fields cannot be empty";
    if (!article.image) return "Please choose a valid Image File";
    return "valid";
  };
  const imageChange = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    dispatch({
      type: types.SET_IMAGE,
      payload: {
        image: formData,
      },
    });
  };
  const valid = validate();
  const submit = () => {
    const { title, author, description, blocks, image } = article;
    const sections = blocks;
    if (validate() === "valid") {
      //const backendUrl = "https://europe-west2-lieven0.cloudfunctions.net/api";
      const backendUrl = "http://localhost:5000/lieven0/europe-west2/api";
      axios
        .post(`${backendUrl}/article`, { title, author, description, sections })
        .then((res) => {
          console.log("Item Added");
          const data = res.data;
          const id = data.id;
          axios
            .post(`${backendUrl}/uploadImage?articleId=${id}`, image)
            .then((res) => {
              console.log("Image posted");
            });
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <Container>
      <Form>
        {valid !== "valid" && <h2 style={{ textAlign: "center" }}>{valid}</h2>}
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <TextField
            value={article.title}
            setValue={(v) =>
              dispatch({ type: types.SET_TITLE, payload: { title: v } })
            }
            placeholder="Enter A title for the Article"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Author</Form.Label>

          <TextField
            value={article.author}
            setValue={(v) =>
              dispatch({ type: types.SET_AUTHOR, payload: { author: v } })
            }
            placeholder="Author"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <TextField
            value={article.description}
            setValue={(v) =>
              dispatch({
                type: types.SET_DESCRIPTION,
                payload: { description: v },
              })
            }
            placeholder="Add A description"
            textArea={true}
          />
        </Form.Group>
        <FileUploadButton imageChange={imageChange} />
        <Form.Group>
          <Form.Label>Add Sections</Form.Label>
          <EditorJs
            tools={EDITOR_JS_TOOLS}
            onChange={(api, data) => {
              dispatch({
                type: types.SET_BLOCKS,
                payload: {
                  blocks: data.blocks,
                },
              });
              console.log({ article });
            }}
          />
        </Form.Group>
        {
          //<Sections />
        }
        <Button variant="success" onClick={submit}>
          Add Article
        </Button>
      </Form>
    </Container>
  );
};

export default AddArticle;
