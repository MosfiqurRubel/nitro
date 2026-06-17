export type IconName = "facebook" | "instagram" | "linkedin" | "closeCircle";

export interface SvgIconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}
