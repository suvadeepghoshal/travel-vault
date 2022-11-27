export const TravelContentHeading = ({
  title
}: {
  title: string;
}): JSX.Element => {
  return (
    <h3 className="mb-2 text-3xl font-semibold leading-normal">{title}</h3>
  );
};
