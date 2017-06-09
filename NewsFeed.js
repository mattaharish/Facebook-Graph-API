$(document).ready(function(){

$(".spinner").hide();

  function facebook()
  {
    var token = 'EAACEdEose0cBANj9kXzWbJuIkHWjZAHPBBUVTzJnUMwfgwG6Ilw02ia2DTWSqZAZC2ZCqVv9NpWauFMqVKoqzcCqg0lqmrBOfZCHvM9OOYW4zvaSDx5nJ0nVDEF5WhDX53HMAmcZAO4LlxWZAnxHSDOpy4KPQwpXUycttdZBQnCW2fMZCepdQdg6ZCJiouVEv5tj4ZD';

    var temp='';

    $.ajax({

      type :"GET",

      url :"https://graph.facebook.com/me?fields=posts&access_token="+token,

      beforeSend : function()
      {
        $(".spinner").show();
      },

      success : function(response)
      {
          for(i=0;i<4;i++)
          {
            temp= temp+`<div>
            <h3 style="color:green">POST #${i+1}<h3>
            <h4>${response.posts.data[i].story}<h4>
           <h5><span style="color:grey">Post-Url:</span><a target="blank" href="https://www.facebook.com/${response.posts.data[i].id}">CLick to see the post</a></h5>
            <h5><span style="color:orange">Likes : </span>${response.posts.data[i].likes.data.length}</h5>
            </div>`;
          }
          $("#feed").append(temp);
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
  $("#NewsFeed").click(function(){
    facebook();
  });

});
