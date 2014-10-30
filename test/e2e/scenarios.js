"use strict";
describe('PhoneCat App', function () {

	it('should redirect index.html to index.html#/phones', function () {
		browser.get('app/index.html');
		browser.getLocationAbsUrl().then(function (url) {
			expect(url.split('#')[1]).toBe('/phones');
		});
	});
	describe('Phone list view', function () {
		beforeEach(function () {
			browser.get('app/index.html#/phones');
		});

		describe('Phone detail view', function () {

			beforeEach(function () {
				browser.get('app/index.html#/phones/nexus-s');
			});


			it('should display nexus-s page', function () {
				expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');

			});
			it('should display 4 picture', function () {
				var imgs = element.all(by.css('.phone-thumbs li img'));
				expect(imgs.count()).toBe(4);
			})
		});
	});

});