import { Product, DetectionResult, Alert, SummaryData } from './types';

export const MOCK_BILLED_PRODUCTS: Product[] = [
  { id: '1', name: 'DeWalt Power Drill', price: 129.99, quantity: 1, category: 'Power Tools' },
  { id: '2', name: 'Steel Hammer 16oz', price: 24.50, quantity: 2, category: 'Hand Tools' },
  { id: '3', name: 'Wood Screws (50pk)', price: 8.25, quantity: 1, category: 'Fasteners' },
  { id: '4', name: 'Measuring Tape 8m', price: 15.20, quantity: 3, category: 'Measuring' },
];

export const MOCK_DETECTED_PRODUCTS: DetectionResult[] = [
  { id: '1', name: 'DeWalt Power Drill', confidence: 0.99, quantity: 1, timestamp: new Date().toISOString() },
  { id: '2', name: 'Steel Hammer 16oz', confidence: 0.97, quantity: 2, timestamp: new Date().toISOString() },
  { id: '3', name: 'Wood Screws (50pk)', confidence: 0.94, quantity: 1, timestamp: new Date().toISOString() },
  { id: '4', name: 'Measuring Tape 8m', confidence: 0.82, quantity: 2, timestamp: new Date().toISOString() }, // Mismatch here
  { id: '5', name: 'Hex Key Set', confidence: 0.91, quantity: 1, timestamp: new Date().toISOString() }, // Extra item
];

export const MOCK_SUMMARY_DATA: SummaryData[] = [
  { time: '08:00', matches: 45, mismatches: 2 },
  { time: '10:00', matches: 120, mismatches: 5 },
  { time: '12:00', matches: 210, mismatches: 12 },
  { time: '14:00', matches: 180, mismatches: 8 },
  { time: '16:00', matches: 250, mismatches: 15 },
  { time: '18:00', matches: 310, mismatches: 10 },
  { time: '20:00', matches: 150, mismatches: 4 },
];
