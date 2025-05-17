# ruleid: sql-injection
Ecto.Adapters.SQL.query(Repo, user_input)

# ruleid: sql-injection
Repo.query(user_input)

# ruleid: sql-injection
SQL.query!(Repo, user_input)

# ruleid: sql-injection
Repo.query!(user_input)

# ruleid: sql-injection
Ecto.Adapters.SQL.stream(Repo, user_input)

# ok: sql-injection
Path.expand("../deps", __DIR__)
dgshdhjdndkls
