import React, { useRef } from "react";
import { useState } from "react";
import { GoCheck } from "react-icons/go";
import FormGroups from "../components/FormGroups/FormGroups";

const ContactPage = () => {
  const name = useRef("John");
  const messageRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const [message, setMessage] = useState(
    `Hello ${name.current}, hope you are doing great. Let us collaborate on project axyz.`
  );
  const [messageError, setMessageError] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (firstName === "") {
      firstNameRef.current.focus();
      firstNameRef.current.value = "";
      return;
    }
    if (lastName === "") {
      lastNameRef.current.focus();
      lastNameRef.current.value = "";
      return;
    }
    if (email === "") {
      emailRef.current.focus();
      emailRef.current.value = "";
      return;
    }

    if (message === "") {
      messageRef.current.focus();
      messageRef.current.value = "";
      return;
    }

    alert(
      `Hello ${firstName}, \nThanks for reaching out. I'll get back to you soon`
    );
  };
  return (
    <div className="w-full flex flex-col pb-16 lg:py-40 justify-center items-center">
      <div className="w-full max-w-[720px] flex flex-col gap-11 justify-center items-center">
        <div className="w-full flex flex-col items-start gap-5">
          <h1 className="font-semibold text-4xl leading-[44px] ">Contact Me</h1>
          <p className="text-xl leading-[30px] text-gray-600">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form className="w-full flex flex-col gap-7" action="">
          <div className="flex flex-col lg:flex-row gap-6">
            <FormGroups
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              groupType="input"
              name="First Name"
              placeholder="Enter your first name"
              type="text"
              inputRef={firstNameRef}
              id="first_name"
            />
            <FormGroups
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              groupType="input"
              name="Last Name"
              placeholder="Enter your last name"
              type="text"
              inputRef={lastNameRef}
              id="last_name"
            />
          </div>
          <FormGroups
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            groupType="input"
            name="Email"
            placeholder="yourname@email.com"
            type="email"
            inputRef={emailRef}
            id="email"
          />
          <FormGroups
            groupType="textarea"
            id="message"
            name="Message"
            value={message}
            inputRef={messageRef}
            onChange={(e) => {
              setMessage(() => e.target.value);
              if (
                e.target === document.activeElement &&
                e.target.value === ""
              ) {
                setMessageError(true);
              } else {
                setMessageError(false);
              }
            }}
            placeholder="Send me a message and I'll reply you as soon as possible..."
            error={messageError}
            required
          />
          <div className="flex gap-3 items-start ">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="hidden"
              onChange={(e) => setIsAgreed(e.target.checked)}
            />

            <label
              htmlFor="agree"
              className="flex gap-3 items-start lg:items-center text-base text-[#475467] "
            >
              <span
                className={`h-5 w-5 min-h-[20px] min-w-[20px] flex items-center justify-center rounded-md hover:shadow-focus cursor-pointer border mt-1 lg:mt-0  ${
                  isAgreed
                    ? "bg-[#F9FAFB] border-[#1570EF] text-[#1570EF]"
                    : "text-transparent border-[#D0D5DD]"
                }`}
              >
                <GoCheck />
              </span>
              <p>
                You agree to providing your data to{" "}
                <span className="font-bold">{name.current}</span> who may
                contact you.
              </p>
            </label>
          </div>
          <button
            id="btn__submit"
            className={`w-full text-white  rounded-lg text-base leading-6 text-center py-3 duration-300 outline-none ${
              isAgreed
                ? "bg-[#1570EF] hover:bg-[#175CD3] focus:bg-[#175CD3] "
                : "bg-[#B2DDFF] hover:bg-[#B2DDFF] focus:bg-[#B2DDFF]"
            }`}
            onClick={sendMessage}
            disabled={!isAgreed}
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
