import React from 'react';
import { Row, Col } from "react-bootstrap";

const  MyText = (props) => {
    //const listItems = ['item 1', 'item 2', 'item 3'];
    let listItems = props.stringProp.split("-sep");
  return (
    <div>
        {listItems.map(item => (
        <p className='fs-regular my-4 my-sm-5' key={item}>{item}</p>
        ))}
    </div>
  )
}

export default MyText

/*
    <ul>
    {listItems.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>*/