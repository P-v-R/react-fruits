
// choice(items): returns a randomly selected 
// item from array of items

function choice(items) {
  let randomIdx = Math.floor(Math.random() * items.length);
  return items[randomIdx];
}

// remove(items, item): removes the first matching item from items,
//  if item exists, and returns it. Otherwise returns undefined.

function remove(items, item) {
  let itemIdx = items.indexOf(item);
  if (itemIdx !== -1) {
    items.splice(itemIdx, 1);
    return item;
  }
  return undefined;
}

export { choice, remove };