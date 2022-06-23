import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./SinglePost.css";

const SinglePost = () => {
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [singlePost, setSinglePost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const getPosts = async () => {
    const res = await axios.get("/posts/" + path);
    setSinglePost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.title);
  };

  useEffect(() => {
    getPosts();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${singlePost._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${singlePost._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        {singlePost && (
          <img alt="" src={PF + singlePost?.photo} className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            className="singlePostTitleInput"
            type="text"
            value={singlePost?.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {singlePost?.title}

            {singlePost?.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  onClick={() => setUpdateMode(true)}
                  className="singlePostIcon far fa-edit"
                ></i>
                <i
                  onClick={handleDelete}
                  className="singlePostIcon far fa-trash-alt"
                ></i>
              </div>
            )}
          </h1>
        )}
      </div>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:
          <Link className="link" to={`/?username=${singlePost?.username}`}>
            <b>{singlePost?.username}</b>
          </Link>
        </span>
        <span className="singlePostDate">
          {new Date(singlePost?.updatedAt).toDateString()}
        </span>
      </div>
      {updateMode ? (
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          value={singlePost?.desc}
          className="singlePostDescInput"
        ></textarea>
      ) : (
        <p className="singlePostDesc">{singlePost?.desc}</p>
      )}
      {updateMode && (
        <button onClick={handleUpdate} className="updateButton">
          Update
        </button>
      )}
    </div>
  );
};

export default SinglePost;
