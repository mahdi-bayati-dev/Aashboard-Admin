import React from "react";
import './widges.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { users } from "../../data";
function WidgetSm() {
    return ( 
        <>

        <div className="widgetSm">
            <span className="widgetTitle">New User </span>
            <ul className="widgetList">
            {users.map((user)=>(
                    <li key={user.id} className="widgetListItem">
                    <img src={user.avatar} alt="avatar" srcset=""  className="widgesImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUserTitle">{user.username}</span>
                        <span className="widgetSmUserName">{user.title}</span>
                    </div>
                    <button className="widgetSmBtn">
                         <VisibilityIcon/>
                    </button>
                </li>
            ))}

            </ul>
        </div>
        </>
     );
}

export default WidgetSm;