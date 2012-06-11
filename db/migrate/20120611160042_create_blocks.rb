class CreateBlocks < ActiveRecord::Migration
  def self.up
    create_table :blocks do |t|
      t.integer :height
      t.integer :width
      t.integer :color
      t.integer :top
      t.integer :left
      
      t.timestamps
    end
  end

  def self.down
    drop_table :blocks
  end
end
