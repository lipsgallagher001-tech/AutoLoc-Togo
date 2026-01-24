
import { CarCategory, Transmission, Vehicle, Driver, DriverStatus } from './types';

export const COLORS = {
  primary: '#137fec',
  whatsapp: '#25D366',
  background: '#F9FAFB',
};

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: '1',
    name: 'Toyota RAV4 2022',
    category: CarCategory.SUV,
    transmission: Transmission.AUTOMATIC,
    seats: 5,
    pricePerDay: 45000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU6CGTVmnqBTm-R5l7fzdcq7XFQB5LyPp7QeKhCBjVzIQGw-lWmowxnQ1BWmB8VHjztBRUFMHoiyu6tK1UzEQnYakUI1uyF3IlD7kqhXnMbmrVfdRbAFgAJNrQslvyA3cqbPeNFOwD2glYuIhuwQrvNsyNWrC1QmDuL85jEkbxbR9ooM5OiSjnb62l72gWzYiIO8oSOnAGGg1yLisxx6Y-WQ9TIrrmIE7t_b-o9VMtulBHxpyo1FTnpT5eq5LtHwE_w-liUNO4VQEg',
    rating: 4.9,
    withDriver: true,
    isPopular: true,
    description: "Le compagnon idéal pour vos trajets à Lomé et dans tout le Togo. Puissant, fiable et parfaitement adapté à nos routes."
  },
  {
    id: '2',
    name: 'Toyota Corolla',
    category: CarCategory.BERLINE,
    transmission: Transmission.MANUAL,
    seats: 5,
    pricePerDay: 30000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzVrqvz9UPq-x91bBh-cYMogseESbUGIjZW6R5SZaywTamywhpmRzUnquSbsVh6cEeAgPWeCc74Rw8VrorHHWLTAt_Wusetw8W2yq7fWVMtbFs0TIal3N8yv67L4TQ-ZUdziqj3XQds0ihg4sA500oBmQaXILUeUwg7ti-FNXl8L0wgvSRolJrpZaxsqOpwlknV9FRMz1Rf1KZV2BAc5Z0iRWSmkqu5JsZuLtdkw0S0NQF1oJFrV8YeJAeHuwApAT_Ga-ehkdW_Uzn',
    rating: 4.7,
    withDriver: false,
    isPopular: true
  },
  {
    id: '3',
    name: 'Toyota Prado TXL',
    category: CarCategory.FOUR_BY_FOUR,
    transmission: Transmission.AUTOMATIC,
    seats: 7,
    pricePerDay: 75000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAihcu0ZdEo-2ec3oGQS3hB5dKc5aWZWCvqL1Q-riArZhHGtPagdRUWbFM6vEfSooz8oMa89L69vNa5CczfjFAGP_K-INKwG4Ca328NaJLWscPfJquGxm9A-BA5wpJt64GUiu3f326NrZGY2tFy0D8A7ZkbinhPQ6rGsjMLxzDG5KYcLhzAhGNodiEacUJgBulMPBL2_rSPdXgteFbxAVYBXjOzDsFia-9ZQ6FIGS5dSD8_LRlJPBbjVH2hmFAJ8QqAgjhHDFAciATw',
    rating: 5.0,
    withDriver: true
  }
];

export const MOCK_DRIVERS: Driver[] = [
  {
    id: '1',
    name: 'Kofi Mensah',
    driverId: 'AL-2024-042',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    phone: '+228 90 00 00 01',
    whatsapp: '+228 90 00 00 01',
    status: DriverStatus.AVAILABLE,
    currentVehicle: null,
    licenseNumber: 'TG-DL-2020-12345',
    experience: 8,
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Amivi Lawson',
    driverId: 'AL-2024-015',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    phone: '+228 91 23 45 67',
    whatsapp: '+228 91 23 45 67',
    status: DriverStatus.ON_MISSION,
    currentVehicle: 'Toyota Hilux - TG 1234-AB',
    licenseNumber: 'TG-DL-2019-67890',
    experience: 10,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Yao Adama',
    driverId: 'AL-2024-008',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    phone: '+228 92 11 22 33',
    whatsapp: '+228 92 11 22 33',
    status: DriverStatus.OFF_DUTY,
    currentVehicle: null,
    licenseNumber: 'TG-DL-2021-11223',
    experience: 5,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Fatou Traoré',
    driverId: 'AL-2024-029',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    phone: '+228 93 45 67 89',
    whatsapp: '+228 93 45 67 89',
    status: DriverStatus.ON_MISSION,
    currentVehicle: 'Mercedes E-Class - TG 5678-CD',
    licenseNumber: 'TG-DL-2018-44556',
    experience: 12,
    rating: 5.0,
  },
  {
    id: '5',
    name: 'Kwame Asante',
    driverId: 'AL-2024-033',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    phone: '+228 94 56 78 90',
    whatsapp: '+228 94 56 78 90',
    status: DriverStatus.AVAILABLE,
    currentVehicle: null,
    licenseNumber: 'TG-DL-2020-77889',
    experience: 7,
    rating: 4.6,
  },
];
