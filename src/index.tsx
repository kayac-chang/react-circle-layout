import React, {
  ReactNode,
  CSSProperties,
  Children,
  useContext,
  createContext,
} from "react";

function transform(rad: number, radius: number): string {
  const { sin, cos } = Math;

  return [
    `translate(-50%, -50%)`,
    `translate(${cos(rad) * radius}rem, ${sin(rad) * radius}rem)`,
  ].join(" ");
}

type LayoutContext = {
  radius: number;
};

const LayoutContext = createContext<LayoutContext>({ radius: 0 });

function useLayoutContext(): LayoutContext {
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
  style?: CSSProperties;
  className?: string;
};
export function Radian({
  radian,
  children,
  style,
  className,
}: RadianProps): JSX.Element {
  const { radius } = useLayoutContext();

  return (
    <div
      className={className}
      style={{
        ...style,
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
  className?: string;
}
export function CircleLayout({
  radius = 0,
  children,
  style,
  className,
}: CircleLayoutProps): JSX.Element {
  const center: CSSProperties = {
    position: `absolute`,
    top: `50%`,
    left: `50%`,
  };

  return (
    <div
      className={className}
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
