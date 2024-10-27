import React from "react";
import './topBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function TopBar() {
    return ( 
        <>
        <div className="topBar_container">
            <div className="top_wrapper">
            <div className="left_top">
                <span className="logo_text">Panel</span>
               
                
            </div>
            <div className="right_top">
                <div className="icons_topBar">
                    <NotificationsIcon/>
                    <span className="top-Icon-badge">2</span>
                </div>
                <div className="icons_topBar">
                    <LanguageIcon/>
                    <span className="top-Icon-badge">2</span>
                </div>
                <div className="icons_topBar">
                    <SettingsIcon/>
                </div>
                <img className="avatar_top" src="./img_nav/images.jpg" alt="" srcset="" />
 
            </div>
            </div>

        </div>
        </>
     );
}

export default TopBar;