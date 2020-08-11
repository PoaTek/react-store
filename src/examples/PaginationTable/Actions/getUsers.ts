import UserTableStore from "../RootStore";

async function getUsers() {
    // start of synchronous part
    // get state instance
    const state = UserTableStore.getState();
    state.loading = true;

    // notify 1 change
    UserTableStore.notify();
    // end of synchronous part

    // call api for users and total count
    const response = await API.GET({
        take: state.take,
        skip: state.page * state.take
    });

    // start of synchronous part
    state.users = response.users;
    state.totalCount = response.totalCount;
    state.loading = false;

    // notify 3 changes
    UserTableStore.notify();
    // end of synchronous part
}

export default getUsers