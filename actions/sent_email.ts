"use server";
import { validateString, errorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email-form/contact-form-email";
import React from "react";
import { data } from "autoprefixer";

const resend = new Resend(process.env.Resend_API_KEY);

export const sentEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  if (!validateString(senderEmail, 255)) {
    return {
      status: 400,
      body: "Bad Request",
      message: "Invalid Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      status: 400,
      body: "Bad Request",
      message: "Invalid Message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact From <onboarding@res>",
      to: "sawhtetniang58@gmail.com",
      subject: "New Contact Form Submission",
      reply_to: senderEmail as string,
      //   text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    return { data };
  } catch (e: unknown) {
    return { error: errorMessage(e) };
  }
};
