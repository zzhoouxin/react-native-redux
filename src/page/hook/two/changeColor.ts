import { useState } from "react";

/**
 * 这个作为服用的自定义函数
 * @param colors
 * @param initColor
 */
export const useRandomColor = (colors: string[], initColor: string) => {
  const lenColors = colors.length;
  const [color, setColor] = useState<string>(initColor);
  const changeColor = () => {
    const index = Math.floor(Math.random() * lenColors);
    setColor(colors[index]);
  };
  return [color, changeColor];
};
