import React, { useContext, useState } from "react";

import { ArticleContext } from "./ArticleContext";
import TextField from "./TextField";
import types from "./types";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ContentEditable from "react-contenteditable";

const SectionBody = () => {
  const [contents, setContents] = useState([]);

  const handleInput = (e) => {
    console.log(e);
    console.log("Hey");
  };

  const handleBold = () => {
    const selected = window.getSelection().toString();
    console.log(selected);
  };
  const handleLink = () => {
    const selected = window.getSelection().toString();
    console.log(selected);
  };
  const handleImage = () => {
    const selection = window.getSelection();
    console.log(selection);
  };
  return (
    <div>
      <ButtonGroup>
        <Button variant="secondary" onClick={handleBold}>
          Bold
        </Button>
        <Button variant="secondary" onClick={handleLink}>
          Link
        </Button>
        <Button variant="secondary" onClick={handleImage}>
          Image
        </Button>
      </ButtonGroup>
      <ContentEditable html={"<h1>Hello</h1>"} />
    </div>
  );
};

const Section = ({ section }) => {
  const { dispatch } = useContext(ArticleContext);
  const setTitleValue = (t) =>
    dispatch({
      type: types.UPDATE_SECTION_TITLE,
      payload: { id: section.id, title: t },
    });
  //const setContentValue = (c) => updateSectionContent(section.id, c);
  const setContentValue = (c) =>
    dispatch({
      type: types.UPDATE_SECTION_CONTENT,
      payload: { id: section.id, content: c },
    });
  return (
    <Form.Group>
      <div className="section">
        <Form.Group>
          <Form.Label>Subtitle</Form.Label>
          <TextField
            placeholder="Add A Subtitle"
            value={section.title}
            setValue={setTitleValue}
          />
        </Form.Group>
        <SectionBody />
        {/*<TextField
          placeholder="Content"
          value={section.content}
          setValue={setContentValue}
          textArea={true}
        />*/}
      </div>
      <Button
        variant="danger"
        onClick={() =>
          dispatch({
            type: types.REMOVE_SECTION,
            payload: {
              id: section.id,
            },
          })
        }
      >
        Delete
      </Button>
    </Form.Group>
  );
};

const Sections = () => {
  const { article, dispatch } = useContext(ArticleContext);
  const sections = article.sections;
  return (
    <Form.Group>
      {sections.map((s) => {
        return <Section section={s} key={s.id} />;
      })}
      <Button
        onClick={() =>
          dispatch({
            type: types.ADD_SECTION,
            payload: { section: { title: "", content: "" } },
          })
        }
        className="add-btn"
      >
        Add a section
      </Button>
    </Form.Group>
  );
};

export default Sections;
