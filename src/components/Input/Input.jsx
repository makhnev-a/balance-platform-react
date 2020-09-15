import React, {useState} from 'react';

export const isInvalid = (valid, touched, shouldValidate) => {
  // debugger
  return !valid && shouldValidate && touched;
};

// eslint-disable-next-line no-unused-vars
export const Input = ({type, value, valid, touched, label, errorMessage, shouldValidate, controlName, onChangeH}) => {
  const [hasLength, setHasLength] = useState(false);
  const onBlurHandler = (event) => setHasLength(!!event.currentTarget.value.trim().length);
  const forId = `${type}-${Math.random()}`;

  return (
    // <div className={hasLength ? 'input input--toTop' : 'input'}>
    <div className={hasLength ? 'input input--toTop' : controlName === 'gender' || controlName === 'birthDate' || controlName === 'email' || controlName === 'phone' ? 'input input__part' : 'input'}>
      <input
        onChange={event => onChangeH(event, controlName)}
        className='input__input'
        onBlur={onBlurHandler}
        type={type || 'text'}
        id={forId}
        value={value}
      />
      <label
        className='input__label'
        htmlFor={forId}
      >
        {label}
      </label>
      {
        isInvalid(valid, touched, shouldValidate)
          ? <span className='input__span'>{errorMessage || 'Введите верное значение'}</span>
          : null
      }

    </div>
  );
};
