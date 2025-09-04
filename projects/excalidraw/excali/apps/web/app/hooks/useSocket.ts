import { useEffect, useState } from "react";

export default function useSocket(username?: string | null){

    console.log("from use Socket" + username)
    const WS_URL = process.env.WS_URL
    console.log("wsurl = "+WS_URL)
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        if(!username){
            console.log("invalid userId for webSocket")
            setError("Invalid username for WebSocket connection");
            setLoading(false);
            return;
        } 
        
        console.log("from the ws server"+username)
        const ws = new WebSocket(`ws://localhost:8000?token=${username}`);
        
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
            setError(null);
            console.log("WebSocket connected successfully");
        }

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
            setError("Failed to connect to WebSocket server");
            setLoading(false);
        }

        ws.onclose = (event) => {
            console.log("WebSocket connection closed:", event.code, event.reason);
            setSocket(undefined);
            setLoading(true);
        }

        return () => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
        
    },[username])

    return{
        socket,
        loading,
        error
    }

}