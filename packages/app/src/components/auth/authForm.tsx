import Link from "next/link";
import { useState } from "react";
import { type Form } from "~/types/formType";
import { User } from "~/types/user";

const get = "GET";
const post = "POST";

const AuthForm: ({ formData }: { formData: Form }) => JSX.Element = ({
  formData,
}: {
  formData: Form;
}) => {
  const initialFormData: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formDataObject, setFormDataObject] = useState<User>(initialFormData);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [register, setRegister] = useState<boolean>(false);

  const parseFormAction: (action: string) => string = (action: string) => {
    if (action === get) return get;
    else if (action === post) return post;
    else return "";
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formDataObject?.password !== formDataObject?.confirmPassword) {
      setErrorMessage("Password and confirm password does not match!");
      return;
    }
    setFormDataObject(initialFormData);
    setErrorMessage("");
    setRegister(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataObject((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getCurrentValue = <K extends keyof User>(currentLabel: K) =>
    formDataObject[currentLabel];

  return (
    <form
      className={formData?.styleString}
      action={parseFormAction(formData?.action)}
      id={formData?.id}
      onSubmit={handleFormSubmit}
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
            onChange={handleInputChange}
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
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {register && (
        <div
          className="mb-4 rounded-lg  bg-green-400 p-4 text-sm text-gray-900"
          role="alert"
        >
          <span className="font-medium">User is successfully registered!</span>
        </div>
      )}
      <button
        id={formData?.callToAction?.id}
        type="submit" // TODO: take it from the form data
        className={formData?.callToAction?.styleString}
      >
        {formData?.callToAction?.label}
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
