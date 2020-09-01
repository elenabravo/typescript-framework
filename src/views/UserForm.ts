import { User, UserProps } from '../models/User'
import { View } from './View'

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-name': this.onSetNameClick,
            'click:.set-age': this.onSetAgeClick,
            'click:.save-model': this.onSaveModelClick,
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input')

        if (input) {
            const name = input.value        
        }

        this.model.set({ name })
    }

    onSaveModelClick = (): void => {
        this.model.save()
    }

    template(): string {
        return `
            <div style="background: black; color: orange">
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Update Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `
    }

}