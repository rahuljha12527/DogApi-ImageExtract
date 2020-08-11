function fetchRandomDogImage() {
  var xhrRequest = new XMLHttpRequest();

  // trueb for asynchronous and false for sychronous

  //First Method

//   xhrRequest.onload = function () {
//     console.log(xhrRequest.response);

//     var responseJSON=JSON.parse(xhrRequest.response);
//      var imageUrl=responseJSON.message;
//       $('#dog-image').attr('src',imageUrl);
//   };
//   xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random", true);
  //xhrRequest.send();


  //Second Method
//   $.ajax({
//      url:'https://dog.ceo/api/breeds/image/random',
//      method:'GET',
//      success:function(data){
//          console.log(data.message);
//        var imageUrl=data.message;
//        $('#dog-image').attr('src',imageUrl);
//      }
//   });

//Third Method
   $.get('https://dog.ceo/api/breeds/image/random',function(data){
        var imageUrl=data.message;
        $('#dog-image').attr('src',imageUrl);
   });

}

$("#fetch-dog-image-button").click(fetchRandomDogImage);
