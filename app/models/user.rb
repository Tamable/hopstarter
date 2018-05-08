class User < ApplicationRecord
  validates :email, :name, :password_digest, :session_token, presence: true
  validates :email, uniqueness: { message: "Sorry, there is already an account with that email." }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  after_initialize :assign_default_image

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def assign_default_image
    self.image_url ||= 'orange_circle.png'
  end
end
