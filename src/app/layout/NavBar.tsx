import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

const NavBar = ({ openForm }: Props) => {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
            Reactivities
          </Menu.Item>
          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button onClick={openForm} positive content="Create Activity" />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
