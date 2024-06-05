
declare global {
  interface UserInfo {
    id: number
    uuid: string
    accountId: string
    nickName: string
    password: string
    email_address: string
    createdAt?: date
    updateAt?: date
    isAdmin?: boolean | null
    isManager?: boolean | null
    refreshToken?: string | null
  }
  var Log: typeof Log;
}

export {};