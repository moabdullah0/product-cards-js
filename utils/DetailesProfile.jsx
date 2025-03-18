import { MdEmail, MdPerson, MdPhone } from "react-icons/md";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export const backgroundAnimations = {
  topBlob: {
    className:
      "absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30",
    animate: { x: [0, 30, 0], y: [0, 40, 0] },
    transition: { repeat: Infinity, duration: 20, ease: "easeInOut" },
  },
  bottomBlob: {
    className:
      "absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30",
    animate: { x: [0, -30, 0], y: [0, -40, 0] },
    transition: { repeat: Infinity, duration: 25, ease: "easeInOut" },
  },
};

export const statsItems = [
  { label: "Age", value: null },
  { label: "Height", value: null },
  { label: "Weight", value: null },
];

export const detailsCards = [
  {
    id: "email",
    icon: MdEmail,
    label: "Email",
    value: null,
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: "username",
    icon: MdPerson,
    label: "Username",
    value: null,
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    id: "phone",
    icon: MdPhone,
    label: "Phone",
    value: null,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
];

export const createStatsItems = (data) => [
  { label: "Age", value: data?.age },
  { label: "Height", value: data?.height },
  { label: "Weight", value: data?.weight },
];

export const createDetailsCards = (data) => [
  {
    id: "email",
    icon: MdEmail,
    label: "Email",
    value: data?.email,
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: "username",
    icon: MdPerson,
    label: "Username",
    value: data?.username,
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    id: "phone",
    icon: MdPhone,
    label: "Phone",
    value: data?.phone,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    condition: data?.phone,
  },
];
