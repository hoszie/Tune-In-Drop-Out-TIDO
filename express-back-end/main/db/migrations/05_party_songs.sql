DROP TABLE IF EXISTS party_songs
CASCADE;

CREATE TABLE party_songs
(
  id SERIAL PRIMARY KEY NOT NULL,
  upvote integer,
  party_id INTEGER REFERENCES party(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  song_id INTEGER REFERENCES songs(id) ON DELETE CASCADE
);