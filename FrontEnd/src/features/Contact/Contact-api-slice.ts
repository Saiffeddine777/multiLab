import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
}
 from "@reduxjs/toolkit";
import axios from "axios";
import Address from "../../Address";


interface Message {
  firstName: string;
  lastName: string;
  title: string;
  message: string;
  phoneNumber: string;
  email: string;
  adress: string;
  adressed: boolean;
}

const message: Message = {
  firstName: "",
  lastName: "",
  title: "",
  message: "",
  phoneNumber: "",
  email: "",
  adress: "",
  adressed: false,
};

export const createMessage = createAsyncThunk("/create/message", async () => {
  return axios
    .post(`${Address}/api/messages/create`, message)
    .then((res) => res.data);
});

const messageSlice = createSlice({
  name: "message",
  initialState: {
    value: message,
    loading: false,
    error: "",
    success: "",
  },
  reducers: {
    firstNameReducer: (state, action: PayloadAction<string>) => {
      state.value.firstName = action.payload;
    },
    lastNameReducer: (state, action: PayloadAction<string>) => {
      state.value.lastName = action.payload;
    },
    titleReducer: (state, action: PayloadAction<string>) => {
      state.value.title = action.payload;
    },
    messageReducer: (state, action: PayloadAction<string>) => {
      state.value.message = action.payload;
    },
    phoneNumberReducer: (state, action: PayloadAction<string>) => {
      state.value.phoneNumber = action.payload;
    },
    emailReducer: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },
    adressReducer: (state, action: PayloadAction<string>) => {
      state.value.adress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.meta.requestStatus;
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error sending message";
      });
  },
});

export const {
  firstNameReducer,
  lastNameReducer,
  adressReducer,
  emailReducer,
  phoneNumberReducer,
  titleReducer,
  messageReducer,
} = messageSlice.actions;

export default messageSlice.reducer;
