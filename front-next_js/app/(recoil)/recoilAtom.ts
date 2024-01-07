import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

// const sessionStorage =
//   typeof window !== "undefined" ? window.sessionStorage : undefined;

export const siginInState = atom({
  key: "isSignIn",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
