export const siteConfig = {
  name: "Jagdamba Nursery",
  siteUrl: " http://jagdambanursery.in/",
  base: "/",
  phoneDisplay: "+91-8607482160",
  phone: "918607482160",
  email: "",
  address: "Manka Manki, Ambala, Haryana",
  hours: "Mon-Sat, 8am-6pm",
  whatsappNumber: "918607482160",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const locations = [
  {
    name: "Jagdamba Pesticides",
    address: siteConfig.address,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.5967249124515!2d77.14271653421946!3d30.23155946305452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e55cacf311e6b%3A0xff8bcb46e018dc41!2sJagdamba%20Pesticides!5e0!3m2!1sen!2sin!4v1788713018234!5m2!1sen!2sin",
  },
  {
    name: "Jagdamba Nursery",
    address: siteConfig.address,
    mapUrl: "https://www.google.com/maps/place/Jagdamba+Nursury/@30.2163723,77.1366433,12z/data=!4m6!3m5!1s0x390e557a486fb277:0xb7cf29bb09658161!8m2!3d30.232004!4d77.1425437!16s%2Fg%2F11ybnhl2xw?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
  },
] as const;