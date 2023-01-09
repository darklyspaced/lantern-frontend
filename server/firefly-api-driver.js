const axios = require('axios');
const { XMLParser } = require("fast-xml-parser");
const { v4: uuidv4 } = require('uuid');

const xml = new XMLParser();

class Firefly {
    constructor(host, appId = 'firefly_api_driver') {
		if (!host) throw 'Invalid host';

		this.host = host;
		this.appId = appId;
	}

    // Get the school and pertinent information based on the code provided in constructor
    static getHost(code, appId = 'firefly_api_driver', deviceId = null) {
        if (!code) throw 'Invalid code';
        if (!deviceId) deviceId = uuidv4(); // make random UUID for the device ID

        return new Promise((resolve, reject) => {
            axios.get('https://appgateway.fireflysolutions.co.uk/appgateway/school/' + code)
                .then(response => {
                    try {
                        response = xml.parse(response.data, { ignoreAttributes: false, allowBooleanAttributes: true })
                    }
                    catch (error) { return reject(error) }

                    if ((!response.response) || response.response['@_exists'] === 'false') return resolve(null);

                    let url = 'https://' + response.response.address;
                    let tokenUrl = encodeURIComponent(`${url}/Login/api/gettoken?ffauth_device_id=${deviceId}&ffauth_secret=&device_id=${deviceId}&app_id=${appId}`);

                    return resolve({
                        enabled: response.response['@_enabled'] === 'true',
                        name: response.response.name,
                        id: response.response.installationId,
                        url: url,
                        tokenUrl: `${url}/login/login.aspx?prelogin=${tokenUrl}`,
                        deviceId: deviceId
                    });
                })
                .catch(error => reject(error));
        });
    }

    // Get the API version being used
    get apiVersion() {
        return new Promise((resolve, reject) => {
			axios.get(this.host + '/login/api/version')
			.then(response => {
				try {
					response = xml.parse(response.data)
				}
				catch (error) { return reject(error) }

				return resolve({
					major: response.version.majorVersion,
					minor: response.version.minorVersion,
					increment: response.version.incrementVersion
				});
			})
			.catch(error => reject(error));
		});
    }

    // Set or create a device id
    setDeviceId(id = null) {
		if (!id) id = uuidv4();
        this.deviceId = id;
        return id;
    }

    get getAuthUrl() {
		if (!this.deviceId) this.setDeviceId();
		let url = `https://nlcssingapore.fireflycloud.asia${`/Login/api/gettoken?ffauth_device_id=${this.deviceId}&ffauth_secret=&device_id=${this.deviceId}&app_id=${this.appId}`}`;
		return url; // redirect them to here when they click authenticate firefly
	}
    
    getTasks(secret) {
        axios.post(this.host + `/api/v2/taskListing/view/student/tasks/all/filterBy?ffauth_device_id=${this.deviceId}&ffauth_secret=${secret}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }
}

module.exports = Firefly;
