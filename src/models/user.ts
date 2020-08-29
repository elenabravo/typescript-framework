import Model from './Model'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { ApiSync } from './ApiSync'

export interface UserProps {
    id?: number,
    name?: string,
    age?: number
}

const ROOT_URL =  'http://localhost:3000/users'

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(ROOT_URL)
        )
    }

    isAdminUser(): boolean {
        return this.get('id') === 1
    }
}