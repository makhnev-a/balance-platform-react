import React, {useState} from 'react';

export const Input = ({type}) => {
  const [hasLength, setHasLength] = useState(false);
  const onBlurHandler = (event) => setHasLength(!!event.currentTarget.value.trim().length);

  const a = 2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2;
  console.log(a);

  return (
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
  );
};
