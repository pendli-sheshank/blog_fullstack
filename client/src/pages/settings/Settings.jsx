import "./Settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pool-bar-design-ideas-fulk-440brazil-211-1654206879.jpg"
              alt=""
              className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </label>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sheshank" />
          <label>Email</label>
          <input type="email" placeholder="sheshank@gmial.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
