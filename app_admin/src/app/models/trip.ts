export interface Trip {
  _id: string; //internal primary key in MongoDB
  code: string;
  name: string;
  length: string;
  start: Date;
  resort: string;
  perPerson: number;
  image: string;
  description: string;
}