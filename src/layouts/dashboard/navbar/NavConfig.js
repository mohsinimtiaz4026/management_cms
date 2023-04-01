// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{width: 1, height: 1}} />
);

const ICONS = {
  dashboard: getIcon('ic_home'),
  patient: getIcon('ic_persons'),
  patient_add: getIcon('ic_user_add'),
  patient_list: getIcon('ic_patient_list'),
  form_design: getIcon('ic_form_design'),
  billInvoice: getIcon('ic_bill'),
  shortcut: getIcon('ic_shortcut'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    // subheader: 'Tabs',
    // subheader: 'Patient',
    items: [
      {title: 'Home', path: '/dashboard/home', icon: ICONS.dashboard},
  //     {title: 'Calendar', path: '/dashboard/calendar', icon: ICONS.calendar},
  //     {title: 'Crew', path: '/dashboard/crew', icon: ICONS.user},
  //     {
  //       title: 'Notifications',
  //       path: '/dashboard/notifications',
  //       icon: ICONS.notification,
  //     },
  //     {title: 'Maps', path: '/dashboard/map', icon: ICONS.map},
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Management',
    items: [
      {
        title: 'Clients',
        // path: '',
        icon: ICONS.patient,
        children: [
          { title: 'New Clients', path: '/dashboard/clients/AddClient',icon: ICONS.patient_add },
          { title: 'Client List', path: '/dashboard/clients/ClientList',icon: ICONS.patient_list },
          { title: 'Form Design', path: '/dashboard/clients/FormDesign',icon: ICONS.form_design },
        ],
      },
      {
        title: 'Bill/invoice',
        path: '/dashboard/invoice',
        icon: ICONS.billInvoice,
      },
    ],
  },
  {
    subheader: 'Tools',
    items: [
      {
        title: 'Shortcut Keys',
        path: '/dashboard/shortcut',
        icon: ICONS.shortcut,
      },
    ],
  },
];

export default sidebarConfig;
