import axios from "axios";
import { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const getCategories = async () => {
    const res = await axios.get("/categories");
    setCats(res.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png"
          alt=""
          className="sidebarImage"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae
          impedit, vel magni autem vero exercitationem in similique illo tempore
          aperiam laudantium. Neque laudantium minima ipsa voluptatibus iusto
          adipisci rerum!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat) => (
            <Link to={`/?category=${cat.name}`}>
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
