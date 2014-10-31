var phonecatAnimations = angular.module('phonecatAnimations', ['ngAnimate']);

phonecatAnimations.animation('.phone', function () {

	var animateUp = function (element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position: 'absolute',
			top: 500,
			left: 0,
			opacity: 1,
			display: 'block'
		});

		jQuery(element).animate({
			top: 0
		}, done);

		return function (cancel) {
			if (cancel) {
				element.stop();
			}
		};
	}

	var animateDown = function (element, className, done) {
		if (className != 'active') {
			return;
		}
		element.css({
			position: 'absolute',
			left: 0,
			top: 0,
			opacity: 1
		});

		jQuery(element).animate({
			//top: -500
			opacity: 0
		}, done);

		return function (cancel) {
			if (cancel) {
				element.stop();
			}
		};
	}

	return {
		addClass: animateUp,
		removeClass: animateDown
	};
});