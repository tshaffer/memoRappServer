var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true, max: 100 },
  }
);

// export default mongoose.model('Restaurant', RestaurantSchema);
// Export model.
module.exports = mongoose.model('Restaurant', RestaurantSchema);

