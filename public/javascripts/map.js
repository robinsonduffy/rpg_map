$(document).ready(function(){
  $("#blocks .block").draggable({
    cursor : 'move',
    stop: function(event, ui) {
      $.ajax({
        type : 'POST',
        url : '/map/'+$(this).attr('data_map_id')+'/move/'+$(this).attr('data_block_id'),
        data : {
          top : ui.position.top,
          left: ui.position.left
        }
      });
    }
  }).resizable({
   handles : 'all',
   stop: function(event, ui){
     $.ajax({
        type : 'POST',
        url : '/map/'+$(this).attr('data_map_id')+'/resize/'+$(this).attr('data_block_id'),
        data : {
          top : ui.position.top,
          left : ui.position.left,
          width : ui.size.width,
          height : ui.size.height
        }
     });
   }
  });
});
