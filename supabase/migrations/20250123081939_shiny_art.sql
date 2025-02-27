/*
  # Initial Schema Setup for Kisan Mitra

  1. New Tables
    - users
      - id (uuid, primary key)
      - full_name (text)
      - created_at (timestamp)
      
    - mandi_rates
      - id (uuid, primary key)
      - crop (text)
      - variety (text)
      - price (numeric)
      - change (numeric)
      - trend (text)
      - market (text)
      - created_at (timestamp)
      
    - weather_alerts
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - severity (text)
      - created_at (timestamp)
      
    - crop_advisories
      - id (uuid, primary key)
      - crop (text)
      - title (text)
      - message (text)
      - created_at (timestamp)
      
    - market_insights
      - id (uuid, primary key)
      - title (text)
      - message (text)
      - type (text)
      - created_at (timestamp)
      
    - transactions
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - description (text)
      - amount (numeric)
      - type (text)
      - status (text)
      - created_at (timestamp)
      
    - loans
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - type (text)
      - amount (numeric)
      - interest_rate (numeric)
      - tenure (text)
      - status (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Mandi rates table
CREATE TABLE mandi_rates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  crop text NOT NULL,
  variety text,
  price numeric NOT NULL,
  change numeric,
  trend text,
  market text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE mandi_rates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read mandi rates"
  ON mandi_rates
  FOR SELECT
  TO authenticated
  USING (true);

-- Weather alerts table
CREATE TABLE weather_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  severity text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE weather_alerts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read weather alerts"
  ON weather_alerts
  FOR SELECT
  TO authenticated
  USING (true);

-- Crop advisories table
CREATE TABLE crop_advisories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  crop text NOT NULL,
  title text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE crop_advisories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read crop advisories"
  ON crop_advisories
  FOR SELECT
  TO authenticated
  USING (true);

-- Market insights table
CREATE TABLE market_insights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  message text,
  type text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE market_insights ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read market insights"
  ON market_insights
  FOR SELECT
  TO authenticated
  USING (true);

-- Transactions table
CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  description text NOT NULL,
  amount numeric NOT NULL,
  type text NOT NULL,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own transactions"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Loans table
CREATE TABLE loans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  type text NOT NULL,
  amount numeric NOT NULL,
  interest_rate numeric NOT NULL,
  tenure text NOT NULL,
  status text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE loans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own loans"
  ON loans
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);