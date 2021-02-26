import { _ } from "lodash";

const initalState = {
	data: [],
	search: '',
	inProgress: true
}

export const createListener = (
    ref,
    set
) => ref.on('value', (snapshot) => {
    if (snapshot.exists()) {
        set({
            ...initalState,
            data: _.toArray(snapshot.val()).sort((a, b) => b.createdAt - a.createdAt),
            inProgress: false
        });
    }
    else set({ ...initalState, inProgress: false })
});