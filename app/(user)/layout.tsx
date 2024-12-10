import Footer from "./component/footer";
import NavbarMenu from "./component/navbar";

const UserLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <>
    <NavbarMenu />
    {children}
    <Footer/>
    </>;

};

export default UserLayout