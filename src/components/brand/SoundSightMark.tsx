type SoundSightMarkProps = {
  className?: string;
};

export function SoundSightMark({ className }: SoundSightMarkProps) {
  return <img className={className} src="/logo.svg" alt="SoundSight logo" />;
}
