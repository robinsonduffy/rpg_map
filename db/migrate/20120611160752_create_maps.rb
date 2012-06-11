class CreateMaps < ActiveRecord::Migration
  def self.up
    create_table :maps do |t|
      t.string :image_url, :default => 'grid.jpg'
      t.timestamps
    end
  end

  def self.down
    drop_table :maps
  end
end
