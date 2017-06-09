$(document).ready(function(){

$(".spinner").hide();

  function facebook()
  {
    var token = 'EAACEdEose0cBANj9kXzWbJuIkHWjZAHPBBUVTzJnUMwfgwG6Ilw02ia2DTWSqZAZC2ZCqVv9NpWauFMqVKoqzcCqg0lqmrBOfZCHvM9OOYW4zvaSDx5nJ0nVDEF5WhDX53HMAmcZAO4LlxWZAnxHSDOpy4KPQwpXUycttdZBQnCW2fMZCepdQdg6ZCJiouVEv5tj4ZD';

    $.ajax({

      type :"GET",

      url :"https://graph.facebook.com/me?fields=id,name,birthday,email,education,about,relationship_status,religion,quotes,hometown&access_token="+token,

      beforeSend : function()
      {
        $(".spinner").show();
      },

      success : function(response)
      {


          $("#name").html(`<h4 style="color:red"><span style="color:black">Name: </span>${response.name}</h4><br>`);
          
          $("#birthday").html(`<h4 style="color:red"><span style="color:black">Birthday: </span>${response.birthday}</h4><br>`);
        
          $("#email").html(`<h4 style="color:red"><span style="color:black">Email: </span>${response.email}</h4><br>`);
          
          $("#quote").html(`<h4 style="color:red"><span style="color:black">Quote: </span>${response.quotes}</h4><br>`);
          
          $("#relation").html(`<h4 style="color:red"><span style="color:black">Relationship: </span>${response.relationship_status}</h4><br>`);
          
          $("#home").html(`<h4 style="color:red"><span style="color:black">Home Town: </span>${response.hometown.name}</h4><br>`);
          
          $("#link").html(`<h4 style="color:red"><span style="color:black">Wanna see my profile: </span><a target="blank" href="https://www.facebook.com/${response.id}">Profile-link</a></h4><br>`);

      },

      complete : function()
      {
        $(".spinner").hide();
      },

      error : function(request,errorType,errorMessage)
      {

        console.log(request);
        console.log(errorType);
        alert(errorMessage);
      },

  });
  }
  $("#basic-info").click(function(){
    facebook();
  });

});
