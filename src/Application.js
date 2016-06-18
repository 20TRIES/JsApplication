import Collection from 'js_collection';

export default class Application {

    constructor() {
        this.bindings = new Collection();
    }

    /**
     * Boots a service provider within an application.
     *
     * @param {*} provider
     */
    provide(provider) {
        if(!(provider.boot instanceof Function)) {
            // @TODO Throw exception
        }
        provider.boot(this);
    }

    /**
     * Binds a value to the application with a given key.
     *
     * @param {String} name
     * @param {*} binding
     */
    bind(name, binding) {
        this.bindings.push({
            'id': name,
            'item': binding
        });
    }

    /**
     * Gets a binding.
     *
     * @param {String} name
     *
     * @TODO Implement direct access to bindings e.g. app.id=value
     */
    getBinding(name) {
        let binding = this.bindings.where('id', name).first();
        return binding == null ? null : binding.item;
    }
}