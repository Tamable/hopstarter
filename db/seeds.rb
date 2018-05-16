# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pledge.destroy_all
Category.destroy_all
User.destroy_all
Project.destroy_all

u1 = User.create!(
  email: "test1@email.com",
  name: "DemoOne",
  password: "password123",
)

u2 = User.create!(
  email: "test2@email.com",
  name: "DemeTwo",
  password: "password456",
)

u3 = User.create!(
  email: "test3@email.com",
  name: "DemoThree",
  password: "password789",
)

u4 = User.create!(
  email: "test4@email.com",
  name: "DemoFour",
  password: "password293",
)

u5 = User.create!(
  email: "test5@email.com",
  name: "DemoFive",
  password: "password842",
)

u6 = User.create!(
  email: "test6@email.com",
  name: "DemoSix",
  password: "password991",
)

u7 = User.create!(
  email: "test7@email.com",
  name: "DemoSeven",
  password: "password773",
)

c1 = Category.create!(
  name: "Hedgehogs"
)

c2 = Category.create!(
  name: "Penguins"
)

c3 = Category.create!(
  name: "Flamingos"
)

User.all.each do |user|
  5.times do
    Project.create!(
      title: "#{Faker::Dessert.variety}",
      category_id: c1.id,
      creator_id: user.id,
      description: "#{Faker::Lorem.sentences(1)}",
      funding_goal: "#{Faker::Number.number(5)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}"
    )
  end
end

User.all.each do |user|
  5.times do
    Project.create!(
      title: "#{Faker::Dessert.topping}",
      category_id: c2.id,
      creator_id: user.id,
      description: "#{Faker::Lorem.sentences(1)}",
      funding_goal: "#{Faker::Number.number(5)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}"
    )
  end
end

User.all.each do |user|
  5.times do
    Project.create!(
      title: "#{Faker::Dessert.flavor}",
      category_id: c3.id,
      creator_id: user.id,
      description: "#{Faker::Lorem.sentences(1)}",
      funding_goal: "#{Faker::Number.number(5)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}"
    )
  end
end
