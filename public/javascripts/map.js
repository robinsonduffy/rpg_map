$(document).ready(function(){
  setUpBlocks();

  $("#farb").farbtastic('#current-color')

  $("#new-block").click(function(){
    $.ajax({
      type : 'POST',
      url : '/map/'+$(this).attr('data_map_id')+'/new_block',
      data : {
        color : $("#current-color").val()
      },
      success : function(){
       checkForBlockChanges();
      }
    });
  });
  
  $("#refresh").click(function(){
    refresh_blocks();
  });

  //setInterval('checkForBlockChanges()', 1000);
  setTimer();
});

function checkForBlockChanges(){
  $.ajax({
    type : 'GET',
    url : '/map/'+$("#new-block").attr('data_map_id')+'/blocks',
    success : function(data){
      if(data != $("#block-string").val()){
        refresh_blocks();
      }else{
        setTimer();
      }
    }
  });
}

function setUpBlocks(){
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
  }).click(function(){
    if($("#delete-block:checked").length){
      if(confirm("Delete this block?")){
        $.ajax({
          type : 'POST',
          url : '/map/'+$(this).attr('data_map_id')+'/delete/'+$(this).attr('data_block_id'),
          success : function(){
            checkForBlockChanges();
          }
       });
      }
    }
  });

  $("#delete-block").attr("checked", false);
}

function refresh_blocks(){
  $("#blocks").load('/map/'+$("#new-block").attr('data_map_id')+'/simple', function(){
    setUpBlocks();
    setTimer();
  });
}

function setTimer(){
  setTimeout("checkForBlockChanges()",3000)
}
