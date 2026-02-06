import React from 'react';
import {SvgProps} from 'react-native-svg';
import svgs from './svgs';

type IconName = keyof typeof svgs;

type IconSvgProps = SvgProps & {
  name: IconName;
  className?: string;
  color?: string;
  fill?: string;
};

const IconSvg: React.FC<IconSvgProps> = ({name, color, fill, ...rest}) => {
  const IconComponent = svgs[name];

  if (!IconComponent) {
    return null;
  }

  // Normalize ColorValue to string for our SVG components
  const resolvedColor = typeof color === 'string' ? color : undefined;
  const resolvedFill = typeof fill === 'string' ? fill : undefined;

  return <IconComponent color={resolvedColor} fill={resolvedFill} {...rest} />;
};

export default IconSvg;
export type {IconName};
