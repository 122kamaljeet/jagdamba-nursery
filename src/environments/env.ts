export const siteConfig = {
  name: "Jagdamba Nursery",
  siteUrl: "https://122kamaljeet.github.io/jagdamba-nursery/",
  base: "/jagdamba-nursery",
  phoneDisplay: "+91-8607482160",
  phone: "918607482160",
  email: "",
  address: "Ambala, Haryana, India",
  hours: "Mon-Sat, 8am-6pm",
  whatsappNumber: "918607482160",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const locations = [
  {
    name: "Jagdamba Pesticides",
    address: siteConfig.address,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jagdamba+Pesticides+Ambala+Haryana",
  },
  {
    name: "Jagdamba Farm",
    address: siteConfig.address,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jagdamba+Farm+Ambala+Haryana",
  },
] as const;