type SoundSightMarkProps = {
  className?: string;
};

export function SoundSightMark({ className }: SoundSightMarkProps) {
  return <img className={className} src="/soundsight-logo.svg" alt="SoundSight logo" />;
}
