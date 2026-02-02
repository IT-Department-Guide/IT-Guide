const steps = [
  {
    title: "Step 1",
    note:
      "Check if the printer can connect to Wi-Fi and have the employee use the same Wi-Fi network afterward so it keeps working."
  },
  {
    title: "Step 2",
    note: "If the internet does not work, use a cable and connect it to the laptop."
  },
  {
    title: "Step 3",
    note:
      "Check the printer model, search for the correct driver, and set it up on the laptop so it can print."
  },
  {
    title: "Step 4",
    note: "Run a test print before leaving."
  }
];

const printers = {
  slug: "printers",
  title: "Printers",
  summary: "Set up a printer and verify it prints.",
  footerText: "That should be it for printer setup.",
  steps
};

export default printers;
