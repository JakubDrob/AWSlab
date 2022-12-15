//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	const ec2 = new AWS.EC2();
	ec2.describeInstances((err, data) => {
		console.log('describeInstances');
		if (err) {
			console.error(err);
		} else {
			console.log(data);
		}
	});
	
	amiId = "ami-06ce824c157700cd2"
	
	var params = {
		ImageId: "ami-06ce824c157700cd2",
		MaxCount: 1,
		MinCount: 1,
	};
	ec2.runInstances(params, function(err, data) {
		if(err) console.log(err, err.stack);
		else{
			console.log("DnsName: "+data.Instances[0].PublicDnsName);
			console.log("IP: "+data.Instances[0].PrivateIpAddress);
		}
	});
			
			
}

exports.lab = task