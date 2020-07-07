import React, { useContext } from "react";

import { ArticleContext } from "./ArticleContext";
import TextField from "./TextField";

const Section = ({ section }) => {
  const {
    updateSectionTitle,
    updateSectionContent,
    removeSection,
  } = useContext(ArticleContext);
  const setTitleValue = (t) => updateSectionTitle(section.id, t);
  const setContentValue = (c) => updateSectionContent(section.id, c);
  return (
    <div className="section-container">
      <div className="section">
        <TextField
          placeholder="SubTitle"
          value={section.title}
          setValue={setTitleValue}
        />
        <TextField
          placeholder="Content"
          value={section.content}
          setValue={setContentValue}
          textArea={true}
        />
      </div>
      <button onClick={() => removeSection(section.id)}>Delete</button>
    </div>
  );
};

const Sections = () => {
  const { sections, addSection } = useContext(ArticleContext);
  return (
    <div>
      {sections.map((s) => {
        return <Section section={s} key={s.id} />;
      })}
      <button
        onClick={() => addSection({ title: "", content: "" })}
        className="add-btn"
      >
        Add a section
      </button>
    </div>
  );
};

export default Sections;
