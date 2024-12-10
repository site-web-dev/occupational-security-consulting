import { icons, Mail, MapPin, MessageCircle, PhoneIcon } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaI, FaL } from "react-icons/fa6"

export const piePagina = [
    {
        image:"/icon.ico",
        parrafo:"Somos una empresa con profesionales especializados y comprometidos en desarrollar soluciones integrales en gestión según la ley N°29783 de Seguridad y Salud en el Trabajo y modificaciones",
        icons:<MessageCircle className="w-6 h-6"/>,
        telefono:"+5491123456789"
    }
]

export const servicios = [
    {
        name:"SEGURIDAD OCUPACIONAL",
        url:"#",
        image:"/icon.ico"
    },
    {
        name:"MONITOREOS OCUPACIONALES AGENTES FÍSICOS",
        url:"#",
        image:"/icon.ico"
    },
    {
        name:"AGENTES QUÍMICOS",
        url:"#",
        image:"/icon.ico"
    },
    {
        name:"AGENTES BIOLÓGICOS ",
        url:"#",
        image:"/icon.ico"
    },
    {
        name:"RIESGOS PSICOSOCIALES",
        url:"#"
        ,image:"/icon.ico"
    },
]

export const menu = [
    {
        name:"Inicio",
        url:"#"
    },
    {
        name:"Nosotros",
        url:"#"
    },
    {
        name:"Servicios",
        url:"#"
    },

    {
        name:"Contacto",
        url:"#"
    },
]

export const redesSociales = [
    {   
        id:1,
        name:"Facebook",
        icon: <FaFacebook />, 
        url:"https://www.facebook.com/occupationalsecurityperu/"
    },
    {
        id:2,
        name:"Instagram",
        icon: <FaInstagram />, 
        url:"https://www.instagram.com/occupationalsecurityperu/"
    },
    {
        id:3,
        name:"Linkedin",
        icon: <FaLinkedin />, 
        url:"https://www.linkedin.com/company/occupational-security-peru/"
    },
]

export const datosEmpresa = [
    {
        icon:<MapPin className="w-full h-full"/>,
        name:"Jr. Montreal Asoc. Viv. Canadá Mz. C LT 9San Juan de Lurigancho - Lima - Perú",
    },
    {
        icon:<PhoneIcon className="w-full h-full"/>,
        name:"946 582 906 / 993615834",
    },
    {
        icon:<Mail className="w-full h-full"/>,
        name:"comercial@jcsafetyconsulting.com",
    }
]

export const metodoPagos = [
    {
        name:"Tarjeta de Credito",
        image:"/icon.ico"
    },
    {
        name:"Tarjeta de Debito",
        image:"/icon.ico"
    },
    {
        name:"Transferencia",
        image:"/icon.ico"
    },
    {
        name:"PayPal",
        image:"/icon.ico"
    }
    ]