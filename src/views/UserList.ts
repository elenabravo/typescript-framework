import { CollectionView } from './CollectionView'
import { User, UserProps } from '../models/User'
import { UserShow } from './UserShow'

export class UserList extends CollectionView<User, UserProps> {    
    renderItem(model: User, itemParent: Element): void {
    console.log(itemParent, model)
        new UserShow(itemParent, model).render()
    }

}