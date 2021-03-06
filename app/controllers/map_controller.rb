class MapController < ApplicationController

  def show
    @map = Map.find(params[:id])
  end
  
  def simple
    @map = Map.find(params[:id])
    render :layout => false
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

  def new_block
    map = Map.find(params[:map_id])
    map.blocks.create!({:top => 0, :left => 0, :width => map.grid_size, :height => map.grid_size, :color => params[:color]})
    render :text => 'New Block Created'
  end

  def delete_block
    map = Map.find(params[:map_id])
    block = Block.find(params[:block_id])
    block.delete
    render :text => 'Block Deleted'
  end

  def get_blocks_string
    map = Map.find(params[:map_id])
    render :text => map.block_string
  end

  def index
    @maps = Map.order('id')
  end

end
