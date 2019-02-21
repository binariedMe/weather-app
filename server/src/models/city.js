import mongoose from 'mongoose';

// Define the model
const citySchema = new mongoose.Schema({
    id: Number,
    name: String,
    country: String,
    coord: {
        lat: Number,
        long: Number
    }
});

// Export the model
export default mongoose.model('city', citySchema);