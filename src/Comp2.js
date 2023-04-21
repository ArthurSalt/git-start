import React from "react";
import { useState } from "react";

function Comp2() {

   const [count, setCount] = useState(0);
   const [comment, setComment] = useState([])


   let myRef = React.createRef();

   let handler = () => {
      let currentCount = count;
      currentCount++;
      setCount(currentCount)
   }

   let addComment = () => {
      let val = myRef.current.value;
      let comments = [...comment, val];
      setComment(comments);
      myRef.current.value = '';
   }

   return (
      <>
         <h4>FUNCTIONAL COMPONENT</h4>
         <h2>State</h2>
         <div>
            <button onClick={handler}>State Change</button>
         </div>
         <div>
            {count}
         </div>

         <div>
            <textarea ref={myRef}></textarea>
         </div>
         <button onClick={addComment}>Add comment</button>
         <ul>
            {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
         </ul>
      </>
   );
}

export default Comp2