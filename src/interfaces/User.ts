export interface User {
  id: string;
  username: string;
  email: string;
  email_verified_at?: any;
  name: string;
  gender: string;
  nip: string;
  nik?: any;
  birth_date: string;
  address_code?: any;
  address?: any;
  phone_number?: any;
  job_title?: any;
  role: string;
  status: string;
  exp: number;
  study_group_id: string;
  class_room_id: string;
  whatsapp: string;
  balance: number;
  fcm_token?: any;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  study_group: Studygroup;
  class_room: Classroom;
  teacher_notes: number;
}

interface Classroom {
  id: string;
  class_name: string;
  study_group_id: string;
  admin_id: string;
  segment: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}

interface Studygroup {
  id: string;
  name: string;
  period?: any;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  start_year?: any;
  end_year?: any;
  program_id?: any;
}
