import { BaseModel } from 'src/models/Base'

import type { BaseModelProps } from '@/models/Base'

export interface UsersModelProps extends BaseModelProps {
  username: string
  avatar: string
  email: string
  first_name: string
  last_name: string
  is_active: boolean
}

export class UsersModel extends BaseModel {
  static modelName = 'users'

  static url() {
    return '/user/users'
  }

  static changePasswordUrl() {
    return `${this.url()}/change-password/`
  }
}
