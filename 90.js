const nest = (items, id = null, link = 'parent_id') => 
 items
     .filter(item => item[link] === id)
     .map(item => ({...item, children: nest(items, item.id)}));
const comments = [
    {id: 1, parent_id: null},
    {id: 2, parent_id: 1}
]
const nestedComments = nest(comments);
console.log(nestedComments);
