var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "193.203.184.241",
	    user: "u303845834_whapi",
	    password: "VAKILr@6762",
	    database: "u303845834_whapi",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 