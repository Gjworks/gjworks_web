declare global {
  interface UserInfo {
    id: number
    uuid: string
    accountId: string
    nickName: string
    password: string
    email_address: string
    createdAt?: string
    updateAt?: string
    isAdmin?: boolean
    isManager?: boolean
    refreshToken?: string
  }
}

export {};