const easyvk = require('easyvk')

easyvk({
	access_token: '2424df8c7c62aabbc8afbf324b99c6c315701ff028b535480453bc605752dac8ab43e07b0b5c79d91a2bb',
	message: "Мы постараемся ответить в ближайшее время.",
	secret: '51e38ac6',
	random_id: 747379,
	v: '5.101'
}).then(vk => {

  console.log(vk.session.group_id);


})