export const siteConfig = {
  name: "Jagdamba Nursery Manka Manki, Ambala",
  shortName: "Jagdamba Nursery",
  siteUrl: "https://jagdambanursery.in",
  logo: "/media/logo/jagdamba%20logo.png",
  description:
    "Jagdamba Nursery Manka Manki, Ambala grows and supplies fresh Selection No. 1, Korean, and Neelgiri lawn grass.",
  phoneDisplay: "+91-9671844750",
  phone: "919671844750",
  email: "jagdamba.agriservices@gmail.com",
  address: "Manka Manki, Ambala, Haryana",
  hours: "Mon-Sat, 8am-6pm",
  whatsappNumber: "919671844750",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const locations = [
  {
    name: "Jagdamba Pesticides",
    address: siteConfig.address,
    mapUrl: "https://maps.app.goo.gl/oeaYmndXJH4XpyLL6",
  },
  {
    name: "Jagdamba Nursery",
    address: siteConfig.address,
    mapUrl: "https://www.google.com/maps/place/Jagdamba+Nursury/@30.2163723,77.1366433,12z/data=!4m6!3m5!1s0x390e557a486fb277:0xb7cf29bb09658161!8m2!3d30.232004!4d77.1425437!16s%2Fg%2F11ybnhl2xw?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
  },
] as const;