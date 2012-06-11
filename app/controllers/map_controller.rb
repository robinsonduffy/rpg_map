class MapController < ApplicationController

  def show
    @map = Map.find(params[:id])
  end

  def move_block
    map = Map.find(params[:map_id])
    block = Block.find(params[:block_id])
    block.top = params[:top]
    block.left = params[:left]
    block.save
    render :text => 'Moved'
  end

  def resize_block
    map = Map.find(params[:map_id])
    block = Block.find(params[:block_id])
    block.top = params[:top]
    block.left = params[:left]
    block.width = params[:width]
    block.height = params[:height]
    block.save
    render :text => 'Resized'
  end
end
