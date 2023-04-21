import React from "react";

class Comp1 extends React.Component {

   constructor() {
      super();
      this.state = {
         count: 0,
         comment: [],
      }
      this.myRef = React.createRef();
   }

   handler = () => {
      let currentCount = this.state.count;
      currentCount++;
      this.setState({
         count: currentCount
      })
   }

   addComment = () => {
      let val = this.myRef.current.value;
      let comments = this.state.comment;
      comments.push(val);
      this.setState({
         comment: comments
      })
      this.myRef.current.value = '';
   }

   render() {
      return (
         <>
            <h4>OBJECT COMPONENT</h4>
            <h2>State</h2>
            <div>
               <button onClick={this.handler}>State Change</button>
            </div>
            <div>
               {this.state.count}
            </div>

            <div>
               <textarea ref={this.myRef}></textarea>
            </div>
            <button onClick={this.addComment}>Add comment</button>

            <ul>
               {this.state.comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
            </ul>
            
         </>
      );
   }
}

export default Comp1