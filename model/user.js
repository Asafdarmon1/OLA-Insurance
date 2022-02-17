var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var flag = 0;
var userSchema = new Schema({
    Severity: String,
    FirstName: String,
    LastName: String,
    SocialNumber: String,
    Email: String,
    Phone: String,
    InsuranceAmount: String,
    PreviousInsuranceNumber: String,
    PreviousInsuranceId: String,
    PreviousInsuranceCompany: String,
    Comments: String,
    Status: String,
    Category: String

});
module.exports = mongoose.model('clients', userSchema);