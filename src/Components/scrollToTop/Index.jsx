import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollTo } from "react-use-window-scroll";

const Index = () => {
  const scrollTo = useScrollTo();
  return (
    <div
      className="scroll-button"
      onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <FontAwesomeIcon icon={["fas", "chevron-circle-up"]} size="2x" />
    </div>
  );
};

export default Index;
