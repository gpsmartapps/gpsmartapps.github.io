import mysql.connector

conn = mysql.connector.connect(
  host="localhost",
  user="OgwoGP",
  password="Gmail9k66",
  database="w3bece"
)

cursor = conn.cursor()
cursor.execute("SELECT DATABASE()")
data = cursor.fetchone()
print(f"You're connected to database: {data}")
