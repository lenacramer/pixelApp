import React, { useState } from 'react'
import Pixel from './pixel'
import Color from './color'
import CurrentColor from './currentColor'
import SizeSelector from './sizeselector'
import ChooseYourOwn from './ChooseYourOwn'

let colors = ['#FF0000', '#FFFFFF', '#FFFF00', '#00BF00', '#A020F0', ' #0000FF', '#000000'];

const Artboard = () => {
    const [dimensions, setDimensions] = useState([5,5])
    const [paint, setPaint] = useState('pixel');
    let horizontal = [];
    let vertical = [];
    let counter = 1
    for (let i = 0; i < dimensions[0]; i++){
        horizontal.push(counter)
        counter++
    };
    for (let i = 0; i < dimensions[1]; i++){
        vertical.push(counter)
        counter++
    };

  return (
    <>
    <div className='column'>
    <CurrentColor paint={paint}/> 

    <div className='pixelrow selector'>
    {colors.map(color => 
        <Color shade={color} paint={paint} setPaint={setPaint} key={color}/>)}
    </div>
    <ChooseYourOwn/>
    </div>

    <div className='artboard'>
    <div className='column'>
        {horizontal.map(x =>
            <div className='row' key={x}>
                {vertical.map( y => 
                    <Pixel paint={paint} key={y}/>
                )}
            </div>
        )}
    </div>
    </div>

    <div classId='column'>
    <SizeSelector optionDimensions={[5,5]} setDimensions={setDimensions} optionText='5x5'/>
    <SizeSelector optionDimensions={[10,10]} setDimensions={setDimensions} optionText='10x10'/>
    <SizeSelector optionDimensions={[20,20]} setDimensions={setDimensions} optionText='20x20'/>
    </div>
</>
  )
}

export default Artboard
