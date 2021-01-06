import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
   
    render() { 
        const {onReset, counters, onDelete, onIncrement, onDecrement } = this.props;

        return ( 

        <div>
            <button onClick={onReset} className="btn btn-primary small m-2">Reset</button><br/>
            {counters.map(counter => 
            <Counter key={counter.id} counter={counter} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement}>
            </Counter>           
            )}
        <br/>
        </div> );
    }
}
 
export default Counters;