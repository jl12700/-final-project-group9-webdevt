import React, { useState } from "react";
import   "./STYLES/User.css";

const User = () => {
   return (
        <div>
            <div className="sidebar-container">
                <div class="sidebar">
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">User Profile</a></li>
                        <li><a href="#">Current reservations</a></li>
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}; export default User
