module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

   if (!queue || !queue.playing) return message.channel.send(`${message.author}, Hiện tại không có bản nhạc nào đang phát!. ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`${message.author}, Vui lòng nhập tên bộ lọc hợp lệ. ❌\n\`bassboost, 8D, nightcore\``);

        const filters = [];
        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`${message.author}, Tôi không thể tìm thấy bộ lọc có tên của bạn. ❌\n\`bassboost, 8D, nightcore\``);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Đã áp dụng: **${filter}**, Trạng thái bộ lọc: **${queue.getFiltersEnabled().includes(filter) ? 'Hoạt động' : 'Không hoạt động'}** ✅\n **Hãy nhớ rằng, nếu nhạc dài, thời gian ứng dụng bộ lọc có thể lâu hơn theo đó.**`);
    },
};