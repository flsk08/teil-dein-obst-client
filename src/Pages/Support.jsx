import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "../assets/styles/support.css";
import Logo from "../assets/logo/Logo.svg";

export default function Support() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  console.log("status:", status);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setUserInput({
            name: "",
            email: "",
            message: "",
          });
          setStatus("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <>
      <div className="supportWrapper">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="support-container">
          <form ref={form} onSubmit={sendEmail} className="support-form">
            <h3>Kontaktformular</h3>
            <div className="support-content">
              Du hast Fragen, Anregungen oder Dein Obstbaum wurde
              fälschlicherweise hier hochgeladen?
              <br />
              Dann kontaktiere uns gerne über dieses Kontaktformular. Wir werden
              uns schnellstmöglich mit Dir in Verbindung setzen!
            </div>
            {status && renderAlert()}
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="support-name"
              placeholder="Gebe hier Deinen Namen ein"
              value={userInput.name}
              onChange={handleChange}
              
            />
            <label>E-Mail Adresse</label>
            <input
              type="email"
              name="email"
              className="support-mail"
              placeholder="Gebe hier Deine E-Mail Adresse ein"
              value={userInput.email}
              onChange={handleChange}
              
            />
            <label>Deine Nachricht an uns</label>
            <textarea
              className="support-message"
              name="message"
              cols="30"
              rows="8"
              placeholder="Deine Nachricht..."
              value={userInput.message}
              onChange={handleChange}
            ></textarea>
            <button disabled={!userInput.name || !userInput.email || !userInput.message} className="support-submit" type="submit" value="ABSCHICKEN">
              ABSCHICKEN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const renderAlert = () => (
  <div className="support-success-message">
    <p>Deine Nachricht wurde erfolgreich versendet!</p>
  </div>
);

console.log(renderAlert());
