import { Pencil } from "lucide-react";
import { useCredPanelStore } from "../../../../stores/uiStores/credentialPanel";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useCredentialsStore } from "../../../stores/credentialsStore";
import { useSelectedCredentialStore } from "../../../stores/selectedCredentialStore";
import { useCredAddedStore } from "../../../../stores/uiStores/credentialAdded";

interface credentialInputBarProps {
  type?: string;
  placeholder?: string;
}

export default function CredentialTabBar({
  type,
  placeholder,
}: credentialInputBarProps) {
  const { credentials, setCredentials } = useCredentialsStore();
  const { setCredPanelOpen, setType } = useCredPanelStore();
  const { selectedCredentialTitle, setSelectedCredentialTitle } = useSelectedCredentialStore();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const {newCredentialAdded, setNewCredentialAdded} = useCredAddedStore()

  if (!type) {
    return <div>Problem Loading Form! Kindly Retry</div>;
  }

  // Fetch credentials from DB whenever type changes
  useEffect(() => {
    if (!setCredentials) return;

    const fetchCreds = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/api/v1/credentials",
          {
            withCredentials: true,
          }
        );

        const allCredentials = response.data;
        const requiredCredentials = allCredentials.filter(
          (x: any) => x.type === type.replace("Node", "")
        );
        setCredentials(requiredCredentials);
        console.log(requiredCredentials);
      } catch (e) {
        console.error("Error fetching Credentials", e);
      }
    };

    fetchCreds();
    setNewCredentialAdded(false)
  }, [type, setCredentials, newCredentialAdded]);

  // Case-insensitive filter
  const filtered = credentials.filter((cred: any) => {
    const text = cred?.title || "";
    return text.toLowerCase().includes(selectedCredentialTitle.toLowerCase());
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-2 flex flex-col gap-1" ref={wrapperRef}>
      <div className="text-xs text-gray-300">Credential to connect with</div>

      <div className="relative text-xs flex flex-row w-full">
        {/* Input */}
        <input
          type="text"
          value={selectedCredentialTitle}
          onChange={(e) => {
            setSelectedCredentialTitle(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className={`border border-gray-600 rounded-sm px-2 p-1 bg-[#2e2e2e] w-[90%]`}
        />

        {/* Dropdown */}
        {open && (
          <div className="absolute top-full left-0 mt-1 w-[90%] border border-gray-600 rounded-md bg-[#2e2e2e] shadow-lg z-10">
            <ul className="max-h-40 overflow-y-auto">
              {filtered.length > 0 ? (
                filtered.map((cred: any) => (
                  <li
                    key={cred.id}
                    onClick={() => {
                      setSelectedCredentialTitle(cred.title);
                      setOpen(false);
                    }}
                    className={`px-4 py-3 cursor-pointer text-[13px] hover:bg-[#525355] ${
                      cred.title === selectedCredentialTitle
                        ? "text-[#fe6f5b]"
                        : ""
                    }`}
                  >
                    {cred.title}
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-gray-400">No credentials found</li>
              )}
            </ul>
            <div onClick={() => {setType(type);setCredPanelOpen(true)}} className="p-4 border-t border-gray-600 hover:bg-[#525355] cursor-pointer">
              + Create New Credential
            </div>
          </div>
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
