
var e = {};
var msg = 'xxx';

(function() {
	'use strict';

	angular
		.module('MessagesApp',['ngMessages']);

	angular
		.module('MessagesApp')
		.controller('msgCtrl', msgCtrl );

	function msgCtrl(){
		var vm = this;
		vm.submit = submit;

		function submit(formData){
			console.log('formData',formData);
		};
	};

})();