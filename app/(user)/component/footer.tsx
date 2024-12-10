            import ComponentContainer from "@/app/component/component-container";
            import PageContainer from "@/app/component/page-container"
            import { datosEmpresa, metodoPagos, piePagina, servicios } from "@/data/contenido";
            import { CheckCheck } from "lucide-react";
            import Image from "next/image";
            import Link from "next/link";

            const Footer = () => {
                return (
                    <PageContainer className="bg-slate-300" >
                        <ComponentContainer className="flex flex-col justify-center h-full">

                            <footer className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
                                <div className="flex flex-col items-center gap-4">
                                    <Image src={piePagina[0].image} width={50} height={50} alt="logo" />
                                    <p className="text-justify">{piePagina[0].parrafo}</p>
                                    <div className="flex gap-2">
                                        {piePagina[0].icons}
                                        <p className="font-semibold font-teko text-2xl">{piePagina[0].telefono}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center md:items-center">
                                    <h2 className="text-2xl font-bold font-teko ">Servicios</h2>
                                    <div className="pt-4 flex flex-col gap-2 pl-3">
                                        {servicios.map((i) => (
                                            <Link key={i.name} href={i.url} className="font-light flex flex-row">
                                                <CheckCheck className="text-green-500 w-¨[24px] h-[24px] mr-2" />
                                                {i.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col items-center md:items-centesr">
                                    <h1 className="text-2xl font-bold font-teko ">Contacto</h1>
                                    <div className="pt-4 flex flex-col gap-4 pl-3">
                                        {datosEmpresa.map((i) => (
                                            <p key={i.name} className="font-light flex flex-row">
                                                <span className="w-µ[24px] h-[24px] mr-2">
                                                    {i.icon}
                                                </span>
                                                {i.name}
                                            </p>
                                        ))}
                                    </div>
                                    <h2 className="text-2xl font-bold font-teko"></h2>
                                    <div className="pt-4 flex flex-row gap-4 pl-3">
                                        {metodoPagos.map((i) => (
                                            <Image key={i.name} src={i.image} width={24} height={24} alt="logo" />
                                        ))}
                                    </div>

                                </div>
                            </footer>
                            <footer className="p-10 text-center">
                                <p className="text-sm font-light">© 2023 {datosEmpresa[0].name} - Todos los derechos reservados.</p>
                            </footer>
                        </ComponentContainer>
                    </PageContainer>
                );
            }

            export default Footer