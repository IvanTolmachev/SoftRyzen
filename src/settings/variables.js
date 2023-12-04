const colors = {
  backgroundColor: '#F3F5FA',
  backgroundColorCard: '#EAEDF1',

  //   backgroundBurger: '#173D33',
  primaryColor: '#173D33',
  secondColor: '#97D28B',
  primaryWhite: '#FFFFFF',
  burgerBtnColor: '#292D32',
  burgerBtnBgColor: '#DCEFD8',

  buttonsHoverBg: '#54ADFF',
};

const shadow = {
  shadowDefault: '3px 8px 14px 0px #88C6FD30',
  shadowHover: '7px 13px 14px 0px #74B1E83D',
};

const transition = {
  transitionFunction: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const breakPoints = {
  mobile: '@media screen and (min-width: 480px)',
  onlyMobile: '@media screen and (max-width: 767px)',

  tablet: '@media screen and (min-width: 767px)',
  desktop: '@media screen and (min-width: 1280px)',
  retina:
    '@media (min-device-pixel-ratio: 2) (min-resolution: 192dpi) (min-resolution: 2dppx)',
};

const visualHidden = {
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
  height: 1,
  overflow: 'hidden',
  border: 0,
  padding: 0,
  clip: 'rect(0 0 0 0)',
  WebkitClipPath: 'inset(50%)',
  clipPath: 'inset(50%)',
  margin: -1,
};

const variables = {
  colors,
  shadow,
  transition,
  breakPoints,
  visualHidden,
};

export default variables;
