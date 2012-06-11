class AddMapIdToBlock < ActiveRecord::Migration
  def self.up
    add_column :blocks, :map_id, :integer
  end

  def self.down
    remove_column :blocks, :map_id
  end
end
