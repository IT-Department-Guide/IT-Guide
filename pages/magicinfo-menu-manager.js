const steps = [
  {
    title: "Step 1",
    note: "Open Remote Desktop Connection and connect to the Menu Manager server.",
    image: "MagicInfo & Menu Manager/1.png",
    sideNote: "Credentials: IP: 10.17.251.50 - User: Administrator - Password: Meama#2025!"
  },
  {
    title: "Step 2",
    note: "In Menu Manager, locate the correct folder and click Add Video.",
    image: "MagicInfo & Menu Manager/2.png",
    sideNote: "Credentials: Username: admin - Password: admin123!@#"
  },
  {
    title: "Step 3",
    note: "Select the folder, choose the video file (15MB max), optionally rename it, then upload.",
    image: "MagicInfo & Menu Manager/3.png",
    sideNote: "Pick the requested folder (Space, Collect, or Franchise). If the file already has a name, keep it; otherwise set a clear name."
  },
  {
    title: "Step 4",
    note: "Select the uploaded video item during the mini PC setup.",
    image: "MagicInfo & Menu Manager/4.png"
  },
  {
    title: "Step 5",
    note: "Open the video details and click Copy Kiosk Command.",
    image: "MagicInfo & Menu Manager/5.png"
  },
  {
    title: "Step 6",
    note: "Back in Menu Display System, select the correct section and click Add Video.",
    image: "MagicInfo & Menu Manager/6.png"
  },
  {
    title: "Step 7",
    note: "On the Mini PC desktop, right-click and choose New → Shortcut.",
    image: "MagicInfo & Menu Manager/7.png"
  },
  {
    title: "Step 8",
    note: "Use the Chrome shortcut icon as the base shortcut.",
    image: "MagicInfo & Menu Manager/8.png"
  },
  {
    title: "Step 9",
    note: "Paste the copied kiosk command into the location field and click Next.",
    image: "MagicInfo & Menu Manager/9.png"
  },
  {
    title: "Step 10",
    note: "Name the shortcut and click Finish.",
    image: "MagicInfo & Menu Manager/10.png"
  }
];

const magicInfo = {
  slug: "magicinfo-menu-manager",
  title: "MagicInfo & Menu Manager",
  summary: "Upload menu videos in the Menu Manager system.",
  footerText: "After you finish that shortcut, open win + r type shell:startuo and drag and drop it in there.",
  steps
};

export default magicInfo;
