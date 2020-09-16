import React, {useState} from 'react';
import is from 'is_js';
import {Input} from "../Input/Input";

export default () => {
  // eslint-disable-next-line no-unused-vars
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
        minLength: 3
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
        minLength: 2
      }
    },
    surName: {
      value: '',
      type: 'text',
      label: 'Отчество',
      errorMessage: 'Отчество должно быть больше 5 букв',
      valid: true,
      touched: false,
      validations: {
        // minLength: 6
      }
    },
    gender: {
      value: '',
      type: 'text',
      label: 'Пол',
      errorMessage: 'Выберете пол',
      valid: true,
      touched: false,
      validations: {},
      options: [
        {text: 'Мужской', value: 'Мужской'},
        {text: 'Женский', value: 'Женский'}
      ]
    },
    birthDate: {
      value: '',
      type: 'date',
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
      errorMessage: 'Введен некорректный адрес почты',
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
      valid: true,
      touched: false,
      validations: {}
    },
    workName: {
      value: '',
      type: 'text',
      label: 'Название работодателя',
      errorMessage: '',
      valid: true,
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

  const btnSubmitHandler = () => alert(`Форма валидна, отправляется запрос!`);

  console.log(isFormValid);

  return (
    <div>
      <h1>App component</h1>
      <div className='form__box'>
        {returnInputs()}
        <button
          type='button'
          className={isFormValid ? 'form__btn' : 'form__btn form__btn--disable'}
          disabled={!isFormValid}
          onClick={btnSubmitHandler}
        >
          сохранить
        </button>
      </div>
    </div>
  );
};