interface Props {
  active: boolean;
}

export default function HoverBlur({ active }: Props) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none transition duration-500 ${
        active ? "backdrop-blur-sm" : ""
      }`}
    />
  );
}
