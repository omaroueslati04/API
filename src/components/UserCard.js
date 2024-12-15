import React from 'react'

const UserCard = ({user}) => {
    console.log(user)
  return (
    <div>
      <h3>name:{user.name} </h3>
      <p>username:{user.username} </p>
      <p>email: {user.email}</p>

    </div>
  )
}

export default UserCard
