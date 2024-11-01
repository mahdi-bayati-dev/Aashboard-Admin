import PublishIcon from "@mui/icons-material/Publish";
import { useState } from "react";
import "./newUse.css";

function NewUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [previewUrl, setPreviewUrl] = useState(
    "./img-new-user/Mystery-Person-default-wordpress-avatar.webp"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return; // اطمینان از اینکه فایلی انتخاب شده است

    // بررسی حجم فایل (اینجا 1 مگابایت معادل 1,024,000 بایت در نظر گرفته شده است)
    const maxSize = 1 * 1024 * 1024; // 1 مگابایت
    if (file.size > maxSize) {
      alert("حجم فایل بیش از 1 مگابایت است. لطفاً یک تصویر کوچکتر انتخاب کنید.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => setPreviewUrl(fileReader.result);
    fileReader.onerror = () => {
      console.error("خطا در خواندن فایل");
      alert("خطا در بارگذاری تصویر");
    };
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name && user.email && user.number && user.password) {
      fetch(
        "https://test-programing-7c8bd-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...user,
            imageUrl: previewUrl,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setUser({
            name: "",
            email: "",
            number: "",
            password: "",
          });
          setPreviewUrl(
            "./img-new-user/Mystery-Person-default-wordpress-avatar.webp"
          );
          alert("ارسال موفقیت‌آمیز بود");
        })
        .catch((error) => {
          console.error("خطا:", error);
          alert("خطا در ارسال داده‌ها");
        });
    } else {
      alert("لطفاً همه فیلدها را پر کنید");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="userBottom">
      <form className="userForm" onSubmit={handleSubmit}>
        <div className="userLeft">
          <label>نام</label>
          <input
            type="text"
            name="name"
            placeholder="mahdi..."
            value={user.name}
            onChange={handleChange}
          />

          <label>ایمیل</label>
          <input
            type="email"
            name="email"
            placeholder="gmail.com"
            value={user.email}
            onChange={handleChange}
          />

          <label>شماره تلفن</label>
          <input
            type="text"
            name="number"
            placeholder="0901..."
            value={user.number}
            onChange={handleChange}
          />

          <label>رمز عبور</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            ارسال
          </button>
        </div>

        <div className="userRight">
          <div className="userUploader">
            <img className="img_uploader" src={previewUrl} alt="user-img" />
            <label htmlFor="file-upload">
              <PublishIcon />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
