import {
  setIsEqualControllerUsed,
  setIsNumbersControllerUsed,
  setIsOperatorsControllerUsed,
  setIsResultControllerUsed,
  TDragableItem,
} from 'redux/slices/main.slice';
import { store } from 'redux/store';

export const setWhichControllerIsUsed = (
  controller: TDragableItem,
  payload: boolean,
  dispatch:  typeof store.dispatch,
) => {
  if (controller === 'result') {
    dispatch(setIsResultControllerUsed(payload));
  }

  if (controller === 'operator') {
    dispatch(setIsOperatorsControllerUsed(payload));
  }

  if (controller === 'number') {
    dispatch(setIsNumbersControllerUsed(payload));
  }

  if (controller === 'equal') {
    dispatch(setIsEqualControllerUsed(payload));
  }
};