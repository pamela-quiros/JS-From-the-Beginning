const http = new easyHTTP();

//GEt Posts
// http.get('https://jsonplaceholder.typicode.com/posts',
//   function (err, posts) {
//     if (err) {
//       console.log(err);
//     } else {

//     }
//     console.log(posts);
//   });


//Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {

//     }
//     console.log(post);
//   });

const data = {

  title: 'Custom Post',
  body: 'This is a custom post'
};

//Post a Post
//Create Data 
// http.post('https://jsonplaceholder.typicode.com/posts', data, 
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {

//     }
//     console.log(post);
//   });

//PUT POST
// http.put('https://jsonplaceholder.typicode.com/posts/5', data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {

//     }
//     console.log(post);
//   });

//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',
  function (err, response) {
    if (err) {
      console.log(err);
    } else {

    }
    console.log(response);
  });