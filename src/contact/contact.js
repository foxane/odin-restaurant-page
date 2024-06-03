import "./contact.css";

export default function () {
  // SOCIAL
  const SOCIAL_DATA = [
    {
      href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      iconClass: "fa-brands",
      iconClass2: "fa-facebook-f",
      text: "Naspad",
    },
    {
      href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      iconClass: "fa-brands",
      iconClass2: "fa-x-twitter",
      text: "@naspad",
    },
    {
      href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      iconClass: "fa-brands",
      iconClass2: "fa-instagram",
      text: "@naspad",
    },
    {
      href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      iconClass: "fa-brands",
      iconClass2: "fa-telegram",
      text: "+0123 4563",
    },
  ];

  const contact = document.createElement("div");
  contact.classList.add("contact");

  const h2 = document.createElement("h2");
  h2.textContent = "Reach Us!";
  contact.appendChild(h2);

  const ul = document.createElement("ul");
  ul.classList.add("social");

  for (const item of SOCIAL_DATA) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.target = "_blank";
    const i = document.createElement("i");
    i.classList.add("fa-brands", item.iconClass, item.iconClass2);
    a.appendChild(i);
    a.appendChild(document.createTextNode(item.text));
    li.appendChild(a);
    ul.appendChild(li);
  }

  contact.appendChild(ul);

  // FORM
  const form = document.createElement("form");
  form.action = "#";
  form.classList.add("form");

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email: ";
  emailLabel.setAttribute("for", "email");
  form.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.id = "email";
  emailInput.name = "user-email";
  emailInput.type = "email";
  emailInput.placeholder = "Enter your email";
  emailInput.required = true;
  form.appendChild(emailInput);

  const textareaLabel = document.createElement("label");
  textareaLabel.textContent = "Suggestions: ";
  textareaLabel.setAttribute("for", "textarea");
  form.appendChild(textareaLabel);

  const textarea = document.createElement("textarea");
  textarea.id = "textarea";
  textarea.name = "opinion";
  textarea.rows = "10";
  textarea.cols = "50";
  textarea.placeholder = "Tell us how we can do better";
  textarea.required = true;
  form.appendChild(textarea);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  const note = document.createElement("p");
  note.classList.add("note", "hidden");
  note.textContent =
    "Thank you for trying it out, this simple contact page is really tedious to make :)";
  contact.appendChild(note);
  // Submit event
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    note.classList.remove("hidden");
  });

  form.appendChild(submitButton);

  contact.appendChild(form);

  return contact;
}
