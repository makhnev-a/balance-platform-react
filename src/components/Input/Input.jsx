import React, {useState} from 'react';

export const Input = ({type}) => {
  const [hasLength, setHasLength] = useState(false);
  const onBlurHandler = (event) => setHasLength(!!event.currentTarget.value.trim().length);

  return (
    <div className='form__box'>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Фамилия
        </label>
      </div>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Имя
        </label>
      </div>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Отчество
        </label>
      </div>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Пол
        </label>
      </div>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Дата рождения
        </label>
      </div>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Мобильный телефон
        </label>
      </div>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Email
        </label>
      </div>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Адресс постоянной регистрации
        </label>
      </div>
      <div className={hasLength ? 'input input--toTop' : 'input'}>
        <input
          className='input__input'
          onBlur={onBlurHandler}
          type={type || 'text'}
          id='surname'
        />
        <label
          className='input__label'
          htmlFor="surname"
        >
          Название работодателя
        </label>
      </div>
    </div>
  );
};
