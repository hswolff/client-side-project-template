var child_process = require('child_process'),
	util = require('util'),
	commands, _len, spawned = [], cmd, args;


commands = [
	// ['sass', '--watch', 'public/sass:public/css'],
	['compass', 'watch', '--sass-dir', 'public/sass/', '--css-dir', 'public/css/'],
	['coffee', '-o', 'public/js/', '-cw', 'public/coffee/']
];


for (_len = commands.length, i = 0; i < _len; i++) {
	cmd = commands[i][0];
	args = commands[i].splice(1);

	spawned.push(child_process.spawn(cmd, args));

	spawned[i].stdout.on('data', function (data) {
		console.log(data.toString());
	});

	spawned[i].stderr.on('data', function (data) {
		console.log(data.toString());
	});

	spawned[i].on('exit', function (code) {
		console.log('child process exited with code ' + code);
	});
}

/*
a = child_process.spawn('compass', ['watch','--sass-dir', 'public/sass/','--css-dir', 'public/css/'], {
	'stdio': 'pipe'
});

a.stdout.on('data', function (data) {
  console.log(data.toString());
  // util.format('%s', data);
});

a.stderr.on('data', function (data) {
  console.log(data.toString());
});

a.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});
*/