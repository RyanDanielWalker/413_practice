import StolenItems from './../src/new.js';

describe('StolenItems', () => {

  it('should instantiate an object of items', () => {
    const items = new StolenItems();
    expect(items).toEqual({});
  });
});

describe('addItem', () => {
  it('should add values to the object items key', () => {
    const itemsStolen = new StolenItems();
    itemsStolen.addItem("skateboard", 20)
    expect(itemsStolen).toEqual({ skateboard: 20 });
  })
})

