import { Footer } from "../components/footer"
import { Header } from "../components/header"

export const DefaultLayout  = ({children}) =>{
    return (
        <div className="DefaultLayout">
            <Header/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}