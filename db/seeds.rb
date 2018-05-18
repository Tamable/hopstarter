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

    Project.create!(
      title: "My Tree design project",
      category_id: c1.id,
      creator_id: user1.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/design1.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )

    Project.create!(
      title: "My abstract design project",
      category_id: c1.id,
      creator_id: user2.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/design2.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My Nausicaa design project",
      category_id: c1.id,
      creator_id: user3.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/design3.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My Totoro design project",
      category_id: c1.id,
      creator_id: user4.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/design4.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My butterfly design project",
      category_id: c1.id,
      creator_id: user5.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/design5.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )

    Project.create!(
      title: "My #{Faker::Hacker.noun} project",
      category_id: c2.id,
      creator_id: user1.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/game1.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My #{Faker::Hacker.noun} project",
      category_id: c2.id,
      creator_id: user2.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/game1.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My #{Faker::Hacker.noun} project",
      category_id: c2.id,
      creator_id: user3.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/game2.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My #{Faker::Hacker.noun} project",
      category_id: c2.id,
      creator_id: user4.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/game3.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My #{Faker::Hacker.noun} project",
      category_id: c2.id,
      creator_id: user5.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/game4.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )

    Project.create!(
      title: "My #{Faker::Music.instrument} project",
      category_id: c3.id,
      creator_id: user1.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/music1.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My #{Faker::Music.instrument} project",
      category_id: c3.id,
      creator_id: user2.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/music2.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My #{Faker::Music.instrument} project",
      category_id: c3.id,
      creator_id: user3.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/music3.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My #{Faker::Music.instrument} project",
      category_id: c3.id,
      creator_id: user4.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/music4.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )
    Project.create!(
      title: "My #{Faker::Music.instrument} project",
      category_id: c3.id,
      creator_id: user5.id,
      image: "https://s3.amazonaws.com/hopstarter-seed/music5.jpg",
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )

    Project.create!(
      title: "My #{Faker::Ancient.hero} project",
      category_id: c4.id,
      creator_id: user.id,
      description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
      funding_goal: "#{Faker::Number.number(4)}",
      end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
      location: "#{Faker::Address.city}, #{Faker::Address.state}"
    )

  Project.create!(
    title: "My #{Faker::Dog.breed} documentary",
    category_id: c5.id,
    creator_id: user1.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/dog1.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My #{Faker::Dog.breed} documentary",
    category_id: c5.id,
    creator_id: user2.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/dog2.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My #{Faker::Dog.breed} documentary",
    category_id: c5.id,
    creator_id: user3.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/dog3.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My #{Faker::Dog.breed} documentary",
    category_id: c5.id,
    creator_id: user4.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/dog4.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My #{Faker::Dog.breed} documentary",
    category_id: c5.id,
    creator_id: user5.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/dog5.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )

  Project.create!(
    title: "My #{Faker::Food.spice} project",
    category_id: c6.id,
    creator_id: user1.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/food1.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My #{Faker::Food.spice} project",
    category_id: c6.id,
    creator_id: user2.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/food2.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My #{Faker::Food.spice} project",
    category_id: c6.id,
    creator_id: user3.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/food3.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My #{Faker::Food.spice} project",
    category_id: c6.id,
    creator_id: user4.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/food4.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My #{Faker::Food.spice} project",
    category_id: c6.id,
    creator_id: user5.id,
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    image: "https://s3.amazonaws.com/hopstarter-seed/food5.jpg",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )

  Project.create!(
    title: "My book about#{Faker::ProgrammingLanguage.name}",
    category_id: c7.id,
    creator_id: user1.id,
    image: "https://s3.amazonaws.com/hopstarter-seed/book1.jpg",
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )

  Project.create!(
    title: "My book about#{Faker::ProgrammingLanguage.name}",
    category_id: c7.id,
    creator_id: user2.id,
    image: "https://s3.amazonaws.com/hopstarter-seed/book2.jpg",
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My book about#{Faker::ProgrammingLanguage.name}",
    category_id: c7.id,
    creator_id: user3.id,
    image: "https://s3.amazonaws.com/hopstarter-seed/book3.jpg",
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My book about#{Faker::ProgrammingLanguage.name}",
    category_id: c7.id,
    creator_id: user4.id,
    image: "https://s3.amazonaws.com/hopstarter-seed/book4.jpg",
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
  Project.create!(
    title: "My book about#{Faker::ProgrammingLanguage.name}",
    category_id: c7.id,
    creator_id: user5.id,
    image: "https://s3.amazonaws.com/hopstarter-seed/book5.jpg",
    description: "expiros camo ad obdurerant interdum dacos qui lividum. pacificaterant se elixibus est dolerrimus et ago flagitorum marave!",
    funding_goal: "#{Faker::Number.number(4)}",
    end_date: "#{Faker::Date.between(Date.today, 1.year.from_now)}",
    location: "#{Faker::Address.city}, #{Faker::Address.state}"
  )
