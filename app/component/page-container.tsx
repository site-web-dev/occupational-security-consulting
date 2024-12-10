import * as React from "react"
interface PageContainerProps{
    children:React.ReactNode;
    className?:string
}
const PageContainer =({children,className}:PageContainerProps)=>{
    return (
        <div className={`${className} mx-auto w-full`}>
            {children}
        </div>
    );

}

export default PageContainer