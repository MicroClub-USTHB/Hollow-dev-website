export interface IFormInput {
  fullName: string;
  email: string;
  teamName: string;
  mcSection: string;
  attended: string;
  motivation: string;
}

export interface UserI {
  _id: string;
  username?: string;
  status: string;
  isRegistred?: boolean;
}
