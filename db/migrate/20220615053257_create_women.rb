class CreateWomen < ActiveRecord::Migration[7.0]
  def change
    create_table :women do |t|
      t.string :name
      t.string :business
      t.integer :telephone
      t.string :email
      t.string :address
      t.string :social
      t.text :body

      t.timestamps
    end
  end
end
