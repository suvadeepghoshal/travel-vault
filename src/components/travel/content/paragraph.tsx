export const TravelContentParagraph = ({
  content,
  index
}: {
  content: string;
  index: number;
}): JSX.Element => {
  const paraClassName = `${
    index % 2 == 0 ? 'mt-4' : 'mt-0'
  } mb-4 text-lg font-light leading-relaxed text-gray-700`;
  return <p className={paraClassName}>{content}</p>;
};
