export interface Conversation {
  id: number
  lastMessageTimestamp: Date | number
  recipientId: number
  recipientNickname: string
  senderId: number
  senderNickname: string
}