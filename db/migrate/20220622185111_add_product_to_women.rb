class AddProductToWomen < ActiveRecord::Migration[7.0]
  def change
    add_column :women, :product, :string
  end
end
