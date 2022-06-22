import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Funtions = ({onClickClear, onClickDelete}) => {
    return (
        <section className='functions'>
            <Button type='button-long-text' text='clear' clickHandler={onClickClear}/>
            <Button text='&larr;' clickHandler={onClickDelete}/>
        </section>
        )
}

Funtions.propTypes = {
    onClickClear: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default Funtions;