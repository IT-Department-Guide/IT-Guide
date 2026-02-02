import windowsReinstall from "./windows-reinstall.js";
import forticlientVpn from "./forticlient-vpn.js";
import emailCreation from "./email-creation-it-drive.js";
import magicInfo from "./magicinfo-menu-manager.js";
import finaServerRestart from "./fina-server-restart.js";
import collectOpeningRouter from "./collect-opening-router-configuration.js";
import remoteDesktopsMiniPcs from "./remote-desktops-minipcs.js";
import printers from "./printers.js";

export const guides = [
  windowsReinstall,
  forticlientVpn,
  emailCreation,
  magicInfo,
  finaServerRestart,
  collectOpeningRouter,
  remoteDesktopsMiniPcs,
  printers
];

export const guideMap = guides.reduce((acc, guide) => {
  acc[guide.slug] = guide;
  return acc;
}, {});
