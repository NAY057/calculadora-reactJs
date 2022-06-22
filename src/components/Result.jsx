import React from 'react'
import PropTypes from 'prop-types'
// **NOTES< forma corta de hacer destructuring 
const Result = ({value, prop2 }) => (
// **NOTE  forma larga de hacer destructuring
// const Result = (props) => {
//     const {value} = props
        <div className="result">
            {value}
        </div>
    )

// validacion basica de las propiedades que se pasan al componente (se debe instalar con : npm install propTypes)
// NOMBRE_DEL_COMPONENTE.propTypes **NOTE la primera p en propType es en minuscula (hace paste del componente)
Result.propTypes = {
    // la primera p en PropType es en minuscula (hace parte de la libreria)
    value: PropTypes.string.isRequired,
    prop2: PropTypes.string
}

// asi se establecen valores pordefecto en los props
Result.defaultProps = {
    value: '0',
    prop2: 'valor por defecto'
}

export default Result