import React, { Component } from 'react';

class CompletedTasks extends React.Component {
    render() {
        let tasks = this.props.items;
        return (tasks.map((item, index) => {
            if (item.status === 1) {
                return <div key={index} className="mt-3">

                    <div className="card">
                        <div className="card-body">
                            <h5><span>{item.title}</span> <span className="float-right"> <a href="#" onClick={(e) => this.props.handleCross(e, item.id)} className="text-danger">x</a></span></h5>
                        </div>
                    </div>
                </div>
            }


        }));
    }
}

export default CompletedTasks;