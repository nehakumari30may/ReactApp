import React, { Component } from 'react';

import Form from './form';
import Navbar from './navbar';
import ActiveTasks from './activetasks';
import CompletedTasks from './completedtasks'

class App extends React.Component {
    state = {
        tasks: [],


    }
    handleCross(e, id) {
        let allTasks = this.state.tasks;
        let itemIndex;
        allTasks.forEach(function (eachTask, index) {
            if (eachTask.id === id) {
                itemIndex = index;
            }
        })
        allTasks.splice(itemIndex, 1);
        this.setState({ tasks: allTasks });
        e.preventDefault();
    }
    handleSubmit(e) {
        let alltasks = this.state.tasks;
        let title = document.querySelector("#task").value;
        document.querySelector("#task").value = "";
        alltasks.push({ id: Date.now(), title: title, status: 0 });
        this.setState({ tasks: alltasks });


        e.preventDefault();

    }
    handleChecks(id) {
        let allTasks = this.state.tasks;
        let itemIndex;
        allTasks.forEach(function (eachTask, index) {
            if (eachTask.id === id) {
                itemIndex = index;
            }
        })
        allTasks[itemIndex].status = 1;
        this.setState({ tasks: allTasks });
    }
    render() {
        return (<div>
            <Navbar />

            <div className="container">



                <Form handleSubmit={this.handleSubmit.bind(this)} />



                <div className="row mt-5" >
                    <div className="col-6 ">
                        <h3>Active Tasks</h3>
                        <ActiveTasks items={this.state.tasks} handleChecks={this.handleChecks.bind(this)} />
                    </div>

                    <div className="col-6">
                        <h3>Completed Tasks</h3>
                        <CompletedTasks items={this.state.tasks} handleCross={this.handleCross.bind(this)} />
                    </div>


                </div>

            </div>



        </div>);
    }
}

export default App;