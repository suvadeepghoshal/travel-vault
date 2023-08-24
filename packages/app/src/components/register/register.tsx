import AuthForm from "~/components/auth/authForm";
import { type Form } from "~/types/formType";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { type User } from "~/types/user";
import { type Message, Type } from "~/types/message";
import { type ApiResponse } from "~/types/apiResponse";

const registerForm: Form = {
  action: "NONE",
  callToAction: {
    href: "",
    id: uuidv4(),
    label: "Register",
    styleString:
      "w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    type: "submit",
  },
  id: uuidv4(),
  sections: [
    {
      id: uuidv4(),
      label: "firstName",
      name: "First Name",
      placeholder: {
        text: "your first name",
        active: true,
      },
      required: true,
      styleString: {
        labelStyle:
          "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
        inputStyle:
          "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm",
      },
      type: "text",
    },
    {
      id: uuidv4(),
      label: "lastName",
      name: "Last Name",
      placeholder: {
        text: "your last name",
        active: true,
      },
      required: true,
      styleString: {
        labelStyle:
          "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
        inputStyle:
          "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm",
      },
      type: "text",
    },
    {
      id: uuidv4(),
      label: "email",
      name: "Email",
      placeholder: {
        text: "name@company.com",
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
      label: "password",
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
    {
      id: uuidv4(),
      label: "confirmPassword",
      name: "Confirm Password",
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
      type: "confirmPassword",
    },
  ],
  styleString: "space-y-4 md:space-y-6",
};

const Register: () => JSX.Element = () => {
  const initialFormData: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImageUrl: "", // need to take input
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

  const [formDataObject, setFormDataObject] = useState<User>(initialFormData);
  const [errorMessage, setErrorMessage] =
    useState<Message>(initialErrorMessage);
  const [successMessage, setSuccessMessage] = useState(initialSuccessMessage);
  const [requestInProgress, setRequestInProgress] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRequestInProgress((prevData) => !prevData);

    if (formDataObject?.password !== formDataObject?.confirmPassword) {
      setErrorMessage({
        code: 10001,
        message: "Password and confirm password does not match!",
        type: Type.ERROR,
      });
      setRequestInProgress((prevData) => !prevData);
      return;
    }

    const response = await fetch("/api/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    });

    debugger;

    const responseData = (await response.json()) as ApiResponse;
    const data: User = responseData?.user;
    let error;
    if (data === undefined) error = responseData?.error;

    if (data) {
      setFormDataObject(initialFormData);
      setErrorMessage(initialErrorMessage);
      setSuccessMessage({
        code: 20001,
        message: "User is successfully registered!",
        type: Type.SUCCESS,
      });
    } else if (error && error?.type === Type.ERROR) {
      setErrorMessage(error);
      setFormDataObject(initialFormData);
    }
    setRequestInProgress((prevData) => !prevData);
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
            Create an account
          </h1>
          <AuthForm
            formData={registerForm}
            formDataObject={formDataObject}
            error={errorMessage}
            success={successMessage}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            requestInProgress={requestInProgress}
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
