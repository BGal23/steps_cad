export interface ISettings {
  id: number;
  name: string;
  select: boolean;
  type?: string;
  options?: IOptions[];
  value: number | string;
  isActive: boolean;
}

export interface IOptions {
  id: number;
  name: string;
  value: string;
}
