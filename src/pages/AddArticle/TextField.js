import React from "react";
import Form from "react-bootstrap/Form";

const Title = ({ value, setValue, placeholder, textArea }) => {
  return (
    <div className="text-field">
      {textArea ? (
        <Form.Control
          as="textarea"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          rows={5}
        />
      ) : (
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Title;
