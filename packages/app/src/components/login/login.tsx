import { useState } from "react";
import AuthForm from "../auth/authForm";
import { type Message, Type } from "~/types/message";
import { type Form } from "~/types/formType";
import { type LoginRQ } from "~/types/loginRQ";
import { v4 as uuidv4 } from "uuid";

const loginForm: Form = {
  action: "NONE",
  callToAction: {
    href: "",
    id: uuidv4(),
    label: "Login",
    styleString:
      "w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    type: "submit",
  },
  id: uuidv4(),
  sections: [
    {
      id: uuidv4(),
      label: "loginEmail",
      name: "Email",
      placeholder: {
        text: "your email",
        active: true,
      },
      required: true,
      styleString: {
        labelStyle:
          "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
        inputStyle:
          "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm",
      },
      type: "email",
    },
    {
      id: uuidv4(),
      label: "loginPassword",
      name: "Password",
      placeholder: {
        text: "••••••••",
        active: true,
      },
      required: true,
      styleString: {
        labelStyle:
          "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
        inputStyle:
          "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm",
      },
      type: "password",
    },
  ],
  styleString: "space-y-4 md:space-y-6",
};

const Login = ({
  currentPath,
}: {
  currentPath: string | undefined;
}): JSX.Element => {
  const initialFormData: LoginRQ = {
    loginEmail: "",
    loginPassword: "",
  };

  const initialErrorMessage: Message = {
    code: 0,
    message: "",
    type: Type.ERROR,
  };

  const initialSuccessMessage: Message = {
    code: 0,
    message: "",
    type: Type.SUCCESS,
  };

  const [formDataObject, setFormDataObject] =
    useState<LoginRQ>(initialFormData);
  const [errorMessage, setErrorMessage] =
    useState<Message>(initialErrorMessage);
  const [successMessage, setSuccessMessage] = useState<Message>(
    initialSuccessMessage
  );
  const [requestInProgress, setRequestInProgress] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formDataObject);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataObject((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Sign In to your account
          </h1>
          <AuthForm
            formData={loginForm}
            formDataObject={formDataObject}
            error={errorMessage}
            success={successMessage}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            requestInProgress={requestInProgress}
            currentPath={currentPath}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
