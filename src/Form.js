import React from 'react';
import './Form.css';

function Form() {
    function handleSubmit(event){
        event.preventDefault();//without this, browser will reload page. so reload page when press button.
    }
  return (
    <form method='post' onSubmit={handleSubmit}>
      <p>
         Name:<input type='text' name='from'
         placeholder='Your Name'/> <br/>
         Message: {" "}
         <input type='text' name='text' 
         placeholder='The message...'
         id='message-input'/> 
         <br />
        </p>
     <button>Send</button>
        
    </form>
  );
}

export default Form;