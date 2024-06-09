import React, { useState } from "react";
import "./StrategyCircle.css";

const StrategyCircle: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className="strategy-circle">
      <svg viewBox="0 0 750 750" className="circle-svg">
        <defs>
          <path
            id="outermostPath"
            d="M 375,375 m -320,0 a 320,320 0 1,1 640,0 a 320,320 0 1,1 -640,0"
          />
          <path
            id="outerPath"
            d="M 375,85 a 290,290 0 1,1 0,580 a 290,290 0 1,1 0,-580"
          />
          <path
            id="middlePath"
            d="M 375,375 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
          />
          <path
            id="innerPath"
            d="M 375,375 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
          />
          <path
            id="circlePath"
            d="M 375,375 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
          />
        </defs>

        <circle
          cx="375"
          cy="375"
          r="370"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="375"
          cy="375"
          r="310"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
        />
        <circle
          cx="375"
          cy="375"
          r="249"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="375"
          cy="375"
          r="120"
          stroke="white"
          strokeWidth="3"
          fill="none"
        />
        <line
          x1="375"
          y1="63"
          x2="375"
          y2="375"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="375"
          y1="375"
          x2="681"
          y2="435"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="375"
          y1="375"
          x2="68"
          y2="425"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="170"
          y1="230"
          x2="280"
          y2="305"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="470"
          y1="305"
          x2="575"
          y2="230"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="310"
          y1="478"
          x2="220"
          y2="572"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="435"
          y1="478"
          x2="515"
          y2="580"
          stroke="white"
          strokeWidth="3"
        />
        <text fontSize="24" className="fill-white uppercase" dy="-40">
          <textPath href="#outerPath" startOffset="66%">
            EuFMD
          </textPath>
        </text>
        <text fontSize="27" className="fill-white uppercase" dy="-40">
          <textPath href="#outerPath" startOffset="25%">
            Move Fast
          </textPath>
        </text>
        <text fontSize="27" className="fill-white uppercase" dy="-40">
          <textPath href="#outerPath" startOffset="88%">
            STRATEGY 2023-2027
          </textPath>
        </text>
        <text fontSize="24" className="fill-white uppercase" dy="-70">
          <textPath href="#middlePath" startOffset="5.5%">
            Protect
          </textPath>
        </text>
        <text fontSize="24" className="fill-white uppercase" dy="-70">
          <textPath href="#middlePath" startOffset="36.5%">
            Respond
          </textPath>
        </text>
        <text fontSize="24" className="fill-white uppercase" dy="-70">
          <textPath href="#middlePath" startOffset="72.5%">
            Control
          </textPath>
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="228"
          y="225"
          textAnchor="middle"
          transform="rotate(50 280 260)"
        >
          Risk
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="233"
          y="250"
          textAnchor="middle"
          transform="rotate(50 280 280)"
        >
          monitoring
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="189"
          y="335"
          textAnchor="middle"
          transform="rotate(10 280 260)"
        >
          Risk
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="206"
          y="355"
          textAnchor="middle"
          transform="rotate(10 280 280)"
        >
          mitigation
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="615"
          y="365"
          textAnchor="middle"
          transform="rotate(-50 380 470)"
        >
          Capacity
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="630"
          y="382"
          textAnchor="middle"
          transform="rotate(-50 380 470)"
        >
          development
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="567"
          y="365"
          textAnchor="middle"
          transform="rotate(-10 380 470)"
        >
          Tools and
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="570"
          y="379"
          textAnchor="middle"
          transform="rotate(-10 380 470)"
        >
          resources
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="249"
          y="375"
          textAnchor="middle"
          transform="rotate(-35 380 470)"
        >
          FAST control
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="249"
          y="392"
          textAnchor="middle"
          transform="rotate(-35 380 470)"
        >
          Risk area
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="469"
          y="475"
          textAnchor="middle"
          transform="rotate(90 380 470)"
        >
          Global FMD
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="485"
          y="492"
          textAnchor="middle"
          transform="rotate(90 380 470)"
        >
          control
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="509"
          y="435"
          textAnchor="middle"
          transform="rotate(35 455 470)"
        >
          Vaccine
        </text>
        <text
          fontSize="18"
          className="fill-white"
          x="510"
          y="452"
          textAnchor="middle"
          transform="rotate(35 459 470)"
        >
          security
        </text>
        <a href="/focus">
          <text
            fontSize="20"
            className="button fill-white-focus hover:text-green-950"
            x="359"
            y="335"
            textAnchor="middle"
            transform="rotate(-50 345 370)"
          >
            Focus 1
          </text>
        </a>
        <a href="/focus">
          <text
            fontSize="20"
            className="fill-white-focus button cursor-pointer"
            x="405"
            y="355"
            textAnchor="middle"
            transform="rotate(50 430 370)"
          >
            Focus 2
          </text>
        </a>
        <a href="/focus">
          <text
            fontSize="20"
            className="fill-white-focus cursor-pointer button"
            x="375"
            y="442"
            textAnchor="middle"
            transform="rotate(0 0 470)"
          >
            Focus 3
          </text>
        </a>
      </svg>
    </section>
  );
};

export default StrategyCircle;
