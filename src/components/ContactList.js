import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  return (
    <div className="ui celled list">
      <ContactCard contacts={contacts} />
    </div>
  );
};

export default ContactList;
