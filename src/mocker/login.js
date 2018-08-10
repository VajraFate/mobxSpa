const login = (req, res) => {
    const {username, password} = req.body
    if (!password || !username) {
        res.json({
            err: null,
            code: '1002',
            message: '请输入用户名和密码!',
            data: null,
            successful: false
        })
    } else {
        res.json({
            err: null,
            code: '0',
            message: 'success',
            data: {
                name: username,
                tokenType: 'Bearer',
                access_token: '35f2a3e9-108f-350e-9121-e22acafd11fd',
                avatar: '',
                mobile: '',
                expires_in: new Date().getTime() + 60 * 1000,
                user: {
                    id: 1,
                    mobile: '183',
                    name: username,
                    state: 0,
                    status: 0,
                    roleOperations: [
                        {
                            id: null,
                            displayOrder: -1,
                            createdAt: null,
                            'operationId': 60000,
                            'state': 0,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 60001,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 60002,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 60003,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 60004,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 110000,
                            'state': 0,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 110001,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 110002,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 120000,
                            'state': 0,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 120001,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 120002,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 120003,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 130000,
                            'state': 0,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 130001,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 130002,
                            'state': 2,
                            'isRight': 1
                        },
                        {
                            'id': null,
                            'displayOrder': -1,
                            'createdAt': null,
                            'operationId': 130003,
                            'state': 2,
                            'isRight': 1
                        }
                    ]
                }
            },
            successful: true
        })
    }
}

module.exports = login

