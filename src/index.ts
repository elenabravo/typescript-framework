import { User } from './models/user'

const user = new User({
    name: 'myname',
    age: 20
})

console.log(user.get('name'))

const newUserProps = {
    name: 'newname',
    // age: 999
}

user.set(newUserProps)

console.log(user.get('name'))