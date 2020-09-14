import React, {useState} from 'react';
import {Input} from "../Input/Input";
import is from 'is_js';

export default () => {
  const [isFormValid, setIsFormValid] = useState(false);
  // eslint-disable-next-line no-unused-vars,no-undef
  const [state, setState] = useState({
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      errorMessage: 'Введите корректный email',
      valid: false,
      touched: false,
      validations: {
        required: true,
        email: true
      }
    },
    lastName: {
      value: '',
      type: 'text',
      label: 'Фамилия',
      errorMessage: 'Введите корректную фамилию',
      valid: false,
      touched: false,
      validations: {
        required: true,
        minLength: 6
      }
    }
  });

  const validateControl = (value, validations) => {
    if (!validations) {
      return true;
    }

    let isValid = true;

    if (validations.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validations.email) {
      isValid = is.email(value) && isValid;
    }

    if (validations.minLength) {
      isValid = value.length >= validations.minLength && isValid;
    }

    return isValid;
  };

  const onChangeHandler = (event, controlName) => {
    // debugger;
    console.log(`${controlName}: `, event.currentTarget.value)

    const formControls = {...state};
    const control = {...formControls[controlName]};

    control.value = event.target.value;
    control.touched = true
    control.valid = validateControl(control.value, control.validations)

    formControls[controlName] = control;

    let isFormValidate = true;

    Object.keys(formControls).forEach(name => {
      isFormValidate = formControls[name].valid && isFormValidate;
    })

    setState(formControls);
    setIsFormValid(isFormValidate);
  };

  const returnInputs = () => {
    return Object.keys(state).map((controlName) => {
      const control = state[controlName];

      return (
        <Input
          key={`key-${controlName}`}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validations}
          // onChangeH={event => onChangeHandler(event, controlName)}
          controlName={controlName}
          onChangeH={onChangeHandler}
        />
      );
    })
  };

  return (
    <div>
      <h1>App component</h1>
      <div className='form__box'>
        {returnInputs()}
      </div>
    </div>
  );
};