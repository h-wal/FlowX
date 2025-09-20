import { Pencil } from "lucide-react";
import { useCredPanelStore } from "../../../../stores/uiStores/credentialPanel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCredentialsStore } from "../../../stores/credentialsStore";
import { useSelectedCredentialStore } from "../../../stores/selectedCredentialStore";

interface bottomPanelTabsProps {
  type?: string;
  heading?: string;
  placeholder?: string;
  size?: "large" | "medium";
}

export default function CredentialTabBar({
  type,
  heading,
  placeholder,
  size = "medium",
}: bottomPanelTabsProps) {

  const { credentials, setCredentials } = useCredentialsStore(); //state variable to store credentials coming from DB
  const { setCredPanelOpen, setType } = useCredPanelStore(); //state varibale storing status of cred panel
  const {selectedCredentialTitle, setSelectedCredentialTitle} = useSelectedCredentialStore();

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  if (!type) {
    return <div> Problem Loading Form! Kindly Retry</div>;
  }

  //fetching credentials from the db as soon as this component mounts
  useEffect(() => {

    if(!setCredentials){
      return
    }
    try {
      const fetchCreds = async () => {
        const response = await axios.get(
          "http://localhost:3030/api/v1/credentials",
          {
            withCredentials: true,
          }
        );

        const allCredentials = response.data //fetching all credentials from DB
        const requiredCredentials = allCredentials.filter((x: any) => x.type == type.replace("Node", "")) //filtering all credentials to the requied credential depending on type of the node type is emailNode in this case 
        setCredentials(requiredCredentials); //setting credential wiht the filtered value
        console.log(requiredCredentials);
      };

      fetchCreds();
    } catch (e) {
      console.log("Error fetching Credentials");
    }
  }, []);


  const filtered = credentials.filter((cred: any) => 
    {
        const text = cred?.title || "";
        return text.includes(value.toLowerCase());
    }
  );

  return (
    <div className="p-2 flex flex-col gap-1">
      <div className="text-xs text-gray-300">Credential to connect with</div>

      <div className="relative text-xs flex flex-row w-full">
        {/* Input */}
        <input
          type="text"
          value={selectedCredentialTitle}
          onChange={(e) => {
            setValue(e.target.value);
            setSelectedCredentialTitle(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className={`border border-gray-600 rounded-sm px-2 p-1 bg-[#2e2e2e] w-[90%] ${
            size === "large" ? `pb-18` : ``
          }`}
        />

        {/* Dropdown */}
        {open && filtered.length > 0 && (
          <ul className="absolute top-full left-0 mt-1 w-[90%] border border-gray-600 rounded-md bg-[#2e2e2e] shadow-lg max-h-40 overflow-y-auto z-10">
            {filtered.map((cred: any) => (
              <li
                key={cred.id}
                onClick={() => {
                  setValue(cred.title);
                  setSelectedCredentialTitle(cred.title);
                  setOpen(false);
                }}
                className="px-3 py-2 cursor-pointer hover:bg-gray-700"
              >
                {cred.title}
              </li>
            ))}
          </ul>
        )}

        {/* Pencil button */}
        <div
          onClick={() => {
            setType(type);
            setCredPanelOpen(true);
          }}
          className="cursor-pointer w-[10%] flex justify-center items-center"
        >
          <Pencil className="size-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
