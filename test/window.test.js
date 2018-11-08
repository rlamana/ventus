
describe('Window', function() {
  var wm;
  var testWindow;

  beforeEach(function() {
    wm = new Ventus.WindowManager();
    testWindow = wm.createWindow({title: 'test'});
  });

  it('new window should be in closed state', function() {
    expect(testWindow.closed).to.equal(true);
  });

  it('sets is initialized with opened state', function() {
    testWindow.open();
    expect(testWindow.closed).to.equal(false);
  });

  it('sets closed state to true when closed', function() {
    testWindow.open();
    testWindow.close();
    expect(testWindow.closed).to.equal(true);
  });
});
