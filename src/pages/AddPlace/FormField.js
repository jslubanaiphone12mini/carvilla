import React from 'react';

const FormField = ({ label, name, type = 'text', value, onChange, onBlur, error }) => {
  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`form-input ${error ? 'input-error' : ''}`}
        />
      );
    }

    return (
      <input
        id={name}
        name={name}
        type={type}
        value={type !== 'file' ? value : undefined}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-input ${error ? 'input-error' : ''}`}
      />
    );
  };

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {renderInput()}
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default FormField;
