import React from "react";
import {
    Line,
    ResponsiveContainer,
    LineChart,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'
import './chart.css'

function Chart({title, data, dataKey, grid}) {
    return ( 
        <>
        <div className="chart">
        <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width={'100%'} aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke={'#5550bd'}/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>

        </>
    );
}


export default Chart;