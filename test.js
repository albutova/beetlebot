const {VKApi, ConsoleLogger, BotsLongPollUpdatesProvider} = require('node-vk-sdk')

let api = new VKApi({
    logger: new ConsoleLogger(),
    token: "2424df8c7c62aabbc8afbf324b99c6c315701ff028b535480453bc605752dac8ab43e07b0b5c79d91a2bb"
})

let updatesProvider = new BotsLongPollUpdatesProvider(api, "109331723")

updatesProvider.getUpdates(updates => {
    console.log('got updates: ', updates)
})