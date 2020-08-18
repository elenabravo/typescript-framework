import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'

const SERVER_URL =  'http://localhost:3000'

interface UserProps {
    id?: number,
    name?: string,
    age?: number
}

export class User {
    private events: Eventing = new Eventing()

    constructor(private data: UserProps) {}
    
    get(propName: string): (number | string){
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    fetch(): void {
        axios.get(`${SERVER_URL}/users/${this.get('id')}`)
        .then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }

    save(): void {
    const id = this.get('id')
        if(id) {
            axios.put(`${SERVER_URL}/users/${id}`, this.data)
        } else {
            axios.post(`${SERVER_URL}/users`, this.data)
        }
    }
}