const steps = [
  {
    title: "Step 1",
    note: "Open Remote Desktop Connection and enter the FINA server address.",
    image: "FINA/1.png",
    sideNote: "Credentials: IP: 10.17.251.65 - User: d-admin - Password: P@r0le#123."
  },
  {
    title: "Step 2",
    note: "In the shutdown dialog, choose a reason (use Other (Unplanned) if unsure) and restart the server.",
    image: "FINA/2.png",
    imageWidth: 320
  },
  {
    title: "Step 3",
    note: "After a restart, this VPN must be turned on.",
    image: "FINA/3.png",
    imageWidth: 320
  }
];

const finaServerRestart = {
  slug: "fina-server-restart",
  title: "FINA Server Restart",
  summary: "Restart the FINA server when users report lag.",
  footerText: "That should be it. Confirm services are back online after the reboot.",
  steps
};

export default finaServerRestart;
