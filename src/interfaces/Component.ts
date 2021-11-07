export interface IMenuButton {
  id?: string;
  icon?: JSX.Element | string;
  title?: string;
  iconColor?: string;
  isCentered?: boolean;
  height?: number;
  isImageLink?: boolean;
  actionIcon?: JSX.Element | string;
  onClick?: (id: string) => void;
  onAction?: (id: string) => void;
}
