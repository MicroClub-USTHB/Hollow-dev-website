import {
  useRef,
  useEffect,
  MutableRefObject,
  ReactNode,
  HTMLAttributes,
} from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

interface Props extends HTMLAttributes<HTMLDivElement> {
  options: TiltOptions;
  children: ReactNode;
}

export default function Tilt(props: Props) {
  const tilt = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const { options, children, ...rest } = props;
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} {...rest}>
      {children}
    </div>
  );
}
