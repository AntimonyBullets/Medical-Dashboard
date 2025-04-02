export const stats = [
  {
    title: 'Total Patients',
    value: '1,248',
    change: 12,
    period: 'month',
    type: 'patients'
  },
  {
    title: 'Today\'s Appointments',
    value: '12',
    change: 0,
    period: 'day',
    type: 'appointments',
    subtitle: '3 pending confirmations'
  },
  {
    title: 'Average Consultation',
    value: '24m',
    change: -2,
    period: 'week',
    type: 'consultation'
  },
  {
    title: 'Monthly Revenue',
    value: '$24,563',
    change: 5.2,
    period: 'month',
    type: 'revenue'
  }
];

export const appointments = [
  {
    patientName: 'Michael Johnson',
    initials: 'MJ',
    time: '9:00 AM - 9:30 AM',
    status: 'confirmed'
  },
  {
    patientName: 'Emily Davis',
    initials: 'ED',
    time: '10:00 AM - 10:30 AM',
    status: 'pending'
  },
  {
    patientName: 'Robert Wilson',
    initials: 'RW',
    time: '11:15 AM - 11:45 AM',
    status: 'confirmed'
  }
];

export const patients = [
  {
    name: 'Emma Wilson',
    initials: 'EW',
    age: 42,
    condition: 'Hypertension',
    status: 'Today',
    critical: false,
    returning: true
  },
  {
    name: 'James Brown',
    initials: 'JB',
    age: 65,
    condition: 'Diabetes Type 2',
    status: 'Yesterday',
    critical: true,
    returning: false
  },
  {
    name: 'Olivia Martinez',
    initials: 'OM',
    age: 38,
    condition: 'Asthma',
    status: 'Yesterday',
    critical: false,
    returning: true
  }
]; 