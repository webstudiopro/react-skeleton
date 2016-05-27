var React = require('react');
var ListItem = require('./ListItem.jsx');

var data = [
    {id:1, text:"cheese"},
    {id:2, text:"ham"},
    {id:3, text:"butter"},
    {id:4, text:"chicken"}
];

var List = React.createClass({
   render: function(){
       var listItems = data.map(function(item){
           return <ListItem key={item.id} ingredient={item.text} />;
       });

       return (<ul>{listItems}</ul>);
   }
});

module.exports = List;