import type { Chat } from "../types";
import { MOCK_CHAT } from "./mockData";

export default function useChats() {
  const chats = useState<Chat[]>("chats", () => [MOCK_CHAT]);

  function createChat(options: { projectId?: string } = {}) {
    const id = (chats.value.length + 1).toString();
    const chat = {
      id,
      title: "New Chat",
      messages: [],
      projectId: options.projectId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    chats.value.push(chat);

    // Immediately navigate to the new chat so users see it
    // and the action feels responsive.
    try {
      navigateTo(`/chats/${chat.id}`);
    } catch (error) {
      console.error("Navigation error:", error);
    }

    return chat;
  }

  async function createChatAndNavigate(options: { projectId?: string } = {}) {
    const chat = createChat(options);
    await navigateTo(`/chats/${chat.id}`);
    return chat;
  }

  function chatsInProject(projectId: string) {
    return chats.value.filter((chat) => chat.projectId === projectId);
  }

  return {
    chats,
    createChat,
    createChatAndNavigate,
    chatsInProject,
  };
}
