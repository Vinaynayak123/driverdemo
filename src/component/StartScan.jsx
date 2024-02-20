import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import giphy from "../Image/giphy.gif";
import ScanRegistry from "./ScanRegistry";

export default function StartScan({ value = 0 }) {
  const [driverData, setDriverData] = useState([]);
  const [currentIndexs, setCurrentIndexs] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const fileListRef = useRef();
  const [cleanerStatus, setCleanerStatus] = useState("status");
  const [isScanning, setIsScanning] = useState(true);
  const [scanInterval, setScanInterval] = useState(null);
  const [initialInterval, setInitialScanInterval] = useState(null);
  const [redirectPath, setRedirectPath] = useState(null);

  const Tauri = window.__TAURI__;

  let intervalId;

  useEffect(() => {
    if (redirectPath) {
      history.push(redirectPath);
    }
  }, [redirectPath, history]);
  useEffect(() => {
    console.log("useEffect running");
    fetchData();
  }, []);

  useEffect(() => {
    if (!isScanning) {
      clearInterval(scanInterval);
    }
  }, [isScanning, scanInterval]);

  const handleRedirect = (status, delay) => {
    setTimeout(() => {
      setCleanerStatus(status);
      Tauri.invoke("tauri", "open", {
        uri: "scan-registry",
        webviewId: "webview",
      });
      alert("Redirecting to another page and im getting display to uuuu!");
    }, delay);
  };

  const fetchData = async () => {
    console.log("fetch data running");
    try {
      // const response = await axios.get("http://localhost:3000/getdrivers");
      const response = await [
        {
          "DeviceName": "Generic software device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Local Print Queue",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Local Print Queue",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Local Print Queue",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Local Print Queue",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Local Print Queue",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Local Print Queue",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Local Print Queue",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "WAN Miniport (Network Monitor)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "WAN Miniport (IPv6)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "WAN Miniport (IP)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "WAN Miniport (PPPOE)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "WAN Miniport (PPTP)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "WAN Miniport (L2TP)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "WAN Miniport (IKEv2)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "WAN Miniport (SSTP)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic software device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic software device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic software device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic software device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic software device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Remote Desktop Device Redirector Bus",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Plug and Play Software Device Enumerator",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft System Management BIOS Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "NDIS Virtual Network Adapter Enumerator",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Basic Render Driver",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "System Firmware 0.1.33.0",
          "DriverVersion": "0.1.33.0",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft UEFI-Compliant System",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "ACPI Fixed Feature Button",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Dynamic Tuning Manager",
          "DriverVersion": "8.7.10802.26924",
          "DriverStatus": null
        },
        {
          "DeviceName": "Motherboard resources",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "ACPI Thermal Zone",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID-compliant system controller",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID-compliant consumer control device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID Keyboard Device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Converted Portable Device Control device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Portable Device Control device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID-compliant wireless radio controls",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) HID Event Filter",
          "DriverVersion": "2.2.1.377",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft ACPI-Compliant Control Method Battery",
          "DriverVersion": "1.0.0.6",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft AC Adapter",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "ACPI Sleep Button",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "ACPI Power Button",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "ACPI Lid",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Windows Management Interface for ACPI",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Windows Management Interface for ACPI",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Trusted Platform Module 2.0",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Power Engine Plug-in",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Windows Management Interface for ACPI",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "ACPI Processor Aggregator",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel Processor",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel Processor",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel Processor",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel Processor",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Dynamic Tuning Generic Participant",
          "DriverVersion": "8.7.10802.26924",
          "DriverStatus": null
        },
        {
          "DeviceName": "STMicroelectronics 3-Axis Digital Accelerometer",
          "DriverVersion": "2.2.7.3",
          "DriverStatus": null
        },
        {
          "DeviceName": "Motherboard resources",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Motherboard resources",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Motherboard resources",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Motherboard resources",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Ethernet Connection (5) I219-LM",
          "DriverVersion": "12.18.9.10",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) 100 Series/C230 Series Chipset Family SMBus - A123",
          "DriverVersion": "10.1.6.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Display Audio",
          "DriverVersion": "10.26.0.12",
          "DriverStatus": null
        },
        {
          "DeviceName": "Audio Endpoint",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Audio Endpoint",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Realtek Audio",
          "DriverVersion": "6.0.1.8569",
          "DriverStatus": null
        },
        {
          "DeviceName": "High Definition Audio Controller",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) 100 Series/C230 Series Chipset Family PMC - A121",
          "DriverVersion": "10.1.6.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "Standard PS/2 Keyboard",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Dynamic Tuning Generic Participant",
          "DriverVersion": "8.7.10802.26924",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Dynamic Tuning Generic Participant",
          "DriverVersion": "8.7.10802.26924",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft ACPI-Compliant Embedded Controller",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Motherboard resources",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "System timer",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "System CMOS/real time clock",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Motherboard resources",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Motherboard resources",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Numeric data processor",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Programmable interrupt controller",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "High precision event timer",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Legacy device",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) 100 Series/C230 Series Chipset Family LPC Controller (CM238) - A154",
          "DriverVersion": "10.1.6.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) 100 Series/C230 Series Chipset Family PCI Express Root Port #5 - A114",
          "DriverVersion": "10.1.6.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "Realtek PCIE CardReader",
          "DriverVersion": "10.0.17763.21313",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) 100 Series/C230 Series Chipset Family PCI Express Root Port #3 - A112",
          "DriverVersion": "10.1.6.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Wi-Fi Direct Virtual Adapter",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Wi-Fi Direct Virtual Adapter",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Dual Band Wireless-AC 8265",
          "DriverVersion": "20.70.25.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) 100 Series/C230 Series Chipset Family PCI Express Root Port #2 - A111",
          "DriverVersion": "10.1.6.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "Disk drive",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) 100 Series/C230 Chipset Family SATA AHCI Controller",
          "DriverVersion": "16.8.4.1011",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Management and Security Application Local Management",
          "DriverVersion": "1914.12.0.1254",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) iCLS Client",
          "DriverVersion": "1.52.230.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Dynamic Application Loader Host Interface",
          "DriverVersion": "1908.12.0.1228",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Management Engine WMI Provider",
          "DriverVersion": "2130.1.15.0",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) iCLS Client",
          "DriverVersion": "1.52.230.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Dynamic Application Loader Host Interface",
          "DriverVersion": "1908.12.0.1228",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Management Engine Interface #1",
          "DriverVersion": "2316.5.0.0",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID-compliant vendor-defined device",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID Keyboard Device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID-compliant mouse",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "AlpsAlpine HID-compliant device",
          "DriverVersion": "8.2206.1717.164",
          "DriverStatus": null
        },
        {
          "DeviceName": "Dell Touchpad",
          "DriverVersion": "10.3201.101.216",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID Keyboard Device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID-compliant mouse",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "I2C HID Device",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Serial IO I2C Host Controller - A161",
          "DriverVersion": "30.100.1816.3",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Serial IO I2C Host Controller - A160",
          "DriverVersion": "30.100.1816.3",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) 100 Series/C230 Series Chipset Family Thermal subsystem - A131",
          "DriverVersion": "10.1.6.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "HID-compliant mouse",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "USB Input Device",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "USB Video Device",
          "DriverVersion": "10.0.19041.3758",
          "DriverStatus": null
        },
        {
          "DeviceName": "USB Composite Device",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth LE Enumerator",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Bluetooth Device (Personal Area Network)",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Bluetooth Device",
          "DriverVersion": "10.0.19041.3930",
          "DriverStatus": null
        },
        {
          "DeviceName": "Bluetooth Device",
          "DriverVersion": "10.0.19041.3930",
          "DriverStatus": null
        },
        {
          "DeviceName": "Bluetooth Device",
          "DriverVersion": "10.0.19041.3930",
          "DriverStatus": null
        },
        {
          "DeviceName": "Bluetooth Device",
          "DriverVersion": "10.0.19041.3930",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Hands-Free Audio device",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Hands-Free Profile AudioGateway role",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Hands-Free Audio device",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Hands-Free Profile AudioGateway role",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Hands-Free Audio device",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Hands-Free Profile AudioGateway role",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Hands-Free Audio device",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Hands-Free Profile AudioGateway role",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Avrcp Transport Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Avrcp Transport Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Avrcp Transport Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Avrcp Transport Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Avrcp Transport Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Avrcp Transport Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Avrcp Transport Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Avrcp Transport Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth A2dp Source",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth A2dp Source",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth A2dp Source",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth A2dp Source",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Bluetooth Enumerator",
          "DriverVersion": "10.0.19041.3930",
          "DriverStatus": null
        },
        {
          "DeviceName": "Standard Serial over Bluetooth link",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Standard Serial over Bluetooth link",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Bluetooth Device (RFCOMM Protocol TDI)",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Wireless Bluetooth(R)",
          "DriverVersion": "22.190.0.2",
          "DriverStatus": null
        },
        {
          "DeviceName": "USB Root Hub (USB 3.0)",
          "DriverVersion": "10.0.19041.3803",
          "DriverStatus": null
        },
        {
          "DeviceName": "USB xHCI Compliant Host Controller",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Dynamic Tuning Processor Participant",
          "DriverVersion": "8.7.10802.26924",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic PnP Monitor",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Graphics Command Center",
          "DriverVersion": "31.0.101.2111",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Graphics Control Panel",
          "DriverVersion": "31.0.101.2111",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) HD Graphics 530",
          "DriverVersion": "31.0.101.2111",
          "DriverStatus": null
        },
        {
          "DeviceName": "Intel(R) Host Bridge/DRAM Registers - 1910",
          "DriverVersion": "10.1.7.4",
          "DriverStatus": null
        },
        {
          "DeviceName": "PCI Express Root Complex",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft ACPI-Compliant System",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "ACPI x64-based PC",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Charge Arbitration Driver",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "UMBus Root Bus Enumerator",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Kernel Debug Network Adapter",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Storage Spaces Controller",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Virtual Drive Enumerator",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Composite Bus Enumerator",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Hyper-V Virtualization Infrastructure Driver",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Microsoft Basic Display Driver",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": "Volume",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic volume shadow copy",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic volume shadow copy",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic volume shadow copy",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Generic volume shadow copy",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Volume",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Volume",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Volume",
          "DriverVersion": "10.0.19041.1",
          "DriverStatus": null
        },
        {
          "DeviceName": "Volume Manager",
          "DriverVersion": "10.0.19041.3636",
          "DriverStatus": null
        },
        {
          "DeviceName": null,
          "DriverVersion": null,
          "DriverStatus": null
        },
        {
          "DeviceName": null,
          "DriverVersion": "2:10.0,2:6.3,2:6.2,2:6.1,2:6.0,2:5.2,2:5.1",
          "DriverStatus": null
        },
        {
          "DeviceName": null,
          "DriverVersion": "2:10.0,2:6.3,2:6.2,2:6.1,2:6.0,2:5.2,2:5.1",
          "DriverStatus": null
        },
        {
          "DeviceName": null,
          "DriverVersion": "2:10.0,2:6.3,2:6.2,2:6.1,2:6.0,2:5.2,2:5.1",
          "DriverStatus": null
        },
        {
          "DeviceName": null,
          "DriverVersion": "2:10.0,2:6.3,2:6.2,2:6.1,2:6.0,2:5.2,2:5.1",
          "DriverStatus": null
        },
        {
          "DeviceName": null,
          "DriverVersion": "2:10.0,2:6.3,2:6.2,2:6.1,2:6.0,2:5.2,2:5.1",
          "DriverStatus": null
        },
        {
          "DeviceName": null,
          "DriverVersion": "2:10.0,2:6.3,2:6.2,2:6.1,2:6.0,2:5.2,2:5.1",
          "DriverStatus": null
        }
      ]
      const newDriverData = response;
      setDriverData(newDriverData);
      setCurrentIndexs(0);
      scrollToFileEnd();
      console.log("get driver route");

      const intervalId = setInterval(() => {
        console.log("setInterval");
        if (isScanning) {
          setPercentage((prevPercentage) =>
            Math.min(prevPercentage + 100 / newDriverData.length, 100)
          );
          setCurrentIndexs((prevIndex) => prevIndex + 1);

          if (currentIndexs >= newDriverData.length) {
            clearInterval(intervalId);
            setPercentage(100);
            handleRedirect("scan-registry", 3000);
          }
        }
      }, 100);
      setScanInterval(intervalId);
      console.log("first interval id =", intervalId);

      return () => clearInterval(intervalId);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const scrollToFileEnd = () => {
    const fileList = fileListRef.current;
    if (fileList) {
      fileList.scrollTop = fileList.scrollHeight;
    }
  };

  const handleScanToggle = () => {
    setIsScanning((prevIsScanning) => !prevIsScanning);
  };

  // const handleScanToggle = () => {
  //   if (isScanning) {
  //     setIsScanning(false);
  //     clearInterval(intervalRef.current);
  //   } else {
  //     setIsScanning(true);
  //     intervalRef.current = setInterval(() => {
  //       setPercentage((prevPercentage) => Math.min(prevPercentage + 0.5, 100));

  //       if (currentIndexs === driverData.length) {
  //         clearInterval(intervalRef.current);
  //         setPercentage(100);
  //         handleRedirect("scan-registry", 3000);
  //       }
  //     }, 100);
  //   }
  // };

  return cleanerStatus === "status" ? (
    <>
      <div className="StartScan flex justify-content-between">
        <div>
          <img src={giphy} alt="" className="imageofscan mr-3" />
        </div>
        <div>
          <div className="progress">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: `${percentage}%` }}
              aria-valuenow={percentage}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>{percentage.toFixed()}%</span>
            </div>
          </div>
          <span className="ml-16 text-xs mt-16">
            {currentIndexs < driverData.length && (
              <p className="dat">{driverData[currentIndexs].DeviceName}</p>
            )}
          </span>
        </div>
      </div>
      <div className="mt-8">
        <div
          ref={fileListRef}
          style={{ height: "250px", overflowY: "auto" }}
          className="backupregistry1 tableclasses"
        >
          <table className="table table-hover tablescan">
            <thead className="table-secondary fixed	 ">
              <tr className="headdesign">
                <th scope="col" colSpan="1">
                  DriverName
                </th>
                <th scope="col">Version</th>
                {/* <th scope="col">Status</th> */}
              </tr>
            </thead>
            <tbody
              className="overflow-y-scroll"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {driverData.slice(0, currentIndexs + 1).map((driver, index) => {
                {
                  /* {driverData.map((driver, index) => { */
                }

                console.log(driver.DriverVersion);
                return (
                  <tr key={index}>
                    <th scope="row">{driver.DeviceName}</th>
                    <th scope="row">{driver.DriverVersion}</th>
                    {/* <th scope="row">{driver.DriverStatus}</th> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div id="pagescanbottom" className="fixed-bottom">
        <button
          className="btn btn-light designbtnbackup1 px-4"
          onClick={handleScanToggle}
        >
          {isScanning ? "Stop Scan" : "Start Scan"}
        </button>
      </div>

      {handleRedirect("scan-registry", 13000)}
    </>
  ) : (
    <ScanRegistry />
  );
}
