import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const number_list = [1,2,3,4,5,6,7,8,9,0]


const render_buttons= onClickNumber => {

    const render_one_button = number => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber}/> 
    )
    return number_list.map(render_one_button)
    // return number_list.map(<Button key={number} text={number.toString()} clickHandler={onClickNumber}/>)
}
 
const Numbers = ({onClickNumber}) => {
    return (
        <section className='numbers'>
            {render_buttons(onClickNumber)}
        </section>
    );
};

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
};

export default Numbers;