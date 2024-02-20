import searchImage from "../Image/search.png";
import searchImage2 from "../Image/search img.png";
import Swal from "sweetalert2";
import Setting from "./Setting";
import { useEffect, useState } from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import Danger from "../Image/png-transparent-danger-sign-danger-mark-yellow-removebg-preview.png";
import Clock from "../Image/icons8-clock-50.png";
import Calendar from "../Image/icons8-calendar-50.png";
import Computer from "../Image/icons8-desktop-50.png";
import Logo from "../Image/money-back-in-60-days-guarantee-badge-golden-medal-vector-20372626-removebg-preview.png";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import desktop from "../Image/desktop.png";
import compuer from "../Image/computerScan.png"
export default function ScanRegistry() {
  const [cleanerStart, setCleanerStart] = useState("status");
  const [exclusionStatus, setExclusionStatus] = useState(false);
  const [hide, setHide] = useState(false);
  const [updateInProgress, setUpdatedInProgress] = useState(false);
  const [show, setShow] = useState(false);
  const [driverData, setDriverData] = useState([]);
  const [driverCount, setDriverCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);
  const [systemInformation, setSystemInformation] = useState({
    "WAN Miniport (Network Monitor)": "10.0.22621.3",
    "WAN Miniport (IPv6)": "10.0.22621.3",
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
  });
  const [comparisonResult, setComparisonResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios("http://localhost:3000/getdrivers");
        const response = [
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
        const driverinfo = await response;
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
              StatusColor: isUpToDate ? "#0C6B37" : "#EB9C35",
              StatusIcon: isUpToDate ? (
                <CheckIcon style={{ fontSize: "small", color: "0C6B37" }} />
              ) : (
                <ErrorIcon style={{ fontSize: "small" }} />
              ),
              StatusTextWeight: isUpToDate ? "normal" : "bolder",
            });
          }
        });
        setComparisonResult(updatedComparisonResult);
      } catch (error) {
        console.error("Error fetching driver information:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (e) => {
    const { name, checked } = e.target;
    let tempDrivers;

    if (name === "allselect") {
      tempDrivers = comparisonResult.map((driver) => {
        return { ...driver, ischecked: checked };
      });
    } else {
      tempDrivers = comparisonResult.map((driver) =>
        driver.name === name ? { ...driver, ischecked: checked } : driver
      );
    }

    setComparisonResult(tempDrivers);
    const selectedOutdatedCount = tempDrivers.filter(
      (driver) => driver.ischecked && driver.DriverStatus === "Outdated"
    ).length;
    setSelectedCount(selectedOutdatedCount);
  };

  const handleClick = (e, deviceName) => {
    // let timerInterval;
    // Swal.fire({
    //   title: "Your Driver update is in Progress",
    //   html: "I will take some <b></b> Time.",
    //   timer: 2000,
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //     const timer = Swal.getPopup().querySelector("b");
    //     timerInterval = setInterval(() => {
    //       timer.textContent = `${Swal.getTimerLeft()}`;
    //     }, 100);
    //   },
    //   willClose: () => {
    //     clearInterval(timerInterval);
    //   },
    // }).then((result) => {
    //   /* Read more about handling dismissals below */
    //   if (result.dismiss === Swal.DismissReason.timer) {
    //     console.log("Driver update in progress");
    //   }
    // });
    setExclusionStatus(true)

      setTimeout(()=>{
        setExclusionStatus(false)
      },50000)


    setTimeout(() => {
      e.preventDefault();
      const updatedComparisonResult = comparisonResult.map((driver) => {
        if (driver.deviceName === deviceName) {
          return {
            ...driver,
            DriverStatus: "Up to date",
            StatusColor: "#0C6B37",
            StatusIcon: (
              <CheckIcon style={{ fontSize: "small", color: "0C6B37" }} />
            ),
            StatusTextWeight: "normal",
          };
        }
        return driver;
      });
      setComparisonResult(updatedComparisonResult);
    }, 50000);
  };

  // const handleClickOne = async () => {
  //   try {
  //     await Swal.fire({
  //       title: "Your Driver update is in Progress",
  //       html: "It will take some <b></b> time.",
  //       timer: 2000,
  //       timerProgressBar: true,
  //       didOpen: () => {
  //         Swal.showLoading();
  //         const timer = Swal.getPopup().querySelector("b");
  //         const timerInterval = setInterval(() => {
  //           timer.textContent = `${Swal.getTimerLeft()}`;
  //         }, 100);
  //         setTimeout(() => {
  //           clearInterval(timerInterval);
  //         }, 2000);
  //       },
  //     });

  //     const updatedComparisonResult = comparisonResult.map((driver) => {
  //       if (driver.ischecked) {
  //         return {
  //           ...driver,
  //           DriverStatus: "Up to date",
  //           StatusColor: "#0C6B37",
  //           StatusIcon: (
  //             <CheckIcon style={{ fontSize: "small", color: "#0C6B37" }} />
  //           ),
  //           StatusTextWeight: "normal",
  //         };
  //       }
  //       return driver;
  //     });
  //     setComparisonResult(updatedComparisonResult);
  //   } catch (error) {
  //     console.error("Error updating drivers:", error);
  //   }
  // };

  const handleClickOne = async () => {
    try {
      if (updateInProgress) {
        return; // Prevent multiple updates if one is already in progress
      }
  
      setUpdatedInProgress(true); // Set update in progress flag

      setExclusionStatus(true)

      setTimeout(()=>{
        setExclusionStatus(false)
      },50000)

      
      // await Swal.fire({
      //   title: "Your Driver update is in Progress",
      //   html: "It will take some <b></b> time.",
      //   timer: 2000,
      //   timerProgressBar: true,
      //   didOpen: () => {
      //     Swal.showLoading();
      //     const timer = Swal.getPopup().querySelector("b");
      //     const timerInterval = setInterval(() => {
      //       timer.textContent = `${Swal.getTimerLeft()}`;
      //     }, 100);
      //     setTimeout(() => {
      //       clearInterval(timerInterval);
      //     }, 2000);
      //   },
      // });
  

      setTimeout(() => {
        const updatedComparisonResult = comparisonResult.map((driver) => {
        if (driver.ischecked) {
          return {
            ...driver,
            DriverStatus: "Up to date",
            StatusColor: "#0C6B37",
            StatusIcon: (
              <CheckIcon style={{ fontSize: "small", color: "#0C6B37" }} />
            ),
            StatusTextWeight: "normal",
          };
        }
        return driver;
      });
      setComparisonResult(updatedComparisonResult);
        
      }, 50000);
      
    } catch (error) {
      console.error("Error updating drivers:", error);
    } finally {
      setUpdatedInProgress(false); // Reset update in progress flag
    }
  };

  let updateAllButton = null;

  if (comparisonResult.length > 0) {
    updateAllButton = (
      <button className="btn btn-light designbtn2" onClick={handleClickOne}>
        Update All
      </button>
    );
  }
  


  return cleanerStart === "status" ? (
    <>
      <div className="container-fluid">
        <div className="row flex justify-content-center">
          <div className="col-12 col-lg-12 col-md-12 col-sm-12">
            <div className=" scantopoftable ">
              <div className="designspan font-black text-small">
                <WatchLaterIcon />{" "}
                {
                  comparisonResult.filter(
                    (driver) => driver.DriverStatus === "Outdated"
                  ).length
                }{" "}
                Out-Of-Date Drivers Found
              </div>
              <button
                className="btn btn-light designbtn"
                onClick={(e) => setExclusionStatus(true)}
              >
                Update All
              </button>
            </div>
            {selectedCount > 0 && (
              <p className="text-xs mx-4 mt-1 font-bold">
                {selectedCount} Outdated driver(s) selected!
              </p>
            )}
            <div className="tbwidth tableclasses1  ">
              <table class="table table-hover ">
                <thead className="table-secondary fixed  newto">
                  <tr className="mynewheaddesign flex">
                    <th scope="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="allselect"
                          id="allselect"
                          name="allselect"
                          onChange={handleSelect}
                        />
                        <label
                          className="form-check-label font-bold"
                          htmlFor="allselect"
                        >
                          Driver Detail
                        </label>
                      </div>
                    </th>
                    <th scope="col" colspan="1" className="dobold">
                      Status
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonResult.length > 0 &&
                    comparisonResult.map((driver, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id={`flexCheckDefault-${i}`}
                                name={driver.DeviceName}
                                checked={driver.ischecked}
                                onChange={handleSelect}
                                style={{
                                  display:
                                    driver.DriverStatus === "Up to date"
                                      ? "none"
                                      : "block",
                                }}
                              />
                              <label
                                class="form-check-label"
                                for={`flexCheckDefault-${i}`}
                              >
                                {driver.deviceName}
                              </label>
                            </div>
                          </th>
                          <td colspan="2">
                            <br />
                            <span
                              className="text-xs font-extrabold  "
                              style={{
                                color: driver.StatusColor,
                                fontWeight: driver.StatusTextWeight,
                              }}
                            >
                              {/* OUTDATED<i class="fa-solid fa-circle-info recom-i mx-1 text-black"></i> */}
                              {driver.DriverStatus} {driver.StatusIcon}
                            </span>
                            <br />
                            <span className="text-xs">
                              {" "}
                              Version:{driver.DriverVersion}
                            </span>
                          </td>
                          <td>
                            {driver.DriverStatus === "Outdated" ? (
                              <span
                                className="font-bold text-xs text-blue-500 underline setdriverinfor ml-20"
                                onClick={(e) => setUpdatedInProgress(true)}
                              >
                                {comparisonResult.length > 0 &&
                                  comparisonResult.map((driver, i) => {
                                    return (
                                      <tr
                                        key={i}
                                        onClick={(e) =>
                                          handleClick(e, driver.deviceName)
                                        }
                                      >
                                        {/* Update Driver */}
                                      </tr>
                                    );
                                  })}
                                <div
                                  onClick={(e) =>
                                    handleClick(e, driver.deviceName)
                                  }
                                >
                                  Update Driver
                                </div>
                              </span>
                            ) : (
                              <span className="font-bold text-xs text-green-500"></span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="pagescanbottom" className="fixed-bottom ">
          <button
            className="btn btn-light designbtn1 "
            onClick={(e) => setShow(true)}
          >
            Learn More
          </button>
          <span className="mt-6 font-serif text-xs font-medium">
            To Update all rest Drivers click on Update All
          </span>

          
            {/* {comparisonResult.length > 0 &&
              comparisonResult.map((driver, i) => {
                return (
                  <tr
                    key={i}
                    onClick={(e) => handleClickOne(e, driver.deviceName)}
                  >
                    Update All
                  </tr>
                );
              })} */}
            
          <span>{updateAllButton}</span>
        </div>
      </div>


      {hide && (
        <div className="exclusion-main">
          <h1
            style={{ marginLeft: "54px", marginTop: "12px" }}
            className="font-extrabold"
          >
            <b>Update all your drivers in minutes</b>
          </h1>
          <div onClick={(e) => setHide(false)}>
            <span className="close"></span>
          </div>
          <div className="New-box">
            <div className="row ">
              <div className="flex justify-content-between">
                <img src={Danger} alt="File Explorer" className="boxicons" />
                <div className="popdata">
                  <h4 className="font-extrabold">1 Outdated Drivers Found !</h4>
                  <p className="font-medium text-xs mt-1">
                    To update outdated drivers clickon Purchase Now button.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h5
            style={{ marginLeft: "34px", marginTop: "22px" }}
            className="text-sm"
          >
            Advanced Driver Updater can quickly and easily update these drivers
            to restore optimum
            <br></br>performance to your PC
          </h5>
          <div className="row flex justify-content-between mt-3 mb-4">
            <div className="col-3 ml-8">
              <div>
                <img
                  src={Clock}
                  alt="File Explorer"
                  className="box-icon ml-6"
                />
              </div>
              <div className="text-xs font-semibold">
                <h6>
                  Easy to use , Safe <br /> and saves your time .{" "}
                </h6>{" "}
              </div>
            </div>

            <div className="col-3">
              <div>
                {" "}
                <img
                  src={Computer}
                  alt="File Explorer"
                  className="box-icon ml-6"
                />
              </div>
              <div className="text-xs font-semibold">
                <h6>
                  Get the most out <br /> of your PC
                </h6>{" "}
              </div>{" "}
            </div>
            <div className="col-3">
              <div>
                {" "}
                <img
                  src={Calendar}
                  alt="File Explorer"
                  className="box-icon ml-6"
                />
              </div>
              <div className="text-xs font-semibold">
                <h6>
                  Ensure Long lasting <br />
                  performance
                </h6>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="footer bottom-0">
            <div className="row">
              <div className="flex justify-content-between ">
                <div className="flex">
                  <img src={Logo} alt="Logo" className="box-icon11" />
                  <span className=" font-serif text-xs font-medium text-white ml-1 mt-3">
                    60 Days Money Back Guarantee
                    <br />
                    No Questions Asked
                  </span>
                </div>
                <a
                  href="https://cleanersite.netlify.app/checkout"
                  className="btn btn-light bg-green-700 designbtn2 px-3"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {exclusionStatus && (
        <div className="exclusion-main">
          <h1
            style={{ marginLeft: "54px", marginTop: "12px" }}
            className="font-extrabold"
          >
            <b>Update all your drivers in minutes</b>
          </h1>
          <div onClick={(e) => setExclusionStatus(false)}>
            <span className="close"></span>
          </div>
          <div className="New-box">
            <div className="row ">
              <div className="flex justify-content-between">
                <img src={compuer} alt="File Explorer" className="boxicons" />
                <div className="popdata">
                  <h4 className="font-extrabold">
                    {
                      comparisonResult.filter(
                        (driver) => driver.DriverStatus === "Outdated"
                      ).length
                    }{" "}
                    12C HID Device
                  </h4>
                  <p className="font-medium text-xs mt-1">
                    Please wait a some time while procesing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="containermodel">    
  <div class="progressmodel progressmodel-striped">
    <div class="progressmodel-bar">
    </div>                       
  </div> 
</div>
          <div className="footer bottom-0">
            <div className="row">
              <div className="flex justify-content-between ">
                
                <a
                  className="btn btn-light bg-green-700 designbtn3 px-3"
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {show && (
        <div className="exclusion-main1">
          <div className="container-darfrag testing-class">
            <div className="lastScreenResult">
              <div className="lastScreenResultSecond text-sm font-medium">
                Updating the outdated drivers may increase the system speed
              </div>
            </div>
            <div className="StartScan flex justify-content-between">
              <div>
                <img src="" alt="" className="imageofscan mr-3" />
              </div>
              <div></div>
            </div>
          </div>

          <div
            id="pagescanbottomscan"
            className="fixed-bottom   flex justify-content-end bg-gray-100"
          >
            <button className="btn btn-light designbtn1 border-black">
              View outdated driver
            </button>
            <button className="btn btn-light designbtn1 mr-2 border-black bg-yellow-700">
              purchase Now
            </button>
          </div>
        </div>
      )}
    </>
  ) : (
    <Setting value="Scan" />
  );
}
