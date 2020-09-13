import React from 'react';

export const Input = (props) => {
    const propType = props.type || 'text';

    return (
        <div className='input__box'>
            <input
                type={'text'}
                id='surname'
            />
            <label htmlFor="surname">Фамилия</label>
            {/*<br/>*/}
            {/*<input*/}
            {/*    placeholder='Имя'*/}
            {/*    type={propType}*/}
            {/*/>*/}
            {/*<br/>*/}
            {/*<input*/}
            {/*    placeholder='Отчество'*/}
            {/*    type={propType}*/}
            {/*/>*/}
        </div>
    );
};