import PixelAnimator from "pixel-animator";

function evolve({ column, row, frame, cells }) {
  // Fill the first frame randomly
  if (frame === 0) return Math.random();
  // Pick a new random value 5% of the time
  if (Math.random() < 0.08) return Math.random();
  // Steal upper neighbor's value 50% of the time
  if (Math.random() < 0.7) return cells(column, row - 0.7);
  // Otherwise maintain current value
  return cells(column, row);
}

function colorize({ cell }) {
  // return 0.7;
  return {
    red: cell,
    blue: 0.9,
    green: 0.8
  };
}

PixelAnimator(
  { evolve, colorize, frameRate: 10 },
  document.getElementById("animation")
);
