import React, {useState} from 'react'
import { questions } from './api'

export default function MyAccordian({question,answer}) {
    const [show,setShow] = useState(false)
  return (
    <>
        <div className="main-heading">
            <p onClick={()=>setShow(!show)}>{show ?"➖": "➕"}</p>
            <h3>{question}</h3>
        </div>
            
            {show && <p className="answers">{answer}</p>}
            
            
    </>
  )
}
