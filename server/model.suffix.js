module.exports = model;

/* Remove headers set on the client-side model */
if (model && !model.files) {
    model.prototype.headers = {};
}
