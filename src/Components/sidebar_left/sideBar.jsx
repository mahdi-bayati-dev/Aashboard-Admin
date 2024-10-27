import './sideBar.css'
import React from 'react';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

function SideBarLeft() {
    return ( 
        <>
        <div className="sidBar_container">
            <div className="sideBar_wrapper">
                <div className="sideBar_maun">
                    <h3 className='text_h3_sideBar'>Dashboard</h3>
                    <ul className='sideBar_list'>
                        <Link to={'./'} className='link'>
                           <li className='sideBar_list_item active'>
                           <LineStyleIcon className='sideBar_Icon'/>
                           Home
                           </li>
                        </Link>

                        <li className='sideBar_list_item'>
                        <TimelineIcon className='sideBar_Icon'/>
                        Analytics
                        </li>
                        <li className='sideBar_list_item'>
                        <TrendingUpIcon className='sideBar_Icon'/>
                        sales
                        </li>
                    </ul>
                </div>
                <div className="sideBar_maun">
                    <h3 className='text_h3_sideBar'>Quick maun</h3>
                    <ul className='sideBar_list'>
                        <Link to={'/userList'} className='link'>
                        <li className='sideBar_list_item active'>
                        <PersonIcon className='sideBar_Icon'/>
                        User
                        </li>
                        </Link>

                        <Link to={'./newUser'} className='link'>
                        <li className='sideBar_list_item'>
                        < PersonIcon className='sideBar_Icon'/>
                        New User
                        </li>
                        </Link>

                        <Link to={'./product'} className='link'>
                        <li className='sideBar_list_item'>
                        <StorefrontIcon className='sideBar_Icon'/>
                        Product
                        </li></Link>
                        <li className='sideBar_list_item'>
                        <AttachMoneyIcon className='sideBar_Icon'/>
                        Transact
                        </li>
                        <li className='sideBar_list_item'>
                        <BarChartIcon className='sideBar_Icon'/>
                        Reports
                        </li>
                    </ul>
                </div>
                <div className="sideBar_maun">
                    <h3 className='text_h3_sideBar'>Notation</h3>
                    <ul className='sideBar_list'>
                        <li className='sideBar_list_item active'>
                        <MailOutlineIcon className='sideBar_Icon'/>
                        Mail
                        </li>
                        <li className='sideBar_list_item'>
                        <DynamicFeedIcon className='sideBar_Icon'/>
                        Feedback
                        </li>
                        <li className='sideBar_list_item'>
                        <ChatBubbleOutlineIcon className='sideBar_Icon'/>
                        Massage
                        </li>
                    </ul>
                </div>
                <div className="sideBar_maun">
                    <h3 className='text_h3_sideBar'>Staff</h3>
                    <ul className='sideBar_list'>
                        <li className='sideBar_list_item active'>
                        <WorkOutlineIcon className='sideBar_Icon'/>
                        Manage
                        </li>
                        <li className='sideBar_list_item'>
                        <DynamicFeedIcon className='sideBar_Icon'/>
                        Analysts
                        </li>
                        <li className='sideBar_list_item'>
                        <ReportIcon className='sideBar_Icon'/>
                        Report
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        
        </>
     );
}

export default SideBarLeft;