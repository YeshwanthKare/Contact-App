import React from "react";
import user from "../images/user.png";

const ContactCard = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return (
      <div className="item">
        <img src={user} alt="user" className="ui avatar image" />
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </div>
    );
  });
  return <div>{renderContactList}</div>;
};

export default ContactCard;
