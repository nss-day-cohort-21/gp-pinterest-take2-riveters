
modern-frameworks-group-pinterest

Using your mad Angular skillz

You will be broken into teams and your goals is to reverse engineer the basic functionality of Pinterest and build your own version of it.

Priorities

Firebase structure. Flat, flat, flat.
Authentication.
Create board.
Create pin to go on a board.
Firebase structure

 App
  |
  + users
  |---+ -K84hddnjx9v
  |   |--- uid: "github:jruhfiurnvuienciuwdn"
  |   |--- name: "Abraham Ybrimovitz"
  |
  + pins
  |---+ -K84hfurycvb
  |   |--- uid: "github:jruhfiurnvuienciuwdn"
  |   |--- boardid: "-K66hzzzyyyy"
  |   |--- url: "http://www.imgur.com/9rufrniuvnfu2vnefui"
  |   |--- title: "Ha ha, stupid gator"
  |
  + boards
  |---+ -K66hzzzyyyy
  |   |--- uid: "github:jruhfiurnvuienciuwdn"
  |   |--- title: "Stupid animals"
Authentication

Relevent Firebase docs

Determine if the user is logged in with onAuthStateChanged or currentUser
Perform an action as soon as user logs in or out with the onAuthStateChanged event listener
Allow user to use OAuth to log in via a social service with signInWithPopup() (GitHub linked, other OAuth providers are listed in the left sidebar).