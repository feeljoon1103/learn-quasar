import { boot } from "quasar/wrappers";
import { LocalStorage, Dark } from "quasar";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // 1] Dark mode 설정
    console.log('### initalization ###')
    const darkMode = LocalStorage.getItem("darkMode");
    Dark.set(darkMode);
})
