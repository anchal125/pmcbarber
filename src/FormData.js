export const formData={
  name:{
    label:"Your Name",
    id:"name",
    type:"text",
    value:"",
    placeholder:"Enter full name",
    required: true,
    error:"",
  },
  phone:{
    label:"Phone Number",
    id:"phone",
    type:"tel",
    value:"",
    placeholder:"Enter phone number",
    required: true,
    error:"",
  },
  service:{
    label: "Service Interested In",
    id: "service",
    type: "select",
    options: ["Haircut", "Beard Trim", "Shave","Others"],
    required: true,
    value:""
  },
  date:{
    label: "Preferred Date",
    value:new Date().toISOString().split('T')[0],
    id: "date",
    type: "date",
    required: true,
  },
  message:{
    label: "Message",
    id: "message",
    value:"",
    type: "textarea",
    placeholder: "Write your message",
    required: false,
  },
} 