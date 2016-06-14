/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
        PhoneCallTrap.onCall(this.onPhoneStateChanged,onError);
		
		//window.open(encodeURI("http://www.rinorusso.it"), '_self', 'location=no');
		
		 var ref = window.open('http://elite.rosannafisichella.it', '_self', 'location=no');
        // ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
        // ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
        // ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
        // ref.addEventListener('exit', function(event) { alert(event.type); });
		
    },
    
    onPhoneStateChanged: function(phoneState) 
		{
			//alert(phoneState);
			
    switch (phoneState) {
        case "RINGING":
            console.log('Phone is ringing.');
            break;
        case "OFFHOOK":
            console.log('Phone is off the hook.');
            break;
        case "IDLE":
            console.log('Phone has returned to the idle state.');
            break;
        default:
            // no default...
    		}
	},

    onError: function(error) 
		{
            console.log('Error '+error);
		}	
		
		
};
