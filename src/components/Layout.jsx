import Header from "./Header"
import Footer from "./Footer"
import Canciones from './Canciones'
function Layout({children}) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}
export default Layout;