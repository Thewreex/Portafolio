import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faFolder,
  faScrewdriverWrench,
  faFile,
  faSuitcase,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUser,
  faFolder,
  faScrewdriverWrench,
  faEnvelope,
  faGithub,
  faLinkedin,
  faFile,
  faSuitcase,
  faArrowUp,
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
