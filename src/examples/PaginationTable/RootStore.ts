import Store from "../../Store";
import User from "./User";

type StoreType = {
	users: User[]
	totalCount: number
	loading: boolean
	page: number
	take: number
}

const initial: StoreType = {
	users: [],
	totalCount: 0,
	loading: false,
	page: 0,
	take: 10
}

const UserTableStore = new Store(initial);

export default UserTableStore;