import React, { useState } from 'react'

let initialColors = ['#FF0000', '#FFFFFF', '#FFFF00', '#00BF00', '#A020F0', ' #0000FF', '#000000'];





const Color = ({shade, setPaint}) => {
    console.log(shade)
    return(
    <div className={`pixel`} style={{backgroundColor: shade}} onClick={()=>setPaint(shade)}>
    </div>
    )
}

export default Color
