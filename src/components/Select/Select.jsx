import React from 'react';

export const Select = ({value, options, htmlFor, onChangeH, controlName}) => {
  const onChangeSelect = (event) => {
    onChangeH(event, controlName);
  };

  return (
    <>
      <select
        className='input__input'
        id={htmlFor}
        value={value}
        onChange={onChangeSelect}
      >
        {options.map((opt, index) => {
          return (
            <option
              defaultValue={opt.value}
              key={opt.value + index}
            >
              {opt.text}
            </option>
          )
        })}
      </select>
    </>
  );
};