const steps = [
  {
    title: "Step 1",
    note: "Open Remote Desktop Connection and connect to the admin server.",
    image: "forticlient-vpn/account/1.png",
    sideNote: "Credentials: IP: 10.17.251.100 - User: d-admin - Password: P@r0le#123."
  },
  {
    title: "Step 2",
    note: "Open Active Directory Administrative Center (Users shortcut).",
    image: "forticlient-vpn/account/2.png"
  },
  {
    title: "Step 3",
    note: "In Users, choose New to create a new user account.",
    image: "forticlient-vpn/account/3.png"
  },
  {
    title: "Step 4",
    note: "Select User as the object type.",
    image: "forticlient-vpn/account/4.png"
  },
  {
    title: "Step 5",
    note: "Fill in account details and set a temporary password.",
    image: "forticlient-vpn/account/5.png"
  },
  {
    title: "Step 6",
    note: "Go to Member Of and click Add to assign group membership.",
    image: "forticlient-vpn/account/6.png"
  },
  {
    title: "Step 7",
    note: "Add the VPN group (example: VPN-ALL), check names, then OK.",
    image: "forticlient-vpn/account/7.png"
  },
  {
    title: "Step 8",
    note: "Install FortiClient using the approved setup file.",
    image: "forticlient-vpn/application/FortiClientVPNSetup_7.4.3.1790_x64.exe"
  },
  {
    title: "Step 9",
    note: "Open FortiClient VPN and create a new SSL-VPN profile with the server address and username.",
    image: "forticlient-vpn/application/2.png"
  },
  {
    title: "Step 10",
    note: "Select the VPN profile, enter the user’s password, and click Connect.",
    image: "forticlient-vpn/application/3.png",
    sideNote: "IT VPN User — User: IT | Password: MeamaIT!@#"
  }
];

const forticlientVpn = {
  slug: "forticlient-vpn",
  title: "FortiClient VPN Account",
  summary: "Create the VPN account in Active Directory and assign the VPN group.",
  footerText: "That should be about it for creating the FortiClient VPN account.",
  steps
};

export default forticlientVpn;





