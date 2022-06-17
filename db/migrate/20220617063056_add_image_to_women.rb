class AddImageToWomen < ActiveRecord::Migration[7.0]
  def change
    add_column :women, :image, :string
  end
end
