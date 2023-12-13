import emailjs from "emailjs-com";

export const sendEmail = (email) => {
  // Initialize email.js with your user ID
  emailjs.init("X3Z_QUxaIZazE6d-l");


  // Prepare the email parameters
  const emailParams = {
    to_name: "xmigrate", // Replace with the recipient's name
    // name: fullName,
    email: email,
    
  };

  // Send the email
  return emailjs.send("service_czw1was", "template_93nsl5d", emailParams);
};
