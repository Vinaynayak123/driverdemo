import React, { useState, useEffect } from "react";
import StartScan from "./StartScan";
import desktop from "../Image/desktop.png";
import WindowIcon from "@mui/icons-material/Window";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import intel from "../Image/intel.png";
import minewin from "../Image/minewin.png";
import graphics from "../Image/grapgics.jpg"

function Status() {
  const [cleanerStart, setCleanerStart] = useState("status");
  const [systemInfo, setSystemInfo] = useState(null);
  console.log("system information :", systemInfo);
  const [error, setError] = useState(null);
  const [driverData, setDriverData] = useState([]);
  const [driverCount, setDriverCount] = useState(0);
  const [systemInformation, setSystemInformation] = useState({
    "WAN Miniport (Network Monitor)": "10.0.22621.3",
    "WAN Miniport (IPv6)": "10.0.22621.1",
    "WAN Miniport (IP)": "10.0.22621.1",
    "WAN Miniport (PPPOE)": "10.0.22621.1",
    "WAN Miniport (PPTP)": "10.0.22621.1",
    "WAN Miniport (L2TP)": "10.0.22621.1",
    "WAN Miniport (IKEv2)": "10.0.22621.1",
    "WAN Miniport (SSTP)": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Local Print Queue": "10.0.22621.1",
    "Local Print Queue": "10.0.22621.1",
    "Local Print Queue": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Computer Device": "10.0.22621.1",
    "Remote Desktop Device Redirector Bus": "10.0.22621.2506",
    "Plug and Play Software Device Enumerator": "10.0.22621.1",
    "Microsoft System Management BIOS Driver": "10.0.22621.1",
    "NDIS Virtual Network Adapter Enumerator": "10.0.22621.1",
    "Microsoft Hyper-V Virtual Disk Server": "10.0.22621.2506",
    "Microsoft Basic Render Driver": "10.0.22621.2506",
    "Microsoft Hyper-V PCI Server": "10.0.22621.1",
    "Acer Inc. System Firmware 1.26": "5.42.1.26",
    "Microsoft UEFI-Compliant System": "10.0.22621.1",
    "ACPI Thermal Zone": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Trusted Platform Module 2.0": "10.0.22621.2506",
    "HID-compliant wireless radio controls": "10.0.22621.2506",
    "Acer Airplane Mode Controller": "1.0.0.10",
    "HID-compliant system controller": "10.0.22621.2506",
    "HID-compliant consumer control device": "10.0.22621.1",
    "HID Keyboard Device": "10.0.22621.1",
    "Converted Portable Device Control device": "10.0.22621.1",
    "Portable Device Control device": "10.0.22621.1",
    "Intel(R) HID Event Filter": "2.2.1.384",
    "ACPI Power Button": "10.0.22621.1",
    "Intel(R) Power Engine Plug-in": "10.0.22621.2792",
    "Microsoft Windows Management Interface for ACPI": "10.0.22621.1",
    "Microsoft Windows Management Interface for ACPI": "10.0.22621.1",
    "ACPI Processor Aggregator": "10.0.22621.1",
    "Intel Processor": "10.0.22621.2506",
    "Intel Processor": "10.0.22621.2506",
    "Intel Processor": "10.0.22621.2506",
    "Intel Processor": "10.0.22621.2506",
    "ACPI Sleep Button": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Intel(R) Serial IO GPIO Host Controller - INT34C5": "30.100.2031.2",
    "Motherboard resources": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Microsoft Windows Management Interface for ACPI": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Intel(R) SPI (flash) Controller - A0A4": "10.1.24.5",
    "Intel(R) SMBus - A0A3": "10.1.24.5",
    "Audio Endpoint": "10.0.22621.1",
    "Realtek Audio Effects Component": "13.247.1124.210",
    "Intel® Smart Sound Technology for Digital Microphones": "10.29.0.9677",
    "Intel® Smart Sound Technology for Bluetooth® Audio": "10.29.0.9677",
    "Intel® Smart Sound Technology for USB Audio": "10.29.0.9677",
    "Audio Endpoint": "10.0.22621.1",
    "Realtek Audio Universal Service": "1.0.668.0",
    "Realtek Hardware Support Application": "11.0.6000.313",
    "Realtek Audio Effects Component": "13.0.6000.1097",
    "Realtek Audio": "6.0.9601.1",
    "Intel® Smart Sound Technology Detection Verification": "1.0.3045.0",
    "Intel® Smart Sound Technology OED": "10.29.0.9677",
    "Intel® Smart Sound Technology BUS": "10.29.0.9677",
    "ACPI Lid": "10.0.22621.1",
    "Microsoft AC Adapter": "10.0.22621.1",
    "Microsoft ACPI-Compliant Control Method Battery": "1.0.0.6",
    "Microsoft ACPI-Compliant Embedded Controller": "10.0.22621.1",
    "Standard PS/2 Keyboard": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "System timer": "10.0.22621.1",
    "System CMOS/real time clock": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Programmable interrupt controller": "10.0.22621.1",
    "High precision event timer": "10.0.22621.1",
    "Intel(R) LPC Controller/eSPI Controller (U Premium...": "10.1.24.5",
    "Realtek PCIe GbE Family Controller": "10.63.1014.2022",
    "Intel(R) PCI Express Root Port #9 - A0B0": "10.1.24.5",
    "Intel(R) Serial IO I2C Host Controller - A0C6": "30.100.2031.2",
    "Intel(R) Serial IO I2C Host Controller - A0C5": "30.100.2031.2",
    "Intel RST VMD Managed Controller 09AB": "18.6.1.1016",
    "Intel(R) Management and Security Application Local...": "2130.1.16.1",
    "Intel(R) iCLS Client": "1.63.1155.1",
    "Intel(R) Dynamic Application Loader Host Interface": "1.41.2021.121",
    "Intel(R) Management Engine Interface #1": "2040.100.0.1029",
    "Microsoft Input Configuration Device": "10.0.22621.1",
    "HID-compliant touch pad": "10.0.22621.2506",
    "HID-compliant vendor-defined device": "10.0.22621.2506",
    "HID-compliant mouse": "10.0.22621.1",
    "I2C HID Device": "10.0.22621.2506",
    "Intel(R) Serial IO I2C Host Controller - A0EB": "30.100.2031.2",
    "Intel(R) Serial IO I2C Host Controller - A0E8": "30.100.2031.2",
    "Microsoft Wi-Fi Direct Virtual Adapter": "10.0.22621.1",
    "Microsoft Wi-Fi Direct Virtual Adapter": "10.0.22621.1",
    "Intel(R) Wireless-AC 9560 160MHz": "22.10.0.7",
    "PCI standard RAM Controller": "10.0.22621.1",
    "Microsoft Bluetooth LE Enumerator": "10.0.22621.2506",
    "Bluetooth Device (Personal Area Network)": "10.0.22621.2506",
    "Bluetooth Device": "10.0.22621.3007",
    "Bluetooth Device": "10.0.22621.3007",
    "Microsoft Bluetooth Hands-Free Profile AudioGatewa...": "10.0.22621.1",
    "Microsoft Bluetooth Hands-Free Profile AudioGatewa...": "10.0.22621.1",
    "Microsoft Bluetooth Avrcp Transport Driver": "10.0.22621.2506",
    "Microsoft Bluetooth Avrcp Transport Driver": "10.0.22621.2506",
    "Microsoft Bluetooth A2dp Source": "10.0.22621.1",
    "Microsoft Bluetooth A2dp Source": "10.0.22621.1",
    "Microsoft Bluetooth Enumerator": "10.0.22621.3007",
    "Bluetooth Device (RFCOMM Protocol TDI)": "10.0.22621.2506",
    "Intel(R) Wireless Bluetooth(R)": "22.230.0.2",
    "WinUsb Device": "10.0.22621.2506",
    "USB Video Device": "10.0.22621.2506",
    "USB Composite Device": "10.0.22621.2506",
    "USB Root Hub (USB 3.0)": "10.0.22621.2861",
    "USB xHCI Compliant Host Controller": "10.0.22621.2506",
    "Intel(R) Optane(TM) Memory and Storage Management ...": "18.6.1.1016",
    "Generic software component": "10.0.22621.1",
    "Disk drive": "10.0.22621.2506",
    "Intel RST VMD Controller 9A0B": "18.6.1.1016",
    "Intel(R) GNA Scoring Accelerator module": "2.0.0.1097",
    "Generic PnP Monitor": "10.0.22621.2506",
    "Intel(R) Graphics Command Center": "30.0.101.1404",
    "Intel(R) Graphics Control Panel": "30.0.101.1404",
    "Intel(R) UHD Graphics": "30.0.101.1404",
    "PCI standard host CPU bridge": "10.0.22621.1",
    "PCI Express Root Complex": "10.0.22621.2861",
    "Microsoft ACPI-Compliant System": "10.0.22621.2792",
    "ACPI x64-based PC": "10.0.22621.1",
    "Charge Arbitration Driver": "10.0.22621.1",
    "UMBus Root Bus Enumerator": "10.0.22621.2506",
    "Microsoft Storage Spaces Controller": "10.0.22621.2792",
    "Microsoft Virtual Drive Enumerator": "10.0.22621.1",
    "Composite Bus Enumerator": "10.0.22621.1",
    "Microsoft Hyper-V Virtualization Infrastructure Dr...": "10.0.22621.2715",
    "Microsoft Hypervisor Service": "10.0.22621.2506",
    "Microsoft Basic Display Driver": "10.0.22621.1",
    "Microsoft Hyper-V Virtual Machine Bus Provider": "10.0.22621.2506",
    Volume: "10.0.22621.1",
    "Generic volume shadow copy": "10.0.22621.1",
    "Volume Manager": "10.0.22621.2506",
    "Generic software device": "10.0.22621.1",
    "Local Print Queue": "10.0.22621.1",
    "Local Print Queue": "10.0.22621.1",
    "Local Print Queue": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Generic software device": "10.0.22621.1",
    "Computer Device": "10.0.22621.1",
    "Remote Desktop Device Redirector Bus": "10.0.22621.2506",
    "Plug and Play Software Device Enumerator": "10.0.22621.1",
    "Microsoft System Management BIOS Driver": "10.0.22621.1",
    "NDIS Virtual Network Adapter Enumerator": "10.0.22621.1",
    "Microsoft Hyper-V Virtual Disk Server": "10.0.22621.2506",
    "Microsoft Basic Render Driver": "10.0.22621.2506",
    "Microsoft Hyper-V PCI Server": "10.0.22621.1",
    "Acer Inc. System Firmware 1.26": "5.42.1.26",
    "Microsoft UEFI-Compliant System": "10.0.22621.1",
    "ACPI Thermal Zone": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "ACPI Fan": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Trusted Platform Module 2.0": "10.0.22621.2506",
    "HID-compliant wireless radio controls": "10.0.22621.2506",
    "Acer Airplane Mode Controller": "1.0.0.10",
    "HID-compliant system controller": "10.0.22621.2506",
    "HID-compliant consumer control device": "10.0.22621.1",
    "HID Keyboard Device": "10.0.22621.1",
    "Converted Portable Device Control device": "10.0.22621.1",
    "Portable Device Control device": "10.0.22621.1",
    "Intel(R) HID Event Filter": "2.2.1.384",
    "ACPI Power Button": "10.0.22621.1",
    "Intel(R) Power Engine Plug-in": "10.0.22621.2792",
    "Microsoft Windows Management Interface for ACPI": "10.0.22621.1",
    "Microsoft Windows Management Interface for ACPI": "10.0.22621.1",
    "ACPI Processor Aggregator": "10.0.22621.1",
    "Intel Processor": "10.0.22621.2506",
    "Intel Processor": "10.0.22621.2506",
    "Intel Processor": "10.0.22621.2506",
    "Intel Processor": "10.0.22621.2506",
    "ACPI Sleep Button": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Intel(R) Serial IO GPIO Host Controller - INT34C5": "30.100.2031.2",
    "Motherboard resources": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Microsoft Windows Management Interface for ACPI": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Intel(R) SPI (flash) Controller - A0A4": "10.1.24.5",
    "Intel(R) SMBus - A0A3": "10.1.24.5",
    "Audio Endpoint": "10.0.22621.1",
    "Realtek Audio Effects Component": "13.247.1124.210",
    "Intel® Smart Sound Technology for Digital Microphones": "10.29.0.9677",
    "Intel® Smart Sound Technology for Bluetooth® Audio": "10.29.0.9677",
    "Intel® Smart Sound Technology for USB Audio": "10.29.0.9677",
    "Audio Endpoint": "10.0.22621.1",
    "Realtek Audio Universal Service": "1.0.668.0",
    "Realtek Hardware Support Application": "11.0.6000.313",
    "Realtek Audio Effects Component": "13.0.6000.1097",
    "Realtek Audio": "6.0.9601.1",
    "Intel® Smart Sound Technology Detection Verification": "1.0.3045.0",
    "Intel® Smart Sound Technology OED": "10.29.0.9677",
    "Intel® Smart Sound Technology BUS": "10.29.0.9677",
    "ACPI Lid": "10.0.22621.1",
    "Microsoft AC Adapter": "10.0.22621.1",
    "Microsoft ACPI-Compliant Control Method Battery": "1.0.0.6",
    "Microsoft ACPI-Compliant Embedded Controller": "10.0.22621.1",
    "Standard PS/2 Keyboard": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "System timer": "10.0.22621.1",
    "System CMOS/real time clock": "10.0.22621.1",
    "Motherboard resources": "10.0.22621.1",
    "Programmable interrupt controller": "10.0.22621.1",
    "High precision event timer": "10.0.22621.1",
    "Intel(R) LPC Controller/eSPI Controller (U Premium...": "10.1.24.5",
    "Realtek PCIe GbE Family Controller": "10.63.1014.2022",
    "Intel(R) PCI Express Root Port #9 - A0B0": "10.1.24.5",
    "Intel(R) Serial IO I2C Host Controller - A0C6": "30.100.2031.2",
    "Intel(R) Serial IO I2C Host Controller - A0C5": "30.100.2031.2",
    "Intel RST VMD Managed Controller 09AB": "18.6.1.1016",
    "Intel(R) Management and Security Application Local...": "2130.1.16.1",
    "Intel(R) iCLS Client": "1.63.1155.1",
    "Intel(R) Dynamic Application Loader Host Interface": "1.41.2021.121",
    "Intel(R) Management Engine Interface #1": "2040.100.0.1029",
    "Microsoft Input Configuration Device": "10.0.22621.1",
  });

  const [comparisonResult, setComparisonResult] = useState([]);
  const [lastScanDateTime, setLastScanDateTime] = useState(null); // New state for last scan date and time

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios("http://localhost:3000/getdrivers");
        const response = [
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
            "DriverVersion": "10.0.19041.3996",
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
            "DriverVersion": "10.0.19041.3996",
            "DriverStatus": null
          },
          {
            "DeviceName": "Intel Processor",
            "DriverVersion": "10.0.19041.3996",
            "DriverStatus": null
          },
          {
            "DeviceName": "Intel Processor",
            "DriverVersion": "10.0.19041.3996",
            "DriverStatus": null
          },
          {
            "DeviceName": "Intel Processor",
            "DriverVersion": "10.0.19041.3996",
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
            "DriverVersion": "10.0.19041.4046",
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
            "DriverVersion": "10.0.19041.4046",
            "DriverStatus": null
          },
          {
            "DeviceName": "USB xHCI Compliant Host Controller",
            "DriverVersion": "10.0.19041.3996",
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
            "DriverVersion": "10.0.19041.3996",
            "DriverStatus": null
          },
          {
            "DeviceName": "Microsoft ACPI-Compliant System",
            "DriverVersion": "10.0.19041.3996",
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
            "DriverVersion": "10.0.19041.3996",
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
        const driverinfo = response;
        setSystemInformation(driverinfo);
        console.log(driverinfo);

        const updatedComparisonResult = [];
        console.log("Array updatedComparisonResult", updatedComparisonResult);

        Object.keys(systemInformation).forEach((deviceName) => {
          const backendDriverVersion = systemInformation[deviceName];
          const frontendDriver = driverinfo.find(
            (driver) => driver.DeviceName === deviceName
          );

          if (frontendDriver) {
            const isUpToDate =
              frontendDriver.DriverVersion >= backendDriverVersion;

            updatedComparisonResult.push({
              deviceName,
              DriverVersion: frontendDriver.DriverVersion,
              DriverStatus: isUpToDate ? "Up to date" : "Outdated",
            });
          }
        });
        setComparisonResult(updatedComparisonResult);
        setLastScanDateTime(new Date().toLocaleString());
      } catch (error) {
        console.error("Error fetching driver information:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchSystemInfo = async () => {
      try {
        // const response = await axios.get("http://localhost:3000/systeminfo");
        // const response = await axios.get("http://localhost:3000/systeminfo");
        // const data = response;
        const diskInfoGB = 8;
        const memoryInfoGB = 512;
        setSystemInfo({
          cpuInfo: "window" ,
          osInfo: "Intel" ,
          diskInfo: diskInfoGB ,
          memoryInfo: memoryInfoGB ,
          videoControllerInfo: 10 ,
        });
      } catch (error) {
        setError(error.message);
        setSystemInfo({
          cpuInfo: data.cpuInfo || "Hello",
          osInfo: data.osInfo || "Hello",
          diskInfo: diskInfoGB || "Hello",
          memoryInfo: memoryInfoGB || "Hello",
          videoControllerInfo: data.videoControllerInfo || "Hello",
        });
      }
    };
    fetchSystemInfo();
  }, []);
  return cleanerStart === "status" ? (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-12 scan-container mx-2">
            <div>
              <button className="btn text-xs font-semibold btnofstatus">
                Status
              </button>
              <div className="scan-status ml-4">
                <div className="fix-section">
                  <div className="fix">
                    <h3 className="font-bold text-medium font-sans">
                      {" "}
                      {
                        comparisonResult.filter(
                          (driver) => driver.DriverStatus === "Outdated"
                        ).length
                      }{" "}
                      outdated driver found
                    </h3>
                    <h6 className="text-xs font-medium">
                      Last Scan : {lastScanDateTime}{" "}
                    </h6>
                    <h6 className="text-xs font-medium ">
                      Recommended Action:
                    </h6>
                    <a
                      className="text-sm font-medium "
                      href="https://cleanersite.netlify.app/checkout"
                    >
                      Upgrade to full version
                    </a>
                  </div>
                </div>
                <div className="recommented-section ml-16">
                  <h6 className="first recommented-section text-xs font-medium">
                    Driver Status
                  </h6>
                  <h5 className="font-semibold text-base font-sans mt-2">
                    Outdated
                    <i class="fa-solid fa-circle-info recom-i mx-1 text-black"></i>
                  </h5>
                </div>
              </div>
            </div>

            <div className="start-container">
              <h4 className="status-h4">
                Deep Scan clean, and optimize your registry to help boost the
                performance of your PC !
              </h4>
              <button
                class="button-scan mt-3 ml-16"
                role="button"
                onClick={(e) => setCleanerStart("scan-registry")}
              >
                Start Scan Now
              </button>
            </div>
          </div>
        </div>
        <div id="page2" className="fixed-bottom mb-3 ">
          <div className="right2">
            <img src={desktop} alt="" className="imgdesign" />
          </div>

          <div>
            {systemInfo && (
              <div className="left2">
                <div className="flex ">
                  <div className="ml-5">
                    {" "}
                    {/* <img src={intel} alt="" className="box-icon "/> */}
                    <WindowIcon color="primary" className="box-icon " />
                  </div>
                  <div className="flex justify-content-between ">
                    <h6 className="text-black  ml-4 mt-2 ">
                      {" "}
                      <div className="text-xs">System</div>{" "}
                      <h5 className="mr-3 text-sm font-semibold font-sans whitespace-nowrap	truncate-text">
                        Window 11
                      </h5>
                    </h6>
                    <h6 className="text-black  ml-9 mt-2">
                      <div className="text-xs">Memory(RAM)</div>{" "}
                      <h5 className="ml-7 text-sm font-semibold font-sans">
                        8 GB
                      </h5>
                    </h6>
                    <h6 className="text-black  ml-9 mt-2">
                      <div className="text-xs whitespace-nowrap	">
                        Hard Drive{" "}
                      </div>{" "}
                      <h5 className="text-sm font-semibold font-sans whitespace-nowrap	">
                        512 GB
                      </h5>
                    </h6>
                  </div>
                </div>
                <ul className="ml-5">
                  <div className="flex mt-2">
                    <img src={intel} alt="" className="box-icon " />
                    {/* <WindowIcon color="primary"  /> */}
                    <li className="text-black ">
                      <h6 className="disable text-xs">Processor</h6>{" "}
                      <h5 className="text-sm font-semibold font-sans whitespace-nowrap	">
                        Intel i5
                      </h5>{" "}
                    </li>
                  </div>
                  <div className="flex mt-2">
                    {/* <WindowIcon color="primary" className="box-icon " /> */}
                    <img className="graphicsimg" src={graphics} alt="" srcset="" />
                    <li className="text-black ">
                      <h6 className="text-xs">Graphics</h6>{" "}
                      <h5 className="text-sm font-semibold font-sans">
                        Intel(R) Graphics 530
                      </h5>{" "}
                    </li>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <StartScan />
  );
}

export default Status;
