export default function NeedHelp(){
    return(
        <div className="border border-[#f5d8ae] border-l-8 text-xs px-2 py-2 bg-[#564a37]">
            <div className="flex flex-row gap-3">
                <div className="text-white">
                    Need help filling out these fields?
                </div>
                <a href="https://docs.n8n.io/integrations/builtin/credentials/sendemail/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal" target="_blank" rel="noopener noreferrer">
                <div className="text-[#fe6f5b] text-md cursor-pointer" >
                    Open docs
                </div>
                </a>
            </div>
        </div>
    )
}