TW.Runtime.Widgets.BMValueInterpolator = function () {

	var self = this;

    this.renderHtml = function () {
        var html = '<div class="widget-content" style="display: none;"></div>';
        return html;
    };
	
	this.afterRender = function() {
		this.boundingBox.css({display: 'none'});
	};
	
	this.updateProperty = function (info) {
		var key = info.TargetProperty;
		
		if (key != 'InputValue') {
			this.setProperty(key, info.SinglePropertyValue);
		}
		else {
			var fromValue = this.getProperty('InputValue');
			var toValue = parseFloat(info.SinglePropertyValue) || 0;
			this.setProperty('InputValue', toValue);
			$.Velocity(document.body, {
				tween: 1
			}, {
				easing: this.getProperty('Easing'),
				duration: this.getProperty('Duration'),
				progress: function (elements, complete, remaining, start, tweenValue) {
					self.setProperty('OutputValue', BMNumberByInterpolatingNumbersWithFraction(fromValue, toValue, tweenValue));
				},
				queue: NO
			});
		}
	};
	
};