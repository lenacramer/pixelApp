import React from 'react'

const SizeSelector = ({optionDimensions, optionText, setDimensions}) => {
  return (
    <div className='selectorButton' onClick={()=>setDimensions(optionDimensions)}>
        {optionText}
    </div>
  )
}

export default SizeSelector
