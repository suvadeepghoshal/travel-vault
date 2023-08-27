import { type GetServerSideProps, type GetServerSidePropsContext } from "next";
import Register from "~/components/register/register";

type SignUpProps = {
  currentPath: string | undefined;
};

const SignUp: React.FC<SignUpProps> = ({ currentPath }) => (
  <>
    <section>
      <Register currentPath={currentPath} />
    </section>
  </>
);

export const getServerSideProps: GetServerSideProps = (
  context: GetServerSidePropsContext
) => {
  const currentPath = context.req.url;
  return Promise.resolve({
    props: {
      currentPath,
    },
  });
};

export default SignUp;
