import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail:null,
    sendMessageIsOpen: false,
  },
  reducers: {

    selectMail: (state,action) => {
      state.selectedMail = action.payload
    },

    openSendMessage: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.sendMessageIsOpen=true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen=false;
    }
  },
});

export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export const selectOpenMail = state => state.mail.selectedMail;

export default mailSlice.reducer;
