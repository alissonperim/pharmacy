import { PersonalData } from '@shared/domain/personalData'
import { Roles } from '@users/enums/roles'

export class User extends PersonalData {
    roles!: Roles[]
}
