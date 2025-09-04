import { SessionProvider } from "next-auth/react"
export default function Layout({children}: any){
    return(
        <div>
            {children}
        </div>
    )
}