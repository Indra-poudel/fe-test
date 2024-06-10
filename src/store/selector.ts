import { RootState } from "./store";

export const selectSelectedOption = (state: RootState) =>
  state.discount.selectedOption;

export const selectDiscountCode = (state: RootState) =>
  state.discount.discountCode;

export const selectComment = (state: RootState) => state.discount.comment;
