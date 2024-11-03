import { useEffect, useState } from "react";
import './widges.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSm() {
    const [fetchedUsers, setFetchedUsers] = useState([]);

    useEffect(() => {
        // فراخوانی داده‌ها از Firebase
        fetch('https://test-programing-7c8bd-default-rtdb.firebaseio.com/user.json')
            .then((res) => res.json())
            .then((data) => {
                // تبدیل داده‌های Firebase به ساختار مورد نیاز
                const formattedData = Object.keys(data).map((key) => ({
                    id: key, // استفاده از کلید به عنوان شناسه
                    ...data[key] // اضافه کردن بقیه اطلاعات کاربر
                }));
                setFetchedUsers(formattedData); // ذخیره داده‌ها در state
            })
            .catch((error) => {
                // مدیریت خطاها
                console.error("Error fetching data from Firebase:", error);
            });
    }, []);

    return (
        <div className="widgetSm">
            <span className="widgetTitle">New Users</span>
            <ul className="widgetList">
                {fetchedUsers.map((user) => (
                    <li key={user.id} className="widgetListItem">
                        <img src={user.imageUrl} alt="avatar" className="widgesImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUserTitle">{user.name}</span>
                            <span className="widgetSmUserName">{user.title}</span>
                        </div>
                        <button className="widgetSmBtn">
                            <VisibilityIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WidgetSm;
