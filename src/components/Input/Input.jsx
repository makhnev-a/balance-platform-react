import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import {Select} from "../Select/Select";

export const isInvalid = (valid, touched, shouldValidate) => {
  return !valid && shouldValidate && touched;
};

// eslint-disable-next-line no-unused-vars
export const Input = ({type, value, valid, touched, label, errorMessage, shouldValidate, controlName, onChangeH, ...props}) => {
  const [hasLength, setHasLength] = useState(false);
  const onBlurHandler = (event) => setHasLength(!!event.currentTarget.value.trim().length);
  const forId = `${type}-${Math.random()}`;

  const classes = () => {
    if (hasLength) {
      if (controlName === 'gender' || controlName === 'birthDate' || controlName === 'email' || controlName === 'phone') {
        return 'input input--toTop input__part';
      } else {
        return 'input input--toTop';
      }
    } else {
      if (controlName === 'gender' || controlName === 'birthDate' || controlName === 'email' || controlName === 'phone') {
        return 'input input__part'
      } else {
        return 'input';
      }
    }
  };

  const renderInput = () => {
    if (controlName === 'phone') {
      return (
        <InputMask
          onChange={event => onChangeH(event, controlName)}
          className={controlName === 'birthDate' ? 'input__input input__black' : 'input__input'}
          onBlur={onBlurHandler}
          type={type || 'text'}
          id={forId}
          value={value}
          mask='9(999)-999-99-99'
        />
      )
    } else if (controlName === 'gender') {
      return (
        <Select
          value={value}
          options={[
            {text: 'Мужской', value: 'Мужской'},
            {text: 'Женский', value: 'Женский'}
          ]}
          htmlFor={forId}
          onChangeH={onChangeH}
          className={controlName === 'birthDate' ? 'input__input input__black' : 'input__input input__tranc'}
          onBlur={onBlurHandler}
          id={forId}
          controlName={controlName}
        />
      )
    } else {
      return (
        <input
          onChange={event => onChangeH(event, controlName)}
          className={controlName === 'birthDate' ? 'input__input input__black' : 'input__input input__tranc'}
          onBlur={onBlurHandler}
          type={type || 'text'}
          id={forId}
          value={value}
        />
      )
    }
  };

  return (
    <div className={classes()}>
      {
        renderInput()
      }

      <label
        className='input__label'
        htmlFor={forId}
      >
        {label}
      </label>
      {
        isInvalid(valid, touched, shouldValidate)
          ? (
            <span
              className='input__span'
            >
              {errorMessage || 'Введите верное значение'}
            </span>
          )
          : null
      }

    </div>
  );
};
