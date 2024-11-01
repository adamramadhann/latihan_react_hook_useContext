import { CreateUser } from '../UseContext/Laatihan1'

const UserList = () => {
const {data} = CreateUser()
console.info(data)
  return (
    <div>
        {
          data.map((e) => (
            <h1>{e.name}</h1>
          ))
        }
    </div>
  )
}

export default UserList