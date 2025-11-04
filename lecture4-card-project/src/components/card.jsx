import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  console.log(props.company, props.post, props.brand_logo, props.tag1, props.tag2, props.pay, props.location, props.date_posted);
  return (
    <div>
      <div className="card">
        <div className="top">
         <img src={props.brand_logo} alt="logo loading" />
          <button>Save <Bookmark size={12} /></button>
       </div>
       <div className="center">
       <h3>{props.company}<span>{props.date_posted}</span></h3>
       <h2>{props.post}</h2>
       <div className="tag">
       <h4>{props.tag1}</h4>
        <h4>{props.tag2}</h4>

       </div>

       </div>
        <div className="bottom">
        <div>
          <div>
            <h3>${props.pay}/hr</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
        </div>

     </div>
    </div>
  )
}

export default card
