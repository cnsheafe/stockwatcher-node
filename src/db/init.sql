CREATE TABLE IF NOT EXISTS Symbols (
  id serial PRIMARY KEY,
  symbol TEXT NOT NULL,
  company TEXT
);

CREATE TABLE IF NOT EXISTS Subscriptions (
  id serial PRIMARY KEY,
  phoneNumber TEXT NOT NULL,
  symbolId INTEGER REFERENCES Symbols(id)
);
