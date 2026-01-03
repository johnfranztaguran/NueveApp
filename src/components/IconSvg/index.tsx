import React from 'react';
// import SvgIcon from 'react-native-svg-icon';
import svgs from './svgs';

// const IconSvg = (props: unknown) => <SvgIcon {...props} svgs={svgs} />;

// export default IconSvg;

// import React from 'react';
import {SvgProps} from 'react-native-svg';
// import svgs from './svgs';

type IconName = keyof typeof svgs;

type IconSvgProps = SvgProps & {
  name: IconName;
  className?: string;
};

const IconSvg: React.FC<IconSvgProps> = ({name, ...rest}) => {
  const iconElement = svgs[name];

  if (!iconElement) {
    return null;
  }

  return React.cloneElement(iconElement, {...rest});
};

export default IconSvg;