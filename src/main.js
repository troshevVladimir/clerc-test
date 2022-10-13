import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// eslint-disable-next-line no-unused-vars
import style from "@/assets/base.css";
import UICheckbox from "./components/UiKit/UICheckbox.vue";
import UITab from "./components/UiKit/UITab.vue";
import UITabs from "./components/UiKit/UITabs.vue";
import UICard from "./components/UiKit/UICard.vue";
import UIBreadCrumbs from "./components/UiKit/UIBreadCrumbs.vue";
import UIButton from "./components/UiKit/UIButton.vue";
import UIInput from "./components/UiKit/UIInput.vue";

const app = createApp(App);

app.component("ui-checkbox", UICheckbox);
app.component("ui-tab", UITab);
app.component("ui-tabs", UITabs);
app.component("ui-card", UICard);
app.component("ui-button", UIButton);
app.component("ui-input", UIInput);
app.component("ui-bread-crumbs", UIBreadCrumbs);

app.use(store);
app.mount("#app");
