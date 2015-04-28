import {
  AsyncTestCompleter,
  beforeEach,
  ddescribe,
  xdescribe,
  describe,
  el,
  dispatchEvent,
  expect,
  iit,
  inject,
  beforeEachBindings,
  it,
  xit,
  SpyObject, proxy
} from 'angular2/test_lib';

import {MapWrapper} from 'angular2/src/facade/collection';
import {IMPLEMENTS, isBlank, isPresent} from 'angular2/src/facade/lang';

import {ElementRef} from 'angular2/src/core/compiler/element_injector';
import {AppView, AppProtoView, AppViewContainer} from 'angular2/src/core/compiler/view';
import {ViewContainerRef} from 'angular2/src/core/compiler/view_container_ref';
import {AppViewManager} from 'angular2/src/core/compiler/view_manager';

export function main() {
  // TODO(tbosch): add missing tests

  describe('ViewContainerRef', () => {
    var location;
    var view;
    var viewManager;

    function createProtoView() {
      return new AppProtoView(null, null);
    }

    function createView() {
      return new AppView(null, createProtoView(), MapWrapper.create());
    }

    function createViewContainer(defaultProtoView = null) {
      return new ViewContainerRef(viewManager, location, defaultProtoView);
    }

    beforeEach( () => {
      viewManager = new AppViewManagerSpy();
      view = createView();
      view.viewContainers = [null];
      location = new ElementRef(null, view, 0, null, null, null);
    });

    it('should return a 0 length if there is no underlying ViewContainerRef', () => {
      var vc = createViewContainer();
      expect(vc.length).toBe(0);
    });

    it('should return the size of the underlying ViewContainerRef', () => {
      var vc = createViewContainer();
      view.viewContainers = [new AppViewContainer()];
      view.viewContainers[0].views = [createView()];
      expect(vc.length).toBe(1);
    });

    // TODO: add missing tests here!

  });
}

@proxy
@IMPLEMENTS(AppViewManager)
class AppViewManagerSpy extends SpyObject {
  constructor(){super(AppViewManager);}
  noSuchMethod(m){return super.noSuchMethod(m)}
}
