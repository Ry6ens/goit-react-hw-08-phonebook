export const getFilterContacts = (state, payload) => {
  if (state.contacts.length === 0) {
    return state.contacts;
  }

  return state.contacts.filter((el) =>
    el.name.toLowerCase().includes(state.filter.toLowerCase())
  );
};
