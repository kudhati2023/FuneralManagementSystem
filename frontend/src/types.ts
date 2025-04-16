
export interface BurialOrder {
  id: number;
  orderNumber: string;
  funeralDate: string;
  status: string;
  deceasedId: number;
  serviceType: string;
  location: string;
}

export interface FuneralEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  location: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface DriverSchedule {
  id: number;
  driverId: number;
  date: string;
  route: string;
  status: string;
}

export interface Payment {
  id: number;
  amount: number;
  date: string;
  status: string;
}

export interface Plot {
  id: number;
  location: string;
  status: string;
  price: number;
}
