import React, { Component } from 'react';
class ActiveTasks extends React.Component {
    render() { 
        let tasks=this.props.items;
        let count=0;
      return (
        
             tasks.map((item,index)=>{
                 if(item.status===0){ return <div key={index} className="mt-3">

                 <div className="card">
                     <div className="card-body">
                     <h5><input onChange={()=>{this.props.handleChecks(item.id)}} type="checkbox" ></input><span style={{marginLeft:30}} className="pl-3">{item.title}</span></h5>
                     </div>
                 </div>
              </div>  }
           
             })
            
      );
      count+=1;
      if(count===2){
          console.log("cannot print more than 2") ;
      }
    } 
}
 
export default ActiveTasks;