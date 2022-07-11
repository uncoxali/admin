import { Redirect } from "react-router-dom";

//Overview
import Overview from "../pages/Overview";

//Calendar
import Calendar from "src/pages/Calendar";

//Chat
import Chat from "src/pages/Chat/Chat";

//Email Inbox
import Inbox from "src/pages/Email/Inbox";
import EmailRead from "src/pages/Email/email-read";

//Invoice
import InvoiceList from "src/pages/Invoices/invoice-list";
import InvoiceDetails from "src/pages/Invoices/invoice-details";

//Contacts
import ContactsGrid from "src/pages/Contacts/contactsGrid";
import ContactsList from "src/pages/Contacts/ContactList/contacts-list";
import ContactsProfile from "src/pages/Contacts/ContactsProfile/contacts-profile";

//Utility
import PageStarter from "src/pages/Utility/PageStarter";
import PageMaintenance from "src/pages/Utility/PageMaintenance";
import PageTimeline from "src/pages/Utility/PageTimeline";
import PageFaqs from "src/pages/Utility/PageFAQs";
import PagePricing from "src/pages/Utility/PagePricing";
import Error404 from "src/pages/Utility/Error404";
import Error500 from "src/pages/Utility/Error500";

//UI Components
import UiAlert from "src/pages/UiComponents/UiAlert";
import UiButton from "src/pages/UiComponents/UiButton";
import UiCard from "src/pages/UiComponents/UiCard";
import UiCarousel from "src/pages/UiComponents/UiCarousel";
import UiDropdowns from "src/pages/UiComponents/UiDropdowns";
import UiGrid from "src/pages/UiComponents/UiGird";
import UiModal from "src/pages/UiComponents/UiModals";
import UiImages from "src/pages/UiComponents/UiImages";
import UiDrawer from "src/pages/UiComponents/UiDrawer";
import UiProgressbar from "src/pages/UiComponents/UiProgressbar";
import UiTabsAccordions from "src/pages/Utility/UiTabsAccordions";
import UiTypography from "src/pages/Utility/UiTypography";
import UiVideo from "src/pages/Utility/UiVideo";
import UiGeneral from "src/pages/UiComponents/UiGeneral";
import UiColors from "src/pages/UiComponents/UiColors";

//Extended pages
import UiLightbox from "src/pages/Extended/Lightbox";
import RangeSlider from "src/pages/Extended/Rangeslider";
import UiSweetAlert from "src/pages/Extended/SweetAlert";
import SessionTimeout from "src/pages/Extended/SessionTimeout";
import UiRating from "src/pages/Extended/UiRating";
import Notifications from "src/pages/Extended/Notifications";

//Forms pages
import FormElements from "src/pages/Forms/FormElements";
import FormValidation from "src/pages/Forms/FormValidation";
import AdvancedPlugins from "src/pages/Forms/AdvancedPlugins";
import FormEditors from "src/pages/Forms/FormEditors";
import FormUpload from "src/pages/Forms/FormUpload";
import FormWizard from "src/pages/Forms/FormWizard";
import FormMask from "src/pages/Forms/FormMask";

//Tables
import BasicTable from "src/pages/Tables/BasicTables";
import DatatableTables from "src/pages/Tables/DatatableTables";
import ResponsiveTables from "src/pages/Tables/ResponsiveTables";
import EditableTables from "src/pages/Tables/EditableTables";

//Charts
import Apexchart from "src/pages/Charts/Apexcharts";
import EChart from "src/pages/Charts/EChart";
import ChartjsChart from "src/pages/Charts/ChartjsChart";
import SparklineChart from "src/pages/Charts/SparklineChart";

//Icons
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconDripicons from "../pages/Icons/IconDripicons";
import IconFontawesome from "../pages/Icons/IconFontawesome";

//AuthenticationInner pages
import PageLogin from "src/pages/AuthenticationInner/PageLogin";
import PageRegister from "src/pages/AuthenticationInner/PageRegister";
import RecoverPassword from "src/pages/AuthenticationInner/RecoverPassword";
import LockScreen from "src/pages/AuthenticationInner/LockScreen";
import ConfirmMail from "src/pages/AuthenticationInner/ConfirmMail";
import EmailVerification from "src/pages/AuthenticationInner/EmailVerification";
import TwoStepVerfication from "src/pages/AuthenticationInner/TwoStepVerfication";

//Authentication pages
import Login from "src/pages/Authentication/Login";
import Logout from "src/pages/Authentication/Logout";
import Register from "src/pages/Authentication/Register";
import userProfile from "src/pages/Authentication/user-profile";
import PagesComingsoon from "src/pages/Utility/PageComingsoon";

