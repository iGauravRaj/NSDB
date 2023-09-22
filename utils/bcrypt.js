const bcrypt = require('bcrypt');

const encryptdecrypt = {

    encryptPwd(originalPwd) {
        const encryptPwd = bcrypt.hashSync(originalPwd, 10)
        return encryptPwd;
    },
    matchPwd(originalPwd, encryptPwd) {
        const matchedOrNot = bcrypt.compareSync(originalPwd, encryptPwd);
        return matchedOrNot;
    }

}

module.exports = encryptdecrypt;