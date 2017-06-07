import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            {"name": "Barbie", "whatsup": "So, who's ready for Ken's dream tour?", "avatar": "avatar-ts-barbie.png"},

            {
                "name": "Bo Peep",
                "whatsup": "What would you say if I get someone else to watch the sheep for me tonight?",
                "avatar": "avatar-ts-bopeep.png"
            },

            {"name": "Bullseye", "whatsup": "Neigh!", "avatar": "avatar-ts-bullseye.png"},

            {
                "name": "Buzz Lightyear",
                "whatsup": "My eyeballs could have been sucked from their sockets!",
                "avatar": "avatar-ts-buzz.png"
            },

            {
                "name": "Hamm",
                "whatsup": "You heard of Kung Fu? Well get ready for pork chop.",
                "avatar": "avatar-ts-hamm.png"
            },

            {
                "name": "Jessie",
                "whatsup": "Well aren't you just the sweetest space toy I ever did meet!",
                "avatar": "avatar-ts-jessie.png"
            },

            {
                "name": "Mr. Potato Head",
                "whatsup": "You're not turning me into a Mashed Potato.",
                "avatar": "avatar-ts-potatohead.png"
            },

            {"name": "Rex", "whatsup": "Were you scared? Tell me honestly.", "avatar": "avatar-ts-rex.png"},

            {"name": "Sarge", "whatsup": "Code Red, repeat: We're at Code Red!", "avatar": "avatar-ts-sarge.png"},

            {
                "name": "Slinky Dog",
                "whatsup": "I may not be a smart dog, but I know what roadkill is.",
                "avatar": "avatar-ts-slinky.png"
            },

            {"name": "Squeeze", "whatsup": "The claw is our master.", "avatar": "avatar-ts-squeeze.png"},

            {
                "name": "Woody",
                "whatsup": "This town ain't big enough for the two of us!",
                "avatar": "avatar-ts-woody.png"
            },

            {"name": "吴老", "whatsup": "我会说中文", "avatar": "avatar-ts-woody.png"},
        ];


        let moments = [
            {
                id:0,
                "author": "Marty McFly",
                "avatar": "marty-avatar.png",
                "time": "November 5, 1955",
                "image": "advance-card-bttf.png",
                "content": "<p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>",
                "likes": ["Bullseye", "Hamm"],
                "comments": [{
                    "author": "Woody",
                    "avatar": "avatar-ts-woody.png",
                    "content": "This town ain't big enough for the two of us!",
                    "time": "3:43 pm"
                }, {
                    "author": "Hamm",
                    "avatar": "avatar-ts-hamm.png",
                    "content": "You heard of Kung Fu? Well get ready for pork chop.",
                    "time": "3:43 pm"
                }]
            },
            {
                id:1,
                "author": "Sarah Connor",
                "avatar": "sarah-avatar.png.jpeg",
                "time": "May 12, 1984",
                "image": "advance-card-tmntr.jpg",
                "content": "<p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>",
                "likes": ["Woody"],
                "comments": [{
                    "author": "Woody",
                    "avatar": "avatar-ts-woody.png",
                    "content": "This town ain't big enough for the two of us!",
                    "time": "3:43 pm"
                }]
            },
            {
                id:2,
                "author": "Dr. Ian Malcolm",
                "avatar": "ian-avatar.png",
                "time": "June 28, 1990",
                "image": "advance-card-jp.jpg",
                "content": "<p>Your scientists were so preoccupied with whether or not they could, that they didn't stop to think if they should.</p>",
                "likes": ["Woody"],
                "comments": [{
                    "author": "Hamm",
                    "avatar": "avatar-ts-hamm.png",
                    "content": "You heard of Kung Fu? Well get ready for pork chop.",
                    "time": "3:43 pm"
                }]
            }
        ];
        return {users,moments};
    }
}