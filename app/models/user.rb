class User < ApplicationRecord
  validates :email, :name, :password_digest, :session_token, presence: true
  validates :email, uniqueness: { message: "Sorry, there is already an account with that email." }
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :project_proposals, dependent: :destroy,
    class_name: 'Project',
    foreign_key: :creator_id

  has_many :pledges, dependent: :destroy,
    class_name: 'Pledge',
    foreign_key: :supporter_id

  has_many :supporting_projects, dependent: :destroy,
    through: :pledges,
    source: :project

  after_initialize :ensure_session_token
  # after_initialize :assign_default_image

  has_attached_file :image, default_url: "default-user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

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

  def project_count
    self.project_proposals.count
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  # def assign_default_image
  #   self.image.url ||= 'orange_circle.png'
  # end
end
