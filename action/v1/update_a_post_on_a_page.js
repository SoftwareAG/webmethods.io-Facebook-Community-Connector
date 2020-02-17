module.exports = {

  name: "update_a_post_on_a_page",

  title: "Update A Post On A Page",

  description: "",
  version: "v1",

  input:{
    title: "Update A Post On A Page",
    type: "object",
    properties: {
Page_id:{
            title: "Post ID",
            displayTitle: "Post ID",
			   minLength: 1,
            type: "string"
          },
		  comment:{
            title: "Updated Post",
            displayTitle: "Updated Post",
			   minLength: 1,
            type: "string"
          }
    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},

  execute: function(input, output){
    var request = require("request");
 var x="https://graph.facebook.com/"+input.Page_id+"?message="+input.comment+"&access_token="+ input.auth.page_access_token;
 
    var options = {
      "method": "POST",
      "url": x,
      "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
         
      }
	 
     }
	 
	 
	 request(options, function (error, response, body) {
  try {
            if (body && typeof(body) === "string") {
                body = JSON.parse(body);
            }
        } catch (e) {
            return output(body);
        };
		
		  if (response.statusCode === 403) {
            return output("the authentication information is incorrect.");
        }
		 if (response.statusCode === 400) {
            return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
        }
		if (response.statusCode === 404) {
            return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
        }
        if (response.statusCode !== 200) {
            return output(body.status.errorDetails);
        }
		 if (response.statusCode === 200) {
            return   output(null,{
				data:body
			});
          
        }
        output(body);
		
});
  }

}
