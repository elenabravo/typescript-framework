import { User } from './models/user'

const user = new User({ name: 'new record', age: 0 })

user.save()