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

		let easing = this.getProperty('Easing');
		if (easing[0] == '[') try {
			easing = JSON.parse(easing);
		}
		catch (e) {
			easing = 'linear';
		}
		
		if (key != 'InputValue') {
			this.setProperty(key, info.SinglePropertyValue);
		}
		else {
			if (this.getProperty('AnimationEnabled', true)) {
				var fromValue = this.getProperty('InputValue');
				var toValue = parseFloat(info.SinglePropertyValue) || 0;
				this.setProperty('InputValue', toValue);
				$.Velocity(document.body, {
					tween: 1
				}, {
					easing: easing,
					duration: this.getProperty('Duration'),
					progress: function (elements, complete, remaining, start, tweenValue) {
						self.setProperty('OutputValue', BMNumberByInterpolatingNumbersWithFraction(fromValue, toValue, tweenValue));
					},
					queue: false
				});
			}
			else {
				this.setProperty('OutputValue', +info.SinglePropertyValue || 0);
			}
		}
	};
	
};