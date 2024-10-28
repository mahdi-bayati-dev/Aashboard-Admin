import React from "react";
import './widgesLg.css'
import { userAction } from "../../data";

function WidgetsLg() {
    const Button = ({ type }) => {
       
       return <button className={`widgetsLgButton ${type}`}>{type}</button>

    }

    return (
        <div className="widgetsLg">
            <h3 className="widgetsLgTitle">Lorem ipsum dolor</h3>
            <table className="widgetsLgTable">
                <thead>
                    <tr className="widgetsLgTableTr">
                        <th className="widgetsLgTableTh">Customer</th>
                        <th className="widgetsLgTableTh">Date</th>
                        <th className="widgetsLgTableTh">Amount</th>
                        <th className="widgetsLgTableTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {userAction.map((user)=>(
                        <tr key={user.id}>
                        <td className="widgetsLgTableUser">
                            <img src={user.avatar} alt="User" className="widgetsLgImg" />
                            <span className="widgetsLgName">{user.username}</span>
                        </td>
                        <td className="widgetsLgTableDate">
                            {user.registrationDate}
                        </td>
                        <td className="widgetsLgTableAmount">
                            {user.amount}
                        </td>
                        <td className="widgetsLgTableStatus">
                            <Button type={user.status} />
                        </td>
                    </tr>
                    ))}




                </tbody>
            </table>
        </div>
    );
}

export default WidgetsLg;
