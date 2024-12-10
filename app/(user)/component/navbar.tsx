"use client"
import ComponentContainer from "@/app/component/component-container"
import PageContainer from "@/app/component/page-container"
import { Button } from "@/components/ui/button"
import { menu, redesSociales } from "@/data/contenido"
import { MenuIcon, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const NavbarMenu=()=>{
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    const openMobile=()=>{setOpenMenuMobile(!openMenuMobile)}
    const [scrollY, setScrollY] = useState(0)


  const eventoSroll = ()=>{
    const position = window.pageYOffset;
    setScrollY(position)
  } 

  useEffect(() => {
    window.addEventListener("scroll", eventoSroll)
    //console.log(scrollY)
  })
    return(
    <PageContainer className="bg-slate-300" >
      <ComponentContainer className={``}>
        <nav className="px-5 py-8 flex flex-col md:flex-row  ">
          <div className="flex-row flex justify-between w-full">
            <Link href="/">
              <Image src={"logo.svg"} width={200} height={200} alt={"logo"}/>
            </Link>
            <Button
            onClick={()=>openMobile()} data-collapse-toggle="navbar-default" type="button" aria-controls="navbar-default" aria-expanded="true"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            ><MenuIcon/>
            </Button>
          </div >
          <div className={`${openMenuMobile ? "block" : "hidden"} gap-x-4  md:flex `}>
            <div className="flex flex-row gap-4" id="navbar-default" >
            <div className="py-2 text-xl font-teko text-gray-950 dark:text-white flex-col md:flex-row  flex md:items-center gap-x-10">
            {menu.map((i)=>(
              <Link key={i.name} href={i.url} className="font-semibold">{i.name}</Link>
            ))}

          </div>
          <div className="gap-x-2 hidden md:flex  flex-row justify-end">
                {redesSociales.map(({id,url,icon})=>(
                    <Link href={url} key={id}>
                        <Button className={`'bg-primary hover:bg-muted-foreground dark:hover:text-primary text-secondary dark:text-secondary'} p-2 text-white rounded-full`}>{icon}</Button>
                    </Link>
                ))}
                
                
            </div>
            </div>
          
            </div>
            
        </nav>
      </ComponentContainer>
    </PageContainer>
    )
}
export default NavbarMenu