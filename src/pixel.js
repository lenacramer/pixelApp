import React, {useState} from 'react'

const Pixel = ({paint}) => {
    const [currentPixel, setCurrentPixel] = useState('')

  return (
    <div className='pixel' style={{backgroundColor: currentPixel}} onClick={()=> setCurrentPixel(`${paint}`)}>
    </div>
  )
}

export default Pixel

