import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { DiReact } from "react-icons/di";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { MdDashboard } from "react-icons/md";
import sidebarBg from "../../assets/bg2.jpg";
// import DiReact from "../../../public/logo192.png";
import "react-pro-sidebar/dist/css/styles.css";

const SideBar = (props) => {
  const { image, collapsed, rtl, toggled, handleToggleSidebar } = props;
  return (
    <ProSidebar
      className="prosideBar"
      image={sidebarBg}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <DiReact size={"3em"} color="00bfff" />
          <span>JONATHAN</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<MdDashboard />}>
            Dashboard
            <Link to="DashBoard" />
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu icon={<FaGem />} title="Features">
            <MenuItem>
              Quản Lý User
              <Link to="manger-user" />
            </MenuItem>
            <MenuItem>Quản Lý Bài Quiz</MenuItem>
            <MenuItem>Quản Lý Câu Hỏi</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  textDecoration: "none",
                }}
              >
                &#169; JONATHAN PHIET
              </span>
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBar;
