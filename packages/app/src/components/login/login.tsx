import React, { useState } from "react";
import AuthForm from "../auth/authForm";
import { type Message, Type } from "~/types/message";
import { type Form } from "~/types/formType";
import { type LoginRQ } from "~/types/loginRQ";
import { v4 as uuidv4 } from "uuid";
import { signIn, useSession } from "next-auth/react";
import { User } from "~/types/user";
import { useRouter } from "next/router";

const loginForm: Form = {
  action: "POST",
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

  const { data: session } = useSession();

  const router = useRouter();

  if (session?.user && successMessage.message.length === 0) {
    const sessionUser: User = session?.user as User;
    setSuccessMessage({
      code: 20002,
      message: `${sessionUser.firstName} is successfully authenticated!`,
      type: Type.SUCCESS,
    });
    setTimeout(() => {
      void router.push("/");
    }, 1000);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email: string = formDataObject.loginEmail;
    const password: string = formDataObject.loginPassword;
    try {
      signIn("Credentials", {
        username: email,
        password,
        redirect: false,
      })
        .then((r) => console.log(r))
        .catch((e) => console.error(e));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDiscordButtonClick = () => {
    try {
      signIn("discord", { redirect: false })
        .then((r) => console.log(r))
        .catch((e) => console.error(e));
    } catch (error) {
      console.error(error);
    }
  };

  const handleGitHubButtonClick = () => {
    try {
      signIn("github", { redirect: false })
        .then((r) => console.log(r))
        .catch((e) => console.error(e));
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataObject((prevData: LoginRQ) => ({
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
          <hr />
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            <span className="underline decoration-blue-600">Register</span> or{" "}
            <span className="underline decoration-blue-600">Login</span> with
            our supported vendors
          </p>
          <div className="flex">
            <button
              type="button"
              className=" mb-2 mr-2 inline-flex w-full items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500"
              onClick={handleDiscordButtonClick}
            >
              <svg
                className="mr-1 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
                  clipRule="evenodd"
                />
              </svg>
              Use Discord
            </button>
            <button
              type="button"
              className="mb-2 mr-2 inline-flex w-full items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500"
              onClick={handleGitHubButtonClick}
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              Use Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
