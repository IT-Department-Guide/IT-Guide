const steps = [
  {
    title: "Before you start",
    note:
      "Message Gurami at +995 595 12 00 12 and ask if he has time to configure a router for the new location (4G router). After the initial setup, it must be set for whichever provider is available as fast as possible.",
    callout: true
  },
  {
    title: "Step 1",
    note: "Find and record the SIM card ICCID/serial number from the SIM holder.",
    image: "Collect Opening & Router configeration/1.png",
    imageWidth: 320
  },
  {
    title: "Step 2",
    note: "Identify the 4G router model (TP-Link Archer MR400) for the new location.",
    image: "Collect Opening & Router configeration/2.png"
  },
  {
    title: "Step 3",
    note: "Connect and power on the MikroTik router, then verify the status LEDs.",
    image: "Collect Opening & Router configeration/3.png",
    imageWidth: 320
  },
  {
    title: "Step 4",
    note: "Log in to the MyMagti Business portal.",
    image: "Collect Opening & Router configeration/4.png",
    sideNote: "Credentials: User: l.kandelaki@meama.ge - Password: ShadowLKA$04"
  },
  {
    title: "Step 5",
    note: "Open the APN page and click the action button to manage the APN.",
    image: "Collect Opening & Router configeration/5.png"
  },
  {
    title: "Step 6",
    note: "Select the SIM ID and assign the APN profile (MEAMA.GE).",
    image: "Collect Opening & Router configeration/6.png"
  },
  {
    title: "Step 7",
    note: "In MyMagti Business, locate the SIM by ID and choose the correct service package.",
    image: "Collect Opening & Router configeration/7.png"
  }
];

const collectOpeningRouter = {
  slug: "collect-opening-router-configuration",
  title: "Collect Opening & Router Configuration",
  summary: "Configure a 4G router for a new Collect location.",
  footerText: "That should be it for the Collect opening router setup.",
  steps
};

export default collectOpeningRouter;
