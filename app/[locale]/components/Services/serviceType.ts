type SingleService = {
  id: number;
  name: string;
  duration: number;
};
export type ServiceType = {
  id: number;
  icon: React.ReactNode;
  services: SingleService[];
};
