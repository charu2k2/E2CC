const { default: mongoose } = require('mongoose');

const connectDB = async () =>
{
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(
            'mongodb+srv://companyconnect:connect123@cluster0.0mqxzds.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('Database connection successful');
    }
    catch (err)
    {
        console.log(err);
        console.log("SDf");
    }
};

module.exports = connectDB;
