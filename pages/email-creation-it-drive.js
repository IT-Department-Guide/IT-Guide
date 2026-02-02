const steps = [
  {
    title: "Step 1",
    note: "In Google Admin, go to Users and click Add a user.",
    image: "Email Creation & IT Drive/1.png"
  },
  {
    title: "Step 2",
    note: "Fill in the user's details and primary email, then add the new user.",
    image: "Email Creation & IT Drive/2.png"
  },
  {
    title: "Step 3",
    note: "Credentials: use the IT admin account from the approved password vault. Email: it@meama.ge Password: Guranda2026!@#$",
    image: "",
    callout: true
  }
];

const emailCreation = {
  slug: "email-creation-it-drive",
  title: "Email Creation & IT Drive",
  summary: "Create a Google Workspace email and open the IT Drive folder.",
  links: [
    { label: "Google Admin Login", url: "https://admin.google.com/login" },
    { label: "IT Drive Folder", url: "https://drive.google.com/drive/folders/1DUmijv_0AOtBxUSDun1cKu02l9-lkXVn" }
  ],
  footerText: "That should be about it for creating the email and accessing the IT Drive.",
  steps
};

export default emailCreation;
