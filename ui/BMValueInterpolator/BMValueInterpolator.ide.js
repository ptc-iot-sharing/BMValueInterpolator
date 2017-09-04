TW.IDE.Widgets.BMValueInterpolator = function () {
	
	this.widgetIconUrl = function() {
    	return  "../Common/extensions/CollectionViewSelectionController/ui/CollectionViewSelectionController/CollectionViewSelectionController.ide.png";
	}

    this.widgetProperties = function () {
        return {
            name: 'Value Interpolator',
            description: 'Smoothly interpolates an input value.',
            category: ['Common'],
            properties: {
                Width: {
                    defaultValue: 184
                },
                Height: {
                    defaultValue: 44
                },
                InputValue: {
                    baseType: 'NUMBER',
                    defaultValue: 0,
                    isBindingTarget: true
                },
                OutputValue: {
                    baseType: 'NUMBER',
                    isBindingSource: true,
                    isEditable: false
                },
                Easing: {
                    baseType: 'STRING',
                    defaultValue: 'easeInOutQuad',
                    isBindingTarget: true
                },
                Duration: {
                    baseType: 'NUMBER',
                    defaultValue: 200,
                    isBindingTarget: true
                }
			}
        };
    };
	
	this.afterSetProperty = function (name, value) {
        return NO;
    };
	
    this.renderHtml = function () {
        var html = '<div class="widget-content BMCollectionViewSelectionController">Value Interpolator</div>';
        return html;
    };
};