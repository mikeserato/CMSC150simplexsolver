var constraintNumber = 3;

$("#add_constraint").click(function() {
  constraintNumber++;
  $('#constraints').append(
    '<div class="col s12" id="constraint_' + constraintNumber + '">' +
      '<p class="col s3"> </p>' +
      '<input type="text" class="col s6">' +
      '<a class="delete_constraint btn-floating waves-effect waves-light grey darken-2">' +
      '<i class="material-icons">delete</i></a>' +
    '</div>'
  );
});

$('#constraints').on('click', '.delete_constraint', function(events){
   $(this).parents('div').eq(0).remove();
});

$("#solve_simplex").click(function() {
  var constraintArray = [];

  var obj_function = $('#objective_function').val();
  var goal = $('input[name=goal]:checked').val();
  for(var i=1; i<=constraintNumber; i++) {
    var constraintId = "#constraint_" + i;
    var constraint = $(constraintId + ' input[type=text]').val();
    if(typeof constraint == "undefined") constraintArray.push(constraint);
  }

  console.log(constraintArray)
});
