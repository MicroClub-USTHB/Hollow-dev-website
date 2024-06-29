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

export interface Challenge {
  id: number;
  image: string;
  imagePage: string;
  title: string;
  description: string;
  bgGradient: string;
  buttonBg: string;
  link: string;
  difficulty: string;
  color: string;
}
