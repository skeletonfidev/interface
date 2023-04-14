import React from "react";
import cx from "classnames";
import "./ExternalLink.css";
import { useMedia } from "react-use";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
};

function ExternalLink({ href, children, className, target = "_blank" }: Props) {
  const isMobile = useMedia("(max-width: 800px)");

  const classNames = cx("link-underline", className);
  return isMobile ? (
    <a href={href} className={classNames}>
      {children}
    </a>
  ) : (
    <a href={href} className={classNames} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ExternalLink;
