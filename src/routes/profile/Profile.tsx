import Header from "../../components/header/Header.tsx";
import {Image} from "antd";

const Profile = () => {
  const token = JSON.parse(localStorage.getItem("token") as string)
  const user = JSON.parse(atob(token.token.split(".")[1]))

  return (
      <div className="bg-green-300 min-h-screen">
        <Header/>
        <div className="my-[100px]">
          {
              user &&
              <div className="flex flex-col items-center">
                <div className="mb-4 border rounded-full border-green-600 p-2">
                  <Image src={user.image} alt="User image" className="rounded-full"/>
                </div>
                <div className="bg-[#56b280] p-4 rounded-lg text-white text-center">
                  <span className="block font-bold text-lg">{user.firstName}</span>
                  <span className="block text-lg">{user.lastName}</span>
                  <span className="block text-sm">{user.email}</span>
                  <span className="block text-sm">{user.gender}</span>
                </div>
              </div>

          }
        </div>
      </div>
  )
}
export default Profile
