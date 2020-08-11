import UserTableStore from "./RootStore"
import setPage from "./Actions/setPage"

/* UserTable component
 * listen to any UserTableStore.notify calls
 * needs a provider up the component tree to listen to changes
*/
function UserTable () {
	const store = UserTableStore.listen()

	return (
		<UserTableStore.Provider>
			<Table data={store.users}/>
			<Pagination 
				page={store.page}
				size={store.take}
				totalCount={store.totalCount}
				onChange={setPage}
			/>
		</UserTableStore.Provider>
	)
}

export default UserTable