var ApiActions = require('./actions/api_actions');

var APIUtil = {

  logoutUser: function(){

    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      success: function(payload){
        console.log("deleted");
        ApiActions.receiveUser(payload);
      }
    });

  },

  getTwitterFolowers: function(){

  },
  getTrumpFacebook: function(){
    FB.api(
    "/{object-id}/likes",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
  },
  getUserBooks: function(){
    $.get('/api/books', {}, function(books){
      ApiActions.receiveUserBooks(books);
    });
  },
  createNote: function(noteHash){

    $.post('/api/notes', {note: noteHash}, function(payload){

      ApiActions.addNote(payload);

    });
  },
  fetchNotes: function(bookId){
    $.get('api/notes', {book_id: bookId}, function(notes){
      ApiActions.receiveNotes(notes);
    });
  },
  deleteNote: function(noteId){
      var uri = '/api/notes/'+noteId;
    $.ajax({
      url: uri,
      type: 'DELETE',
      success: function(notes) {
          // Do something with the result
          ApiActions.receiveNotes(notes);
    }});
  },
  getCurrentUser: function(){
    $.get('/api/session', {}, function(user){
      ApiActions.receiveUser(user);
    });
  },
  signIn: function(username, password) {
    $.post('/api/session', {username: username, password: password}, function(user){
      ApiActions.receiveUser(user);
    });
  },
  createUser: function(username, password){
    $.post('/api/user',{username: username, password: password}, function(user){
      ApiActions.receiveUser(user);
    });
  },
  createAnalysis: function(analysisParams){
    $.post('/api/analyses', {analysis:analysisParams}, function(analysis){
      ApiActions.receiveNewAnalysis(analysis);
    });
  },
  fetchAnalyses: function(analysisParams){
    $.get('/api/analyses', {analysis: {}}, function(analyses){
      ApiActions.receiveAnalyses(analyses);
    });
  },
  fetchAnalysis: function(analysisId){
    $.get('api/analyses', {id: analysisId}, function(analysis){
      ApiActions.receiveAnalysis(analysis);
    });
  },
  updateAnalysis: function(analysisParams){
    $.ajax({
      url: '/api/analyses',
      type: 'PATCH',
      data: {analysis: analysisParams},
      success: function(analysis) {
          // Do something with the result
          console.log(analysis);
    }});

  },

  getTrumpFollwers: function(){
    FB.api("/DonaldTrump",
    function (response) {
      debugger;
      if (response && !response.error) {
        /* handle the result */
      }
    });
  },
  updateBook: function(bookId, bookParams){
    var uri = 'api/books/'+ bookId;

    $.ajax({
      url: uri,
      type: 'PATCH',
      data: bookParams,
      success: function(books) {
          // Do something with the result

          ApiActions.receiveUserBooks(books);
    }});

  },
  deleteBook: function(bookId){
    var uri = 'api/books/' + bookId;
    $.ajax({
      url: uri,
      type: 'DELETE',

      success: function(books) {
          // Do something with the result


          ApiActions.receiveUserBooks(books);
    }});


  }


};

module.exports = APIUtil;
