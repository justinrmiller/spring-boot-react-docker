require([
    'react',
    'jsx!components/App'
],
function(React, App){
    React.render(App(), document.body);
});