import { BannerSeparator } from '../separator/bannerSeparator';

export const Banner = ({
  randomId,
  title,
  subHeading,
  bannerURL,
  showSeparator
}: {
  randomId?: string;
  title: string;
  subHeading: string;
  bannerURL: string;
  showSeparator?: boolean;
}): JSX.Element => {
  return (
    <div
      key={randomId}
      className="relative flex content-center items-center justify-center pt-16 pb-32"
      style={{
        minHeight: '75vh'
      }}
    >
      <div
        className="absolute top-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${bannerURL}')`
        }}
      >
        <span
          id="blackOverlay"
          className="absolute h-full w-full bg-black opacity-75"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
            <div>
              <h1 className="marhey text-5xl text-white">{title}</h1>
              <p className="marhey mt-4 text-lg text-gray-300">{subHeading}</p>
            </div>
          </div>
        </div>
      </div>
      {showSeparator && <BannerSeparator show={showSeparator} />}
    </div>
  );
};
