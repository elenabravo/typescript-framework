import { Model } from './Model'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { ApiSync } from './ApiSync'
import { Collection } from './Collection'

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

    static buildUserCollection(): Collection<User, UserProps> {
        const deserialize = (json: UserProps) => User.buildUser(json)
        return new Collection<User, UserProps>(ROOT_URL, deserialize)
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100)
        this.set({ age })
    }
}