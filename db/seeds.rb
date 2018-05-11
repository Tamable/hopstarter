# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create!(
  title: "Test 1",
  category_id: 1,
  creator_id: 1,
  description: "deicae pecunarerunt iter aegemur vos unanimeratis demonire aliquid titor exercar transatus.",
  image_url: "flamingos.jpeg",
  funding_goal: 10000,
  end_date: "2018-6-30"
)

Project.create!(
  title: "Test 2",
  category_id: 2,
  creator_id: 2,
  description: "vectum cum ubum animeram ac tyritus herberrimum.",
  image_url: "hedgehog.jpeg",
  funding_goal: 20000,
  end_date: "2018-7-15"
)

Project.create!(
  title: "Test 3",
  category_id: 3,
  creator_id: 1,
  description: "lanatant mihi vertunt, es insolantis cupidisti mercor.",
  image_url: "penguin1.jpeg",
  funding_goal: 30000,
  end_date: "2018-8-1"
)

User.create!(
  email: "test1@email.com",
  name: "Demo one",
  image_url: "default-user.png"
)


User.create!(
  email: "test2@email.com",
  name: "Demo two",
  image_url: "orange_circle.png"
)

Category.create!(
  name: Hedgehogs
)

Category.create!(
  name: Penguins
)

Category.create!(
  name: Flamingos
)

Pledge.create!(
  amount: 2500,
  supporter_id: 1,
  project_id: 1
)

Pledge.create!(
  amount: 7000,
  supporter_id: 1,
  project_id: 2
)

Pledge.create!(
  amount: 10000,
  supporter_id: 2,
  project_id: 3
)
