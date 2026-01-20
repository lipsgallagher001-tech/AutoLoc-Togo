
export enum CarCategory {
  BERLINE = 'Berline',
  SUV = 'SUV',
  FOUR_BY_FOUR = '4x4',
  MINIBUS = 'Minibus',
  COMPACT_SUV = 'Compact SUV'
}

export enum Transmission {
  MANUAL = 'Manuel',
  AUTOMATIC = 'Automatique'
}

export interface Vehicle {
  id: string;
  name: string;
  category: CarCategory;
  transmission: Transmission;
  seats: number;
  pricePerDay: number;
  imageUrl: string;
  rating: number;
  withDriver: boolean;
  description?: string;
  isPopular?: boolean;
}

export interface BookingDetails {
  vehicleId: string;
  fullName: string;
  email: string;
  phone: string;
  startDate: string;
  endDate: string;
  option: 'self-drive' | 'with-driver';
  paymentMethod: 'delivery' | 'online';
  totalPrice: number;
}
