import React, { useEffect, useState } from "react";

import { CircleLayout, Radian } from "react-circle-layout";
import "react-circle-layout/dist/index.css";

import IMG from "./kirby-alien.png";

const App = () => {
  const [radian, setRadian] = useState(0);

  useEffect(() => {
    const loop = () => {
      setRadian((radian) => radian + 0.01);

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  return (
    <div
      style={{
        width: `100vw`,
        height: `100vh`,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircleLayout
        radius={24}
        style={{
          border: `dashed white 2px`,
          borderRadius: "50%",
        }}
      >
        <Radian radian={radian}>
          <img
            src={IMG}
            alt={IMG}
            style={{
              width: "8rem",
              height: "8rem",
            }}
          />
        </Radian>
      </CircleLayout>
    </div>
  );
};

export default App;
