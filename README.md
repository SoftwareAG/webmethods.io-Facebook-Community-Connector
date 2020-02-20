# webmethods.io-Facebook-Community-Connector
This is a facebook connector to do various operation on a facebook page using [Facebook GraphAPI](https://developers.facebook.com/docs/graph-api/).
The following actions are supported:

1. Create a new alburm on a specific page.
2. Publish a post on a specific page.
3. To get Account details.
4. To get the Feed Page.
5. To get the User details.
6. Publish a link on a page.
7. Publish a photo on a page.
8. Publish a post on a page.
9. Update a post on a page.


Learn more about the endpoints [here](https://developers.facebook.com/docs/graph-api/using-graph-api).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This connector requires any [Node](https://nodejs.org/dist/) version between 4.x.x and 8 .14.

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).


Also, to use this connector. you must have [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI installed.

### Installing

1. Clone the repo  `git clone https://github.com/anshu96788/webmethods.io-Facebook-Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.



## Running the tests

To test, you can execute `wmio test`.

## Deployment

Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![Facebook Connector](https://github.com/anshu96788/webmethods.io-Facebook-Community-Connector/blob/master/a.png)


## Contributors

[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE)file for details




