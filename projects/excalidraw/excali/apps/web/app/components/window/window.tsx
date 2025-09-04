import TaskWindow from "./chats interface/taskwindow";
import RoomWindow from "./liveinterface/roomwindow";

export default function Window({ selectedMenu }: { selectedMenu: string }) {
    return (
        <div className=" rounded-3xl border bg-indigo-50 p-4 mx-4 my-4 mr-1 flex flex-row basis-8/12">
            {selectedMenu === "chat" ? <TaskWindow /> : null}
            {selectedMenu === "room" ? <RoomWindow /> : null}
        </div>
    );
}