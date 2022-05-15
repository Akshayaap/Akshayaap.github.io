

import React, { Component } from 'react';
import './sorting.css';
import { Sorting } from '../sim/Sorting';

class VisualSort extends Component {
    constructor(props) {
        super(props)
        this.size = 100;
        this.sim = new Sorting(this.size);
        console.log(this.size);

    }


    componentDidMount() {
        this.sim.getElements();
    }

    render() {
        return (
            <div className='sorting'>
                <div className='control'>
                    <button onClick={() => this.sim.sort()}>Sort</button>
                    <button onClick={() => this.sim.shuffle()}>Generate</button>
                    <button onClick={() => { this.sim.mergeSort() }}>Merge Sort</button>
                    <button onClick={() => { this.sim.quickSort() }}>Quick Sort</button>

                </div>
                <div className='visual'>
                    {
                        this.sim.array.map((element, index) => {
                            return (
                                <div id={`bar-${index}`} className='array-bar' key={index}>
                                </div>);
                        })
                    }
                </div>
            </div>
        );
    }
}


export default VisualSort;