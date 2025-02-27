/*
  # Insert Initial Data

  1. Sample Data Insertion
    - Mandi rates
    - Weather alerts
    - Crop advisories
    - Market insights
    
  Note: User-specific data like transactions and loans will be created when users register
*/

-- Insert Mandi Rates
INSERT INTO mandi_rates (crop, variety, price, change, trend, market) VALUES
  ('Wheat', 'Sharbati', 2100, 120, 'up', 'Indore Mandi'),
  ('Rice', 'Basmati', 3500, 80, 'up', 'Karnal Mandi'),
  ('Cotton', 'Long Staple', 6300, -150, 'down', 'Rajkot Mandi'),
  ('Soybean', 'Yellow', 4200, 200, 'up', 'Ujjain Mandi'),
  ('Mustard', 'Black', 5100, -90, 'down', 'Alwar Mandi');

-- Insert Weather Alerts
INSERT INTO weather_alerts (title, description, severity) VALUES
  ('Heat Wave Alert', 'High temperatures expected for next 3 days', 'high'),
  ('Rain Forecast', 'Light rain expected tomorrow evening', 'medium');

-- Insert Crop Advisories
INSERT INTO crop_advisories (crop, title, message) VALUES
  ('Wheat', 'Best practices for organic farming', 'Use certified seeds, maintain proper spacing'),
  ('Rice', 'Water management', 'Maintain 5cm water level'),
  ('Cotton', 'Pest control alert', 'Watch for bollworm in cotton crops');

-- Insert Market Insights
INSERT INTO market_insights (title, message, type) VALUES
  ('High Demand', 'Organic wheat in export market', 'market_trend'),
  ('Price Trend', 'Cotton prices expected to rise', 'price_forecast'),
  ('Market Alert', 'New MSP announced for Rabi crops', 'policy_update');