const { commands } = require('@bot');

exports.command = 'ping';

commands.register(this.command, '', 'Ping the bot', (msg) => {
  msg.reply('PONG');
});

commands.register(this.command, 'pong', 'Pong the bot', (msg) => {
  msg.reply('PING');
});

commands.register(this.command, ['pong', 'ping', 'pong', 'ping'], 'Pong the bot', (msg) => {
  msg.reply('PONG');
});

commands.register(this.command, ['pong', 'ping', 'pong'], 'Ping the bot', (msg) => {
  msg.reply('PING');
});

exports.name = 'Ping-Pong';
exports.version = '1.0.0';
exports.description = 'Basic Ping Pong Plugin';
exports.discrim = 'pingpong';
exports.state = true;
exports.toggle = () => this.state = !this.state;
