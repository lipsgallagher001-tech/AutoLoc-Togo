
import { CarCategory, Transmission, Vehicle } from './types';

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
