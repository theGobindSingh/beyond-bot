import { H1, H2, H3 } from '@components/html';
import { nanoid } from 'nanoid/non-secure';
import { FC, Fragment } from 'react';

const componentMap = {
  h1: H1,
  h2: H2,
  h3: H3,
};

type ElementProps<T extends keyof typeof componentMap> =
  (typeof componentMap)[T] extends FC<infer Props> ? Props : never;

type HeadingProps<T extends keyof typeof componentMap> = {
  element?: T;
  cursiveTextIndex?: number[];
  text?: string;
} & ElementProps<T>;

const Heading = <T extends keyof typeof componentMap>({
  element = 'h2' as T,
  cursiveTextIndex = [],
  text = '',
  ...props
}: Omit<HeadingProps<T>, 'children'>) => {
  const Component = componentMap[element];
  const mainId = nanoid();
  const mapper = (char: string, index: number) => {
    const key = `${mainId}-${index}`;
    return cursiveTextIndex.includes(index) ? (
      <span key={key} className="cursive">
        {char}
      </span>
    ) : (
      <Fragment key={key}>{char}</Fragment>
    );
  };
  return (
    <Component {...(props as any)}>{text.split('').map(mapper)}</Component>
  );
};

export default Heading;
