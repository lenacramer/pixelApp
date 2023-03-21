import React from 'react'

const CurrentColor = ({paint}) => {
  return (
    <>
    {/* <p className='small-text'>current:</p> */}
    <div className='pixel current' style={{backgroundColor: paint}}>
    </div>
    </>
  )
}

export default CurrentColor
