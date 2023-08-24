import Link from "next/link";
import { type Form } from "~/types/formType";
import { Type, type Message } from "~/types/message";
import { type User } from "~/types/user";
import Spinner from "../buttons/pending/spinner";

const get = "GET";
const post = "POST";

const AuthForm: ({
  formData,
  formDataObject,
  error,
  success,
  handleFormSubmit,
  handleInputChange,
  requestInProgress,
}: {
  formData: Form;
  formDataObject: User;
  error: Message;
  success: Message;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requestInProgress: boolean;
}) => JSX.Element = ({
  formData,
  formDataObject,
  error,
  success,
  handleFormSubmit,
  handleInputChange,
  requestInProgress,
}: {
  formData: Form;
  formDataObject: User;
  error: Message;
  success: Message;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  requestInProgress: boolean;
}) => {
  const parseFormAction: (action: string) => string = (action: string) => {
    if (action === get) return get;
    else if (action === post) return post;
    else return "";
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => handleFormSubmit(e);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInputChange(e);

  const getCurrentValue = <K extends keyof User>(currentLabel: K) =>
    formDataObject[currentLabel];

  return (
    <form
      className={formData?.styleString}
      action={parseFormAction(formData?.action)}
      id={formData?.id}
      onSubmit={onSubmit}
    >
      {formData?.sections.map((section) => (
        <div key={section?.id}>
          <label
            htmlFor={section?.label}
            className={section?.styleString?.labelStyle}
          >
            {section?.name}
          </label>
          <input
            type={section?.type}
            name={section?.label}
            id={section?.id}
            value={getCurrentValue(section?.label as keyof User)}
            className={section?.styleString?.inputStyle}
            placeholder={section?.placeholder?.text}
            onChange={onInputChange}
            required
          />
        </div>
      ))}
      {/*<div className="flex items-start">*/}
      {/*  <div className="flex h-5 items-center">*/}
      {/*    <input*/}
      {/*      id="terms"*/}
      {/*      aria-describedby="terms"*/}
      {/*      type="checkbox"*/}
      {/*      className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"*/}
      {/*      required*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="ml-3 text-sm">*/}
      {/*    <label*/}
      {/*      htmlFor="terms"*/}
      {/*      className="font-light text-gray-500 dark:text-gray-300"*/}
      {/*    >*/}
      {/*      I accept the{" "}*/}
      {/*      <a*/}
      {/*        className="font-medium text-blue-600 hover:underline dark:text-blue-500"*/}
      {/*        href="#"*/}
      {/*      >*/}
      {/*        Terms and Conditions*/}
      {/*      </a>*/}
      {/*    </label>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {error && error.type === Type.ERROR && error?.message.length ? (
        <p className="text-red-500">{error?.message}</p>
      ) : (
        ""
      )}
      {success && success.type === Type.SUCCESS && success?.message.length ? (
        <div
          className="mb-4 rounded-lg  bg-green-400 p-4 text-sm text-gray-900"
          role="alert"
        >
          <span className="font-medium">{success?.message}</span>
        </div>
      ) : (
        ""
      )}
      <button
        id={formData?.callToAction?.id}
        type="submit" // TODO: take it from the form data
        className={formData?.callToAction?.styleString}
      >
        {requestInProgress ? <Spinner /> : formData?.callToAction?.label}
      </button>
      {/* additional nav item */}
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Login Here
        </Link>
      </p>
    </form>
  );
};
export default AuthForm;
