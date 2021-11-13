export type image = {
  id: string;
  url: string;
  title: string;
  width: string | number;
  height: string | number;
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

export type actionBy = {
  id: string;
  name: string;
  surname: string;
  profileImage: string;
};

export type likeType =
  | 'like'
  | 'heart'
  | 'care'
  | 'haha'
  | 'wow'
  | 'crying'
  | 'angry';

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
