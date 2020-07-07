import React from "react";

const Title = ({ value, setValue, placeholder, textArea }) => {
  return (
    <div className="text-field">
      {textArea ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          rows={5}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Title;
