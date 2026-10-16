// Non-figurative geometric art (Islamic-style star tilings). No figures or depictions.
const star8 = "M20 4 L24.7 8.7 L31.3 8.7 L31.3 15.3 L36 20 L31.3 24.7 L31.3 31.3 L24.7 31.3 L20 36 L15.3 31.3 L8.7 31.3 L8.7 24.7 L4 20 L8.7 15.3 L8.7 8.7 L15.3 8.7 Z";
export default function PatternArt({ variant, className = "" }: { variant: string; className?: string }) {
  const id = `pat-${variant}`;
  const seerah = variant === "seerah";
  return <svg className={`pattern-art ${variant} ${className}`} viewBox="0 0 160 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
    <defs>
      <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
        {seerah
          ? <><path d={star8} fill="none" stroke="currentColor" strokeWidth="1.3"/><rect x="13" y="13" width="14" height="14" transform="rotate(45 20 20)" fill="currentColor" opacity=".18"/><path d="M0 0 L4 4 M40 0 L36 4 M0 40 L4 36 M40 40 L36 36 M20 0 V4 M20 36 V40 M0 20 H4 M36 20 H40" stroke="currentColor" strokeWidth="1.3"/></>
          : <><path d="M20 2 L35.6 11 V29 L20 38 L4.4 29 V11 Z" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M20 10 L28.7 15 V25 L20 30 L11.3 25 V15 Z" fill="currentColor" opacity=".16"/><path d="M20 2 V10 M35.6 11 L28.7 15 M35.6 29 L28.7 25 M20 38 V30 M4.4 29 L11.3 25 M4.4 11 L11.3 15" stroke="currentColor" strokeWidth="1"/></>}
      </pattern>
      <radialGradient id={`${id}-fade`} cx="50%" cy="50%" r="70%"><stop offset="0" stopColor="#fff" stopOpacity="1"/><stop offset="1" stopColor="#fff" stopOpacity=".35"/></radialGradient>
      <mask id={`${id}-m`}><rect width="160" height="160" fill={`url(#${id}-fade)`}/></mask>
    </defs>
    <rect width="160" height="160" fill={`url(#${id})`} mask={`url(#${id}-m)`}/>
  </svg>;
}
