import React from 'react';
import Features from '../../Components/features/features';
import './home.css'
import Chart from '../../Components/Charts/chart';
import xAxisData from '../../data';
function Home() {
    return ( 
        <>
          <div className="home">
            <Features/>  
            <Chart grid title='Month sale' data={xAxisData} dataKey='sale'/>  
          </div>
        

        </>
     );
}

export default Home;