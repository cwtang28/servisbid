var config = {
            apiKey: "AIzaSyBljIAXQPP9f9FJ9LTHuVlZJZkpajvmZj4",
            authDomain: "yodelbackend.firebaseapp.com",
            databaseURL: "https://yodelbackend.firebaseio.com",
            storageBucket: "yodelbackend.appspot.com",
            messagingSenderId: "609174959546"
        };
        firebase.initializeApp(config);

        var userId = "";

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                userId = firebase.auth().currentUser.uid;
                firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
                    var username = snapshot.val()["username"];
                    document.getElementById("username").innerHTML = username
                });

                var userKeys = [];
                var query2 = firebase.database().ref("users/" + userId + '/projects').orderByKey();
                query2.once("value")
                .then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                        var key = childSnapshot.key;
                        console.log(key)
                        userKeys.push(key);
                    });

                    firebase.database().ref('/users/' + userId + '/projects').once('value').then(function(snapshot) {

                        for (var x=0; x < snapshot.numChildren(); x++){
                            var table = document.getElementById("yourTable");

                            var row = table.insertRow(0);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            var cell5 = row.insertCell(4);
                            var cell6 = row.insertCell(5);
                            var button = row.insertCell(6);
                            console.log(snapshot.val()[userKeys[x]])

                            cell1.innerHTML = snapshot.val()[userKeys[x]]["name"]
                            console.log(snapshot.val()[userKeys[x]]["name"]);
                            cell2.innerHTML = snapshot.val()[userKeys[x]]["category"]
                            cell3.innerHTML = snapshot.val()[userKeys[x]]["location"]
                            cell4.innerHTML = snapshot.val()[userKeys[x]]["service"];
                            cell5.innerHTML = snapshot.val()[userKeys[x]]["lowestBid"]
                            cell6.innerHTML = snapshot.val()[userKeys[x]]["description"]

                            button.innerHTML = '<form action="/yourProjectDetails" method="post"> <input type="text" style="display:none" name="name" class="register-input" value="'+ snapshot.val()[userKeys[x]]["name"] + '"> <input type="text" style="display:none" name="category" class="register-input" value="'+ snapshot.val()[userKeys[x]]["category"] + '"> <input type="text" style="display:none" name="location" class="register-input" value="'+ snapshot.val()[userKeys[x]]["location"] + '"> <input type="text" style="display:none" name="service" class="register-input" value="'+ snapshot.val()[userKeys[x]]["service"] + '"> <input type="text" style="display:none" name="lowestBid" class="register-input" value="'+ snapshot.val()[userKeys[x]]["lowestBid"] + '"> <input type="text" style="display:none" name="description" class="register-input" value="'+ snapshot.val()[userKeys[x]]["description"] + '"> <input type="text" style="display:none" name="key" class="register-input" value="' + userKeys[x] + '"> <input type="text" style="display:none" name="creator" class="register-input" value="' + snapshot.val()[userKeys[x]]["creatorId"] + '"> <button id="details" value="upvote">Details</button></form>';
                        }
                    });
                });

                var userKeys = [];
                var query2 = firebase.database().ref("users/" + userId + '/projects').orderByKey();
                query2.once("value")
                .then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                        var key = childSnapshot.key;
                        console.log(key)
                        userKeys.push(key);
                    });

                    firebase.database().ref('/users/' + userId + '/projects').once('value').then(function(snapshot) {

                        for (var x=0; x < snapshot.numChildren(); x++){
                        	if(key[x]["open"] == false){
                        		var table = document.getElementById("yourTable");

	                            var row = table.insertRow(0);
	                            var cell1 = row.insertCell(0);
	                            var cell2 = row.insertCell(1);
	                            var cell3 = row.insertCell(2);
	                            var cell4 = row.insertCell(3);
	                            var cell5 = row.insertCell(4);
	                            var cell6 = row.insertCell(5);
	                            var button = row.insertCell(6);
	                            console.log(snapshot.val()[userKeys[x]])

	                            cell1.innerHTML = snapshot.val()[userKeys[x]]["name"]
	                            console.log(snapshot.val()[userKeys[x]]["name"]);
	                            cell2.innerHTML = snapshot.val()[userKeys[x]]["category"]
	                            cell3.innerHTML = snapshot.val()[userKeys[x]]["location"]
	                            cell4.innerHTML = snapshot.val()[userKeys[x]]["service"];
	                            cell5.innerHTML = snapshot.val()[userKeys[x]]["lowestBid"]
	                            cell6.innerHTML = snapshot.val()[userKeys[x]]["description"]

	                            button.innerHTML = '<form action="/yourProjectDetails" method="post"> <input type="text" style="display:none" name="name" class="register-input" value="'+ snapshot.val()[userKeys[x]]["name"] + '"> <input type="text" style="display:none" name="category" class="register-input" value="'+ snapshot.val()[userKeys[x]]["category"] + '"> <input type="text" style="display:none" name="location" class="register-input" value="'+ snapshot.val()[userKeys[x]]["location"] + '"> <input type="text" style="display:none" name="service" class="register-input" value="'+ snapshot.val()[userKeys[x]]["service"] + '"> <input type="text" style="display:none" name="lowestBid" class="register-input" value="'+ snapshot.val()[userKeys[x]]["lowestBid"] + '"> <input type="text" style="display:none" name="description" class="register-input" value="'+ snapshot.val()[userKeys[x]]["description"] + '"> <input type="text" style="display:none" name="key" class="register-input" value="' + userKeys[x] + '"> <input type="text" style="display:none" name="creator" class="register-input" value="' + snapshot.val()[userKeys[x]]["creatorId"] + '"> <button id="details" value="upvote">Details</button></form>';
	                        }
                        }
                    });
                });

                var workingKeys = [];
                console.log(userId)

                var query2 = firebase.database().ref("/users/" + userId + '/worker').orderByKey();
                query2.once("value")
                .then(function(snapshot) {
                    console.log(snapshot.numChildren())
                    snapshot.forEach(function(childSnapshot) {
                        var key = childSnapshot.key;
                        console.log(key)
                        workingKeys.push(key);
                    });

                    firebase.database().ref('/users/' + userId + '/worker').once('value').then(function(snapshot) {
                        console.log(snapshot.numChildren())
                        for (var x=0; x < snapshot.numChildren(); x++){
                            var table = document.getElementById("hiredTable");

                            var row = table.insertRow(0);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            var cell5 = row.insertCell(4);
                            var cell6 = row.insertCell(5);
                            var cell7 = row.insertCell(6);
                            var button = row.insertCell(7);

                            cell1.innerHTML = snapshot.val()[workingKeys[x]]["name"]
                            cell2.innerHTML = snapshot.val()[workingKeys[x]]["category"]
                            cell3.innerHTML = snapshot.val()[workingKeys[x]]["location"]
                            cell4.innerHTML = snapshot.val()[workingKeys[x]]["service"];
                            cell5.innerHTML = snapshot.val()[workingKeys[x]]["lowestBid"]
                            cell6.innerHTML = snapshot.val()[workingKeys[x]]["description"]
                            cell7.innerHTML = snapshot.val()[workingKeys[x]]["creatorEmail"]

                            console.log(snapshot.val());
                            button.innerHTML = '<form action="/doneWithProject" method="post"> <input type="text" style="display:none" name="name" class="register-input" value="'+ snapshot.val()[workingKeys[x]]["name"] + '"> <input type="text" style="display:none" name="category" class="register-input" value="'+ snapshot.val()[workingKeys[x]]["category"] + '"> <input type="text" style="display:none" name="location" class="register-input" value="'+ snapshot.val()[workingKeys[x]]["location"] + '"> <input type="text" style="display:none" name="service" class="register-input" value="'+ snapshot.val()[workingKeys[x]]["service"] + '"> <input type="text" style="display:none" name="lowestBid" class="register-input" value="'+ snapshot.val()[workingKeys[x]]["lowestBid"] + '"> <input type="text" style="display:none" name="description" class="register-input" value="'+ snapshot.val()[workingKeys[x]]["description"] + '"> <input type="text" style="display:none" name="key" class="register-input" value="' + workingKeys[x] + '"> <input type="text" style="display:none" name="makeEmail" class="register-input" value=" ' + snapshot.val()[workingKeys[x]]["creatorEmail"] + '"><input type="text" style="display:none" name="creator" class="register-input" value="' + snapshot.val()[workingKeys[x]]["creatorId"] + '"> <button id="markDone ' + x + '">Finished</button></form>';
                            
                            var tempKey = Object.keys(snapshot.val())[0]
                            console.log(workingKeys[x]);

                            document.getElementById(markDone + x).addEventListener('click', function(){
                                console.log(snapshot.val())
                                console.log(tempKey)
                                console.log(userId)
                                console.log(workingKeys[x])
                                console.log(snapshot.val()[workingKeys[x]]["creatorId"]);
                                markDone(snapshot.val(), tempKey, userId, snapshot.val()[workingKeys[x]]["creatorId"]);
                            });

                        }
                    });
                });
            } 
            else {
                window.location = document.getElementById("notLoggedIn").href
            }
        });



        var keys = [];
        var searchType = document.getElementById("searchType").value

        var query = firebase.database().ref("projects").orderByKey();
        query.once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                console.log(key)
                keys.push(key);
            });

            firebase.database().ref('/projects').once('value').then(function(snapshot) {
                for (var x=0; x < snapshot.numChildren(); x++){
                    if(snapshot.val()[keys[x]]["open"] == true){
                        var table = document.getElementById("projectsTable");

                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);
                        var cell5 = row.insertCell(4);
                        var cell6 = row.insertCell(5);
                        var button = row.insertCell(6);

                        cell1.innerHTML = snapshot.val()[keys[x]]["name"]
                        cell2.innerHTML = snapshot.val()[keys[x]]["category"]
                        cell3.innerHTML = snapshot.val()[keys[x]]["location"]
                        cell4.innerHTML = snapshot.val()[keys[x]]["service"];
                        cell5.innerHTML = snapshot.val()[keys[x]]["lowestBid"]
                        cell6.innerHTML = snapshot.val()[keys[x]]["description"]

                        button.innerHTML = '<form action="/projectDetails" method="post"> <input type="text" style="display:none" name="name" class="register-input" value="'+ snapshot.val()[keys[x]]["name"] + '"> <input type="text" style="display:none" name="category" class="register-input" value="'+ snapshot.val()[keys[x]]["category"] + '"> <input type="text" style="display:none" name="location" class="register-input" value="'+ snapshot.val()[keys[x]]["location"] + '"> <input type="text" style="display:none" name="service" class="register-input" value="'+ snapshot.val()[keys[x]]["service"] + '"> <input type="text" style="display:none" name="lowestBid" class="register-input" value="'+ snapshot.val()[keys[x]]["lowestBid"] + '"> <input type="text" style="display:none" name="description" class="register-input" value="'+ snapshot.val()[keys[x]]["description"] + '"> <input type="text" style="display:none" name="key" class="register-input" value="' + keys[x] + '"> <input type="text" style="display:none" name="key" class="register-input" value="' + keys[x] + '"><input type="text" style="display:none" name="creator" class="register-input" value="' + snapshot.val()[keys[x]]["creatorId"] + '"> <button id="details" value="upvote">Details</button></form>';
                    }
                }
            })
        });

        userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
            var username = snapshot.val()["username"];
            document.getElementById("username").innerHTML = username
        });




        function searchProjects(){
            var keys = [];
            var searchType = document.getElementById("searchType").value
            var table = document.getElementById('projectsTable');

            while(table.rows.length > 0) {
                table.deleteRow(0);
            }   


            var query = firebase.database().ref("projects").orderByKey();
            query.once("value")
            .then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    console.log(key)
                    keys.push(key);
                });

                firebase.database().ref('/projects').once('value').then(function(snapshot) {
                    for (var x=0; x < snapshot.numChildren(); x++){
                        console.log(snapshot.val()[keys[x]]);

                        if(snapshot.val()[keys[x]][searchType] == document.getElementById("searchProject").value)  {

                            var table = document.getElementById("projectsTable");

                            var row = table.insertRow(0);

                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            var cell5 = row.insertCell(4);
                            var cell6 = row.insertCell(5);
                            var button = row.insertCell(6);

                            cell1.innerHTML = snapshot.val()[keys[x]]["name"]
                            cell2.innerHTML = snapshot.val()[keys[x]]["category"]
                            cell3.innerHTML = snapshot.val()[keys[x]]["location"]
                            cell4.innerHTML = snapshot.val()[keys[x]]["service"];
                            cell5.innerHTML = snapshot.val()[keys[x]]["lowestBid"]
                            cell6.innerHTML = snapshot.val()[keys[x]]["description"]
                            button.innerHTML = '<form action="/projectDetails" method="post"> <input type="text" style="display:none" name="name" class="register-input" value="'+ snapshot.val()[keys[x]]["name"] + '"> <input type="text" style="display:none" name="category" class="register-input" value="'+ snapshot.val()[keys[x]]["category"] + '"> <input type="text" style="display:none" name="location" class="register-input" value="'+ snapshot.val()[keys[x]]["location"] + '"> <input type="text" style="display:none" name="service" class="register-input" value="'+ snapshot.val()[keys[x]]["service"] + '"> <input type="text" style="display:none" name="lowestBid" class="register-input" value="'+ snapshot.val()[keys[x]]["lowestBid"] + '"> <input type="text" style="display:none" name="description" class="register-input" value="'+ snapshot.val()[keys[x]]["description"] + '"> <input type="text" style="display:none" name="key" class="register-input" value="' + userKeys[x] + '"> <input type="text" style="display:none" name="creator" class="register-input" value="' + snapshot.val()[keys[x]]["creatorId"] + '"><button id="details" value="upvote">Details</button></form>';
                        }
                    }
                });
            });
        }

        function markDone(values, key, workerId, creatorId){
            console.log(values)
            values.push({done:true});
            console.log(values)

            var updates = {};
            var updates1 = {};
            var updates2 = {};

            updates['/projects/' + key] = values;
            updates1['/users/' + workerId + key] = values;
            updates2['/users/' + creatorId + key] = values;

            firebase.database().ref().update(updates);
            firebase.database().ref().update(updates1);
            firebase.database().ref().update(updates2);
        }

        function logout(){
            firebase.auth().signOut().then(function() {
                window.location = document.getElementById("logout").href
            }, function(error) {
                console.log(error);
            });
        }