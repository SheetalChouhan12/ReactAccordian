import React, { useState } from 'react';
import {questions} from './api';
import './Accordian.css';
import MyAccordian from './MyAccordian'

export default function Accordian() {

  const [data,setData] = useState(questions);  
  return (
    <>
        <section className='main-div'>
        <h2 className='question'>
            Questions
        </h2>
        {
            data.map((curr)=>{
                return <MyAccordian key={curr.id} {...curr}/>;
            })
        }
        </section>
        
    </>

    )
        
}

