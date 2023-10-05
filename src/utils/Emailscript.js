import emailjs from "emailjs-com";

export const sendEmail = (fullName, email, organization) => {
  // Initialize email.js with your user ID
  emailjs.init("QzP8eQAjeOqgPxYjI");


  // Prepare the email parameters
  const emailParams = {
    to_name: "xmigrate", // Replace with the recipient's name
    name: fullName,
    email:email,
    organization:organization
  };

  // Send the email
  return emailjs.send("service_aaeczza", "template_cm20zcn", emailParams);
};
