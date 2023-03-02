/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import StudentsAddEdit from "views/Forms/StudentsAddEdit.js";
import StudentsList from "views/Forms/StudentsList.js";
import EmployeesAddEdit from "views/Forms/EmployeesAddEdit.js";
import EmployeesList from "views/Forms/EmployeesList.js";

import Buttons from "views/Components/Buttons.js";
import GridSystem from "views/Components/GridSystem.js";
import Panels from "views/Components/Panels.js";
import SweetAlert from "views/Components/SweetAlertPage.js";
import Notifications from "views/Components/Notifications.js";
import Icons from "views/Components/Icons.js";
import Typography from "views/Components/Typography.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import Wizard from "views/Forms/Wizard/Wizard.js";
import RegularTables from "views/Tables/RegularTables.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import ReactTables from "views/Tables/ReactTables.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import VectorMap from "views/Maps/VectorMap.js";
import Charts from "views/Charts.js";
import Calendar from "views/Calendar.js";
import UserPage from "views/Pages/UserPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard
  },
  {
    collapse: true,
    path: "/components",
    name: "Students",
    state: "openStudents",
    icon: "nc-icon nc-single-02",
    views: [
      {
        path: "/add_edit_students",
        layout: "/admin",
        name: "Add/Edit Student",
        mini: "A/E",
        component: StudentsAddEdit
      },
      {
        path: "/list_students",
        layout: "/admin",
        name: "List Students",
        mini: "LS",
        component: StudentsList
      },
    ]
  },
  {
    collapse: true,
    path: "/employees",
    name: "Employees",
    state: "openEmployees",
    icon: "nc-icon nc-circle-09",
    views: [
      {
        path: "/add_edit_employee",
        layout: "/admin",
        name: "Add/Edit Employee",
        mini: "A/E",
        component: EmployeesAddEdit
      },
      {
        path: "/list_employee",
        layout: "/admin",
        name: "List Employee",
        mini: "LS",
        component: EmployeesList
      },
    ]
  },  
  {
    collapse: true,
    path: "/class",
    name: "Class",
    state: "openClass",
    icon: "nc-icon nc-grid-45",
    views: [
      {
        path: "/add_edit_class",
        layout: "/admin",
        name: "Add/Edit Class",
        mini: "A/E",
        component: Dashboard
      },
      {
        path: "/list_class",
        layout: "/admin",
        name: "List Class",
        mini: "LS",
        component: Dashboard
      },
    ]
  },  
  {
    collapse: true,
    path: "/books",
    name: "Books",
    state: "openBooks",
    icon: "nc-icon nc-single-copy-04",
    views: [
      {
        path: "/add_edit_books",
        layout: "/admin",
        name: "Add/Edit Books",
        mini: "A/E",
        component: Dashboard
      },
      {
        path: "/list_books",
        layout: "/admin",
        name: "List Books",
        mini: "LS",
        component: Dashboard
      },
    ]
  },  
  {
    collapse: true,
    path: "/exams",
    name: "Exams",
    state: "openExams",
    icon: "nc-icon nc-watch-time",
    views: [
      {
        path: "/create_main_exam_name",
        layout: "/admin",
        name: "Create main exam name",
        mini: "EN",
        component: Dashboard
      },
      {
        path: "/create_exam",
        layout: "/admin",
        name: "Create exam",
        mini: "CE",
        component: Dashboard
      },
      {
        path: "/gen_seat_numbers",
        layout: "/admin",
        name: "Generate seat numbers",
        mini: "SN",
        component: Dashboard
      },
    ]
  },
  {
    collapse: true,
    path: "/results",
    name: "Results",
    state: "openResults",
    icon: "nc-icon nc-chart-bar-32",
    views: [
      {
        path: "/enter_exam_results",
        layout: "/admin",
        name: "Enter exam results",
        mini: "ER",
        component: Dashboard
      },
      {
        path: "/list_results",
        layout: "/admin",
        name: "List results",
        mini: "LR",
        component: Dashboard
      },
      {
        path: "/view_results",
        layout: "/admin",
        name: "View results",
        mini: "VR",
        component: Dashboard
      },
      {
        path: "/grade_structures",
        layout: "/admin",
        name: "Grade structures",
        mini: "GS",
        component: Dashboard
      },
    ]
  },
  {
    collapse: true,
    path: "/inventory",
    name: "Inventory",
    state: "openInventory",
    icon: "nc-icon nc-settings-90",
    views: [
      {
        path: "/add_edit_inventory",
        layout: "/admin",
        name: "Add/Edit inventory",
        mini: "A/E",
        component: Dashboard
      },
      {
        path: "/list_inventory",
        layout: "/admin",
        name: "List inventory",
        mini: "LI",
        component: Dashboard
      },
    ]
  },  
  {
    collapse: true,
    path: "/cards",
    name: "Cards",
    state: "openCards",
    icon: "nc-icon nc-badge",
    views: [
      {
        path: "/list_cards",
        layout: "/admin",
        name: "List cards",
        mini: "LC",
        component: Dashboard
      },
    ]
  },   
  {
    path: "/print_empty_student_add_edit",
    layout: "/admin",
    name: "Print Material",
    icon: "nc-icon nc-paper-2",
    component: Dashboard
  },   
  // {
  //   collapse: true,
  //   path: "/forms",
  //   name: "Forms",
  //   state: "openForms",
  //   icon: "nc-icon nc-notes",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       layout: "/admin",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms
  //     },
  //     {
  //       path: "/extended-forms",
  //       layout: "/admin",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms
  //     },
  //     {
  //       path: "/validation-forms",
  //       layout: "/admin",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms
  //     },
  //     {
  //       path: "/wizard",
  //       layout: "/admin",
  //       name: "Wizard",
  //       mini: "W",
  //       component: Wizard
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   path: "/tables",
  //   name: "Tables",
  //   state: "openTables",
  //   icon: "nc-icon nc-paper-2",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       layout: "/admin",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables
  //     },
  //     {
  //       path: "/extended-tables",
  //       layout: "/admin",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables
  //     },
  //     {
  //       path: "/react-table",
  //       layout: "/admin",
  //       name: "React Table",
  //       mini: "RT",
  //       component: ReactTables
  //     }
  //   ]
  // },
  // {
  //   collapse: true,
  //   path: "/maps",
  //   name: "Maps",
  //   state: "openMaps",
  //   icon: "nc-icon nc-pin-3",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       layout: "/admin",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps
  //     },
  //     {
  //       path: "/full-screen-maps",
  //       layout: "/admin",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap
  //     },
  //     {
  //       path: "/vector-maps",
  //       layout: "/admin",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap
  //     }
  //   ]
  // },
  // {
  //   path: "/charts",
  //   layout: "/admin",
  //   name: "Charts",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Charts
  // },
  // {
  //   path: "/calendar",
  //   layout: "/admin",
  //   name: "Calendar",
  //   icon: "nc-icon nc-single-copy-04",
  //   component: Calendar
  // },
  // {
  //   collapse: true,
  //   path: "/pages",
  //   name: "Pages",
  //   state: "openPages",
  //   icon: "nc-icon nc-puzzle-10",
  //   views: [
  //     {
  //       path: "/user-page",
  //       layout: "/admin",
  //       name: "User Page",
  //       mini: "UP",
  //       component: UserPage
  //     },
  //     {
  //       path: "/login-page",
  //       layout: "/auth",
  //       name: "Login Page",
  //       mini: "LP",
  //       component: LoginPage
  //     },
  //     {
  //       path: "/register-page",
  //       layout: "/auth",
  //       name: "Register",
  //       mini: "RP",
  //       component: RegisterPage
  //     },
  //     {
  //       path: "/lock-screen-page",
  //       layout: "/auth",
  //       name: "Lock Screen Page",
  //       mini: "LSP",
  //       component: LockScreenPage
  //     }
  //   ]
  // }
];
export default routes;
