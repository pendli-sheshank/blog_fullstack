import "./Settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      await axios.put("/users/" + user._id, updateUser);
      setSuccess(true);
    } catch (error) {}
  };

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
              alt=""
              className="settingsImg"
              src={file ? URL.createObjectURL(file) : user.profilePicture}
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                id="fileInput"
                style={{ display: "none" }}
              />
            </label>
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={user.email}
          />
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={handleSubmit} className="settingSubmit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "15px" }}
            >
              Profile Updated!
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
