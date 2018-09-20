CREATE TABLE IF NOT EXISTS Symbols (
  id serial PRIMARY KEY,
  symbol TEXT NOT NULL,
  company TEXT NOT NULL,
  sector TEXT,
  industry TEXT,
  createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Subscriptions (
  id serial PRIMARY KEY,
  phoneNumber TEXT NOT NULL,
  symbolId INTEGER REFERENCES Symbols(id),
  createdAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
