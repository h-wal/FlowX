// import MidTopPanel from "../TopPanelTabs/midTopPanel"
// import MidTopToggle from "../TopPanelTabs/midTopToggle"
// import BottomPanelTab from "../BottomPanelTabs/bottomPanelTabs"
// import { MdEmail } from "react-icons/md"


// export default function EmailMidPanel(){
//     return (
//         <div className="h-full w-full">
//             <div className="h-[11%] bg-[#525355] flex flex-col justify-between">
//                 <MidTopPanel icon={MdEmail} heading="Send a text message"></MidTopPanel>
//                 <MidTopToggle></MidTopToggle>
//             </div>
//             <div className="h-[89%] bg-[#414244] p-2">
//                 <BottomPanelTab heading={"Credential to connect with"} placeholder={"SMTP account"} /> {/* Replace with another panel which has a top down menu showing credentails */}  
//                 <BottomPanelTab heading={"Operation"} placeholder={"Send"} />
//                 <BottomPanelTab heading={"From Email"} placeholder={"admin@example.com"} />
//                 <BottomPanelTab heading={"To Email"} placeholder={"to@example.com"} />
//                 <BottomPanelTab heading={"Subject"} placeholder={"My subject line"} />
//                 <BottomPanelTab heading={"Email Format"} placeholder={"Text"} />
//                 <BottomPanelTab heading={"Text"} placeholder={"text"} size={"large"} />
                
//             </div>
//         </div>
//     )
// }