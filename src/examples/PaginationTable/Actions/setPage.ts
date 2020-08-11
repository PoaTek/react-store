import UserTableStore from "../RootStore";
import getUsers from "./getUsers";

function setPage(page: number) {
    // start of synchronous part
    // get state instance
    const state = UserTableStore.getState();
    state.page = page;

    // notify 1 changes
    UserTableStore.notify();

    // call another action
    getUsers();
    // end of synchronous part
}

export default setPage