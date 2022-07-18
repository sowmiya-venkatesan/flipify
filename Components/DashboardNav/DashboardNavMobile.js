import React, { useRef } from "react";
import Link from "next/link";
import DashLink from "./DashLink";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import styles from "./dashNav.module.css";
import {
  ProjectsArrowDown,
  PanelIco,
  DeployLogsIco,
  CreateProjectIco,
  DocsIco,
  LogoutIco,
} from "../SVG/Svgs";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
function DashboardNavMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <HamburgerIcon
        className={styles.navOpenIcon}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
      id={styles.dashDrawer__chakraUi}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className={`${styles.dashboardParent__Mobile} ${styles.dashboardParent}`}>
            <img className={styles.logoDashNav} src="/logo.png" alt="logo" />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  <ProjectsArrowDown className={styles.menuArrowDown} />
                }
                className={styles.dashboard__menuBtn}
              >
                Reno Online Store
              </MenuButton>
              <MenuList>
                <MenuItem className={styles.dashboard__menuBtnItem}>
                  Project 2
                </MenuItem>
                <MenuItem className={styles.dashboard__menuBtnItem}>
                  Project 3
                </MenuItem>
                <MenuItem className={styles.dashboard__menuBtnItem}>
                  Project 4
                </MenuItem>
              </MenuList>
            </Menu>
            <div className={styles.navLinks__Parent}>
              <DashLink Svg={<PanelIco />} Name={"Panel"} />
              <DashLink Svg={<CreateProjectIco />} Name={"Create Project"} />
              <DashLink Svg={<DeployLogsIco />} Name={"Deploy Logs"} />
              <DashLink Svg={<DocsIco />} Name={"Documentation"} />
              <div className={styles.logoutBtn}>
                <LogoutIco /> <p>Log out</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DashboardNavMobile;
