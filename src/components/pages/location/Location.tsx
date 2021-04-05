import React from "react";
import "./Location.css";
const Location = () => {
  return (
    <div className="container mb-30 pb-30">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23547.19015444743!2d21.444700741909337!3d42.461806867519286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1616798253031!5m2!1sen!2s"
        loading="lazy"
        title={"Location"}
        className="iframe-map mb-30 pb-30"
        width="100%"
        height="600"
      />
    </div>
  );
};
export default Location;
