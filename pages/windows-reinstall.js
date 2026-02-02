const steps = [
  {
    title: "Step 1",
    note: "Choose language, time/currency, and keyboard layout, then select Next.",
    image: "Windows Reinstall/1.png"
  },
  {
    title: "Step 2",
    note: "Activation screen: enter a product key or choose “I don't have a product key.”",
    image: "Windows Reinstall/2.png"
  },
  {
    title: "Step 3",
    note: "Select the Windows edition to install (example: Windows 10 Pro) and continue.",
    image: "Windows Reinstall/3.png"
  },
  {
    title: "Step 4",
    note: "Choose “Custom: Install Windows only (advanced)” for a clean install.",
    image: "Windows Reinstall/4.png"
  },
  {
    title: "Step 5",
    note: "Pick the target drive/partition (unallocated space shown) and click Next.",
    image: "Windows Reinstall/5.png"
  },
  {
    title: "Step 6",
    note: "Windows begins installing and prepares files, features, and updates.",
    image: "Windows Reinstall/6.png"
  },
  {
    title: "Step 7",
    note: "Create a local user name for the PC and proceed.",
    image: "Windows Reinstall/7.png"
  },
  {
    title: "Step 8",
    note: "Microsoft Edge data prompt: choose “Not now” to skip importing data.",
    image: "Windows Reinstall/8.png"
  },
  {
    title: "Step 9",
    note: "Review privacy settings, set toggles per policy, then Accept.",
    image: "Windows Reinstall/9.png"
  },
  {
    title: "Step 10",
    note: "Personalization options screen: select any needed options or click Skip.",
    image: "Windows Reinstall/10.png"
  },
  {
    title: "Step 11",
    note: "Cortana prompt: select “Not now” if not used.",
    image: "Windows Reinstall/11.png"
  },
  {
    title: "Step 12",
    note: "Windows Update settings: pause updates for 7 days if required by policy.",
    image: "Windows Reinstall/12.png"
  },
  {
    title: "Step 13",
    note: "Run the “Disable Windows 11” batch file as administrator that will be in your windows flash drive.",
    image: "Windows Reinstall/13.png"
  },
  {
    title: "Step 14",
    note: "Command prompt shows the version lock completed; press any key to finish.",
    image: "Windows Reinstall/14.png"
  },
  {
    title: "Step 15",
    note: "Verify Windows Update shows “Some settings are managed by your organization after using that bat file.”",
    image: "Windows Reinstall/15.png"
  },
  {
    title: "Step 16",
    note: "Open Windows PowerShell as administrator for post-install tasks.",
    image: "Windows Reinstall/16.png"
  },
  {
    title: "Step 17",
    note: "Activate Windows using an approved method (valid product key, org licensing, or Microsoft account).",
    image: "Windows Reinstall/17.png"
  },
  {
    title: "Step 18",
    note: "Activation options screen: proceed only with approved licensing methods.",
    image: "Windows Reinstall/18.png"
  },
  {
    title: "Step 19",
    note: "Activation menu: complete activation using your organization’s licensed process. for windows activation press 1,for microsoft 365 for exel and stuff, press 2",
    image: "Windows Reinstall/19.png"
  },
  {
    title: "Step 20",
    note: "Launch the approved driver installer (example shown) if required.",
    image: "Windows Reinstall/20.png",
    imageWidth: 300
  },
  {
    title: "Step 21",
    note: "Start Office setup.",
    image: "Windows Reinstall/21.png",
    imageWidth: 300
  },
  {
    title: "Step 22",
    note: "Wait for Microsoft 365/Office to download and finish installing.",
    image: "Windows Reinstall/22.png"
  }
];

const windowsReinstall = {
  slug: "windows-reinstall",
  title: "Windows Reinstall",
  summary: "Visual walkthrough for a full Windows reinstall.",
  footerText: "That should be about it for reinstalling Windows.",
  steps
};

export default windowsReinstall;
