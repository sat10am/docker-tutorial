const koa = require('koa');
const bcrypt = require('bcrypt');
const app = new koa();

app.use(async (ctx, next) => {
    const date = new Date();
    try {
	const password = await bcrypt.hash('password', 5);
	ctx.body = date + " Hello World!" + password;
    } catch(e) {
	console.error(e);
	ctx.body = e;
    }
})

app.listen(3000, function() {
    console.log("Server is running on http://localhost:3000");
})
