import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DiscountState = {
  selectedOption: number | string;
  discountCode: string;
  comment: string;
};

const initialState: DiscountState = {
  selectedOption: 1,
  discountCode: "",
  comment: "",
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    setSelectedOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
    setDiscountCode(state, action: PayloadAction<string>) {
      state.discountCode = action.payload;
    },
    setComment(state, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
  },
});

export const { setSelectedOption, setDiscountCode, setComment } =
  discountSlice.actions;
export default discountSlice.reducer;
