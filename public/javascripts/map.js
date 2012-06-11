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
  }).dblclick(function(){
    if(confirm("Delete this block?")){
      $.ajax({
        type : 'POST',
        url : '/map/'+$(this).attr('data_map_id')+'/delete/'+$(this).attr('data_block_id'),
        success : function(){
          window.location.reload();
        }
     });
    }
  }).Touchable().live("doubleTap", function(){
            alert('double tap')
          });

  $("#farb").farbtastic('#current-color')

  $("#new-block").click(function(){
    $.ajax({
      type : 'POST',
      url : '/map/'+$(this).attr('data_map_id')+'/new_block',
      data : {
        color : $("#current-color").val()
      },
      success : function(){
       window.location.reload();
      }
    });
  });
});
