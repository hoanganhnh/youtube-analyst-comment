// ** Mock
import mock from 'src/@fake-db/mock'

// ** Types
import { UsersType } from 'src/types/apps/userTypes'

const data: { users: UsersType[] } = {
  users: [
    {
      id: 1,
      role: 'admin',
      status: 'active',
      email: 'hoanganh@gmail.com',
      username: 'hoanganh',
      avatar: 'https://avatars.githubusercontent.com/u/75961695?v=4',
      bio: 'I am full stack developer',
      demo: 1
    },
    {
      id: 2,
      role: 'author',
      status: 'active',
      email: 'phamhuong@gmail.com',
      username: 'phamhuong',
      avatar: 'https://avatars.githubusercontent.com/u/81357294?v=4',
      bio: '',
      demo: 1
    },
    {
      id: 3,
      role: 'author',
      status: 'active',
      email: 'nguyenlinh@gmail.com',
      username: 'nguyenlinh',
      avatar: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
      bio: '',
      demo: 1
    },
    {
      id: 4,
      role: 'author',
      status: 'active',
      email: 'ducduong@gmail.com',
      username: 'ducduong',
      avatar: 'https://avatars.githubusercontent.com/u/95756945?v=4',
      bio: '',
      demo: 1
    },
    {
      id: 5,
      role: 'author',
      status: 'active',
      email: 'ducanh@gmail.com',
      username: 'ducanh',
      avatar: 'https://avatars.githubusercontent.com/u/62062981?v=4',
      bio: '',
      demo: 1
    }
  ]
}

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data

  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1

  data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { user }]
})

// GET: Updated DATA
mock.onGet('/apps/users/list').reply(config => {
  const { q = '', role = null, status = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user?.username.toLowerCase().includes(queryLowered) ||
        user?.role.toLowerCase().includes(queryLowered) ||
        (user?.email.toLowerCase().includes(queryLowered) && user?.status.toLowerCase().includes(queryLowered))) &&
      user?.role === (role || user?.role) &&
      user?.status === (status || user?.status)
  )

  return [
    200,
    {
      allData: data.users,
      users: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// GET: particular user data
mock.onGet('/apps/user').reply(config => {
  const { id } = config.params

  const userData = data.users.filter(user => user?.id === parseInt(id, 10))

  if (userData.length) {
    return [200, userData[0]]
  } else {
    return [404, { message: 'Unable to find the requested user!' }]
  }
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
