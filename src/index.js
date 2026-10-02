import "./styles.css";

import { initNavigation } from "./modules/navigation.js";
import { renderServices } from "./modules/services.js";
import { renderProjects } from "./modules/projects.js";
import { initEnquiryForm } from "./modules/enquiry.js";
import { initFooter } from "./modules/footer.js";

initNavigation();
renderServices();
renderProjects();
initEnquiryForm();
initFooter();
