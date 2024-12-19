import React from 'react'
import PropTypes from 'prop-types'
export const FirstComponent =({title, number})=> {
  return (
    <div>
      <h1>{title}</h1>
      <p>{number}</p>
    </div>
  )
}

FirstComponent.propTypes={
  title:PropTypes.string.isRequired,
  number:PropTypes.number.isRequired,
}
//tenemos un warning rojo que dice que functional components no darán soporte a default props
FirstComponent.defaultProps={
  title:'no hay necesidad de enviar títilo desde el main con default props y no da error',
  number:0
}



