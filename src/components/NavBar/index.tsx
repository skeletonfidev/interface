/* eslint-disable */

import { Trans } from "@lingui/macro";
import { useWeb3React } from "@web3-react/core";
import cx from "classnames";
import ExternalLink from "components/ExternalLink/ExternalLink";
import Web3Status from "components/Web3Status";
import {
  AnimatePresence as FramerAnimatePresence,
  motion,
} from "framer-motion";
import { chainIdToBackendName } from "graphql/data/util";
import { useIsNftPage } from "hooks/useIsNftPage";
import { useIsPoolsPage } from "hooks/useIsPoolsPage";
import { useAtomValue } from "jotai/utils";
import { Box } from "nft/components/Box";
import { Row } from "nft/components/Flex";
import { useProfilePageState } from "nft/hooks";
import { ReactNode, useState } from "react";
import {
  NavLink,
  NavLinkProps,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useMedia } from "react-use";
import { shouldDisableNFTRoutesAtom } from "state/application/atoms";
import styled from "styled-components/macro";

import site_logo from "assets/images/site_logo.svg";
import menu_mobile from "assets/images/header/menu_mobile.svg";
import close_icon from "assets/images/header/close_icon.svg";
import Blur from "./Blur";
import * as styles from "./style.css";
import "./index.css";
import { ChainSelector } from "./ChainSelector";

// Fix framer-motion old React FC type (solved in react 18)
const AnimatePresence = (
  props: React.ComponentProps<typeof FramerAnimatePresence> & {
    children: ReactNode;
  }
) => <FramerAnimatePresence {...props} />;

const Nav = styled.nav`
  padding: 8px 24px;
  width: 100%;
  height: ${({ theme }) => theme.navHeight}px;
  z-index: 2;

  @media screen and (max-width: 600px) {
    padding: 8px 16px;
  }
`;

const PageHeader = styled.nav`
  display: flex;

  padding: 8px;
  gap: 12px;

  background: #010815;
  border-radius: 100px;

  a {
    margin: 0;

    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: rgba(255, 255, 255, 0.6);

    &.link-underline {
      text-decoration: none;

      padding: 8px 14px;
    }

    &.active {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 8px 16px;
      gap: 10px;
      background: #2e75ff;
      border-radius: 100px;

      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #ffffff;
    }
  }
`;

interface MenuItemProps {
  href: string;
  id?: NavLinkProps["id"];
  isActive?: boolean;
  children: ReactNode;
  dataTestId?: string;
}

const MenuItem = ({
  href,
  dataTestId,
  id,
  isActive,
  children,
}: MenuItemProps) => {
  return (
    <NavLink
      to={href}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ textDecoration: "none" }}
      data-testid={dataTestId}
    >
      {children}
    </NavLink>
  );
};

const slideVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

export const PageTabs = () => {
  const { pathname } = useLocation();
  const { chainId: connectedChainId } = useWeb3React();
  const chainName = chainIdToBackendName(connectedChainId);

  const isPoolActive = useIsPoolsPage();
  const isNftPage = useIsNftPage();

  const shouldDisableNFTRoutes = useAtomValue(shouldDisableNFTRoutesAtom);

  return (
    <PageHeader>
      <MenuItem href="/swap" isActive={pathname.startsWith("/swap")}>
        <Trans>Swap</Trans>
      </MenuItem>
      <MenuItem href="/farm" isActive={pathname.startsWith("/farm")}>
        <Trans>Farm</Trans>
      </MenuItem>
      <MenuItem
        href={`/tokens/${chainName.toLowerCase()}`}
        isActive={pathname.startsWith("/tokens")}
      >
        <Trans>Tokens</Trans>
      </MenuItem>
      <Box display={{ sm: "flex", lg: "none", xxl: "flex" }} width="full">
        <MenuItem
          href="/pools"
          dataTestId="pool-nav-link"
          isActive={isPoolActive}
        >
          <Trans>Pools</Trans>
        </MenuItem>
      </Box>
      {!shouldDisableNFTRoutes && (
        <MenuItem dataTestId="nft-nav" href="/nft" isActive={isNftPage}>
          <Trans>NFTs</Trans>
        </MenuItem>
      )}
      <Box display={{ sm: "flex", lg: "none", xxl: "flex" }} width="full">
        <ExternalLink href="https://metamask.io">Docs</ExternalLink>
      </Box>
    </PageHeader>
  );
};

const Navbar = ({ blur }: { blur: boolean }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const isNftPage = useIsNftPage();
  const sellPageState = useProfilePageState((state) => state.state);
  const navigate = useNavigate();

  const isIpad = useMedia("(max-width: 768px)");

  return (
    <>
      {blur && <Blur />}
      <Nav>
        <Box display="flex" height="full" flexWrap="nowrap">
        {/* <ChainSelector leftAlign={true} /> */}
        
          <Box className={styles.leftSideContainer}>
            {isIpad && (
              <div>
                <header>
                  <div
                    className={cx("App-header", "small", {
                      active: isDrawerVisible,
                    })}
                  >
                    <div
                      className={cx(
                        "App-header-link-container",
                        "App-header-top",
                        {
                          active: isDrawerVisible,
                        }
                      )}
                    >
                      <div className="App-header-container-left">
                        <div
                          className="App-header-menu-icon-block"
                          onClick={() => setIsDrawerVisible(!isDrawerVisible)}
                        >
                          <img
                            src={menu_mobile}
                            className="App-header-menu-icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </header>

             

                <AnimatePresence>
                  {isDrawerVisible && (
                    <motion.div
                      onClick={() => setIsDrawerVisible(false)}
                      className="App-header-links-container App-header-drawer"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={slideVariants}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        style={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                        }}
                        src={close_icon}
                        alt="close_icon"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <img src={site_logo} alt="site_logo" />
          </Box>

          {!isIpad && (
            <Box className={styles.menuContainer}>
              <Row display={{ sm: "none", lg: "flex" }}>
                <PageTabs />
              </Row>
            </Box>
          )}

          <Box className={styles.rightSideContainer}>
            <Row gap="12">
              <Web3Status />
            </Row>
          </Box>
        </Box>
      </Nav>
    </>
  );
};

export default Navbar;
/* eslint-enable */
