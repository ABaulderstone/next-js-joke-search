import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface MainHeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export default function MainHeading({ children }: MainHeadingProps) {
  return <h1 className="text-5xl text-blue-600">{children}</h1>;
}
