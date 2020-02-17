module.exports = {
  label: "Connect to Facebook",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      // fields schema
      // eg:
      access_token: {
        type: "string",
       minLength: 1,
         label: "access_token"
       },
	   page_id: {
        type: "string",
       minLength: 0,
         label: "page_id"
       },
	   page_access_token: {
        type: "string",
       minLength: 0,
         label: "page_access_token"
       }
    }
  },
  validate: function (input, output) {
    // auth data will be available in input.auth
    // like var username = input.auth.username
    // callback pattern
    // output(error, success)
    output(null, true);
  }
}