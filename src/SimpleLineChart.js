import React, { Component } from 'react';
import {BarChart, Bar , XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import data from './data.json';

class SimpleLineChart extends Component{
    render () {
        return (
            <BarChart width={600} height={300} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="shortName"/>
                <YAxis dataKey="count"/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        );
    }
}

export default SimpleLineChart;