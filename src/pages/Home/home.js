import React from 'react';
import Features from '../../Components/features/features';
import './home.css'
import Chart from '../../Components/Charts/chart';
import {xAxisData} from '../../data';
import WidgetSm from '../../Components/widgetsSm/widges';
import WidgesLg from '../../Components/widgesLg/widgesLg';

function Home() {
    return ( 
        <>
          <div className="home">
            <Features/>  
            <Chart grid title='Month sale' data={xAxisData} dataKey='sale'/>  
            <div className="homeWidgets">
            <WidgetSm/>
            <WidgesLg/>

            </div>
            
          </div>
        

        </>
     );
}

export default Home;