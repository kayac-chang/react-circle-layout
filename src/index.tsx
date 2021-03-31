import React, {
  ReactNode,
  CSSProperties,
  Children,
  useContext,
  createContext,
} from "react";

function transform(rad: number, radius: number) {
  const { sin, cos } = Math;

  return [
    `translate(-50%, -50%)`,
    `translate(${cos(rad) * radius}rem, ${sin(rad) * radius}rem)`,
  ].join(" ");
}

const LayoutContext = createContext({ radius: 0 });

function useLayoutContext() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error(
      `compound components cannot be rendered outside the CircleLayout component`
    );
  }

  return context;
}

type RadianProps = {
  radian: number;
  children: ReactNode;
};
export function Radian({ radian, children }: RadianProps) {
  const { radius } = useLayoutContext();

  return (
    <div
      style={{
        transform: transform(radian, radius),
      }}
    >
      {children}
    </div>
  );
}

interface CircleLayoutProps {
  radius: number;
  children: ReactNode | ReactNode[];
  style?: CSSProperties;
}
export function CircleLayout({
  radius = 0,
  children,
  style,
}: CircleLayoutProps) {
  const center: CSSProperties = {
    position: `absolute`,
    top: `50%`,
    left: `50%`,
  };

  return (
    <div
      style={{
        ...style,
        position: "relative",
        width: `${radius * 2}rem`,
        height: `${radius * 2}rem`,
      }}
    >
      <LayoutContext.Provider value={{ radius }}>
        {Children.map(children, (el, index) => (
          <div style={center} key={index}>
            {el}
          </div>
        ))}
      </LayoutContext.Provider>
    </div>
  );
}
