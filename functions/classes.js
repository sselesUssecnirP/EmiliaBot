class newUser {
    constructor(name, id, tag, guilds) {
        this.name = name;
        this.id = id;
        this.tag = tag;
        this.guilds = guilds;
        this.permissions = {};
        this.warnings = [];
    }
}

class newGuild {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.submitTo = {};
        this.reportTo = {
            "channels": []
        };
        this.submissions = {};
        this.mutedMembers = {};
        this.banNWord = false;
        this.permissions = false;
        this.permissionsDefault = {
			"help": true,
			"newcommand": true,
			"ping": true,
			"serverinfo": true,
			"sublist": true,
			"usericon": true,
			"ban": false,
			"kick": false,
			"mute": false,
			"report": true,
			"subcreate": false,
			"subremove": false,
			"tempadmin": false,
			"grabbotsaves": false,
			"invite": false,
			"message": false,
			"sendmessage": false,
			"givecola": true,
			"dogwater": true,
			"imdie": true,
			"korone": true,
			"mafia": true,
			"say": true
		};
    }
}


module.exports = { newUser, newGuild }