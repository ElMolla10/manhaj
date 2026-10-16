export function shuffledOptions(options, seed) {
  const copy = [...options];
  let value = seed || 1;
  for (let i = copy.length - 1; i > 0; i -= 1) {
    value = (value * 9301 + 49297) % 233280;
    const j = Math.floor((value / 233280) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function passes(correct, total) {
  return total > 0 && correct / total > 0.5;
}
