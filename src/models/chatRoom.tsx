import { IUser } from '~/models/user'

export interface ChatRoomAttributes {
  id: string
  users: IUser[]
  currentUserId: string
}
