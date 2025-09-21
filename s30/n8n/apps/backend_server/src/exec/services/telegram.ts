import TelegramBot from "node-telegram-bot-api";

export default function SendTelegramBotMessage({
    accessToken,
    chatId,
    chat
}: {
    accessToken: string,
    chatId: string
    chat: string
}){

    const token = accessToken;
    const bot = new TelegramBot(token, {polling: true});
    bot.sendMessage(chatId, chat);

}
