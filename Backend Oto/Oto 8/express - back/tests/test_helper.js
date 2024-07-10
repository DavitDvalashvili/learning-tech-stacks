

import User from '../Models/User'

// ...
const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

export default usersInDb;
