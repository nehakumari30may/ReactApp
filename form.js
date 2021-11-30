import React, { Component } from 'react';
class Form extends React.Component {
    render() { 
        return( 
          
            <form className="form" onSubmit={this.props.handleSubmit}>
                <label >Add Tasks</label><br></br>
                <br></br>
                <input type="text" id="task" className="form-control" ></input> <br></br>
                <input type="submit" className="btn btn-primary" value="submit"></input><br></br>


    
            </form>
         
      ) ;
    }
}
 
export default Form;
