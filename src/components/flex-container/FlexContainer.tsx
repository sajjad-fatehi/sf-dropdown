import { PropsWithChildren } from "react";

export type FlexContainerProps = PropsWithChildren<{
  vertical?: boolean;
}>;
const defaultProps: FlexContainerProps = {
  vertical: false,
};
export const FlexContainer = ({ children, vertical }: FlexContainerProps = defaultProps) => {
  return (
    <div className={`flex-container ${vertical ? "flex-vertical" : ""}`}>
      {children}
    </div>
  );
};
