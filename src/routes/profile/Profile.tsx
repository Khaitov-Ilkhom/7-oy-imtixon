import Header from "../../components/header/Header.tsx";
import {Image} from "antd";
import Footer from "../../components/footer/Footer.tsx";
import userLogo from "../../images/icon-5359554_640.webp"

const Profile = () => {
  const token = JSON.parse(localStorage.getItem("token") as string)
  const user = JSON.parse(atob(token.token.split(".")[1]))

  return (
      <div className="bg-green-100 min-h-screen">
        <Header/>
        <div className="my-8">
          {
              user &&
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image src={userLogo as string} alt="User image" className="max-w-[200px] rounded-full"/>
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
        <Footer/>
      </div>
  )
}
export default Profile
