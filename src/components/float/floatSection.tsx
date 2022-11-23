import { FloatingCard } from './floatingCard';

export const FloatSection = ({
  show,
  floatingCardData
}: {
  show: boolean;
  floatingCardData: {
    count?: number;
    randomId?: string;
    title?: string;
    content?: string;
    icon?: string;
    iconBg?: string;
    standout?: boolean;
  }[];
}): JSX.Element => {
  return show ? (
    <div className="flex flex-wrap">
      {/* <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
        <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
          <div className="flex-auto px-4 py-5">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg">
              <i className="fas fa-award"></i>
            </div>
            <h6 className="text-xl font-semibold">Awarded Agency</h6>
            <p className="mt-2 mb-4 text-gray-600">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 text-center md:w-4/12">
        <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
          <div className="flex-auto px-4 py-5">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 p-3 text-center text-white shadow-lg">
              <i className="fas fa-retweet"></i>
            </div>
            <h6 className="text-xl font-semibold">Free Revisions</h6>
            <p className="mt-2 mb-4 text-gray-600">
              Keep you user engaged by providing meaningful information.
              Remember that by this time, the user is curious.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 pt-6 text-center md:w-4/12">
        <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
          <div className="flex-auto px-4 py-5">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-3 text-center text-white shadow-lg">
              <i className="fas fa-fingerprint"></i>
            </div>
            <h6 className="text-xl font-semibold">Verified Company</h6>
            <p className="mt-2 mb-4 text-gray-600">
              Write a few lines about each one. A paragraph describing a feature
              will be enough. Keep you user engaged!
            </p>
          </div>
        </div>
      </div> */}
      {floatingCardData.map((eachCardData, index) => {
        return (
          <FloatingCard
            {...eachCardData}
            key={eachCardData?.randomId}
          />
        );
      })}
    </div>
  ) : (
    <></>
  );
};
