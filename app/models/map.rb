class Map < ActiveRecord::Base
  has_many :blocks

  def block_string
    block_string = '|'
    self.blocks.each do |block|
      block_string = "#{block_string}#{block.inspect}|"
    end
    block_string
  end
end
