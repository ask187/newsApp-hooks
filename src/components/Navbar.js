import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = (props) => {
  let setSelectedTab = props.selectTab;
  let listValues = ["Bitcoin", "US", "Apple", "TechCrunch", "WallStreet"];
  return (
    <>
      <Nav
        onSelect={(tab) => setSelectedTab(tab)}
        className="justify-content-center"
        activeKey="/home"
      >
        {listValues.map((item) => {
          return (
            <Nav.Item>
              <Nav.Link
                className={props.selectedTab === item ? "active" : "notActive"}
                eventKey={item}
              >
                {item}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </>
  );
};

export default Navbar;
