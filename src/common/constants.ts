export const CONSTANTS = {
  USER_TABLE: "Users",
  DOCTOR_TABLE: "Doctors",
  DOCTOR_FIELD_TABLE: "DoctorFields",
  APPOINTMENT_TABLE: "Appointments",
  JWT_SECRET: 'JWT_SECRET',
  DATABASE_URL: 'DATABASE_URL',
  JWT_STRATEGY: 'JWT_STRATEGY',
  COOKIE_NAME: "__onc_"
}

export const names = [
  'Magret Beanny',
  'Leo Standon',
  'Marcelo Kindamento',
  'Patel Filipe',
  'Hermes Audren',
  'Swis Standem',
  'James Simons',
  'Bockley Ribbon',
  'Mao Chang',
  'Larcia Gai',
  'Comobe Bernerd',
  'Indones Julian'
]


export const fields = [
  { n: 'Orthopedics', s: 'DO' },
  { n: 'Pediatrics', s: 'PD' },
  { n: 'Dermatologist', s: 'MD' },
  { n: 'General Practitioner', s: 'GP' },
  { n: 'Dentist', s: 'DMD' },
  { n: 'Pathologist', s: 'DP' },
  { n: 'Cardiologist', s: 'CVD' },
  { n: 'Anesthesiology', s: 'DA' },
  { n: 'Neurologist', s: 'ND' },
  { n: 'Radiologistic', s: 'RD' },
  { n: 'Surgeon', s: 'DS' },
  { n: 'Internal Medicine', s: 'IMD' },
]

export const INSERT_USERS = Array(5).fill(0).map((_, i) => ({
  email: `user${i + 1}@gmail.com`,
  password: '$argon2id$v=19$m=65536,t=3,p=4$VC0zHyZYY/uRe6Sbj4Veuw$4QPCKFdblBTH/b56xA/7Q8ZHNuIVlVUY8lqX59itra0',
  name: names[i],
}))

export const INSERT_DOCTORS: any = names.map((name, i) => ({
  email: `doctor${i + 1}@gmail.com`,
  password: '$argon2id$v=19$m=65536,t=3,p=4$VC0zHyZYY/uRe6Sbj4Veuw$4QPCKFdblBTH/b56xA/7Q8ZHNuIVlVUY8lqX59itra0',
  name,
  visit_type: i % 2 ? 'In-person' : 'Virtual',
  field: fields[i].n,
  abbr: fields[i].s,
  bio: 'lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip lorem',
  image: `/md${i + 1}.png`,
  available_date: Array(10).fill(0).map(() => `2023-07-${19 + i}`),
  available_time: Array(10).fill(0).map((_, s) => `${10 + s}:30`),
}))

export const INSERT_FIELDS = fields.map((field) => ({
  name: field.n,
  abbr: field.s,
}))

