import React, { useRef, useState } from "react";
import "./contact.scss";
import { MdLocationPin, MdEmail, MdPhoneInTalk } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import GoogleMap from "../GoogleMap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import { contactData } from "../data/contactData";

const Contact = () => {
    const form = useRef();
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.currentTarget.name]: e.currentTarget.value,
        });
        setFormErrors({
            ...formErrors,
            [e.currentTarget.name]: '',
        })
    };
    const [formErrors, setFormErrors] = useState({});
    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Name is a required field";
        }
        if (!values.email) {
            errors.email = "Email is a required field";
        }
        if (values.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(values.email)) {
                errors.email = "Invalid email address";
            }
        }
        if (!values.subject) {
            errors.subject = "Subject is a required field";
        }
        if (!values.message) {
            errors.message = "Message is a required field";
        }
        return errors;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const newErrors = validate(inputData);
        setFormErrors(newErrors)
        const isNonEmpty = !Object.values(inputData).some(
            (x) => x === null || x === ""
        );
        if (isNonEmpty && Object.keys(newErrors).length === 0) {
            emailjs
                .sendForm(
                    "service_zqeruoy",
                    "template_vd0dhy9",
                    form.current,
                    "user_WoPM157PmNm5aE4Zzm6Lc"
                )
                .then(
                    (result) => {
                        let timerInterval;
                        Swal.fire({
                            title: "Your Message is sending...",
                            html: "Will close in <b></b> milliseconds.",
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading();
                                const b =
                                    Swal.getHtmlContainer().querySelector("b");
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft();
                                }, 100);
                            },
                            willClose: () => {
                                clearInterval(timerInterval);
                            },
                        }).then((result) => {
                            if (result.dismiss === Swal.DismissReason.timer) {
                                console.log("I was closed by the timer");
                            }
                        });
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };


    return (
        <div className="contact-section">
            <div className="contact-section__left">
                {contactData().items.map((data, i) => (
                    <div key={i}>
                        <label className="contact-section__left__item" >
                            <span className="contact-section__left__icon">
                                {data.icon}
                            </span>
                            {data.label}:
                        </label>
                        <p className="contact-section__left__value">
                            {data.value}
                        </p>
                    </div>
                ))}

                <div className="contact-section__left__map">
                    <GoogleMap />
                </div>
            </div>
            <form
                ref={form}
                className="contact-section__right"
                onSubmit={sendEmail}
            >
                <input
                    type="text"
                    name="name"
                    className="contact-section__right__input"
                    placeholder="Name"
                    onChange={handleChange}
                />
                {
                    formErrors.name && <p className="contact-section__right__error">{formErrors.name}</p>
                }
                <input
                    type="text"
                    name="email"
                    className="contact-section__right__input"
                    placeholder="Email"
                    onChange={handleChange}
                />
                {
                    formErrors.email && <p className="contact-section__right__error">{formErrors.email}</p>
                }
                <input
                    type="text"
                    name="subject"
                    className="contact-section__right__input"
                    placeholder="Subject"
                    onChange={handleChange}
                />
                {
                    formErrors.subject&& <p className="contact-section__right__error">{formErrors.subject}</p>
                }
                <textarea
                    type="text"
                    name="message"
                    className="contact-section__right__input contact-section__right__input--area"
                    placeholder="Message"
                    onChange={handleChange}
                />
                {
                    formErrors.message && <p className="contact-section__right__error">{formErrors.message}</p>
                }
                <button
                    type="submit"
                    className="contact-section__right__button"
                >
                    Send Message{" "}
                    <RiSendPlaneFill className="contact-section__right__button__icon" />
                </button>
            </form>
        </div>
    );
};

export default Contact;
