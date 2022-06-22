class AddTownToWomen < ActiveRecord::Migration[7.0]
  def change
    add_column :women, :town, :string
  end
end
