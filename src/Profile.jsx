import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="about">about</Link> |<Link to="contact">contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
