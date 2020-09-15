import React, {useState} from 'react';
import {Input} from "../Input/Input";
import is from 'is_js';

export default () => {
  const [isFormValid, setIsFormValid] = useState(false);
  // eslint-disable-next-line no-unused-vars,no-undef
  const [state, setState] = useState({
    lastName: {
      value: '',
      type: 'text',
      label: 'Фамилия',
      errorMessage: 'Поле является обзательным',
      valid: false,
      touched: false,
      validations: {
        required: true,
        minLength: 5
      }
    },
    firstName: {
      value: '',
      type: 'text',
      label: 'Имя',
      errorMessage: 'Поле является обзательным',
      valid: false,
      touched: false,
      validations: {
        required: true,
        minLength: 10
      }
    },
    surName: {
      value: '',
      type: 'text',
      label: 'Отчество',
      errorMessage: 'Отчество должно быть больше 5 букв',
      valid: false,
      touched: false,
      validations: {
        minLength: 5
      }
    },
    gender: {
      value: '',
      type: 'text',
      label: 'Пол',
      errorMessage: 'Выберете пол',
      valid: false,
      touched: false,
      validations: {}
    },
    birthDate: {
      value: '',
      type: 'text',
      label: 'Дата рождения',
      errorMessage: 'Поле является обзательным',
      valid: false,
      touched: false,
      validations: {
        required: true
      }
    },
    phone: {
      value: '',
      type: 'text',
      label: 'Мобильный телефон',
      errorMessage: 'Поле является обязательным',
      valid: false,
      touched: false,
      validations: {
        required: true,
        minLength: 15
      }
    },
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      errorMessage: 'Поле является обзательным',
      valid: false,
      touched: false,
      validations: {
        required: true,
        email: true
      }
    },
    address: {
      value: '',
      type: 'text',
      label: 'Адрес постоянной регистрации',
      errorMessage: '',
      valid: false,
      touched: false,
      validations: {}
    },
    workName: {
      value: '',
      type: 'text',
      label: 'Название работодателя',
      errorMessage: '',
      valid: false,
      touched: false,
      validations: {}
    },

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
        <button
          className='form__btn'
        >сохранить</button>
      </div>
    </div>
  );
};