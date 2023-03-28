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
  appointments: getIcon('ic_calendar'),
  appointments_detail: getIcon('ic_calendar_app'),
  appointments_list: getIcon('ic_appointment_list'),
  billInvoice: getIcon('ic_bill'),
  shortcut: getIcon('ic_shortcut'),
  settings: getIcon('ic_settings'),
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
        path: '/dashboard/user',
        icon: ICONS.patient,
        children: [
          { title: 'New Clients', path: '/dashboard/user/four',icon: ICONS.patient_add },
          { title: 'Client List', path: '/dashboard/user/five',icon: ICONS.patient_list },
          { title: 'Form Design', path: '/dashboard/user/six',icon: ICONS.form_design },
          { title: 'Settings', path: '/dashboard/user/six',icon: ICONS.settings},
        ],
      },
      {
        title: 'Appointments',
        path: '/dashboard/user',
        icon: ICONS.appointments,
        children: [
          { title: 'Appointments', path: '/dashboard/user/four',icon: ICONS.appointments_detail },
          { title: 'Appointments List', path: '/dashboard/user/five',icon: ICONS.appointments_list },
         ],
      },
      {
        title: 'Bill/invoice',
        path: '/dashboard/user',
        icon: ICONS.billInvoice,
      },
    ],
  },
  {
    subheader: 'Tools',
    items: [
      {
        title: 'Shortcut Keys',
        path: '/dashboard/user',
        icon: ICONS.shortcut,
      },
      {
        title: 'Settings',
        path: '/dashboard/user',
        icon: ICONS.settings,
      },
    ],
  },
];

export default sidebarConfig;
