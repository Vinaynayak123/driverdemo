import React, { useEffect, useState } from "react";
import Header from "./Header";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";
import giphy from "../Image/giphy.gif";
import axios from "axios";
import { invoke } from "@tauri-apps/api/tauri";

function Dafrag({ currentDate, setCurrentDate }) {
  const [show, setshow] = useState(false);
  const [driverData, setDriverData] = useState();
  // console.log("driver Data :",  driverData.length);
  const [currentIndexs, setCurrentIndexs] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [cleanerStatus, setCleanerStatus] = useState("status");
  const [isScanning, setIsScanning] = useState(true);
  const [scanInterval, setScanInterval] = useState(null);
  const [initialInterval, setInitialScanInterval] = useState(null);
  const [redirectPath, setRedirectPath] = useState(null);
  const [showBackupMessage, setShowBackupMessage] = useState(false);
  const [driversCount, setDriversCount] = useState(null);
  console.log("driverCount :", driversCount);
  const [isBackupComplete, setIsBackupComplete] = useState();
  const [totalcount, setTotalCount] = useState(null);
  console.log("Get total data :", totalcount);

  const Tauri = window.__TAURI__;

  let intervalId;

  useEffect(() => {
    return () => {
      clearInterval(scanInterval);
    };
  }, [scanInterval]);

  const handleScanToggle = () => {
    if (isScanning) {
      setIsScanning(false);
      clearInterval(scanInterval);
      setScanInterval(null);
    } else {
      // Start or resume scanning
      setIsScanning(true);

      const interval = setInterval(() => {
        setPercentage((prevPercentage) => Math.min(prevPercentage + 0.5, 100));
        setCurrentIndexs((prevIndex) =>
          Math.min(prevIndex + 1, driverData.length)
        );

        if (currentIndexs === driverData.length) {
          clearInterval(interval);
          setPercentage(100);
          setCleanerStatus(status);
          setRedirectPath("/scan-registry");
        }
      }, 10);

      setScanInterval(interval); // Store the interval ID for later clearing
    }
  };

  const getTotalCount = async () => {
    try {
      // const response = await axios.get("http://localhost:3000/totalcount");
      const response = {
        totalCount: 137,
      };
      setTotalCount(response.totalCount);
    } catch (error) {
      console.error("Error getting total count:", error);
    }
  };

  useEffect(() => {
    getTotalCount();
  });

  let initialScanInterval;

  // Empty dependency array ensures the effect runs only once on mount

  const backupdata = async () => {
    try {
      // const response = await axios.post("http://localhost:3000/backupall");
      const response = [
        {
          _id: "65cb41f283f4f2ee8bd279c5",
          backupDate: "13/02/2024",
          __v: 0,
        },
        {
          _id: "65cb547583f4f2ee8bd27be8",
          DeviceName: "Microsoft Streaming Service Proxy",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cb548783f4f2ee8bd27e1a",
          backupDate: "13/02/2024",
          __v: 0,
        },
        {
          _id: "65cb58714c701be49265be2a",
          backupDate: "13/02/2024",
          __v: 0,
        },
        {
          _id: "65cb58ec0cc96e11ba79ef0d",
          backupDate: "12/02/2024",
          __v: 0,
        },
        {
          _id: "65cc49bd5fe949ff269f514d",
          DeviceName: "USB Composite Device",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cc49bd5fe949ff269f5151",
          DeviceName: "USB Root Hub (USB 3.0)",
          DriverVersion: "10.0.22621.2861",
          __v: 0,
        },
        {
          _id: "65cc49c15fe949ff269f51e3",
          backupDate: "14/02/2024",
          __v: 0,
        },
        {
          _id: "65cdaf494bd5079ce7afbc11",
          DeviceName: "WAN Miniport (Network Monitor)",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf494bd5079ce7afbc15",
          DeviceName: "WAN Miniport (IPv6)",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf494bd5079ce7afbc19",
          DeviceName: "WAN Miniport (IP)",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf494bd5079ce7afbc1d",
          DeviceName: "WAN Miniport (PPPOE)",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf494bd5079ce7afbc21",
          DeviceName: "WAN Miniport (PPTP)",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf494bd5079ce7afbc25",
          DeviceName: "WAN Miniport (L2TP)",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf494bd5079ce7afbc29",
          DeviceName: "WAN Miniport (IKEv2)",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf494bd5079ce7afbc2d",
          DeviceName: "WAN Miniport (SSTP)",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4a4bd5079ce7afbc3d",
          DeviceName: "Local Print Queue",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4a4bd5079ce7afbc51",
          DeviceName: "Generic software device",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4b4bd5079ce7afbc55",
          DeviceName: "Computer Device",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4b4bd5079ce7afbc59",
          DeviceName: "Remote Desktop Device Redirector Bus",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf4b4bd5079ce7afbc5d",
          DeviceName: "Plug and Play Software Device Enumerator",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4b4bd5079ce7afbc61",
          DeviceName: "Microsoft System Management BIOS Driver",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4b4bd5079ce7afbc65",
          DeviceName: "NDIS Virtual Network Adapter Enumerator",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4b4bd5079ce7afbc69",
          DeviceName: "Microsoft Hyper-V Virtual Disk Server",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf4b4bd5079ce7afbc6d",
          DeviceName: "Microsoft Basic Render Driver",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf4b4bd5079ce7afbc71",
          DeviceName: "Microsoft Hyper-V PCI Server",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4c4bd5079ce7afbc75",
          DeviceName: "Acer Inc. System Firmware 1.26",
          DriverVersion: "5.42.1.26",
          __v: 0,
        },
        {
          _id: "65cdaf4c4bd5079ce7afbc79",
          DeviceName: "Microsoft UEFI-Compliant System",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4c4bd5079ce7afbc7d",
          DeviceName: "ACPI Thermal Zone",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4c4bd5079ce7afbc91",
          DeviceName: "ACPI Fan",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4d4bd5079ce7afbc99",
          DeviceName: "Trusted Platform Module 2.0",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf4d4bd5079ce7afbc9d",
          DeviceName: "HID-compliant wireless radio controls",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf4d4bd5079ce7afbca1",
          DeviceName: "Acer Airplane Mode Controller",
          DriverVersion: "1.0.0.10",
          __v: 0,
        },
        {
          _id: "65cdaf4d4bd5079ce7afbca5",
          DeviceName: "HID-compliant system controller",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf4d4bd5079ce7afbca9",
          DeviceName: "HID-compliant consumer control device",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4d4bd5079ce7afbcad",
          DeviceName: "HID Keyboard Device",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4d4bd5079ce7afbcb1",
          DeviceName: "Converted Portable Device Control device",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4e4bd5079ce7afbcb5",
          DeviceName: "Portable Device Control device",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4e4bd5079ce7afbcb9",
          DeviceName: "Intel(R) HID Event Filter",
          DriverVersion: "2.2.1.384",
          __v: 0,
        },
        {
          _id: "65cdaf4e4bd5079ce7afbcbd",
          DeviceName: "ACPI Power Button",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4e4bd5079ce7afbcc1",
          DeviceName: "Intel(R) Power Engine Plug-in",
          DriverVersion: "10.0.22621.3085",
          __v: 0,
        },
        {
          _id: "65cdaf4e4bd5079ce7afbccd",
          DeviceName: "ACPI Processor Aggregator",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4f4bd5079ce7afbcdd",
          DeviceName: "Intel Processor",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf4f4bd5079ce7afbce1",
          DeviceName: "ACPI Sleep Button",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf4f4bd5079ce7afbce9",
          DeviceName: "Intel(R) Serial IO GPIO Host Controller - INT34C5",
          DriverVersion: "30.100.2031.2",
          __v: 0,
        },
        {
          _id: "65cdaf4f4bd5079ce7afbcf5",
          DeviceName: "Microsoft Windows Management Interface for ACPI",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf504bd5079ce7afbcfd",
          DeviceName: "Intel(R) SPI (flash) Controller - A0A4",
          DriverVersion: "10.1.24.5",
          __v: 0,
        },
        {
          _id: "65cdaf504bd5079ce7afbd01",
          DeviceName: "Intel(R) SMBus - A0A3",
          DriverVersion: "10.1.24.5",
          __v: 0,
        },
        {
          _id: "65cdaf504bd5079ce7afbd09",
          DeviceName: "Realtek Audio Effects Component",
          DriverVersion: "13.247.1124.210",
          __v: 0,
        },
        {
          _id: "65cdaf504bd5079ce7afbd0d",
          DeviceName: "Intelr Smart Sound Technology for Digital Microphones",
          DriverVersion: "10.29.0.9677",
          __v: 0,
        },
        {
          _id: "65cdaf504bd5079ce7afbd11",
          DeviceName: "Intelr Smart Sound Technology for Bluetoothr Audio",
          DriverVersion: "10.29.0.9677",
          __v: 0,
        },
        {
          _id: "65cdaf504bd5079ce7afbd15",
          DeviceName: "Intelr Smart Sound Technology for USB Audio",
          DriverVersion: "10.29.0.9677",
          __v: 0,
        },
        {
          _id: "65cdaf504bd5079ce7afbd19",
          DeviceName: "Audio Endpoint",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf514bd5079ce7afbd1d",
          DeviceName: "Realtek Audio Universal Service",
          DriverVersion: "1.0.668.0",
          __v: 0,
        },
        {
          _id: "65cdaf514bd5079ce7afbd21",
          DeviceName: "Realtek Hardware Support Application",
          DriverVersion: "11.0.6000.313",
          __v: 0,
        },
        {
          _id: "65cdaf514bd5079ce7afbd25",
          DeviceName: "Realtek Audio Effects Component",
          DriverVersion: "13.0.6000.1097",
          __v: 0,
        },
        {
          _id: "65cdaf514bd5079ce7afbd29",
          DeviceName: "Realtek Audio",
          DriverVersion: "6.0.9601.1",
          __v: 0,
        },
        {
          _id: "65cdaf514bd5079ce7afbd2d",
          DeviceName: "Intelr Smart Sound Technology Detection Verification",
          DriverVersion: "1.0.3045.0",
          __v: 0,
        },
        {
          _id: "65cdaf514bd5079ce7afbd31",
          DeviceName: "Intelr Smart Sound Technology OED",
          DriverVersion: "10.29.0.9677",
          __v: 0,
        },
        {
          _id: "65cdaf514bd5079ce7afbd35",
          DeviceName: "Intelr Smart Sound Technology BUS",
          DriverVersion: "10.29.0.9677",
          __v: 0,
        },
        {
          _id: "65cdaf514bd5079ce7afbd39",
          DeviceName: "ACPI Lid",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf524bd5079ce7afbd3d",
          DeviceName: "Microsoft AC Adapter",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf524bd5079ce7afbd41",
          DeviceName: "Microsoft ACPI-Compliant Control Method Battery",
          DriverVersion: "1.0.0.6",
          __v: 0,
        },
        {
          _id: "65cdaf524bd5079ce7afbd45",
          DeviceName: "Microsoft ACPI-Compliant Embedded Controller",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf524bd5079ce7afbd49",
          DeviceName: "Standard PS/2 Keyboard",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf524bd5079ce7afbd51",
          DeviceName: "System timer",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf524bd5079ce7afbd55",
          DeviceName: "System CMOS/real time clock",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf524bd5079ce7afbd59",
          DeviceName: "Motherboard resources",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf524bd5079ce7afbd5d",
          DeviceName: "Programmable interrupt controller",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf534bd5079ce7afbd61",
          DeviceName: "High precision event timer",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf534bd5079ce7afbd65",
          DeviceName:
            "Intel(R) LPC Controller/eSPI Controller (U Premium) - A082",
          DriverVersion: "10.1.24.5",
          __v: 0,
        },
        {
          _id: "65cdaf534bd5079ce7afbd69",
          DeviceName: "Realtek PCIe GbE Family Controller",
          DriverVersion: "10.63.1014.2022",
          __v: 0,
        },
        {
          _id: "65cdaf534bd5079ce7afbd6d",
          DeviceName: "Intel(R) PCI Express Root Port #9 - A0B0",
          DriverVersion: "10.1.24.5",
          __v: 0,
        },
        {
          _id: "65cdaf534bd5079ce7afbd71",
          DeviceName: "Intel(R) Serial IO I2C Host Controller - A0C6",
          DriverVersion: "30.100.2031.2",
          __v: 0,
        },
        {
          _id: "65cdaf534bd5079ce7afbd75",
          DeviceName: "Intel(R) Serial IO I2C Host Controller - A0C5",
          DriverVersion: "30.100.2031.2",
          __v: 0,
        },
        {
          _id: "65cdaf534bd5079ce7afbd79",
          DeviceName: "Intel RST VMD Managed Controller 09AB",
          DriverVersion: "18.6.1.1016",
          __v: 0,
        },
        {
          _id: "65cdaf534bd5079ce7afbd7d",
          DeviceName:
            "Intel(R) Management and Security Application Local Management",
          DriverVersion: "2130.1.16.1",
          __v: 0,
        },
        {
          _id: "65cdaf544bd5079ce7afbd81",
          DeviceName: "Intel(R) iCLS Client",
          DriverVersion: "1.63.1155.1",
          __v: 0,
        },
        {
          _id: "65cdaf544bd5079ce7afbd85",
          DeviceName: "Intel(R) Dynamic Application Loader Host Interface",
          DriverVersion: "1.41.2021.121",
          __v: 0,
        },
        {
          _id: "65cdaf544bd5079ce7afbd89",
          DeviceName: "Intel(R) Management Engine Interface #1",
          DriverVersion: "2040.100.0.1029",
          __v: 0,
        },
        {
          _id: "65cdaf544bd5079ce7afbd8d",
          DeviceName: "Microsoft Input Configuration Device",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf544bd5079ce7afbd91",
          DeviceName: "Tobii Touchpad Filter Driver",
          DriverVersion: "1.2.3.980",
          __v: 0,
        },
        {
          _id: "65cdaf544bd5079ce7afbd95",
          DeviceName: "HID-compliant vendor-defined device",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf544bd5079ce7afbd99",
          DeviceName: "HID-compliant mouse",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf544bd5079ce7afbd9d",
          DeviceName: "I2C HID Device",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf554bd5079ce7afbda1",
          DeviceName: "Intel(R) Serial IO I2C Host Controller - A0EB",
          DriverVersion: "30.100.2031.2",
          __v: 0,
        },
        {
          _id: "65cdaf554bd5079ce7afbda5",
          DeviceName: "Intel(R) Serial IO I2C Host Controller - A0E8",
          DriverVersion: "30.100.2031.2",
          __v: 0,
        },
        {
          _id: "65cdaf554bd5079ce7afbdad",
          DeviceName: "Microsoft Wi-Fi Direct Virtual Adapter",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf554bd5079ce7afbdb1",
          DeviceName: "Intel(R) Wireless-AC 9560 160MHz",
          DriverVersion: "22.10.0.7",
          __v: 0,
        },
        {
          _id: "65cdaf554bd5079ce7afbdb5",
          DeviceName: "PCI standard RAM Controller",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf554bd5079ce7afbdb9",
          DeviceName: "Microsoft Bluetooth LE Enumerator",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf554bd5079ce7afbdbd",
          DeviceName: "Bluetooth Device (Personal Area Network)",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf564bd5079ce7afbdc5",
          DeviceName: "Bluetooth Device",
          DriverVersion: "10.0.22621.3085",
          __v: 0,
        },
        {
          _id: "65cdaf564bd5079ce7afbdcd",
          DeviceName:
            "Microsoft Bluetooth Hands-Free Profile AudioGateway role",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf564bd5079ce7afbdd5",
          DeviceName: "Microsoft Bluetooth Avrcp Transport Driver",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf564bd5079ce7afbddd",
          DeviceName: "Microsoft Bluetooth A2dp Source",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf564bd5079ce7afbde1",
          DeviceName: "Microsoft Bluetooth Enumerator",
          DriverVersion: "10.0.22621.3085",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbde5",
          DeviceName: "Bluetooth Device (RFCOMM Protocol TDI)",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbde9",
          DeviceName: "Intel(R) Wireless Bluetooth(R)",
          DriverVersion: "22.230.0.2",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbded",
          DeviceName: "WinUsb Device",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbdf1",
          DeviceName: "USB Video Device",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbdf4",
          DeviceName: "USB Composite Device",
          DriverVersion: "10.0.22621.3155",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbdf7",
          DeviceName: "USB Root Hub (USB 3.0)",
          DriverVersion: "10.0.22621.3155",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbdfb",
          DeviceName: "USB xHCI Compliant Host Controller",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbdff",
          DeviceName:
            "Intel(R) Optane(TM) Memory and Storage Management Component",
          DriverVersion: "18.6.1.1016",
          __v: 0,
        },
        {
          _id: "65cdaf574bd5079ce7afbe03",
          DeviceName: "Generic software component",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe07",
          DeviceName: "Disk drive",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe0b",
          DeviceName: "Intel RST VMD Controller 9A0B",
          DriverVersion: "18.6.1.1016",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe0f",
          DeviceName: "Intel(R) GNA Scoring Accelerator module",
          DriverVersion: "2.0.0.1097",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe13",
          DeviceName: "Generic PnP Monitor",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe17",
          DeviceName: "Intel(R) Graphics Command Center",
          DriverVersion: "30.0.101.1404",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe1b",
          DeviceName: "Intel(R) Graphics Control Panel",
          DriverVersion: "30.0.101.1404",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe1f",
          DeviceName: "Intel(R) UHD Graphics",
          DriverVersion: "30.0.101.1404",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe23",
          DeviceName: "PCI standard host CPU bridge",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf584bd5079ce7afbe27",
          DeviceName: "PCI Express Root Complex",
          DriverVersion: "10.0.22621.2861",
          __v: 0,
        },
        {
          _id: "65cdaf594bd5079ce7afbe2b",
          DeviceName: "Microsoft ACPI-Compliant System",
          DriverVersion: "10.0.22621.2792",
          __v: 0,
        },
        {
          _id: "65cdaf594bd5079ce7afbe2f",
          DeviceName: "ACPI x64-based PC",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf594bd5079ce7afbe33",
          DeviceName: "Charge Arbitration Driver",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf594bd5079ce7afbe37",
          DeviceName: "UMBus Root Bus Enumerator",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf594bd5079ce7afbe3b",
          DeviceName: "Microsoft Storage Spaces Controller",
          DriverVersion: "10.0.22621.2792",
          __v: 0,
        },
        {
          _id: "65cdaf594bd5079ce7afbe3f",
          DeviceName: "Microsoft Virtual Drive Enumerator",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf594bd5079ce7afbe43",
          DeviceName: "Composite Bus Enumerator",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf594bd5079ce7afbe47",
          DeviceName: "Microsoft Hyper-V Virtualization Infrastructure Driver",
          DriverVersion: "10.0.22621.2715",
          __v: 0,
        },
        {
          _id: "65cdaf5a4bd5079ce7afbe4b",
          DeviceName: "Microsoft Hypervisor Service",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf5a4bd5079ce7afbe4f",
          DeviceName: "Microsoft Basic Display Driver",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf5a4bd5079ce7afbe53",
          DeviceName: "Microsoft Hyper-V Virtual Machine Bus Provider",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf5b4bd5079ce7afbe6b",
          DeviceName: "Generic volume shadow copy",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf5b4bd5079ce7afbe77",
          DeviceName: "Volume",
          DriverVersion: "10.0.22621.1",
          __v: 0,
        },
        {
          _id: "65cdaf5b4bd5079ce7afbe7b",
          DeviceName: "Volume Manager",
          DriverVersion: "10.0.22621.2506",
          __v: 0,
        },
        {
          _id: "65cdaf5b4bd5079ce7afbe7f",
          DeviceName: null,
          DriverVersion: null,
          __v: 0,
        },
        {
          _id: "65cdaf5b4bd5079ce7afbe87",
          DeviceName: null,
          DriverVersion: "2:10.0,2:6.3,2:6.2,2:6.1,2:6.0,2:5.2,2:5.1",
          __v: 0,
        },
        {
          _id: "65cdaf5b4bd5079ce7afbe89",
          backupDate: "15/02/2024",
          __v: 0,
        },
      ];
      const newDriverData = response;
      setDriverData(newDriverData);
      setDriversCount(newDriverData);

      console.log("new driver data =", newDriverData);
      setCurrentIndexs(0);
      setIsBackupComplete(false);
      const newDate = new Date().toString();

      initialScanInterval = setInterval(() => {
        if (isScanning && !isBackupComplete) {
          setIsScanning(true);
          setPercentage((prevPercentage) =>
            Math.min(prevPercentage + 100 / newDriverData.driversCount, 100)
          );
          setCurrentIndexs((prevIndex) => prevIndex + 1);
          if (currentIndexs >= newDriverData.driversCount.length) {
            clearInterval(initialScanInterval);
            setPercentage(100);
            setIsBackupComplete(true);
          }
        }
      }, 100);

      console.log("Initial interval id =", initialScanInterval);
      return () => clearInterval(initialScanInterval);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    if (percentage === 100) {
      const timeoutId = setTimeout(() => {
        setShowBackupMessage(true);
      }, 1000); // 10 seconds delay
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [percentage]);

  const handlenext = async () => {
    if (!show) {
      backupdata();
      setshow(true);
    }
  };

  return (
    <>
      <div className="container-darfrag testing-class">
        <div className="lastScreenResult">
          <div className="lastScreenResultSecond text-xs ">
            Last Scan Result :
          </div>
        </div>
        <h4 className="dafrag-hh">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          commodi deleniti praesentium. Mollitia, cupiditate! Suscipit fugiat ex
          quo! Inventore praesentium velit officiis fugiat illum quibusdam cum
          animi culpa aliquam quae?
        </h4>
        <br />
        <div className="divide-y divide-slate-200 ">
          <p className="ml-14 font-black fontofoption mb-2">
            {" "}
            Select the Backup Job :
          </p>
          <div class="form-check ml-16 fontofoption1">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check" for="flexRadioDefault1">
              Create complete backup of all system drivers
              <br />
              Select this option to create a complete backup of all the system
              drivers
            </label>
          </div>
          {/* <div class="form-check ml-16 fontofoption1">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Create complete backup of the specific drivers
              <br />
              Select this option to create a backup of specific drivers
            </label>


            
          </div> */}
        </div>
        <div id="pagescanbottom" className="fixed-bottom  ">
          <button
            className="btn btn-dark designbtnbackup1 px-5"
            onClick={handlenext}
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
      {show && (
        <div className="exclusion-main1">
          <div className="container-darfrag testing-class">
            <div className="lastScreenResult">
              <div className="lastScreenResultSecond text-sm">
                Creating Backup of All Drivers
              </div>
            </div>
            <div className="StartScan flex justify-content-between">
              <div>
                <img src={giphy} alt="" className="imageofscan mr-3" />
              </div>
              <div>
              <div class="containermodelDraft">    
  <div class="progressmodelDraft progressmodelDraft-striped">
    <div class="progressmodelDraft-bar">
    </div>                       
  </div> 
</div>
                <span className="ml-16 text-xs mt-16">
                  {currentIndexs < driverData.length && (
                    <p className="dat">
                      {driverData[currentIndexs].DeviceName}
                    </p>
                  )}
                </span>
              </div>
            </div>
          </div>
          {showBackupMessage && (
            <div>
              <div className="designthisone">
                <span className="text-sm font-bold text-green-600 flex justify-content-center border-b-2 my-2	">
                  Backup Completed Successfully
                </span>
                <div className="flex justify-content-between mt-1 mx-10 a">
                  <p>Total Drivers: </p>
                  <span>{driversCount} drivers</span>
                </div>
                <div className="flex justify-content-between mx-10 a">
                  <p> Drivers Selected For Backup: </p>
                  <span>{totalcount} drivers</span>
                </div>
                <div className="flex justify-content-between mx-10 a">
                  <p>Backup Completed For Drivers: </p>
                  <span>Successful</span>
                </div>
              </div>
              <div>
                <p className="text-green-500 border-t-2 mb-1 mt-14 mx-4 text-xs font-bold 	">
                  Recommended Action:
                </p>
                <p className="text-xs  mt-1 mx-4 leading-4">
                  System with outdated drivers may not work with full
                  efficiency.It is recommended to resister Advance Driver Update
                  to update system specific drivers
                </p>
              </div>
            </div>
          )}
          <div
            id="pagescanbottom21"
            className="fixed-bottom  mb-3 flex justify-content-end bg-gray-100"
          >
            {showBackupMessage && (
              <button className="btn btn-light designbtn1 border-black text-black">
                Buy Now
              </button>
            )}
            <button
              className="btn btn-light designbtn1 border-black	text-black "
              onClick={(e) => setshow(false)}
            >
              Finish
            </button>
            <button
              className="btn btn-light designbtn1 mr-2 border-black	 text-black "
              onClick={handleScanToggle}
            >
              {isScanning ? "Stop Backup" : "Start Backup"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Dafrag;
