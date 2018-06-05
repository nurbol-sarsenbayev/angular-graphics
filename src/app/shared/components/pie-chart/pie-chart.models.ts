
export interface PieItem {
  color: string;
  percent: number;
}

export interface PieOuterItem {
  color: string,
  percent: number;
  opacity: number,
  circle: PieCircle
}

export interface PieCircle {
  fill: string;
  stroke: string;
}