# Snello Web Components

## draggables:
- uuid
- name
- description
- template
- style
- image (serve per la composizione a drag and drop nei droppables)
- vars (separate da ;)
- dynamics (separate da ;)

## droppables:
- uuid
- name
- description
- draggables (separate da ;)
- values  (var:value;)
- dynamics (var:value;)


## Web components to developing
- per deploy in app angular (quindi con zone.js)
- per deploy senza angular (html puro) con zone.js

I web components, possono accettare tre parametri:
url (il default sarà http://localhost:8080/api/droppables/)
name (droppable name  - OPZIONALE - in presenza di UUID => UUID vince su name)
uuid (droppable uuid - OPZIONALE  =>  se c'è vince su name)

## Use cases

`<snello-droppable 
 url="http://localhost:8080/api/droppables/ name="primo" uuid="asdasdasdasdas"></snello-droppable>
`

##  Special thanks to:
![Custom Elements](https://github.com/dinohorvat/angular-custom-elements/blob/master/src/assets/customExample.png?raw=true)

## Setup

`npm i` 

Check package.json and run `build:elements`

Open `index.html` in `/root/elements`
