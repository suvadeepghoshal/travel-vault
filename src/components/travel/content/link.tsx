export const TravelContentLink = ({
  title,
  link
}: {
  title: string;
  link: string;
}): JSX.Element => {
  return (
    <a
      href={link}
      className="mt-8 font-bold text-gray-800"
    >
      {title}
    </a>
  );
};
