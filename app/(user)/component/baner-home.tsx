import ComponentContainer from "@/app/component/component-container";
import PageContainer from "@/app/component/page-container";

const BannerHome = () => {
    return (
        <PageContainer className="img-background w-full h-[600px]">
        <ComponentContainer className="flex flex-col justify-center h-full">

            <div >
                <h1 className="text-5xl font-bold text-white">Consultora especialista en seguridad 
                salud ocupacional y medio ambiente.</h1>
            </div>
        </ComponentContainer>
    </PageContainer>
    );
}

export default BannerHome