import * as React from "react"
interface ComponentContainerProps{
    children:React.ReactNode;
    className?:string
}
const ComponentContainer =({children,className}:ComponentContainerProps)=>{
    return (
        <div className={`${className} mx-5 md:mx-auto max-w-[1200px]`}>
            {children}
        </div>
    );

}

export default ComponentContainer