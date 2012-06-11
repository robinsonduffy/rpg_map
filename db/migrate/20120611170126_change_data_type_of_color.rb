class ChangeDataTypeOfColor < ActiveRecord::Migration
  def self.up
    change_column :blocks, :color, :string
  end

  def self.down
    change_column :blocks, :color, :integer
  end
end
