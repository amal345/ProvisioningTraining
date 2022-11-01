const user = require('../model/user');

const Usercontroller = {
    getOneuser: async (id) => {
        const data = await user.FindUserByID(id);
        //console.log('data..', data);
        return data;
    },
    saveoneuser: async (body) => {
        const data = await user.SaveUser(body);
        return data;
    },
    deleteoneuser: async (id) => {
        const data = await user.DeleteUser(id);
        return data;
    },
    updateoneuser: async (id, body) => {
        const data = await user.UpdateUser(id, body);
        return data;

    },
    activeuser: async () => {

        const data = await user.ActiveUserlist();
        return data;
    }
}



module.exports = Usercontroller;