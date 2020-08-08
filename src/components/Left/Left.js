import React from 'react'
import './Left.scss'

import Files from './Files'
import Templates from './Templates'
// import Toolbar from './Toolbar'

export default function Left(props) {
  return (
    <div className="left">
      <Files 
        newImport={props.newImport}
        setNewImport={props.setNewImport}
        addClipping={props.addClipping}
      />
      <Templates
        setCurrentStage={props.setCurrentStage}
      />
      {/* <Toolbar
        imagesData={props.imagesData}
        onDragStart={props.onDragStart}
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
        textValue={props.textValue}
        setTextValue={props.setTextValue}
      /> */}
    </div>
  )
}
