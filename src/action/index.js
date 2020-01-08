import { INCREMENT, DECREMENT, RESET, STEP, MAX } from "../types";

export function doincrement() {
  return { type: INCREMENT };
}

export function dodecrement() {
  return { type: DECREMENT };
}

export function doreset() {
  return { type: RESET };
}

export function dostep(stepnumber) {
  return { type: STEP, payload: stepnumber };
}
export function domax(maxnumber) {
  return { type: MAX, payload: maxnumber };
}
