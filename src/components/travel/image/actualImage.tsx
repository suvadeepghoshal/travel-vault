export const TravelImageCardActualImage = ({
  url,
  alt
}: {
  url: string;
  alt?: string;
}): JSX.Element => {
  return (
    <img
      alt={alt}
      src={url}
      className="w-full rounded-t-lg align-middle"
    />
  );
};
