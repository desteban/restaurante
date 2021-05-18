import mysql from 'serverless-mysql';

export let db = mysql({
	config: {
		host: process.env.HOSTNAME,
		user: 'root',
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
		port: process.env.PORT
	}
});

// import mysql from "serverless-mysql";

// export let connection = mysql.createConnection({
// host: process.env.HOSTNAME,
// user: process.env.USERDB,
// password: process.env.PASSWORD,
// database: process.env.DATABASE,
// port: process.env.PORT
// });