//Maps
import MapsGoogle from "src/pages/Maps/MapsGoogle";
import MapsVector from "src/pages/Maps/MapsVector";
import MapsLeaflet from "src/pages/Maps/MapsLeaflet";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  //User Profile
  { path: "/adminv2/profile", component: userProfile },

  //Overview
  { path: "/adminv2/Overview", component: Overview },

  //Calendar
  { path: "/apps-calendar", component: Calendar },

  //Chat
  { path: "/apps-chat", component: Chat },

  //Email Inbox
  { path: "/email-inbox", component: Inbox },
  { path: "/email-read", component: EmailRead },

  //Invoice
  { path: "/invoices-list", component: InvoiceList },
  { path: "/invoices-detail", component: InvoiceDetails },

  //Contact
  { path: "/adminv2/contacts-grid", component: ContactsGrid },
  { path: "/adminv2/contacts-list", component: ContactsList },
  { path: "/adminv2/contacts-profile", component: ContactsProfile },

  //Utility
  { path: "/adminv2/pages-starter", component: PageStarter },
  { path: "/adminv2/pages-timeline", component: PageTimeline },
  { path: "/adminv2/pages-faqs", component: PageFaqs },
  { path: "/adminv2/pages-pricing", component: PagePricing },

  //UI Components
  { path: "/ui-alerts", component: UiAlert },
  { path: "/ui-buttons", component: UiButton },
  { path: "/ui-cards", component: UiCard },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-dropdowns", component: UiDropdowns },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-modals", component: UiModal },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-drawer", component: UiDrawer },
  { path: "/ui-progressbars", component: UiProgressbar },
  { path: "/ui-tabs-accordions", component: UiTabsAccordions },
  { path: "/ui-typography", component: UiTypography },
  { path: "/ui-video", component: UiVideo },
  { path: "/ui-general", component: UiGeneral },
  { path: "/ui-colors", component: UiColors },

  //Extended pages
  { path: "/extended-lightbox", component: UiLightbox },
  { path: "/extended-rangeslider", component: RangeSlider },
  { path: "/extended-sweet-alert", component: UiSweetAlert },
  { path: "/extended-session-timeout", component: SessionTimeout },
  { path: "/extended-rating", component: UiRating },
  { path: "/extended-notifications", component: Notifications },

  // Forms pages
  { path: "/form-elements", component: FormElements },
  { path: "/form-validation", component: FormValidation },
  { path: "/form-advanced", component: AdvancedPlugins },
  { path: "/form-editors", component: FormEditors },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-wizard", component: FormWizard },
  { path: "/form-mask", component: FormMask },

  //tables
  { path: "/tables-basic", component: BasicTable },
  { path: "/tables-datatable", component: DatatableTables },
  { path: "/tables-responsive", component: ResponsiveTables },
  { path: "/tables-editable", component: EditableTables },

  //Charts
  { path: "/charts-apex", component: Apexchart },
  { path: "/charts-echart", component: EChart },
  { path: "/charts-chartjs", component: ChartjsChart },
  { path: "/charts-sparkline", component: SparklineChart },

  //Icons
  { path: "/icons-boxicons", component: IconBoxicons },
  { path: "/icons-materialdesign", component: IconMaterialdesign },
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-fontawesome", component: IconFontawesome },

  //Maps
  { path: "/maps-google", component: MapsGoogle },
  { path: "/maps-vector", component: MapsVector },
  { path: "/maps-leaflet", component: MapsLeaflet },

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/adminv2/Overview" />,
  },
];

const authRoutes: Array<RouteProps> = [
  //Authentication pages
  { path: "/adminv2/login", component: Login },
  { path: "/adminv2/logout", component: Logout },
  { path: "/adminv2/register", component: Register },

  //AuthenticationInner pages
  { path: "/page-login", component: PageLogin },
  { path: "/page-register", component: PageRegister },
  { path: "/page-recoverpw", component: RecoverPassword },
  { path: "/adminv2/page-lock-screen", component: LockScreen },
  { path: "/page-confirm-mail", component: ConfirmMail },
  { path: "/page-email-verification", component: EmailVerification },
  { path: "/page-two-step-verification", component: TwoStepVerfication },

  //utility page
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-maintenance", component: PageMaintenance },
  { path: "/pages-404", component: Error404 },
  { path: "/pages-500", component: Error500 },
];

export { userRoutes, authRoutes };
