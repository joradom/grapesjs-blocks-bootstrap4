export default (dc, traits, config = {}) => {
    const defaultType = dc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    dc.addType('input', {
        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,
                'custom-name': config.labels.input,
                tagName: 'input',
                draggable: 'form .form-group',
                droppable: false,
                traits: [
                    traits.name,
                    traits.placeholder, {
                        label: config.labels.trait_type,
                        type: 'select',
                        name: 'type',
                        options: [
                            {value: 'text', name: config.labels.type_text},
                            {value: 'email', name: config.labels.type_email},
                            {value: 'password', name: config.labels.type_password},
                            {value: 'number', name: config.labels.type_number},
                        ]
                    }, traits.require
                ],
            },
        }, {
            isComponent(el) {
                if(el.tagName === 'INPUT') {
                    return {type: 'input'};
                }
            },
        }),
        view: defaultView,
    });
}