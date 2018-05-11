# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all
User.destroy_all
Category.destroy_all
Pledge.destroy_all

c1 = Category.create!(
  name: "Hedgehogs"
)

c2 = Category.create!(
  name: "Penguins"
)

c3 = Category.create!(
  name: "Flamingos"
)

u1 = User.create!(
  email: "test1@email.com",
  name: "Demo one",
  password: "password123",
  image_url: "default-user.png"
)

u2 = User.create!(
  email: "test2@email.com",
  name: "Demo two",
  password: "password456",
  image_url: "orange_circle.png"
)

p1 = Project.create!(
  title: "Test 1",
  category_id: c1.id,
  creator_id: u1.id,
  description: "deicae pecunarerunt iter aegemur vos unanimeratis demonire aliquid titor exercar transatus.",
  image_url: "flamingos.jpeg",
  funding_goal: 10000,
  end_date: "2018-6-30"
)

p2 = Project.create!(
  title: "Test 2",
  category_id: c2.id,
  creator_id: u2.id,
  description: "vectum cum ubum animeram ac tyritus herberrimum.",
  image_url: "hedgehog.jpeg",
  funding_goal: 20000,
  end_date: "2018-7-15"
)

p3 = Project.create!(
  title: "Test 3",
  category_id: c3.id,
  creator_id: u1.id,
  description: "lanatant mihi vertunt, es insolantis cupidisti mercor.",
  image_url: "penguin1.jpeg",
  funding_goal: 30000,
  end_date: "2018-8-1"
)

p1 = Pledge.create!(
  amount: 2500,
  supporter_id: u1.id,
  project_id: p1.id
)

p2 = Pledge.create!(
  amount: 7000,
  supporter_id: u1.id,
  project_id: p2.id
)

p3 = Pledge.create!(
  amount: 10000,
  supporter_id: u2.id,
  project_id: p3.id
)
