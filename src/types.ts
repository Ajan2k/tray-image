import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export interface DetectionResult {
  id: string;
  name: string;
  confidence: number;
  quantity: number;
  timestamp: string;
}

export interface Alert {
  id: string;
  type: 'missing' | 'extra' | 'quantity_mismatch';
  productName: string;
  expected: number;
  detected: number;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
}

export interface SummaryData {
  time: string;
  matches: number;
  mismatches: number;
}
