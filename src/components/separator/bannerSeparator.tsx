export const BannerSeparator = ({ show }: { show: boolean }): JSX.Element => {
  return show ? (
    <>
      <div
        className="pointer-events-none absolute top-auto bottom-0 left-0 right-0 w-full overflow-hidden"
        style={{ height: '70px' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-gray-300"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </>
  ) : (
    <></>
  );
};
