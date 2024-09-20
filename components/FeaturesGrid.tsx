import React from "react";
import CutCurnerButton from "./core/CutCurnerButton";

type Props = {};

const listItems = [
  "Experience unparallelled security with Clodron",
  "Fully benefit from scalable networks",
  "Unlock the potential of the future of blockchain",
];

const FeaturesGrid = (props: Props) => {
  return (
    <section>
      <div className="container">
        <h2>Building the future of blockchain</h2>
        <p>
          Clodron provides different type of bots and solutions for your next
          generation dApp or smart contract.
        </p>
        <ul>
          {listItems.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div>
          <CutCurnerButton>Get Started</CutCurnerButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
