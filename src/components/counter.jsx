import React, { Component } from 'react';
class Counter extends Component {  
    render() { 
       
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => { this.props.onIncrement(this.props.counter)}} className="btn btn-info btn-sm">Increment</button>
            <button onClick={() => {this.props.onDecrement(this.props.counter)}} className="btn btn-dark btn-sm m-2">Decrement</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button><br/>
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "success";
        return classes;
    }

    formatCount(){
        let { value } = this.props.counter
        return value === 0 ? 'Zero' : value
        
    }
}
 
export default Counter;