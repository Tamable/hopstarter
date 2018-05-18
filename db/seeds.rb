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

filef = File.open("app/assets/images/flamingos.jpg")
fileh = File.open("app/assets/images/hedgehog.jpg")
filep = File.open("app/assets/images/penguin.jpg")

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

c1 = Category.create!(
  name: "Design & Tech"
)

c2 = Category.create!(
  name: "Games"
)

c3 = Category.create!(
  name: "Music"
)

c4 = Category.create!(
  name: "Arts"
)

c5 = Category.create!(
  name: "Film"
)

c6 = Category.create!(
  name: "Food & Craft"
)

c7 = Category.create!(
  name: "Publishing"
)

User.all.each do |user|
  2.times do
    Project.create!(
      title: "My #{Faker::Color.color_name} project",
      category_id: c1.id,
      creator_id: user.id,
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
  end
end

User.all.each do |user|
  2.times do
    Project.create!(
      title: "My #{Faker::Hacker.noun} project",
      category_id: c2.id,
      creator_id: user.id,
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
  end
end

User.all.each do |user|
  2.times do
    Project.create!(
      title: "My #{Faker::Music.instrument} project",
      category_id: c3.id,
      creator_id: user.id,
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
  end

User.all.each do |user|
  2.times do
    Project.create!(
      title: "My #{Faker::Ancient.hero} project",
      category_id: c4.id,
      creator_id: user.id,
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
  end

  User.all.each do |user|
    2.times do
      Project.create!(
        title: "My #{Faker::Dog.breed} documentary",
        category_id: c5.id,
        creator_id: user.id,
        description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
        funding_goal: "#{Faker::Number.number(4)}",
        end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
        location: "#{Faker::Address.city}, #{Faker::Address.state}"
      )
    end

    User.all.each do |user|
      2.times do
        Project.create!(
          title: "My #{Faker::Food.spice} project",
          category_id: c6.id,
          creator_id: user.id,
          description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
          funding_goal: "#{Faker::Number.number(4)}",
          end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
          location: "#{Faker::Address.city}, #{Faker::Address.state}"
        )
      end

User.all.each do |user|
  2.times do
    Project.create!(
      title: "My book about#{Faker::ProgrammingLanguage.name}",
      category_id: c7.id,
      creator_id: user.id,
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
  end
end
