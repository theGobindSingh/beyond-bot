import { Interpolation, Theme } from '@emotion/react';
import { ClassAttributes, HTMLAttributes, PropsWithChildren } from 'react';

type DefaultType = ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    css?: Interpolation<Theme>;
  };

const DotBgWrapper = ({
  children,
  ...props
}: PropsWithChildren<DefaultType>) => (
  <div {...props}>
    <div />
    <div>{children}</div>
  </div>
);

export default DotBgWrapper;
