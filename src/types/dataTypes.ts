export type image = {
  id: string;
  url: string;
  title: string;
  width: string;
  height: string;
  isPortraitImage?: boolean;
};

export type styleOption = {
  imageContainerStyle: {
    inset: string;
  };
  wrapperStyle: {
    paddingTop: string;
  };
  rootStyle: {
    height: string;
    top?: string;
    left?: string;
    width: string;
  };
};

export type location = {
  city: string;
  country: string;
};

export type privacy =
  | 'public'
  | 'only me'
  | 'group members'
  | 'friends'
  | 'specific friends';

export type entity =
  | '@'
  | '?'
  | '<'
  | '>'
  | '='
  | ';'
  | ':'
  | '['
  | ']'
  | '\\'
  | '('
  | ')'
  | '+'
  | '%'
  | '$'
  | '#'
  | '!'
  | '&'
  | '*'
  | '.'
  | ','
  | '-'
  | '{'
  | '}'
  | '~'
  | '|'
  | '£'
  | '€';
