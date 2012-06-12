class AddGridSizeToMap < ActiveRecord::Migration
  def self.up
    add_column :maps, :grid_size, :integer, :default => 53
  end

  def self.down
    remove_column :maps, :grid_size
  end
end
