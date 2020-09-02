import { UserList } from './views/UserList'
import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'

const ROOT_URL =  'http://localhost:3000/users'

const users = new Collection(ROOT_URL, (json: UserProps) => User.buildUser(json))

users.on('change', () => {
    const root = document.getElementById('root')

    if (root) {
        new UserList(root, users).render()
    } else {
        throw new Error('Root error not found')
    }
})

users.fetch()