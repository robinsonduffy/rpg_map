class AddNameToMaps < ActiveRecord::Migration
  def self.up
    add_column :maps, :name, :string
  end

  def self.down
    remove_column :maps, :name
  end
end
