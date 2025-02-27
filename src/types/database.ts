// Add to existing types
export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  avatar_url: string | null;
  phone_number?: string;
  location?: string;
  created_at: string;
  updated_at?: string;
}

export interface AuthSession {
  user: {
    id: string;
    email: string;
  } | null;
  error: Error | null;
}

export interface Notification {
  id: number;
  user_id: string;
  type: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface WeatherAlert {
  id: string;
  title: string;
  description: string;
  severity: string;
  created_at: string;
}

export interface CropAdvisory {
  id: string;
  crop: string;
  title: string;
  message: string;
  created_at: string;
}

export interface MarketInsight {
  id: string;
  title: string;
  message: string;
  type: string;
  created_at: string;
}

export interface MandiRate {
  state: string;
  district: string;
  market: string;
  commodity: string;
  variety: string;
  arrival_date: string;
  min_price: number;
  max_price: number;
  modal_price: number;
}

export interface MandiRatesResponse {
  records: MandiRate[];
  total: number;
  success: boolean;
}