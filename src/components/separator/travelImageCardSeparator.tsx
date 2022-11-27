export const TravelImageCardSeparator = ({
  color
}: {
  color: string;
}): JSX.Element => {
  const polygonClassName = `fill-current text-${color}`;
  return (
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 583 95"
      className="absolute left-0 block w-full"
      style={{
        height: '95px',
        top: '-94px'
      }}
    >
      <polygon
        points="-30,95 583,95 583,65"
        className={polygonClassName}
      ></polygon>
    </svg>
  );
};
