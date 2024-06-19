import { Resend } from "resend";
import { f as fail } from "../../../chunks/index.js";
const actions = {
  brief: async ({ request }) => {
    const form = await request.formData();
    const topic = form.get("topic");
    const phone = form.get("phone");
    const email = form.get("email");
    const name = form.get("name");
    const message = form.get("message");
    const checkbox = form.get("terms");
    const budget = form.get("budget-type");
    if (topic.length < 5) {
      return fail(400, { topic, topicError: true });
    }
    if (message.length < 5) {
      return fail(400, { message, messageError: true });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) && email.length < 5) {
      return fail(400, { email, emailError: true });
    }
    if (name.length < 5) {
      return fail(400, { name, nameError: true });
    }
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(phone)) {
      return fail(400, { phone, phoneError: true });
    }
    if (checkbox !== "on") {
      return fail(400, { checkbox, checkboxError: true });
    }
    const resend = new Resend("re_XTujBvRr_E5zBx7UgpFhAb69S1MYd172i");
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delalegion99@gmail.com"],
      subject: "Nowy brief - Hubert Kruk",
      html: "<strong>Imię i nazwisko: " + name + " </strong><br/> <strong>Email: " + email + "</strong><br /> <strong>Nr tel.: " + phone + "</strong><br /><strong>Temat: " + topic + " </strong><br /><strong>Wiadomość: " + message + "</strong><strong>Budzet: " + budget + " </strong><br />"
    });
    if (error) {
      return console.log({ error });
    }
    return { success: true };
  },
  form: async ({ request }) => {
    const form = await request.formData();
    const phone = form.get("phone");
    const email = form.get("email");
    const name = form.get("name");
    const message = form.get("message");
    const checkbox = form.get("terms");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) && email.length < 5) {
      return fail(400, { email, formEmailError: true });
    }
    if (name.length < 5) {
      return fail(400, { name, formNameError: true });
    }
    const numberRegex = /^\d+$/;
    if (!numberRegex.test(phone)) {
      return fail(400, { phone, formPhoneError: true });
    }
    if (message.length < 5) {
      return fail(400, { message, formMessageError: true });
    }
    if (checkbox !== "on") {
      return fail(400, { checkbox, formCheckboxError: true });
    }
    const resend = new Resend("re_XTujBvRr_E5zBx7UgpFhAb69S1MYd172i");
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delalegion99@gmail.com"],
      subject: "Nowa wiadomość - Hubert Kruk",
      html: "<strong>Imię i nazwisko: " + name + " </strong><br/> <strong>Email: " + email + "</strong><br /> <strong>Nr tel.: " + phone + "</strong><br /><strong>Wiadomość: " + message + "</strong>"
    });
    if (error) {
      return console.log({ error });
    }
    return { formSuccess: true };
  }
};
export {
  actions
};
